import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()
    try {
        const data = await resend.emails.send({
            from: "LaunchBit <onboarding@resend.dev>",
            to: ["meghamgarg@gmail.com"],
            subject: "NEW CONTACT FORM SUBMISSION!",
            html: `name: ${body.name} <br> email: ${body.email} <br> company: ${body.company} <br> summary: ${body.summary}`,
        })

        return Response.json(data)
    } catch (error) {
        return Response.json({ error })
    }
}
