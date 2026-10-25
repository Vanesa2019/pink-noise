import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(price)
}

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalUnits,
    subtotal,
    total,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <section className="empty-cart">
          <span className="empty-cart-icon">♫</span>
          <p className="eyebrow">TU COLECCIÓN TE ESPERA</p>
          <h1>Tu carrito está vacío.</h1>
          <p>
            Parece que todavía no has encontrado ese disco
            que te hace sentir la música.
          </p>
          <Link to="/productos" className="hero-button">
            Explorar vinilos ↗
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <section className="cart-heading">
        <span className="eyebrow">TU SELECCIÓN PERSONAL</span>
        <h1>Tu colección, <span>tu historia.</span></h1>
        <p>
          Tienes {totalUnits} {totalUnits === 1 ? 'vinilo' : 'vinilos'}
          {' '}en tu carrito.
        </p>
      </section>

      <div className="cart-layout">
        <section className="cart-items" aria-label="Productos del carrito">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={`Portada de ${item.title}`}
              />

              <div className="cart-item-info">
                <p className="product-artist">{item.artist}</p>
                <h2>{item.title}</h2>
                <p className="cart-item-price">
                  {formatPrice(item.price)}
                </p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label={`Disminuir cantidad de ${item.title}`}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label={`Aumentar cantidad de ${item.title}`}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-actions">
                <strong>
                  {formatPrice(item.price * item.quantity)}
                </strong>

                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </article>
          ))}

          <div className="cart-bottom-actions">
            <Link to="/productos">← Seguir comprando</Link>

            <button type="button" onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </section>

        <aside className="cart-summary">
          <h2>Resumen de compra</h2>

          <div className="summary-line">
            <span>Unidades</span>
            <span>{totalUnits}</span>
          </div>

          <div className="summary-line">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="summary-line summary-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <p className="summary-note">
            Precios de demostración en pesos colombianos.
            Los pagos reales no están habilitados.
          </p>

          <Link to="/productos" className="summary-button">
            Seguir explorando
          </Link>
        </aside>
      </div>
    </main>
  )
}

export default Cart
