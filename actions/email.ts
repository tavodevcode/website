'use server'
import { Resend } from 'resend'

import { EmailTemplate } from '@/components/email-template'

export interface State {
  errors?: Record<string, string[]>
  message?: string | null
}
export const sendEmail = async (prevState: State, formData: FormData): Promise<State> => {
  // xzis yckj viqz luae
  const resend = new Resend('re_W6vCkufH_9pnD7HAeEmXaajzbc6fGTHjM')

  console.log(Object.fromEntries(formData.entries())) // eslint-disable-line no-console

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['tavodevcode@gmail.com'],
    subject: 'Hello world',
    text: '',
    react: EmailTemplate({ firstName: 'email' })
  })

  return { message: 'Email sent' }
}
