import gowthamImg from '../assets/images/Gowtham.jpg';
import { useEffect, useState, useRef } from 'react';

const socialLinks = [
  { href: 'https://x.com/gowtham_shah', label: 'X',
    icon: <svg viewBox="0 0 512 512" height="14" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z"/></svg> },
  { href: 'https://www.instagram.com/mr_gowthammm/', label: 'IG',
    icon: <svg fill="currentColor" viewBox="0 0 24 24" height="14"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
  { href: 'https://www.linkedin.com/in/gowtham-j-1917g/', label: 'LI',
    icon: <svg viewBox="0 0 448 512" fill="currentColor" height="14"><path d="M100.28 448H7.4V149.5h92.78zm-46.45-338C24.17 110 0 85.83 0 56.83 0 25.61 24.36 0 54.69 0 85 0 109 24.17 109 56.83c0 29-24.01 53.17-55.17 53.17zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.32-79.3-48.35 0-55.7 37.8-55.7 76.9V448H158.6V149.5h89V181h1.3c12.4-23.5 42.65-48.3 87.75-48.3 93.85 0 111.1 61.7 111.1 142v173.8z"/></svg> },
  { href: 'https://github.com/gowtham12900/', label: 'GH',
    icon: <svg fill="currentColor" viewBox="0 0 496 512" height="14"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg> },
  { href: 'https://wa.me/9360248850', label: 'WA',
    icon: <svg fill="currentColor" viewBox="0 0 16 16" height="14"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"/></svg> },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onMouse = (e) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', onMouse, { passive: true });
    return () => window.removeEventListener('mousemove', onMouse);
  }, []);

  const imgParallax = scrollY * 0.18;

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#080808' }}
    >
      <style>{`
        /* ── Film grain via SVG turbulence ── */
        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }

        /* ── Cinematic vignette ── */
        .hero-vignette {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: radial-gradient(ellipse at center,
            transparent 30%,
            rgba(0,0,0,0.45) 70%,
            rgba(0,0,0,0.85) 100%
          );
        }

        /* ── Subtle warm spotlight from top-right ── */
        .hero-spotlight {
          position: absolute;
          top: -200px;
          right: 10%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255,184,0,0.06) 0%, transparent 65%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── Photo fills right half ── */
        .hero-photo-half {
          position: absolute;
          top: 0; right: 0;
          width: 52%;
          height: 100%;
          z-index: 2;
          overflow: hidden;
        }
        .hero-photo-half::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            #080808 0%,
            rgba(8,8,8,0.7) 20%,
            rgba(8,8,8,0.1) 55%,
            transparent 100%
          );
          z-index: 2;
        }
        .hero-photo-half::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 35%;
          background: linear-gradient(to top, #080808 0%, transparent 100%);
          z-index: 2;
        }
        .hero-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: contrast(1.05) saturate(0.85) brightness(0.88);
          transform-origin: center top;
          will-change: transform;
        }

        /* ── Content layer ── */
        .hero-content-layer {
          position: relative;
          z-index: 5;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 8vw;
        }
        .hero-content-inner {
          max-width: 640px;
          padding-top: 88px;
          padding-bottom: 60px;
        }

        /* ── Sequence reveal animations ── */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 48px; }
        }

        .seq { opacity: 0; animation: revealUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
        .seq-1  { animation-delay: 0.15s; }
        .seq-2  { animation-delay: 0.35s; }
        .seq-3  { animation-delay: 0.5s; }
        .seq-4  { animation-delay: 0.68s; }
        .seq-5  { animation-delay: 0.85s; }
        .seq-6  { animation-delay: 1.02s; }
        .seq-7  { animation-delay: 1.18s; }

        /* ── Eye-brow label ── */
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .eyebrow-line {
          display: block;
          height: 1px;
          width: 0;
          background: #FFB800;
          opacity: 0;
          animation: lineGrow 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards, revealFade 0.4s ease 0.1s forwards;
        }
        .eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #FFB800;
        }
        .eyebrow-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-left: auto;
        }
        .eyebrow-status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          animation: statusPulse 2.5s ease infinite;
        }
        @keyframes statusPulse {
          0%,100% { opacity:1; }
          50%      { opacity:0.4; }
        }

        /* ── Name display ── */
        .hero-name-small {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          letter-spacing: 5px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .hero-name-large {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(52px, 7.5vw, 100px);
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: -3px;
          line-height: 0.9;
          margin-bottom: 10px;
        }
        .hero-name-large em {
          font-style: normal;
          color: #FFB800;
        }

        /* ── Role divider ── */
        .hero-role-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 24px 0 28px;
        }
        .role-tick {
          width: 28px;
          height: 1px;
          background: rgba(255,184,0,0.5);
          flex-shrink: 0;
        }
        .hero-role {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* ── Description ── */
        .hero-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 14.5px;
          line-height: 1.9;
          color: rgba(255,255,255,0.42);
          max-width: 500px;
          margin-bottom: 44px;
        }
        .hero-desc strong {
          color: rgba(255,255,255,0.72);
          font-weight: 600;
        }

        /* ── CTA ── */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #FFB800;
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 16px 34px;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
        }
        .cta-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0);
          transition: background 0.3s;
        }
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(255,184,0,0.45);
        }
        .cta-primary:hover::after {
          background: rgba(255,255,255,0.08);
        }
        .cta-secondary {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding-bottom: 2px;
          transition: all 0.3s;
          cursor: pointer;
        }
        .cta-secondary:hover {
          color: #FFB800;
          border-bottom-color: #FFB800;
        }

        /* ── Social strip ── */
        .hero-social-strip {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .social-strip-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-right: 10px;
        }
        .social-icon-bare {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: all 0.3s;
        }
        .social-icon-bare:hover {
          border-color: rgba(255,184,0,0.5);
          color: #FFB800;
          background: rgba(255,184,0,0.06);
        }

        /* ── Vertical scroll indicator (left edge) ── */
        .scroll-indicator {
          position: absolute;
          left: 32px;
          bottom: 48px;
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: revealFade 1s ease 1.5s forwards;
        }
        .scroll-indicator-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .scroll-indicator-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(255,184,0,0.6), transparent);
          animation: scrollLineDrop 2s ease-in-out infinite 1.5s;
        }
        @keyframes scrollLineDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }

        /* ── Index number (top-right of content area) ── */
        .hero-index {
          position: absolute;
          top: 100px;
          right: 54%;
          z-index: 6;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.1);
          opacity: 0;
          animation: revealFade 1s ease 1.2s forwards;
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .hero-photo-half { width: 100%; opacity: 0.3; left: 0; right: 0; }
          .hero-photo-half::before { background: linear-gradient(to bottom, transparent 40%, #080808 100%); }
          .hero-content-layer { align-items: flex-end; justify-content: flex-start; padding: 0 24px; }
          .hero-content-inner { padding-top: 0; padding-bottom: 80px; max-width: 100%; }
          .hero-name-large { font-size: clamp(44px, 12vw, 70px); }
          .scroll-indicator { display: none; }
          .hero-index { display: none; }
        }
      `}</style>

      {/* Film grain + vignette */}
      <div className="hero-grain" />
      <div className="hero-vignette" />

      {/* Warm spotlight */}
      <div className="hero-spotlight"
        style={{ transform: `translate(${mouseX * -12}px, ${mouseY * -8}px)`, transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)' }}
      />

      {/* Photo — full right half, parallax on scroll */}
      <div className="hero-photo-half">
        <img
          className="hero-photo-img"
          src={gowthamImg}
          alt="Gowtham"
          style={{
            transform: `translateY(${-imgParallax}px) scale(1.08) translateX(${mouseX * -6}px)`,
            transition: 'transform 0.12s linear',
          }}
        />
      </div>

      {/* Vertical scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-line" />
        <span className="scroll-indicator-text">Scroll</span>
      </div>

      {/* Section index */}
      <div className="hero-index">01 / INTRO</div>

      {/* Content */}
      <div className="hero-content-layer">
        <div className="hero-content-inner">

          {/* Eye-brow */}
          <div className="hero-eyebrow seq seq-1">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Portfolio</span>
            <span className="eyebrow-status">
              <span className="eyebrow-status-dot" />
              Available
            </span>
          </div>

          {/* Name */}
          <p className="hero-name-small seq seq-2">Full-Stack Developer</p>
          <h1 className="hero-name-large seq seq-3">
            Gowth<em>am</em>
          </h1>

          {/* Role row */}
          <div className="hero-role-row seq seq-4">
            <span className="role-tick" />
            <span className="hero-role">HTML · CSS · JS · React · Node · PHP · MySQL</span>
          </div>

          {/* Description */}
          <p className="hero-desc seq seq-5">
            I craft <strong>clean, performant web experiences</strong> — from pixel-precise
            frontends to robust backend systems. Every line of code is intentional.
          </p>

          {/* CTA Row */}
          <div className="hero-cta-row seq seq-6">
            <button
              className="cta-primary"
              onClick={async () => {
                const url = '/resume/Gowtham J Resume.pdf';
                try {
                  const res = await fetch(url, { method: 'HEAD' });
                  if (res.ok) {
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Gowtham J Resume.pdf';
                    a.click();
                  } else {
                    alert('Resume will be available soon. Please check back later!');
                  }
                } catch {
                  alert('Resume will be available soon. Please check back later!');
                }
              }}
            >
              Download CV
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
              </svg>
            </button>
            <span className="cta-secondary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              See my work →
            </span>
          </div>

          {/* Social */}
          <div className="hero-social-strip seq seq-7">
            <span className="social-strip-label">Follow</span>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="social-icon-bare" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
