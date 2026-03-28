const fs = require('fs');

const path = 'f:/AI Projects/Family Feud/family-feud-multiplayer/artifacts/family-feud/src/pages/GameRoom.tsx';
let code = fs.readFileSync(path, 'utf8');

const target1 = `        onOpenChange={(open) => {
          if (!customQuestionsLoading) {
            setCustomQuestionsOpen(open);
          }
        }}`;

const target2 = `        onOpenChange={(open) => {\r
          if (!customQuestionsLoading) {\r
            setCustomQuestionsOpen(open);\r
          }\r
        }}`;

const replaceWith = `        onOpenChange={(open) => {
          setCustomQuestionsOpen(open);
          if (!open && customQuestionsLoading) {
            setCustomQuestionsLoading(false);
          }
        }}`;

let matched = false;
if (code.includes(target1)) {
    code = code.replace(target1, replaceWith);
    matched = true;
} else if (code.includes(target2)) {
    code = code.replace(target2, replaceWith);
    matched = true;
} else {
    // regex fallback
    const regex = /onOpenChange=\{\(open\) => \{\s*if \(!customQuestionsLoading\) \{\s*setCustomQuestionsOpen\(open\);\s*\}\s*\}\}/m;
    if (regex.test(code)) {
        code = code.replace(regex, replaceWith);
        matched = true;
    }
}

if (matched) {
    fs.writeFileSync(path, code);
    console.log("Replaced successfully!");
} else {
    console.log("Could not find target block to replace.");
}
