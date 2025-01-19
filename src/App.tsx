import './App.css'
import { Hero } from "@/sections/hero/Hero"
import { NavBar } from './sections/navbar/Navbar'
import { About } from './sections/about/About'
import { Products } from './sections/products/Product'
import { Team } from './sections/team/Team'
import { Testimonials } from './sections/testimonial/Testimonials'
import { Contact } from './sections/contact/Contact'
import { Footer } from './sections/footer/Footer'

function App() {

  return (
    <main>
    <NavBar />
    <Hero />
    <section id="about" className="  bg-gray-50/60">
      {/* About section content */}
      <About/>
    </section>
    <section id="products" className="min-h-screen bg-white">
      {/* Products section content */}
      <Products/>
    </section>
    <section id="teams" className="min-h-screen bg-white">
      {/* Teams section content */}
      <Team/>
    </section>
    <section id="testimonials" className=" bg-gray-50/60">
      {/* Resources section content */}
      <Testimonials/>
    </section>
    <section id="contactUs" className=" bg-white">
      {/* Resources section content */}
      <Contact/>
    </section>
    <section  className=" bg-white">
      {/* Footer*/}
      <Footer/>
    </section>
  </main>
  )
}

export default App
