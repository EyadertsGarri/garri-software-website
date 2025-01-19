export interface FooterLink {
    name: string;
    href: string;
  }
  
  export interface FooterLinkCategory {
    title: string;
    links: FooterLink[];
  }
  
  export interface SocialLink {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
  }
  
  