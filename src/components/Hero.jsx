import gowthamImg from '../assets/images/Gowtham.jpg';
import { useEffect, useRef, useState } from 'react';

const socialLinks = [
  {
    href: 'https://x.com/gowtham_shah', label: 'Twitter/X',
    icon: <svg viewBox="0 0 512 512" height="1.3em" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>,
  },
  {
    href: 'https://www.instagram.com/aesthetic__kadhalan/', label: 'Instagram',
    icon: <svg fill="currentColor" viewBox="0 0 448 512" height="1.3em"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"/></svg>,
  },
  {
    href: 'https://www.linkedin.com/in/gowtham-j-1917g/', label: 'LinkedIn',
    icon: <svg viewBox="0 0 448 512" fill="currentColor" height="1.3em"><path d="M100.28 448H7.4V149.5h92.78zm-46.45-338C24.17 110 0 85.83 0 56.83 0 25.61 24.36 0 54.69 0 85 0 109 24.17 109 56.83c0 29-24.01 53.17-55.17 53.17zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.32-79.3-48.35 0-55.7 37.8-55.7 76.9V448H158.6V149.5h89V181h1.3c12.4-23.5 42.65-48.3 87.75-48.3 93.85 0 111.1 61.7 111.1 142v173.8z"/></svg>,
  },
  {
    href: 'https://github.com/gowtham12900/', label: 'GitHub',
    icon: <svg fill="currentColor" viewBox="0 0 496 512" height="1.3em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>,
  },
  {
    href: 'https://wa.me/9360248850', label: 'WhatsApp',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" height="1.3em"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"/></svg>,
  },
];

