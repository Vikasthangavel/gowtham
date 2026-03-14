export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#Skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contacts' },
  ];

  const handleClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <style>{`
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 40px 32px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .footer-brand-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 28px;
          font-weight: 900;
          color: #FFB800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }
        .footer-tagline {
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          max-width: 260px;
          margin-bottom: 24px;
        }
        .footer-col-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #FFB800;
          margin-bottom: 18px;
        }
        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-nav-link {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: color 0.3s;
          background: none;
          border: none;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          padding: 0;
        }
        .footer-nav-link:hover { color: #FFB800; }
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-contact-item {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
        }
        .footer-contact-item a {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-contact-item a:hover { color: #FFB800; }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 13px;
          color: rgba(255,255,255,0.25);
        }
        .footer-copy a {
          color: #FFB800;
          text-decoration: none;
          font-weight: 700;
          transition: color 0.3s;
        }
        .footer-copy a:hover { color: #ffc93c; }
        .footer-made {
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          text-align: right;
        }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr; gap: 32px; }
          .footer-inner { padding: 48px 20px 28px; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .footer-made { text-align: center; }
        }
      `}</style>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Gowtham J</div>
            <p className="footer-tagline">
              Full-Stack Developer crafting clean, responsive, and scalable web applications.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-nav-list">
              {navLinks.map(link => (
                <button key={link.href} className="footer-nav-link" onClick={() => handleClick(link.href)}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-list">
              <div className="footer-contact-item"><a href="tel:+919360248850">+91 93602 48850</a></div>
              <div className="footer-contact-item"><a href="mailto:gowthamjayaram333@gmail.com">gowthamjayaram333@gmail.com</a></div>
              <div className="footer-contact-item">Tamil Nadu, India</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <a href="https://gowthamj.netlify.app/" target="_blank" rel="noreferrer">Gowtham J</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
