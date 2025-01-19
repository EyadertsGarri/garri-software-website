'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Product } from "./product-types"
import { Dot, SquareArrowOutUpRight } from "lucide-react"

interface ProductCardProps {
  product: Product
  isReversed?: boolean
}

export function ProductCard({ product, isReversed }: ProductCardProps) {
  return (
    <div className={cn(
      "flex md:flex-row flex-col items-center justify-center",
      "lg:grid-cols-2 lg:gap-16 ",
      isReversed && "lg:[&>:first-child]:order-last"
    )}>
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >

        <h2 className=" md:text-5xl text-3xl tracking-tight font-gilroyBold font-extrabold  heading sectionsub_gradient xl:text-left text-center">
          {product.title}
        </h2>
        
        <p className="font-gilroyRegular text-amber-600 font-medium subheading  xl:text-left text-center">
          {product.description}
        </p>
        <h3 className="font-gilroyBold font-semibold text-xl xl:text-left text-center mt-4 sectionsub_gradient">
          Key Functionalities
        </h3>
        {/* Functionalities List */}
        <ul className="list-disc pl-5">
          {product.functionalities.map((func, index) => (
            <li key={index} className="flex items-center font-gilroyRegular text-gray-600 text-base font-medium">
          <Dot size={36} strokeWidth={3} className="mr-2"/>
            {/* <span className="font-gilroyRegular text-amber-600 font-normal subheading"> */}
              {func}
            {/* </span> */}
            </li>
          ))}
        </ul>

        {/* <div className="flex flex-wrap gap-4"> */}
          {/* <Button asChild className="bg-blue-600 text-white hover:bg-black/90">
            <a href={product.ctaPrimary.href}>
              {product.ctaPrimary.text}
            </a>
          </Button> */}
          <Button asChild variant="outline" className=" border-blue-200 text-blue-600 hover:text-blue-600 text-base font-semibold font-gilroyRegular ml-8 gap-3">
            <a href={product.ctaSecondary.href}>
              {product.ctaSecondary.text}
          <SquareArrowOutUpRight size={32} strokeWidth={3} />
            </a>
          </Button>
        {/* </div> */}
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-blue-100  rounded-xl "
       // className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-gray-100/50 rounded-2xl overflow-hidden"
      >
        <div className="bg-blue-600  rounded-xl m-4 p-6">
              <img
          src={product.imageUrl }
          alt={product.title}
        //  fill
          className=" rounded-lg xl:max-w-[680px] lg:max-w-[550px] sm:max-w-[500px] max-w-[260px] "
        />
        </div>
    
      </motion.div>
    </div>
  )
}

