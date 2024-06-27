import config from "@/config"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()
    try {
        let html = ``
        for (const key in body) {
            if (key === "services") continue
            html += `${key}: ${body[key]} <br>`
        }
        if (body.services) {
            html += `Services: <br>`
            for (const key in body.services) {
                html += `${key}: ${body.services[key]} <br>`
            }
        }
        const data = await resend.emails.send({
            from: `${config.appName} <onboarding@resend.dev>`,
            to: ["meghamgarg@gmail.com"],
            subject: `New form submission on ${config.appName}! 🚀`,
            html: html,
        })
        return Response.json(data)
    } catch (error) {
        return Response.json({ error })
    }
}
