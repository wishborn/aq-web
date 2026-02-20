import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, company, email, country } =
      await request.json();

    await resend.emails.send({
      from: "Asset Quest <noreply@assetquest.com>",
      to: ["info@assetquest.com"],
      replyTo: email,
      subject: `Quick contact from ${firstName} ${lastName}`,
      html: `
        <h2>New Quick Contact Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country || "Not provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quick contact error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
