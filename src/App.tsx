import './App.css'
import { Hero } from "@/sections/hero/Hero"
import { NavBar } from './sections/navbar/Navbar'

function App() {

  return (
    <main>
    <NavBar />
    <Hero />
    <section id="solutions" className="min-h-screen bg-gray-50">
      {/* Solutions section content */}
    </section>
    <section id="about" className="min-h-screen">
      {/* About section content */}
    </section>
    <section id="resources" className="min-h-screen bg-gray-50">
      {/* Resources section content */}
    </section>
  </main>
  )
}

export default App
