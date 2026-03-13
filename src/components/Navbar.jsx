import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#Skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contacts' },
  ];

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .rn-header {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 999;
          background: ${scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.85)'};
          box-shadow: ${scrolled ? '0 1px 0 rgba(255,184,0,0.15)' : 'none'};
          backdrop-filter: blur(16px);
          transition: all 0.3s ease;
          border-bottom: 1px solid ${scrolled ? 'rgba(255,184,0,0.15)' : 'rgba(255,255,255,0.04)'};
        }
        .header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 72px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .header-logo {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 20px;
          color: #FFB800;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .header-logo img {
          height: 48px;
          width: auto;
          filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(5deg);
        }
        /* ── New logo pill ── */
        .nav-logo-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 8px 16px;
          cursor: pointer;
          transition: border-color 0.3s, background 0.3s;
          text-decoration: none;
        }
        .nav-logo-pill:hover {
          background: rgba(255,184,0,0.08);
          border-color: rgba(255,184,0,0.3);
        }
        .nav-logo-icon {
          font-family: 'Courier New', monospace;
          font-size: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #FFB800, #ff7c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .nav-logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
        .nav-logo-name {
          background: linear-gradient(135deg, #FFB800 0%, #ff9500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-logo-dot {
          color: rgba(255,255,255,0.45);
          -webkit-text-fill-color: rgba(255,255,255,0.45);
        }
        .primary-menu {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          padding: 8px 18px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border: none;
          background: none;
          text-align: left;
        }
        .nav-link:hover {
          color: #FFB800;
          background: rgba(255,184,0,0.08);
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nav-cta {
          background: #FFB800;
          color: #000;
          border: none;
          padding: 10px 24px;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .nav-cta:hover {
          background: #ffc93c;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(255,184,0,0.45);
        }
        .hamburger-btn {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 8px 10px;
          border-radius: 8px;
          transition: border-color 0.3s;
        }
        .hamburger-btn:hover { border-color: #FFB800; }
        .hamburger-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: background 0.3s;
        }
        .hamburger-btn:hover span { background: #FFB800; }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex; }
          .header-wrapper { padding: 0 20px; }
          .nav-cta { display: none; }
        }
        /* Mobile Menu */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          z-index: 1000;
          opacity: ${mobileOpen ? 1 : 0};
          pointer-events: ${mobileOpen ? 'auto' : 'none'};
          transition: opacity 0.3s;
          backdrop-filter: blur(4px);
        }
        .mobile-menu-panel {
          position: fixed;
          top: 0; right: 0;
          width: 290px;
          height: 100vh;
          background: #111111;
          border-left: 1px solid rgba(255,184,0,0.15);
          z-index: 1001;
          transform: translateX(${mobileOpen ? '0' : '100%'});
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
        }
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 36px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,184,0,0.15);
        }
        .mobile-brand {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 18px;
          color: #FFB800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .close-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          font-size: 18px;
          color: #fff;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .close-btn:hover { background: rgba(255,184,0,0.15); color: #FFB800; border-color: #FFB800; }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }
        .mobile-nav-link {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: rgba(255,255,255,0.75);
          padding: 14px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          background: none;
          text-align: left;
          letter-spacing: 1px;
          text-transform: uppercase;
          width: 100%;
        }
        .mobile-nav-link:hover {
          color: #FFB800;
          background: rgba(255,184,0,0.08);
        }
        .mobile-cta {
          margin-top: 28px;
        }
        .mobile-cta a {
          display: block;
          text-align: center;
          background: #FFB800;
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 14px;
          border-radius: 50px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .mobile-cta a:hover { background: #ffc93c; box-shadow: 0 6px 24px rgba(255,184,0,0.4); }
      `}</style>

      <header className="rn-header">
        <div className="header-wrapper">
          <div className="header-logo">
            <div className="nav-logo-pill">
              <span className="nav-logo-icon">&gt;_</span>
              <span className="nav-logo-text">
                <span className="nav-logo-name">gowtham</span>
                <span className="nav-logo-dot">.dev</span>
              </span>
            </div>
          </div>

          <nav className="primary-menu desktop-nav">
            {navLinks.map(link => (
              <span
                key={link.href}
                className="nav-link"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </span>
            ))}
          </nav>

          <div className="header-right">
            <a
              className="nav-cta"
              href="/resume/Gowtham J Resume.pdf"
              download="Mr Gowtham Resume.pdf"
            >
              Download CV
            </a>
            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)} />
      <div className="mobile-menu-panel">
        <div className="mobile-menu-header">
            <div className="nav-logo-pill" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,184,0,0.15)' }}>
              <span className="nav-logo-icon">&gt;_</span>
              <span className="nav-logo-text">
                <span className="nav-logo-name">gowtham</span>
                <span className="nav-logo-dot">.dev</span>
              </span>
            </div>
          <button className="close-btn" onClick={() => setMobileOpen(false)}>✕</button>
        </div>
        <div className="mobile-nav-links">
          {navLinks.map(link => (
            <button
              key={link.href}
              className="mobile-nav-link"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="mobile-cta">
          <a href="/resume/Gowtham J Resume.pdf" download="Mr Gowtham Resume.pdf">
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
