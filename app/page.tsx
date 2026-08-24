const products = [
  { name: 'Latte de cacao ceremonial', note: 'Cacao guatemalteco, leche cremosa y canela', price: 'Q 32', type: 'Cacao' },
  { name: 'Filtrado de temporada', note: 'Café de origen, notas florales y fruta madura', price: 'Q 28', type: 'Café' },
  { name: 'Infusión jardín', note: 'Hierbabuena, limón, manzanilla y miel local', price: 'Q 26', type: 'Infusión' },
];

const experiences = [
  { number: '01', title: 'Café de origen', text: 'Métodos que respetan el grano y revelan el carácter de cada cosecha.' },
  { number: '02', title: 'Cacao vivo', text: 'Bebidas profundas y reconfortantes inspiradas en nuestra tierra.' },
  { number: '03', title: 'Botánica local', text: 'Infusiones frescas que combinan hierbas, flores, frutas y especias.' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Origen y Fusión, inicio">ORIGEN <span>&amp;</span> FUSIÓN</a>
        <nav aria-label="Navegación principal">
          <a href="#menu">Menú</a><a href="#historia">Nuestra raíz</a><a href="#contacto">Visítanos</a>
        </nav>
        <a className="header-cta" href="#menu">Ver carta</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Café · cacao · especialidad</p>
          <h1>Sabores con raíz.<br /><em>Momentos que florecen.</em></h1>
          <p className="hero-intro">Un espacio donde el café de origen, el cacao y la botánica se encuentran en bebidas hechas con intención.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">Descubrir el menú</a>
            <a className="text-link" href="#historia">Conoce nuestra esencia <span>↗</span></a>
          </div>
          <div className="hero-notes" aria-label="Nuestros principios">
            <span>Ingredientes locales</span><span>Preparación artesanal</span><span>Origen consciente</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Identidad visual de Origen y Fusión">
          <div className="sun" />
          <img src="/origen-fusion-logo.png" alt="Logotipo de Origen y Fusión" />
          <p>De la tierra<br />a tu taza</p>
        </div>
      </section>

      <section className="menu-preview" id="menu">
        <div className="section-heading">
          <p className="eyebrow">Selección de la casa</p><h2>Nuestra carta</h2>
          <p>Preparaciones honestas, ingredientes cercanos y una curiosidad que cambia con la temporada.</p>
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <article className="product" key={product.name}>
              <span className="product-number">0{index + 1}</span>
              <div><p className="product-type">{product.type}</p><h3>{product.name}</h3><p>{product.note}</p></div>
              <strong>{product.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="historia">
        <div className="story-mark" aria-hidden="true"><span>O</span><i>&amp;</i><span>F</span></div>
        <div className="story-copy">
          <p className="eyebrow">Nuestra raíz</p>
          <h2>Todo gran sabor<br /><em>empieza en la tierra.</em></h2>
          <p className="story-lead">Origen &amp; Fusión nace del deseo de acercarnos a lo esencial: ingredientes nobles, manos expertas y tiempo para disfrutar.</p>
          <p>Exploramos la riqueza del café, el cacao y las plantas para crear una carta contemporánea con identidad guatemalteca. Cada bebida es una invitación a descubrir de dónde viene lo que tomamos.</p>
        </div>
      </section>

      <section className="experience" aria-labelledby="experience-title">
        <div className="experience-title">
          <p className="eyebrow">Tres caminos, una esencia</p>
          <h2 id="experience-title">Hecho para<br /><em>sentirse bien.</em></h2>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visit" id="contacto">
        <p className="eyebrow">Pausa · prueba · conecta</p>
        <h2>Tu próximo ritual<br /><em>empieza aquí.</em></h2>
        <p>Estamos preparando un espacio para compartir bebidas memorables y conversaciones sin prisa.</p>
        <div className="visit-details">
          <span><small>Ciudad</small>Guatemala</span>
          <span><small>Ubicación y horarios</small>Próximamente</span>
          <a className="button button-light" href="#inicio">Volver al inicio ↑</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><strong>ORIGEN <i>&amp;</i> FUSIÓN</strong><span>Café, cacao y especialidad</span></div>
        <p>Ingredientes con origen.<br />Encuentros con intención.</p>
        <p className="copyright">© {new Date().getFullYear()} Origen &amp; Fusión</p>
      </footer>
    </main>
  );
}
