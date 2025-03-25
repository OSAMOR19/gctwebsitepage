import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    // Handle resume file
    const resume = formData.get('resume') as File | null;
    let resumeInfo = "No resume attached";
    if (resume) {
      resumeInfo = `Resume attached: ${resume.name} (${(resume.size / (1024 * 1024)).toFixed(2)}MB)`;
    }
    
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@gctgroup.ng",
      replyTo: email,
      subject: `New Career Application from ${name}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Resume:</strong> ${resumeInfo}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}