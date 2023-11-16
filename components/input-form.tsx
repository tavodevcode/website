'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { AnimatedGradientText } from './animated-gradient-text'

// import { toast } from '@/components/ui/use-toast'

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  message: z.string().min(2, {
    message: 'message must be at least 2 characters.'
  })
})

export function InputForm(): React.ReactElement {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>): void {
    alert(JSON.stringify(data, null, 2))
    // console.log({ data }) // eslint-disable-line
    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   )
    // })
  }

  return (
    <Form {...form}>
      <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <AnimatedGradientText className="text-lg font-caveat" text="Correo electronico" />
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
              <AnimatedGradientText className="text-lg font-caveat" text="Mensaje" />
              <FormControl>
                <Textarea placeholder="Tu mensaje personalizado va aqui!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="inline-flex gap-1 group justify-center items-center whitespace-nowrap rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-900 border border-slate-300 dark:border-slate-700 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 px-28"
          size={'lg'}
          type="submit"
          variant={'secondary'}
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