export default function Hero() {
  const imageWrapRef = useRef(null);
  const sectionRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll-based parallax
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Global mouse -> subtle scene shift
  useEffect(() => {
    const onMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMousePos({
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      });
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Image card 3D tilt on mouse move
  const handleImageMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -22;
    setTilt({ x, y });
  };
  const handleImageMouseLeave = () => setTilt({ x: 0, y: 0 });

  // Parallax values
  const parallaxY = scrollY * 0.22;          // image floats up slower than page
  const parallaxRing = scrollY * 0.12;       // rings rotate with scroll
  const parallaxOrb  = scrollY * 0.08;       // orb drifts

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
    >
      <style>{`
        /* ── 3D perspective scene ── */
        .hero-scene {
          perspective: 1200px;
          perspective-origin: 50% 50%;
        }

        /* ── Watermark bg text ── */
        .hero-bg-text {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-bg-text span {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(90px, 16vw, 240px);
          font-weight: 900;
          color: rgba(255,255,255,0.025);
          text-transform: uppercase;
          letter-spacing: -6px;
          white-space: nowrap;
          user-select: none;
        }

        /* ── Grid lines accent ── */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,184,0,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,184,0,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* ── Gold vertical bar ── */
        .hero-gold-line {
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #FFB800 30%, #FFB800 70%, transparent);
          opacity: 0.35;
        }

        /* ── Main layout ── */
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 48px 80px;
          display: flex;
          align-items: center;
          gap: 80px;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        .hero-content { flex: 1; }

        /* ── Tag ── */
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,184,0,0.1);
          border: 1px solid rgba(255,184,0,0.25);
          color: #FFB800;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 4px;
          margin-bottom: 24px;
        }
        .hero-tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #FFB800;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.6); }
        }

        /* ── Headings ── */
        .hero-intro {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(14px, 1.8vw, 18px);
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(46px, 7vw, 90px);
          font-weight: 900;
          color: #fff;
          line-height: 0.92;
          text-transform: uppercase;
          letter-spacing: -2px;
          margin-bottom: 4px;
        }
        .hero-title .gold { color: #FFB800; }
        .hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(12px, 1.3vw, 14px);
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          letter-spacing: 5px;
          text-transform: uppercase;
          margin: 20px 0 24px;
        }
        .hero-divider {
          width: 60px; height: 3px;
          background: #FFB800;
          margin-bottom: 28px;
        }
        .hero-description {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(255,255,255,0.5);
          margin-bottom: 40px;
          max-width: 520px;
        }
        .hero-description .hl { color: #FFB800; font-weight: 600; }

        /* ── Buttons ── */
        .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #FFB800; color: #000;
          font-family: 'Montserrat', sans-serif; font-weight: 700;
          font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 15px 32px; border-radius: 50px; border: none;
          cursor: pointer; transition: all 0.3s; text-decoration: none;
        }
        .hero-btn-primary:hover { background: #ffc93c; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,184,0,0.5); }
        .hero-btn-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #fff;
          font-family: 'Montserrat', sans-serif; font-weight: 700;
          font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 14px 30px; border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.18);
          cursor: pointer; transition: all 0.3s; text-decoration: none;
        }
        .hero-btn-secondary:hover { border-color: #FFB800; color: #FFB800; transform: translateY(-2px); }

        /* ── Social ── */
        .hero-social-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.25); margin-bottom: 14px;
        }
        .hero-social-row { display: flex; gap: 10px; flex-wrap: wrap; }
        .hero-social-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.55);
          cursor: pointer; transition: all 0.3s; text-decoration: none;
        }
        .hero-social-icon:hover {
          background: rgba(255,184,0,0.12);
          border-color: rgba(255,184,0,0.4);
          color: #FFB800; transform: translateY(-3px);
        }

        /* ════════════════════════════
           3D IMAGE SECTION
        ════════════════════════════ */
        .hero-image-scene {
          flex-shrink: 0;
          position: relative;
          width: 460px;
          height: 560px;
        }

        /* Orbiting ring 1 */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(255,184,0,0.2);
          pointer-events: none;
        }
        .orbit-ring-1 {
          width: 520px; height: 520px;
          top: 50%; left: 50%;
          margin-top: -260px; margin-left: -260px;
          animation: orbitSpin1 12s linear infinite;
        }
        .orbit-ring-2 {
          width: 590px; height: 590px;
          top: 50%; left: 50%;
          margin-top: -295px; margin-left: -295px;
          border-color: rgba(255,184,0,0.08);
          animation: orbitSpin2 18s linear infinite reverse;
        }
        @keyframes orbitSpin1 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbitSpin2 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Orbit dots on ring 1 */
        .orbit-dot {
          position: absolute;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #FFB800;
          box-shadow: 0 0 10px 3px rgba(255,184,0,0.6);
        }
        .orbit-dot-1 { top: -4px; left: 50%; margin-left: -4px; }
        .orbit-dot-2 { bottom: -4px; left: 50%; margin-left: -4px; }

        /* Small orbit dot on ring 2 */
        .orbit-dot-3 {
          position: absolute;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(255,184,0,0.7);
          box-shadow: 0 0 6px 2px rgba(255,184,0,0.4);
          right: -2.5px; top: 50%; margin-top: -2.5px;
        }

        /* 3D photo card */
        .hero-photo-card {
          position: absolute;
          top: 50%; left: 50%;
          width: 360px; height: 460px;
          margin-top: -230px; margin-left: -180px;
          border-radius: 20px;
          overflow: hidden;
          transform-style: preserve-3d;
          cursor: crosshair;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,184,0,0.15),
            0 0 40px rgba(255,184,0,0.08);
          transition: box-shadow 0.3s;
        }
        .hero-photo-card:hover {
          box-shadow:
            0 40px 100px rgba(0,0,0,0.7),
            0 0 0 1px rgba(255,184,0,0.3),
            0 0 60px rgba(255,184,0,0.15);
        }
        .hero-photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          pointer-events: none;
        }
        .hero-photo-gloss {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.15) 100%);
          pointer-events: none;
          border-radius: 20px;
        }
        .hero-photo-bottom-grad {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
          border-radius: 0 0 20px 20px;
          pointer-events: none;
        }

        /* Floating badge – XP  */
        .hero-badge-exp {
          position: absolute;
          bottom: 24px; right: -24px;
          background: #FFB800;
          color: #000;
          width: 88px; height: 88px;
          border-radius: 50%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          gap: 2px;
          border: 3px solid #0a0a0a;
          box-shadow: 0 8px 28px rgba(255,184,0,0.45);
          animation: badgeBob 3s ease-in-out infinite;
          z-index: 10;
        }
        .hero-badge-exp .num {
          font-family: 'Montserrat',sans-serif;
          font-weight: 900; font-size: 22px; line-height: 1;
        }
        .hero-badge-exp .txt {
          font-family: 'Montserrat',sans-serif;
          font-weight: 700; font-size: 8px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        @keyframes badgeBob {
          0%,100% { transform: translateY(0) rotate(-3deg); }
          50%      { transform: translateY(-8px) rotate(3deg); }
        }

        /* Floating skill chips */
        .hero-chip {
          position: absolute;
          background: rgba(20,20,20,0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,184,0,0.25);
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 50px;
          display: flex; align-items: center; gap: 6px;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          z-index: 10;
        }
        .hero-chip-dot {
          width: 6px; height: 6px;
          border-radius: 50%; background: #FFB800;
          flex-shrink: 0;
        }
        .chip-react { top: 20px; left: -36px; animation: chipFloat 4s ease-in-out infinite; }
        .chip-node  { top: 110px; right: -44px; animation: chipFloat 5s ease-in-out infinite 1s; }
        .chip-mongo { bottom: 90px; left: -44px; animation: chipFloat 4.5s ease-in-out infinite 0.5s; }
        @keyframes chipFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-image-scene { width: 400px; height: 480px; }
          .hero-photo-card { width: 310px; height: 390px; margin-top: -195px; margin-left: -155px; }
          .orbit-ring-1 { width: 440px; height: 440px; margin-top: -220px; margin-left: -220px; }
          .orbit-ring-2 { width: 510px; height: 510px; margin-top: -255px; margin-left: -255px; }
        }
        @media (max-width: 900px) {
          .hero-container { flex-direction: column-reverse; padding: 100px 24px 60px; gap: 50px; text-align: center; }
          .hero-image-scene { width: 300px; height: 380px; }
          .hero-photo-card { width: 250px; height: 320px; margin-top: -160px; margin-left: -125px; }
          .orbit-ring-1 { width: 340px; height: 340px; margin-top: -170px; margin-left: -170px; }
          .orbit-ring-2 { width: 400px; height: 400px; margin-top: -200px; margin-left: -200px; }
          .chip-react, .chip-node, .chip-mongo { display: none; }
          .hero-description { max-width: 100%; }
          .hero-buttons { justify-content: center; }
          .hero-social-row { justify-content: center; }
          .hero-social-label { text-align: center; }
          .hero-divider { margin: 0 auto 28px; }
        }
      `}</style>

      {/* Background grid + watermark */}
      <div className="hero-grid" />
      <div className="hero-bg-text">
        <span style={{ transform: `translateX(${mousePos.x * -20}px)` }}>PORTFOLIO</span>
      </div>
      <div className="hero-gold-line" />

      <div className="hero-container">
        {/* ── LEFT: Text Content ── */}
        <div className="hero-content" data-aos="fade-right" data-aos-duration="700">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Available for Work
          </div>
          <p className="hero-intro">Hello, I'm</p>
          <h1 className="hero-title">
            <span className="gold">Gowtham</span><br />J
          </h1>
          <p className="hero-subtitle">Full-Stack Developer</p>
          <div className="hero-divider" />
          <p className="hero-description">
            Passionate Full-Stack Developer with expertise in{' '}
            <span className="hl">HTML, CSS, JavaScript</span> and{' '}
            <span className="hl">Bootstrap</span>, focused on crafting clean, responsive,
            user-friendly web interfaces. I also work with{' '}
            <span className="hl">PHP, MySQL</span> and <span className="hl">MongoDB</span>{' '}
            to build dynamic, scalable full-stack applications.
          </p>
          <div className="hero-buttons">
            <a href="/resume/Gowtham J Resume.pdf" download="Mr Gowtham Resume.pdf" className="hero-btn-primary">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </a>
            <a href="#projects" className="hero-btn-secondary"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Work ↗
            </a>
          </div>
          <p className="hero-social-label">Find me on</p>
          <div className="hero-social-row">
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="hero-social-icon" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: 3D Image Scene ── */}
        <div
          className="hero-image-scene"
          data-aos="fade-left"
          data-aos-duration="700"
          style={{
            // Scroll-based parallax: image scene floats up as user scrolls
            transform: `translateY(${-parallaxY}px) translateX(${mousePos.x * 8}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {/* Orbit rings (rotate with scroll offset) */}
          <div
            className="orbit-ring orbit-ring-1"
            style={{ transform: `rotate(${parallaxRing * 0.8}deg)` }}
          >
            <div className="orbit-dot orbit-dot-1" />
            <div className="orbit-dot orbit-dot-2" />
          </div>
          <div
            className="orbit-ring orbit-ring-2"
            style={{ transform: `rotate(${-parallaxRing * 0.5}deg)` }}
          >
            <div className="orbit-dot-3" />
          </div>

          {/* 3D tilt photo card */}
          <div
            className="hero-photo-card"
            ref={imageWrapRef}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
            style={{
              transform: `
                perspective(900px)
                rotateX(${tilt.y}deg)
                rotateY(${tilt.x}deg)
                scale(${tilt.x !== 0 || tilt.y !== 0 ? 1.03 : 1})
              `,
              transition: tilt.x === 0 && tilt.y === 0
                ? 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'
                : 'transform 0.08s linear',
            }}
          >
            <img src={gowthamImg} alt="Gowtham" />
            <div className="hero-photo-gloss" />
            <div className="hero-photo-bottom-grad" />
          </div>

          {/* Floating skill chips */}
          <div className="hero-chip chip-react">
            <span className="hero-chip-dot" />React
          </div>
          <div className="hero-chip chip-node">
            <span className="hero-chip-dot" />Node.js
          </div>
          <div className="hero-chip chip-mongo">
            <span className="hero-chip-dot" />MongoDB
          </div>

          {/* XP badge */}
          <div className="hero-badge-exp">
            <span className="num">2+</span>
            <span className="txt">Years Exp.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
