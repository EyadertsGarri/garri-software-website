
import { motion } from "framer-motion"
import { TeamMember } from "./team-types"
import { ArrowRight } from "lucide-react"

interface TeamMemberCardProps {
  member: TeamMember
  onShowDetails: (member: TeamMember) => void
}

export function TeamMemberCard({ member, onShowDetails }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
     className="group relative bg-gray-50/60 rounded-xl p-6 space-y-2"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img
          src={member.imageUrl}
          alt={member.name}
          //fill
          // className="max-w-[300px]"
          //className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="">
        <h3 className="text-lg font-gilroyRegular font-semibold text-blue-800 mb-2">{member.name}</h3>
        <p className="font-gilroyRegular text-gray-800 text-md">{member.role}</p>
        <p className="font-gilroyRegular text-gray-600 text-sm">{member.shortBio}</p>
      </div>

      <a 
        href="#" 
        className="flex items-center font-gilroyRegular text-blue-600 hover:text-blue-800 text-sm gap-3"
        onClick={(e) => {
          e.preventDefault(); 
          onShowDetails(member); 
        }}
      >
        Read Bio
        <ArrowRight  />
        </a>
    </motion.div>
  )
}

