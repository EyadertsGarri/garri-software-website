'use client'

import { motion } from "framer-motion"
// import { cn, container } from "@/lib/utils"
import { ContactForm } from "./ContactForm"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from 'lucide-react'
import { Toaster } from 'sonner'

export function Contact() {
  return (
    <section className="py-24 ">
      <div className="container grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h2 className="font-gilroyBold font-extrabold xl:text-left text-center sectionhead sectionsub_gradient ">
              Get in touch
            </h2>
            <p className="font-gilroyRegular text-amber-600 font-medium subheading  xl:text-left text-center max-w-md">
              Have a question or want to learn more? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="shrink-0 border-blue-300 text-blue-600">
                <Mail className="h-4 w-4" />
              </Button>
              <div className="sectionsub_gradient font-gilroyRegular" >
                <p className="font-semibold text-md">Email us</p>
                <p className="text-gray-600 font-gilroyRegular font-medium ">info@garrilogistics.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="shrink-0 border-blue-300 text-blue-600">
                <Phone className="h-4 w-4" />
              </Button>
              <div className="sectionsub_gradient font-gilroyRegular" >
                <p className="font-semibold text-md">Call us</p>
                <p className="text-gray-600 font-gilroyRegular font-medium ">+251 962606060</p>
              </div>
            </div>

            <div className="flex items-center space-x-4  ">
              <Button variant="outline" size="icon" className="shrink-0 border-blue-300 text-blue-600">
                <MapPin className="h-4 w-4" />
              </Button>
              <div className="sectionsub_gradient font-gilroyRegular" >
                <p className="font-semibold text-md">Visit us</p>
                <p className="text-gray-600 font-gilroyRegular font-medium ">Ethiopia, Addis Ababa,<br/> Gurd Shola, Elfora Bldg 8<sup>th</sup> Floor.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8"
        >
          <Toaster/>
         <ContactForm />
    
        </motion.div>
      </div>
    </section>
  )
}

