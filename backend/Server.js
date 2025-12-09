require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// BRANDING CONFIG
const BRAND_NAME = "Sumit Portfolio";
const LOGO_URL = "https://via.placeholder.com/160x40.png?text=Logo"; // replace later
const NEON = "#00ffa5";

const SOCIALS = [
  { href: "mailto:sumitk87138@gmail.com", icon: "https://img.icons8.com/fluency/48/000000/new-post.png" },
  { href: "https://instagram.com/your-profile", icon: "https://img.icons8.com/fluency/48/000000/instagram-new.png" },
  { href: "https://facebook.com/your-profile", icon: "https://img.icons8.com/fluency/48/000000/facebook-new.png" },
  { href: "https://t.me/your-telegram-username", icon: "https://img.icons8.com/fluency/48/000000/telegram-app.png" }
];

app.use(cors());
app.use(express.json());

// Escape HTML
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message)
    return res.status(400).json({ success: false, error: "All fields required." });

  // Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  // ============================================
  // FIXED, RESPONSIVE, GMAIL-SAFE EMAIL TEMPLATE
  // ============================================
  const html = `
  <div style="background:#0b0f12;padding:20px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <td align="center">

          <!-- CONTAINER -->
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" 
                 style="background:#111820;border-radius:14px;overflow:hidden;border:1px solid #1f2a30;">
            
            <!-- HEADER -->
            <tr>
              <td style="padding:20px;background:#0d141a;border-bottom:1px solid #1f2a30;">
                <table width="100%">
                  <tr>
                    <td style="text-align:left;">
                      <img src="${LOGO_URL}" alt="${BRAND_NAME}" style="height:40px;">
                    </td>
                    <td style="text-align:right;">
                      <span style="background:${NEON};color:#00150f;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:700;">
                        Contact
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          
            <!-- BODY -->
            <tr>
              <td style="padding:28px;color:#d2e4dd;font-family:Arial, sans-serif;">
                
                <h2 style="margin:0;color:#ffffff;font-size:22px;margin-bottom:10px;">
                  ✨ You've got a message
                </h2>
                <p style="margin:0;color:#8fa3ab;margin-bottom:20px;font-size:14px;">
                  Someone contacted you through your portfolio.
                </p>

                <!-- INFO CARD -->
                <table width="100%" style="background:#0c1217;padding:16px;border-radius:10px;border:1px solid #1f2a30;">
                  <tr>
                    <td style="color:${NEON};font-weight:600;padding:8px 0;width:80px;">Name</td>
                    <td style="color:#ffffff;padding:8px 0;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="color:${NEON};font-weight:600;padding:8px 0;">Email</td>
                    <td style="color:#ffffff;padding:8px 0;">${escapeHtml(email)}</td>
                  </tr>
                </table>

                <!-- MESSAGE BOX -->
                <div style="
                  margin-top:20px;
                  padding:16px;
                  border-left:4px solid ${NEON};
                  background:#0c1217;
                  border-radius:10px;
                  color:#d2e4dd;
                  font-size:14px;
                  line-height:1.6;
                ">
                  <strong style="color:${NEON};font-size:15px;">Message:</strong><br>
                  ${escapeHtml(message)}
                </div>

                <!-- BUTTONS -->
                <table width="100%" style="margin-top:22px;">
                  <tr>
                    <td align="left">
                      <a href="mailto:${escapeHtml(email)}" 
                         style="background:${NEON};color:#00130f;padding:10px 20px;font-weight:700;
                         border-radius:8px;text-decoration:none;font-size:14px;">
                        Reply →
                      </a>
                    </td>
                    <td align="right">
                      <a href="mailto:${process.env.RECEIVER_EMAIL}"
                         style="color:#8fa3ab;text-decoration:none;font-size:14px;">
                        Open inbox
                      </a>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding:18px;background:#0d141a;text-align:center;border-top:1px solid #1f2a30;">
                <p style="color:#8fa3ab;font-size:13px;margin:0 0 10px;">
                  Sent from <strong style="color:#ffffff;">${BRAND_NAME}</strong>
                </p>

                <!-- SOCIAL ICONS -->
                <div style="margin-top:10px;">
                  ${SOCIALS.map(s => `
                  <a href="${s.href}" style="margin:0 6px;display:inline-block;">
                    <img src="${s.icon}" width="26" height="26" style="border-radius:6px;">
                  </a>`).join("")}
                </div>

              </td>
            </tr>

          </table>

          <p style="color:#4e5a61;font-size:12px;margin-top:12px;text-align:center;">
            This email was generated automatically.
          </p>

        </td>
      </tr>
    </table>
  </div>
  `;

  const mailOptions = {
    from: `"${BRAND_NAME} Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email,
    subject: `[${BRAND_NAME}] Message from ${name}`,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✔ Email sent:", info.messageId);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).json({ success: false });
  }
});

// START SERVER
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
