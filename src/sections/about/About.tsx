import { motion } from "framer-motion"


export function About() {
  return (
    <section id="about" className="md:px-24 py-14 3xl:px-56  p-8 ">
        <div className="mb-16 ">
           <h1
            className="font-gilroyBold font-extrabold text-center sectionhead sectionsub_gradient " 
           >
            About Us
          </h1> 
        </div>
                  

      <div className="  flex xl:flex-row flex-col gap-12 items-center justify-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 "
        >
          
          <h2 className="md:text-5xl text-3xl tracking-tight font-gilroyBold font-extrabold  heading sectionsub_gradient xl:text-left text-center">
            Empowering Businesses with Innovative Software Solutions
          </h2>
          
          <p className="font-gilroyRegular text-amber-600 font-medium subheading  xl:text-left text-center">
          Garri Software Solutions is a leading software company dedicated to providing cutting-edge solutions 
            that help businesses thrive in the digital age. With a team of passionate experts, 
            we are committed to driving innovation and delivering exceptional value to our clients.
          </p>

        </motion.div>

         {/* Image with background styling */}
         <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        //   className=" justify-center lg:justify-end"
        >
          <div className="relative ">
            {/* Top-left background */}
            <div className="absolute -top-3 -left-3 w-1/3 h-1/3 bg-amber-400 rounded-tl-xl z-10 transform -translate-x-4 -translate-y-4" />
            
            {/* Bottom-right background */}
            <div className="absolute -bottom-3 -right-3 w-1/3 h-1/3 bg-blue-600 rounded-br-xl z-10 transform translate-x-4 translate-y-4" />
            
            {/* Image */}
            <img
              src="/images/aboutus-img.jpg?height=600&width=600"
              alt="About us"
              className="xl:max-w-[700px] lg:max-w-[550px] sm:max-w-[500px] max-w-[260px] rounded-xl relative z-20"
            />
             <div className="absolute inset-0 bg-blue-300 mix-blend-color z-30"></div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

