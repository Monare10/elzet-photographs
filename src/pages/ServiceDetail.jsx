import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const [lightbox, setLightbox] = useState(null); // index

  if (!service) return <Navigate to="/services" />;

  const prev = () => setLightbox(i => (i - 1 + service.images.length) % service.images.length);
  const next = () => setLightbox(i => (i + 1) % service.images.length);

  const handleKey = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'Escape') setLightbox(null);
  };

  return (
    <main className="service-detail" onKeyDown={handleKey} tabIndex={-1}>
      {/* Header */}
      <div className="service-detail__hero">
        <div className="service-detail__hero-bg" style={{ background: service.placeholder }} />
        <div className="service-detail__hero-content">
          <Link to="/services" className="back-link">
            <ArrowLeft size={16} /> All Services
          </Link>
          <h1 className="service-detail__title">{service.title}</h1>
          <p className="service-detail__tagline">{service.tagline}</p>
          <p className="service-detail__desc">{service.description}</p>
          <Link to="/contact" className="btn btn--gold" style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',marginTop:'1.5rem',padding:'0.85rem 2rem',fontSize:'0.78rem',letterSpacing:'0.15em',textTransform:'uppercase',fontWeight:500,background:'var(--gold)',color:'var(--black)',transition:'background 0.25s'}}>
            Book This Service
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <section className="gallery">
        <div className="gallery__grid">
          {service.images.map((src, i) => (
            <div
              key={i}
              className="gallery__item"
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i)}
              aria-label={`View photo ${i + 1}`}
            >
              <div className="gallery__placeholder" style={{ background: service.placeholder }}>
                <img
                  src={src}
                  alt={`${service.title} ${i + 1}`}
                  loading="lazy"
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <div className="gallery__item-overlay">
                  <span className="gallery__item-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <button className="lightbox__prev" onClick={e => { e.stopPropagation(); prev(); }}>
            <ChevronLeft size={32} />
          </button>
          <div className="lightbox__img-wrap" onClick={e => e.stopPropagation()}>
            <div className="lightbox__placeholder" style={{ background: service.placeholder }}>
              <img
                src={service.images[lightbox]}
                alt={`${service.title} ${lightbox + 1}`}
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
            <p className="lightbox__counter">
              {lightbox + 1} / {service.images.length}
            </p>
          </div>
          <button className="lightbox__next" onClick={e => { e.stopPropagation(); next(); }}>
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </main>
  );
}
