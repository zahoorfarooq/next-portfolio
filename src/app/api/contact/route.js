import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zaidfarooq624@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <zaidfarooq624@gmail.com>`,
      to: "zaidfarooq624@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
          <h2 style="margin:0 0 16px;color:#1b1b1b;">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-weight:600;width:80px;color:#6b7280;">Name</td>
              <td style="padding:8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;">Subject</td>
              <td style="padding:8px 0;">${subject}</td>
            </tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;" />
          <p style="font-weight:600;color:#6b7280;margin:0 0 8px;">Message</p>
          <p style="margin:0;line-height:1.6;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] mail error:", error.message);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
