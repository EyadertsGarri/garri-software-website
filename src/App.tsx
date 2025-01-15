import './App.css'
import { Hero } from "@/sections/hero/Hero"
import { NavBar } from './sections/navbar/Navbar'
import { About } from './sections/about/about'

function App() {

  return (
    <main>
    <NavBar />
    <Hero />
    <section id="about" className="  bg-gray-50/60">
      {/* About section content */}
      <About/>
    </section>
    <section id="solutions" className="min-h-screen bg-gray-50">
      {/* Solutions section content */}
    </section>
    <section id="resources" className="min-h-screen bg-gray-50">
      {/* Resources section content */}
    </section>
  </main>
  )
}

export default App
