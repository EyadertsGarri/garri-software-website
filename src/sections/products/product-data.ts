import { Product } from './product-types'

export const products: Product[] = [
  {
    id: 1,
    title: "HR and Payroll System",
    description: "Simplify your HR processes and manage payroll efficiently with our all-in-one HR and Payroll software.",
    imageUrl: "/images/product-hr.png",
    ctaPrimary: {
      text: "Start Free Trial",
      href: "/hr-trial"
    },
    ctaSecondary: {
       text: "Explore More",
      href: "/hr-payroll"
    },
    functionalities: [
      "Employee self-service portal",
      "Automated payroll calculations",
      "Time and attendance tracking",
      "Compliance management and reporting"
    ]
  },
  {
    id: 2,
    title: "Transport Management System",
    description: "Optimize your logistics and streamline operations with our comprehensive transport management solution.",
    imageUrl: "/images/product-tms.png",
    ctaPrimary: {
      text: "Request a Demo",
      href: "/transport-demo"
    },
    ctaSecondary: {
      text: "Explore More",
      href: "/transport-management"
    },
    functionalities: [
      "Real-time tracking of shipments",
      "Route optimization and planning",
      "Automated invoicing and billing",
      "Integration with third-party logistics"
    ]
  },
]

