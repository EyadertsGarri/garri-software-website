import { useState } from "react"
import { motion } from "framer-motion"
import { teamMembers } from "./team-data"
import { TeamMember } from "./team-types"
import { TeamMemberCard } from "./TeamMemberCard"
import { TeamMemberDrawer } from "./TeamMemberDrawer"

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section className="py-24">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            className="font-gilroyBold font-extrabold  sectionhead sectionsub_gradient " 
          >
            Our Teams
        
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-gilroyRegular text-amber-600 font-medium subheading max-w-3xl mx-auto"

          >
            Our philosophy is simple; hire great people and give them the
            resources and support to do their best work.
          </motion.p>
        </div>

        <div className="grid gap-x-24 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member:any) => (
                 <TeamMemberCard
                 key={member.id}
                 member={member}
                 onShowDetails={setSelectedMember}
               />
        ))}
        </div>

        <TeamMemberDrawer
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      </div>
    </section>
  )
}
