import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, X } from 'lucide-react'
import { TeamMember } from "./team-types"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TeamMemberDrawerProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export function TeamMemberDrawer({ member, isOpen, onClose }: TeamMemberDrawerProps) {
 if (!member) return null

  return (
    <Drawer open={isOpen} onOpenChange={onClose} direction="right">
      <DrawerContent >
        <div className="mx-auto w-full max-w-3xl">
          <DrawerHeader className="text-left">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <DrawerTitle className="text-xl font-gilroyRegular font-semibold text-blue-800">{member.name}</DrawerTitle>
                <DrawerDescription className="font-gilroyRegular text-gray-800 text-lg">
                  {member.role}
                </DrawerDescription>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>
          <ScrollArea className="p-4 max-h-[80vh] overflow-auto ">
              <div className="p-6 space-y-6  flex flex-col justify-center items-center">
                {/* border-l-blue-600 border-b-blue-600 border-r-yellow-400 border-t-yellow-400 */}
            <div className="aspect-square max-w-[300px] rounded-full border-4 border-x-blue-600 border-y-yellow-400 overflow-hidden">
              <img
                src={member.imageUrl }
                alt={member.name}
               // fill
              //  className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-xl font-gilroyRegular font-semibold text-blue-700">Previous Work</h4>
                <div className="flex gap-2">
                  {member.previousWork.map((work) => (
                    <span
                      key={work}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium font-gilroyRegular text-gray-800"
                    >
                      {work}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-gilroyRegular font-semibold text-blue-700">Biography</h4>
                <div className="text-base font-gilroyRegular text-gray-600 space-y-4 text-justify">
                  {member.longBio.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                {member?.socialMedia?.linkedIn && (
                  <a href={member?.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} className="text-black/80 hover:text-blue-700" />
                  </a>
                )}
                {member?.socialMedia?.instagram && (
                  <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram size={24} className="text-black/80 hover:text-blue-700" />
                  </a>
                )}
                {member.socialMedia?.x && (
                  <a href={member?.socialMedia?.x} target="_blank" rel="noopener noreferrer">
                    {/* < size={24} className="text-blue-600 hover:text-blue-800" /> */}
                    <img src="/images/X-Logo.png" alt="x-logo" width={30} height={30} />
                  </a>
                )}

              </div>

            </div>
          </div>
          </ScrollArea>
        
        </div>
      </DrawerContent>
    </Drawer>
  )
}

