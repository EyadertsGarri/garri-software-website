'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { footerLinks, socialLinks } from "./footer-data"

export function Footer() {
  return (
    <div className="bg-gradient-to-tr from-purple-800 via-blue-500  to-blue-600 text-gray-100 pt-16 pb-4">
    
      <div className="container grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <a href="/" className="flex items-center space-x-2">
           
            <span className="text-3xl  font-gilroyBold font-semibold  text-white">Garri Software Solutions</span>
            
          </a>
          <p className="max-w-md">
            Empowering businesses through data-driven insights and automation to achieve unparalleled growth.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" className="hover:text-white hover:bg-blue-700" asChild>
                <a href={social.href}>
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 font-gilroyRegular">
          {footerLinks.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold  text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-16 pt-8 border-t border-blue-700 font-gilroyRegular">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
          >
            <h3 className="text-xl font-semibold text-white">Subscribe to our newsletter</h3>
            <p className="font-lg">Stay up to date with the latest news, announcements, and articles.</p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-100 border-blue-600 text-gray-800 placeholder-blue-400 focus:border-blue-500"
            />
            <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white">
              Subscribe
            </Button>
          </motion.form>
        </div>
        <div className="mt-12 text-center text-sm">
          © {new Date().getFullYear()} Garri Software Solutions. All rights reserved.
        </div>
      </div>
    </div>
  )
}

