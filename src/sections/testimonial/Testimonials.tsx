'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from "./testimonial-data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="flex flex-col items-center justify-center">
        <h2
         className="font-gilroyBold font-extrabold  sectionhead sectionsub_gradient text-center"          
         >
          Testimonials 
         
        </h2>
        <p
        className="font-gilroyRegular text-amber-600 font-normal subheading max-w-3xl mx-auto"
        >
          Hear from our satisfied customers about their experience with our product.
        </p>
        
        <Carousel className="w-full max-w-4xl  mt-12 bg-gradient-to-b from-slate-50 via-gray-50 to-sky-100 py-14 px-16 rounded-lg " opts={{ align: "center", loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="flex flex-col items-center justify-center px-6 md:px-12">
                  <blockquote 
                  className="text-xl md:text-2xl text-center font-medium font-gilroyRegular text-blue-600 leading-relaxed mb-3"
                 // className ="font-gilroyRegular text-amber-600 font-medium subheading"
                  >
                    "{testimonial.content}"
                  </blockquote>
                  <Avatar>
                   <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                   <AvatarFallback className="bg-white text-blue-800 text-lg font-semibold border border-blue-200">{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <span className="text-lg font-gilroyRegular font-semibold text-blue-800 ">{testimonial.name}, </span>
                    <span className="font-gilroyRegular text-blue-800 text-md ">({testimonial.role}, {testimonial.company})</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-gray-200 p-2 text-blue-600 hover:text-blue-800 shadow-sm transition-colors hover:bg-gray-50">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-gray-200 p-2 text-blue-600 hover:text-blue-800  shadow-sm transition-colors hover:bg-gray-50">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  )
}
