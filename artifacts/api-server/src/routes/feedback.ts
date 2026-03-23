import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { feedbackTable } from "@workspace/db/schema";

const router: IRouter = Router();

const RECIPIENT_EMAIL = "talhaahmadqureshi@gmail.com";

async function sendFeedbackEmail(email: string, message: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — email not sent");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Friendly Feud Feedback <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      reply_to: email,
      subject: `New Feedback from ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#f59e0b;">New Friendly Feud Feedback</h2>
          <p><strong>From:</strong> ${email}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
          <p style="white-space:pre-wrap;line-height:1.6;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
          <p style="color:#9ca3af;font-size:12px;">Reply to this email to respond directly to the user.</p>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error ${res.status}: ${body}`);
  }
}

router.post("/feedback", async (req, res) => {
  try {
    const { email, message } = req.body ?? {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      res.status(400).json({ error: "A valid email address is required." });
      return;
    }
    if (!message || typeof message !== "string" || message.trim().length < 5) {
      res.status(400).json({ error: "Message must be at least 5 characters." });
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    await db.insert(feedbackTable).values({ email: trimmedEmail, message: trimmedMessage });

    try {
      await sendFeedbackEmail(trimmedEmail, trimmedMessage);
    } catch (emailErr) {
      console.error("Failed to send feedback email:", emailErr);
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Feedback submission error:", err);
    res.status(500).json({ error: "Failed to submit feedback. Please try again." });
  }
});

export default router;
