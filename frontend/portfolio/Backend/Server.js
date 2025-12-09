require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Validation helper
function isValidEmail(email) {
    return typeof email === 'string' && /\S+@\S+\.\S+/.test(email);
}

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body || {};

    // Validate inputs
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }
    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, error: "Invalid sender email." });
    }

    // ✔ Create Transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,  // MUST be your Gmail
            pass: process.env.EMAIL_PASS,  // App password
        },
    });

    // ✔ CORRECT EMAIL SETTINGS
    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // ✔ Always your Gmail
        to: process.env.RECEIVER_EMAIL,                         // ✔ Where YOU receive the message
        replyTo: email,                                          // ✔ User’s email for replying
        subject: `📩 New Message from ${name}`,
        html: `
        <div style="
            font-family: Arial, sans-serif;
            padding: 24px;
            border-radius: 12px;
            background: #f4f7fa;
            border: 1px solid #d9d9d9;
            max-width: 600px;
            margin: auto;
        ">
            <h2 style="color:#0d6efd;">New Contact Form Message</h2>
            <p>You received a new message from your portfolio contact form.</p>

            <table style="width:100%; margin-top:12px; border-collapse: collapse;">
                <tr>
                    <td style="padding:8px; font-weight:bold; width:120px;">Name:</td>
                    <td style="padding:8px;">${String(name)}</td>
                </tr>
                <tr style="background:#fafafa;">
                    <td style="padding:8px; font-weight:bold;">Email:</td>
                    <td style="padding:8px;">${String(email)}</td>
                </tr>
            </table>

            <div style="
                margin-top:18px;
                padding:14px;
                background:#fff;
                border-left:4px solid #0d6efd;
                border-radius:8px;
            ">
                <h3 style="margin:0 0 10px; color:#0d6efd;">Message</h3>
                <p style="margin:0; white-space:pre-line;">${String(message)}</p>
            </div>

            <p style="font-size:12px; color:#777; text-align:center; margin-top:18px;">
                Sent automatically from your portfolio site.
            </p>
        </div>
        `,
    };

    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);
        res.json({ success: true, messageId: info.messageId });
    } catch (err) {
        console.error("Send error:", err);
        res.status(500).json({ success: false, error: "Failed to send email." });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
