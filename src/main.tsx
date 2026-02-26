import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  { name: 'Corte Signature', description: 'Diseño personalizado con asesoría de imagen.', price: '$25' },
  { name: 'Barba Premium', description: 'Perfilado preciso con toalla caliente y aceites.', price: '$18' },
  { name: 'Combo Aura', description: 'Corte + barba + bebida de especialidad.', price: '$38' },
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="kicker">Aura Barber & Café</p>
        <h1>
          Estilo contemporáneo con <span className="accent">energía urbana</span>
        </h1>
        <p>
          Una experiencia integral donde cada detalle está pensado para que te veas bien y te
          sientas mejor.
        </p>
      </section>

      <section className="services">
        <h2>
          Nuestros <span className="accent">servicios</span>
        </h2>
        <div className="serviceGrid">
          {services.map((service) => (
            <article key={service.name} className="serviceCard">
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>
          Reserva tu <span className="accent">momento</span>
        </h2>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
