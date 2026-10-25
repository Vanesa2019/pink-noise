
import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'

function Products() {
  const { addToCart } = useCart()

  return (
    <main className="products-page">
      <section className="products-heading">
        <span className="eyebrow">LA COLECCIÓN PINK NOISE</span>

        <h1>
          Discos que <span>hacen historia.</span>
        </h1>

        <p>
          Del rock clásico al grunge. Encuentra ese álbum
          que merece un lugar especial en tu colección.
        </p>

        <div className="catalog-meta">
          <span>VINILOS SELECCIONADOS</span>
          <span>{products.length} ÁLBUMES</span>
        </div>
      </section>

      <section className="product-grid" aria-label="Catálogo de vinilos">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </section>

      <section className="products-footer">
        <p>Tu próxima historia suena mejor en vinilo.</p>
        <Link to="/">Volver al inicio ↗</Link>
      </section>
    </main>
  )
}

export default Products
