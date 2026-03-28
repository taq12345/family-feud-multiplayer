const fs = require('fs');

// ─── 1. SERVER: add cancelled tracking + cancel socket event ──────────────────
{
  const path = 'f:/AI Projects/Family Feud/family-feud-multiplayer/artifacts/api-server/src/lib/socketHandlers.ts';
  let code = fs.readFileSync(path, 'utf8');

  // Replace the in-flight Set declaration and the generate handler
  const oldSet = `    const customQuestionsInFlight = new Set<string>();\r\n\r\n    socket.on("generate_custom_questions", async ({ roomId, topic }: { roomId: string; topic: string }) => {\r\n      const state = gameStates.get(roomId);\r\n      if (!state) return;\r\n      const player = state.players.get(socket.id);\r\n      if (!player?.isHost) return;\r\n      if (state.status !== "waiting") return;\r\n\r\n      if (customQuestionsInFlight.has(roomId)) {\r\n        socket.emit("custom_questions_error", { message: "Questions are already being generated for this room. Please wait." });\r\n        return;\r\n      }\r\n\r\n      const trimmedTopic = topic?.trim();\r\n      if (!trimmedTopic || trimmedTopic.length < 2) {\r\n        socket.emit("custom_questions_error", { message: "Please enter a valid topic (at least 2 characters)." });\r\n        return;\r\n      }\r\n\r\n      customQuestionsInFlight.add(roomId);\r\n      let result: Awaited<ReturnType<typeof generateCustomQuestions>>;\r\n      try {\r\n        result = await generateCustomQuestions(trimmedTopic, state.totalRounds);\r\n      } finally {\r\n        customQuestionsInFlight.delete(roomId);\r\n      }`;

  const newSet = `    const customQuestionsInFlight = new Set<string>();
    // Track rooms where the host cancelled generation while the AI was still running
    const customQuestionsCancelled = new Set<string>();

    socket.on("cancel_custom_questions", ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;
      if (customQuestionsInFlight.has(roomId)) {
        customQuestionsCancelled.add(roomId);
      }
    });

    socket.on("generate_custom_questions", async ({ roomId, topic }: { roomId: string; topic: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;
      if (state.status !== "waiting") return;

      if (customQuestionsInFlight.has(roomId)) {
        socket.emit("custom_questions_error", { message: "Questions are already being generated for this room. Please wait." });
        return;
      }

      const trimmedTopic = topic?.trim();
      if (!trimmedTopic || trimmedTopic.length < 2) {
        socket.emit("custom_questions_error", { message: "Please enter a valid topic (at least 2 characters)." });
        return;
      }

      customQuestionsCancelled.delete(roomId);
      customQuestionsInFlight.add(roomId);
      let result: Awaited<ReturnType<typeof generateCustomQuestions>>;
      try {
        result = await generateCustomQuestions(trimmedTopic, state.totalRounds);
      } finally {
        customQuestionsInFlight.delete(roomId);
      }

      // If the host cancelled while we were generating, discard the result silently
      if (customQuestionsCancelled.has(roomId)) {
        customQuestionsCancelled.delete(roomId);
        return;
      }`;

  if (code.includes(oldSet.split('\r\n')[0])) {
    code = code.replace(oldSet, newSet);
    fs.writeFileSync(path, code);
    console.log('✅ Server: added cancel_custom_questions handler');
  } else {
    // Try trimming CRLF vs LF differences with a regex
    const regex = /const customQuestionsInFlight = new Set<string>\(\);\r?\n\r?\n\s*socket\.on\("generate_custom_questions"/;
    if (regex.test(code)) {
      // insert cancel handler right before generate handler
      code = code.replace(
        /(\s*const customQuestionsInFlight = new Set<string>\(\);)/,
        `$1
    // Track rooms where the host cancelled generation while the AI was still running
    const customQuestionsCancelled = new Set<string>();

    socket.on("cancel_custom_questions", ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;
      if (customQuestionsInFlight.has(roomId)) {
        customQuestionsCancelled.add(roomId);
      }
    });`
      );

      // Add the cancelled guard + clear delete before the validation
      code = code.replace(
        /customQuestionsInFlight\.add\(roomId\);\r?\n(\s*)let result/,
        `customQuestionsCancelled.delete(roomId);
      customQuestionsInFlight.add(roomId);
$1let result`
      );

      // Add the cancellation check after the finally block closes
      code = code.replace(
        /customQuestionsInFlight\.delete\(roomId\);\r?\n(\s*)\}\r?\n\r?\n(\s*)if \(!result\.valid\)/,
        `customQuestionsInFlight.delete(roomId);
      }

      // If the host cancelled while we were generating, discard the result silently
      if (customQuestionsCancelled.has(roomId)) {
        customQuestionsCancelled.delete(roomId);
        return;
      }

      if (!result.valid)`
      );

      fs.writeFileSync(path, code);
      console.log('✅ Server: added cancel_custom_questions handler (regex fallback)');
    } else {
      console.log('❌ Server: could not find target block');
    }
  }
}

