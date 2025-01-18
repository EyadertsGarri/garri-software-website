import { products } from "./product-data"
import { ProductCard } from "./productCard"

export function Products() {
  return (
    <section id="solutions" className="md:p-24 md:pb-8 3xl:px-56  p-8 ">
      <div className="mb-8 ">
           <h1
            className="font-gilroyBold font-extrabold xl:text-left text-center sectionhead sectionsub_gradient " 
           >
            Our Products
          </h1> 
      </div>
      <div className="container, space-y-32">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}
