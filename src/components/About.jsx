import profileImg from '../assets/images/image2.jpeg';

const SocialBtn = ({ href, color, icon, label }) => (
  <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
    <button className={`about-btn about-btn--${color}`} title={label}>
      {icon}
      <span>{label}</span>
    </button>
  </a>
);

export default function About() {
  return (
    <section id="about" className="rn-section-gap" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <style>{`
        .about-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .about-section-hdr {
          margin-bottom: 60px;
        }
        .about-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
          align-items: start;
        }
        /* ── Editorial photo col ── */
        .about-img-col {
          position: relative;
          display: flex;
          gap: 14px;
          align-items: stretch;
        }
        /* Vertical side label */
        .about-img-side {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 8px 0;
          flex-shrink: 0;
        }
        .about-side-line {
          flex: 1;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,184,0,0.35), transparent);
        }
        .about-side-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: 'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          white-space: nowrap;
        }
        .about-side-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #FFB800;
          flex-shrink: 0;
        }
        /* Main photo box */
        .about-img-box {
          position: relative;
          flex: 1;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%);
          aspect-ratio: 3/4;
        }
        .about-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          filter: contrast(1.06) saturate(0.8) brightness(0.9);
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .about-img-col:hover .about-img-box img {
          transform: scale(1.04);
        }
        /* Film grain overlay */
        .about-img-box::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
        }
        /* Bottom gradient */
        .about-img-box::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }
        /* Year stamp badge */
        .about-img-stamp {
          position: absolute;
          bottom: 18px;
          left: 16px;
          z-index: 3;
          display: flex;
          flex-direction: column;
        }
        .about-stamp-year {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.75);
          line-height: 1;
        }
        .about-stamp-role {
          font-family: 'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #FFB800;
          margin-top: 3px;
        }
        /* Old frame — now unused, kept for no-op */
        .about-img-frame { display: none; }
        .about-content {}
        .about-name {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 6px;
        }
        .about-name span { color: #FFB800; }
        .about-role-tag {
          display: inline-block;
          background: rgba(255,184,0,0.1);
          border: 1px solid rgba(255,184,0,0.2);
          color: #FFB800;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 4px;
          margin-bottom: 24px;
        }
        .about-gold-bar {
          width: 50px;
          height: 3px;
          background: #FFB800;
          margin-bottom: 24px;
        }
        .about-bio {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(255,255,255,0.55);
          text-align: justify;
          margin-bottom: 32px;
        }
        .about-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 32px;
        }
        .about-info-item {}
        .about-info-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #FFB800;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .about-info-value {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
        }
        .about-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .about-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          color: white;
          flex-shrink: 0;
        }
        .about-btn svg {
          width: 18px;
          height: 18px;
        }
        .about-btn span { display: none; }
        .about-btn--whatsapp { background: #25D366; }
        .about-btn--whatsapp:hover { background: #128C7E; transform: translateY(-2px); }
        .about-btn--instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
        .about-btn--instagram:hover { opacity: 0.9; transform: translateY(-2px); }
        .about-btn--facebook { background: #3B5997; }
        .about-btn--facebook:hover { background: #2d4373; transform: translateY(-2px); }
        .about-btn--twitter { background: #111; border: 1px solid rgba(255,255,255,0.15); }
        .about-btn--twitter:hover { background: #222; transform: translateY(-2px); }
        .about-btn--snapchat { background: #FFFC00; color: #000; }
        .about-btn--snapchat:hover { background: #f0ec00; transform: translateY(-2px); }
        .about-btn--linkedin { background: #0077B5; }
        .about-btn--linkedin:hover { background: #005c8a; transform: translateY(-2px); }
        .about-btn--resume { background: #FFB800; color: #000; }
        .about-btn--resume:hover { background: #ffc93c; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,184,0,0.4); }
        @media (max-width: 768px) {
          .about-layout { grid-template-columns: 1fr; gap: 40px; }
          .about-wrapper { padding: 0 20px; }
          .about-img-col { max-width: 280px; margin: 0 auto; }
          .about-img-box { aspect-ratio: 3/4; clip-path: polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%); }
          .about-info-grid { grid-template-columns: 1fr; }
          .about-name { text-align: center; }
          .about-bio { text-align: left; }
        }
      `}</style>

      <div className="about-wrapper">
        <div className="about-section-hdr" data-aos="fade-up" data-aos-duration="600">
          <div className="section-tag">About Me</div>
          <h2 className="section-heading">Who <span>Am I</span></h2>
        </div>

        <div className="about-layout">
          <div className="about-img-col" data-aos="fade-right" data-aos-duration="700">
            {/* Side label strip */}
            <div className="about-img-side">
              <div className="about-side-line" />
              <div className="about-side-dot" />
              <span className="about-side-text">Full-Stack Developer</span>
              <div className="about-side-dot" />
              <div className="about-side-line" />
            </div>

            {/* Photo with angled cut */}
            <div className="about-img-box">
              <img src={profileImg} alt="Gowtham" />
              {/* Stamp on photo */}
              <div className="about-img-stamp">
                <span className="about-stamp-year">SINCE 2022</span>
                <span className="about-stamp-role">Web Developer</span>
              </div>
            </div>

            <div className="about-img-frame" />
          </div>

          <div className="about-content" data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
            <h2 className="about-name">Gowtham <span>J</span></h2>
            <span className="about-role-tag">Full-Stack Developer</span>
            <div className="about-gold-bar" />
            <p className="about-bio">
              Passionate and dedicated web developer with a strong focus on creating responsive,
              user-friendly web applications. Experienced in developing innovative solutions to
              enhance workflows and improve business processes. Looking to leverage my skills in a
              challenging role where I can contribute to building dynamic and scalable web applications.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="about-info-label">Location</div>
                <div className="about-info-value">Tamil Nadu, India</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Experience</div>
                <div className="about-info-value">4+ Years</div>
              </div>
              <div className="about-info-item">
                <div className="about-info-label">Availability</div>
                <div className="about-info-value" style={{ color: '#22c55e' }}>Open to Work</div>
              </div>
            </div>

            <div className="about-btns">
              <SocialBtn href="https://wa.me/9360248850" color="whatsapp" 
                icon={<svg viewBox="0 0 16 16" height="1.1em" fill="currentColor"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"/></svg>}
              />
              <SocialBtn href="https://www.instagram.com/mr_gowthammm/" color="instagram" 
                icon={<svg fill="currentColor" viewBox="0 0 24 24" height="1.1em"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>}
              />
              <SocialBtn href="https://www.facebook.com/gowtham.shah.1" color="facebook" 
                icon={<svg viewBox="0 0 16 16" height="1.1em" fill="currentColor"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>}
              />
              <SocialBtn href="https://x.com/gowtham_shah" color="twitter" 
                icon={<svg viewBox="0 0 16 16" height="1.1em" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75z"/></svg>}
              />
              <SocialBtn href="https://www.linkedin.com/in/gowtham-j-1917g/" color="linkedin" 
                icon={<svg viewBox="0 0 16 16" height="1.1em" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