// ─── 2. HOOK: expose cancelCustomQuestions ────────────────────────────────────
{
  const path = 'f:/AI Projects/Family Feud/family-feud-multiplayer/artifacts/family-feud/src/hooks/useGameSocket.ts';
  let code = fs.readFileSync(path, 'utf8');

  const oldGenerate = `  const generateCustomQuestions = useCallback((topic: string) => {
    if (!roomId) return;
    getSocket().emit("generate_custom_questions", { roomId, topic });
  }, [roomId]);

  return { startGame, faceoffAnswer, submitAnswer, sendChat, nextRound, leaveRoom, deleteRoom, restartGame, kickPlayer, generateCustomQuestions };`;

  const newGenerate = `  const generateCustomQuestions = useCallback((topic: string) => {
    if (!roomId) return;
    getSocket().emit("generate_custom_questions", { roomId, topic });
  }, [roomId]);

  const cancelCustomQuestions = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("cancel_custom_questions", { roomId });
  }, [roomId]);

  return { startGame, faceoffAnswer, submitAnswer, sendChat, nextRound, leaveRoom, deleteRoom, restartGame, kickPlayer, generateCustomQuestions, cancelCustomQuestions };`;

  if (code.includes('const generateCustomQuestions = useCallback')) {
    code = code.replace(oldGenerate, newGenerate);
    fs.writeFileSync(path, code);
    console.log('✅ Hook: added cancelCustomQuestions');
  } else {
    console.log('❌ Hook: could not find target block');
  }
}

// ─── 3. GAMEROOM: wire up cancel on dialog close ──────────────────────────────
{
  const path = 'f:/AI Projects/Family Feud/family-feud-multiplayer/artifacts/family-feud/src/pages/GameRoom.tsx';
  let code = fs.readFileSync(path, 'utf8');

  // Update destructure to include cancelCustomQuestions
  code = code.replace(
    /const \{ startGame, faceoffAnswer, submitAnswer, sendChat, nextRound, leaveRoom, deleteRoom, restartGame, kickPlayer, generateCustomQuestions \} = useGameSocket\(/,
    `const { startGame, faceoffAnswer, submitAnswer, sendChat, nextRound, leaveRoom, deleteRoom, restartGame, kickPlayer, generateCustomQuestions, cancelCustomQuestions } = useGameSocket(`
  );

  // Update onOpenChange to call cancelCustomQuestions on close while loading
  // Find the current pattern (which the previous fix_modal.cjs may have changed)
  const oldOnOpenChange = /onOpenChange=\{\(open\) => \{[\s\S]*?setCustomQuestionsOpen\(open\);[\s\S]*?\}\}/m;
  const newOnOpenChange = `onOpenChange={(open) => {
          setCustomQuestionsOpen(open);
          if (!open && customQuestionsLoading) {
            cancelCustomQuestions();
            setCustomQuestionsLoading(false);
          }
        }}`;

  if (oldOnOpenChange.test(code)) {
    code = code.replace(oldOnOpenChange, newOnOpenChange);
    fs.writeFileSync(path, code);
    console.log('✅ GameRoom: wired cancelCustomQuestions to dialog close');
  } else {
    console.log('❌ GameRoom: could not find onOpenChange pattern');
  }
}
