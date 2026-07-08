import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/merch', label: 'Merch' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        <img src="/logo.jpg" alt="Elzet Photographs" />
      </Link>

      <ul className="navbar__links">
        {links.map(l => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="navbar__burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`navbar__mobile-link ${location.pathname === l.to ? 'navbar__mobile-link--active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
