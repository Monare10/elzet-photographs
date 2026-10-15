import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <span className="hero__eyebrow">Elzet Photographs</span>
          <h1 className="hero__title">
            Every Frame<br />
            <span className="hero__title--accent">Tells a Story</span>
          </h1>
          <p className="hero__sub">
            Professional photography across South Africa —<br />
            from birthday parties to brand shoots, gala dinners to matric dances.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--gold">
              View Services <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn--outline">Get in Touch</Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

     
      {/* Services Grid */}
      <section className="home-services">
        <div className="section-header">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title">Photography Services</h2>
          <p className="section-sub">Six categories. One vision. Yours.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <Link to={`/services/${s.id}`} key={s.id} className="service-card">
              <div
                className="service-card__img"
                style={{ background: s.placeholder }}
              >
                <img
                  src={s.images[0]}
                  alt={s.title}
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <div className="service-card__overlay" />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__tagline">{s.tagline}</p>
                <span className="service-card__cta">
                  View Gallery <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Merch CTA */}
      <section className="merch-cta">
        <div className="merch-cta__inner">
          <img src="/logo.jpg" alt="" className="merch-cta__logo" />
          <div>
            <h2 className="merch-cta__title">Wear the Brand</h2>
            <p className="merch-cta__text">
              Show your love for Elzet Photographs with exclusive merch —
              tees, hoodies, caps and more.
            </p>
            <Link to="/merch" className="btn btn--gold">
              Shop Merch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="home-contact-cta">
        <h2 className="home-contact-cta__title">Ready to book?</h2>
        <p>Let's create something unforgettable together.</p>
        <Link to="/contact" className="btn btn--outline">
          Get in Touch <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
