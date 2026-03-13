import certImg from '../assets/Certificate/GOWTHAM J_MERN STACK_CERTIFICATE.jpg';

export default function Certification() {
  return (
    <section id="certification" className="rn-section-gap" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <style>{`
        .cert-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .cert-hdr { margin-bottom: 60px; }
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .cert-img-wrap {
          position: relative;
        }
        .cert-img-border {
          position: absolute;
          top: -10px; right: -10px;
          width: 100%; height: 100%;
          border: 2px solid rgba(255,184,0,0.25);
          border-radius: 14px;
          pointer-events: none;
        }
        .cert-img {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5);
          position: relative;
        }
        .cert-content {}
        .cert-label {
          display: inline-block;
          background: rgba(255,184,0,0.1);
          border: 1px solid rgba(255,184,0,0.2);
          color: #FFB800;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 4px;
          margin-bottom: 18px;
        }
        .cert-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 6px;
          letter-spacing: -1px;
        }
        .cert-title span { color: #FFB800; }
        .cert-bar {
          width: 50px; height: 3px;
          background: #FFB800;
          margin: 16px 0 24px;
        }
        .cert-desc {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
          margin-bottom: 24px;
        }
        .cert-meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 32px;
        }
        .cert-meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
        }
        .cert-meta-icon {
          color: #FFB800;
          font-size: 14px;
          width: 20px;
          text-align: center;
        }
        .cert-meta-text { color: rgba(255,255,255,0.65); }
        .cert-meta-text strong { color: rgba(255,255,255,0.85); }
        .cert-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFB800;
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }
        .cert-download-btn:hover {
          background: #ffc93c;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255,184,0,0.4);
        }
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr; gap: 36px; }
          .cert-wrapper { padding: 0 20px; }
        }
      `}</style>

      <div className="cert-wrapper">
        <div className="cert-hdr" data-aos="fade-up" data-aos-duration="600">
          <div className="section-tag">Achievements</div>
          <h2 className="section-heading">My <span>Certifications</span></h2>
        </div>

        <div className="cert-grid">
          <div className="cert-img-wrap" data-aos="fade-right" data-aos-duration="700">
            <img className="cert-img" src={certImg} alt="MERN Stack Certification" />
            <div className="cert-img-border" />
          </div>

          <div className="cert-content" data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
            <span className="cert-label">Certified</span>
            <h3 className="cert-title">MERN <span>Stack</span></h3>
            <div className="cert-bar" />
            <p className="cert-desc">
              Successfully completed the MERN Stack development certification, covering
              MongoDB, Express.js, React.js, and Node.js — building full-stack web applications
              end-to-end from UI to database.
            </p>
            <div className="cert-meta">
              <div className="cert-meta-row">
                <span className="cert-meta-icon">🏢</span>
                <span className="cert-meta-text"><strong>FITA Academy</strong>, Saravanampatti, Coimbatore</span>
              </div>
              <div className="cert-meta-row">
                <span className="cert-meta-icon">📅</span>
                <span className="cert-meta-text">MERN Stack Development – Full Course</span>
              </div>
              <div className="cert-meta-row">
                <span className="cert-meta-icon">✅</span>
                <span className="cert-meta-text" style={{ color: '#22c55e' }}>Verified Certificate</span>
              </div>
            </div>
            <a
              href={certImg}
              download="Gowtham_MERN_Certificate.jpg"
              className="cert-download-btn"
            >
              Download Certificate ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
