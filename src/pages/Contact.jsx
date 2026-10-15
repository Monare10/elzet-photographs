import './Contact.css';

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const contacts = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "lwazi2sibanyoni@gmail.com",
    href: "mailto:lwazi2sibanyoni@gmail.com",
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "078 510 7388",
    href: "https://wa.me/27785107388",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook",
    value: "Elzet Lwazi",
    href: "https://facebook.com/elzetlwazi",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    value: "@elzetlwazi",
    href: "https://instagram.com/elzetlwazi",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="page-hero page-hero--imaged">
        <div className="page-hero__bg" />
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="section-eyebrow">Get in Touch</span>
          <h1 className="page-title">Contact Us</h1>
          <p className="page-sub">
            Ready to work with us? Reach out on any of the platforms below and we'll get back to you.
          </p>
        </div>
      </div>

      <div className="contact-cards">
        {contacts.map(c => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card__icon">{c.icon}</div>
            <div className="contact-card__body">
              <span className="contact-card__label">{c.label}</span>
              <span className="contact-card__value">{c.value}</span>
            </div>
            <div className="contact-card__arrow">→</div>
          </a>
        ))}
      </div>

      <div className="contact-note">
        <img src="/logo.jpg" alt="Elzet Photographs" className="contact-note__logo" />
        <p>
          Based in South Africa — available for events nationwide.<br />
          We typically respond within a few hours.
        </p>
      </div>
    </main>
  );
}