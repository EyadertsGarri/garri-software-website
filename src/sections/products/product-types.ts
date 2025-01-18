export interface Product {
    id: number;
    title: string;
    description: string;
    functionalities:String[];
    imageUrl: string;
    ctaPrimary: {
      text: string;
      href: string;
    };
    ctaSecondary: {
      text: string;
      href: string;
    };
  }
  
  