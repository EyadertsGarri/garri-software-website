// import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <motion.div
    className="p-6 bg-blue-500 text-white rounded-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Hello, This is initial commit of Garri SW!
  </motion.div>
  )
}

export default App
