import { Resend } from 'resend'

import { EmailTemplate } from '../../../components/email-template'

const resend = new Resend('re_W4aZFXra_EG1CBDJcjtuywj8dhBCz1P2R')

interface Response {
  email: string
  message: string
}

export async function POST(request: Request): Promise<globalThis.Response> {
  try {
    const { email, message }: Response = await request.json()

    const dataContact = await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: ['tavodevcode@gmail.com'],
      subject: 'Carta de presentación',
      text: `Contacto: ${email} \nMensaje ${message}`
    })

    const dataMe = await resend.emails.send({
      from: 'Tavoweb <onboarding@resend.dev>',
      to: [email],
      subject: 'Carta de presentación',
      text: '',
      react: EmailTemplate({ email })
    })

    if (dataContact.error) return Response.json({ dataContact }, { status: 400 })
    if (dataMe.error) return Response.json({ dataMe }, { status: 400 })

    return Response.json({ dataContact, dataMe })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
