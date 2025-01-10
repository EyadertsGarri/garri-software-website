import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'
import { navigationItems } from "./navbar-data"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { motion } from "framer-motion"
import { NavItem } from "./navbar-types"

export function NavBar() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md container" 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between py-6">
        <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          <span className="text-xl font-bold">G-SW</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item:NavItem) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button variant="default" className="bg-black text-white hover:bg-black/90">
          <Phone className="mr-2 h-4 w-4" />
          Contact Us
        </Button>
      </div>
    </motion.nav>
  )
}
