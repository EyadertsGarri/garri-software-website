import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
// import { sendEmail } from "@/actions/send-email"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Prepare the form data for submission
    const formData = new FormData()
    formData.append("name", values.name)
    formData.append("phone", values.phone)
    formData.append("message", values.message)

    // Send the form data to FormSubmit.co
    const response = await fetch("https://formsubmit.co/eyader@garrilogistics.com", {
      method: "POST",
      body: formData,
    })
    if (response.ok) {
      toast.success("Message sent successfully!", {
        duration: 3000,  // Auto-close in 3 seconds
        position: 'top-right',
      });
      form.reset();
    } else {
      toast.error("Something went wrong. Please try again.", {
        duration: 3000,  // Auto-close in 3 seconds
        position: 'top-right',
      });
    }
    setIsSubmitting(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-gilroyRegular sectionsub_gradient font-semibold">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-gilroyRegular sectionsub_gradient font-semibold">Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+251-0000-0000" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-gilroyRegular sectionsub_gradient font-semibold">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Text here..."
                  className="min-h-[150px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-gradient-to-l from-purple-800  to-blue-500 hover:bg-blue-600  md:w-auto" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  )
}

