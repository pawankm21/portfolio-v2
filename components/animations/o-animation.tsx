import { motion } from "framer-motion"
export default function OAnimation() {

  return (
      <motion.div
          drag
          dragConstraints={{top:2,bottom:2,left:2,right:2}}
    
      className="w-4 h-4 rounded-full bg-orange-400"></motion.div>
  )
}
