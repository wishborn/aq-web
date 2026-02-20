import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Send confirmation email to subscriber
    await resend.emails.send({
      from: "Asset Quest <noreply@assetquest.com>",
      to: [email],
      subject: "Welcome to the Asset Quest Newsletter",
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>You've been added to the Asset Quest newsletter. We'll keep you updated on the latest investment opportunities.</p>
        <p>Best regards,<br>The Asset Quest Team</p>
      `,
    });

    // Notify team of new subscriber
    await resend.emails.send({
      from: "Asset Quest <noreply@assetquest.com>",
      to: ["info@assetquest.com"],
      subject: "New Newsletter Subscriber",
      html: `<p>New newsletter subscriber: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
