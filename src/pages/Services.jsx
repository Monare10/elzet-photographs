import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import './Services.css';

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="page-hero">
        <span className="section-eyebrow">Our Work</span>
        <h1 className="page-title">Photography Services</h1>
        <p className="page-sub">
          Six categories of professional photography — each with its own character, each with the same commitment to excellence.
        </p>
      </div>

      <div className="services-list">
        {services.map((s, i) => (
          <Link to={`/services/${s.id}`} key={s.id} className={`service-row ${i % 2 === 1 ? 'service-row--reverse' : ''}`}>
            <div className="service-row__img" style={{ background: s.placeholder }}>
              <img
                src={s.images[0]}
                alt={s.title}
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="service-row__body">
              <span className="service-row__number">0{i + 1}</span>
              <h2 className="service-row__title">{s.title}</h2>
              <p className="service-row__tagline">{s.tagline}</p>
              <p className="service-row__desc">{s.description}</p>
              <span className="service-row__cta">
                View Gallery <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
