function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(price)
}

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={`Portada de ${product.title}, de ${product.artist}`}
          loading="lazy"
        />

        <span className="product-genre">{product.genre}</span>
      </div>

      <div className="product-info">
        <p className="product-artist">{product.artist}</p>

        <h3>{product.title}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-card-bottom">
          <span className="product-price">
            {formatPrice(product.price)}
          </span>

          <button
            type="button"
            className="add-button"
            onClick={() => {
                console.log('Clic detectado:', product.title)
                onAddToCart(product)
                console.log('Función del carrito ejecutada')
            }}
          >
            + Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
