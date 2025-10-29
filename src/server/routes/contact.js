const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Message = require("../models/Message");

// Validate required fields (simple)
function validatePayload({ name, email, message }) {
  if (!name || !email || !message) return false;
  // Basic email check
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!validatePayload({ name, email, message })) {
    return res.status(400).json({ ok: false, error: "Invalid input" });
  }

  try {
    // Save to DB (optional)
    if (process.env.MONGODB_URI) {
      try {
        await Message.create({ name, email, subject, message });
      } catch (dbErr) {
        console.warn("DB save failed:", dbErr.message);
        // continue — do not fail the whole request because of DB
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to site owner (you)
    const ownerMailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New contact from ${name}${subject ? " - " + subject : ""}`,
      html: `
        <h3>New contact message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Sent from your portfolio contact form</p>
      `,
    };

    // Auto-reply to user (no-reply)
    const userReplyOptions = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: `Thanks for contacting Kavindu — we've received your message`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #222;">
          <h3>Thanks, ${name} 👋</h3>
          <p>We received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <div style="background:#f6f8fa;padding:12px;border-radius:8px;color:#111;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top:12px">If you need urgent help, reply to <strong>${process.env.TO_EMAIL}</strong>.</p>
          <p style="color:#666;margin-top:18px;font-size:13px">This is an automated no-reply message.</p>
        </div>
      `,
    };

    // Send emails in parallel
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userReplyOptions),
    ]);

    return res.json({ ok: true, message: "Message sent" });
  } catch (err) {
    console.error("Contact error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

module.exports = router;
