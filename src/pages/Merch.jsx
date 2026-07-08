import { useState } from 'react';
import { merch } from '../data/merch';
import { Link } from 'react-router-dom';
import './Merch.css';

export default function MerchPage() {
  const [selected, setSelected] = useState({});

  const handleSize = (itemId, size) => {
    setSelected(s => ({ ...s, [itemId]: size }));
  };

  return (
    <main className="merch-page">
      <div className="page-hero">
        <span className="section-eyebrow">Official Merchandise</span>
        <h1 className="page-title">Elzet Merch</h1>
        <p className="page-sub">
          Wear the brand. Exclusive pieces for those who appreciate the art of the lens.
        </p>
      </div>

      <div className="merch-note">
        <p>
          <strong>Interested in a piece?</strong> Select your size and reach out via our{' '}
          <Link to="/contact">contact page</Link> to enquire about pricing and availability.
        </p>
      </div>

      <div className="merch-grid merch-grid--two">
        {merch.map(item => (
          <div key={item.id} className="merch-card">
            <div className="merch-card__img" style={{ background: item.placeholder }}>
              <img
                src={item.image}
                alt={item.name}
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="merch-card__body">
              <h3 className="merch-card__name">{item.name}</h3>
              <p className="merch-card__desc">{item.description}</p>

              <div className="merch-card__sizes">
                {item.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selected[item.id] === size ? 'size-btn--active' : ''}`}
                    onClick={() => handleSize(item.id, size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <Link to="/contact" className="merch-card__order">
                Enquire Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
