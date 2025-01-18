export interface TeamMember {
    id: string;
    name: string;
    role: string;
    shortBio: string;
    longBio: string;
    imageUrl: string;
    previousWork: string[];
    socialMedia?: {
      linkedIn?:string,
      x?:string,
      instagram?:string
    };
  }
  
  