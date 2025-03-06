import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Here you would typically integrate with your email service
    // For example, using nodemailer or an email service API

    // For now, we'll just log the data
    console.log("Sending email to:", body.to)
    console.log("Form data:", body)

    // Return success response
    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

