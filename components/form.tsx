'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import React, { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import ConfettiExplosion from 'react-confetti-explosion'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Textarea } from './ui/textarea'
import { useToast } from './ui/use-toast'

const formSchema = z.object({
  email: z.string().email({
    message: 'El correo no es valido.'
  }),
  message: z.string().min(2, {
    message: 'Message must be at least 2 characters.'
  })
})

export default function ProfileForm(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false)
  const [isExploding, setIsExploding] = useState(false)

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof formSchema>): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(data) })
      const sendEmailData = await response.json()

      if (!response.ok) {
        throw new Error(sendEmailData.message)
      }

      toast({
        title: 'Correo enviado!',
        description: 'Muchas gracias por contactarme, te respondere lo mas pronto posible.'
      })

      form.reset()

      setIsExploding(true)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Ocurrio un error',
        description: 'Lo sentimos, no pudimos enviar tu correo electronico'
        // action: <ToastAction altText="Volver a intentar">Volve</ToastAction>
      })
    }
    setIsLoading(false)
  }

  return (
    <>
      <Form {...form}>
        <form className="space-y-8 font-poppins mt-3 ml-20" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-md">Correo electronico</FormLabel>
                <FormControl>
                  <Input className="rounded-sm" placeholder="example@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-md">Mensaje</FormLabel>
                <FormControl>
                  <Textarea className="rounded-sm" placeholder="Deja tu mensaje aqui :)" rows={15} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="group" disabled={isLoading} size="lg">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Enviando correo' : 'Enviar correo'}
            {!isLoading && (
              <ArrowRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-[2px]" />
            )}
          </Button>
        </form>
      </Form>

      {isExploding && (
        <ConfettiExplosion
          className="z-50 bg-black"
          duration={300}
          force={0.8}
          height={100}
          particleCount={250}
          width={1600}
        />
      )}
    </>
  )
}
