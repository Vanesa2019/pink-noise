import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            PARA QUIENES SIENTEN LA MÚSICA
          </span>

          <h1>
            EL SONIDO DE
            <br />
            TU <span>HISTORIA</span>
          </h1>

          <h2>Música que se siente.</h2>

          <p>
            Descubre vinilos legendarios, álbumes inolvidables
            y joyas del rock para tu colección.
          </p>

          <Link to="/productos" className="hero-button">
            Explorar vinilos <span>↗</span>
          </Link>

          <div className="hero-note">
            <span className="note-line"></span>
            GRANDES DISCOS. HISTORIAS ETERNAS.
          </div>
        </div>

        <div className="hero-art" aria-label="Decoración inspirada en discos de vinilo">
          <div className="vinyl vinyl-back">
            <div className="vinyl-label label-light"></div>
          </div>

          <div className="vinyl vinyl-front">
            <div className="vinyl-label">
              <span>PN</span>
            </div>
          </div>

          <div className="art-caption">
            <span>01 / 08</span>
            <span>THE SOUND OF YOU</span>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <p>UNA COLECCIÓN CON CARÁCTER</p>
        <h2>El vinilo nunca pasa de moda.</h2>
        <Link to="/productos">Descubre nuestra selección ↗</Link>
      </section>
    </main>
  )
}

export default Home
