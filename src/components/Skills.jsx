import htmlImg from '../assets/Skills/HTML.webp';
import cssImg from '../assets/Skills/CSS.png';
import jsImg from '../assets/Skills/JS.png';
import nodeImg from '../assets/Skills/NODE.png';
import mongoImg from '../assets/Skills/MONGODB.png';
import phpImg from '../assets/Skills/PHP.png';
import mysqlImg from '../assets/Skills/MYSQL.png';

const skills = [
  { img: htmlImg, label: 'HTML5', level: 95 },
  { img: cssImg, label: 'CSS3', level: 90 },
  { img: jsImg, label: 'JavaScript', level: 85 },
  { img: nodeImg, label: 'Node.js', level: 75 },
  { img: mongoImg, label: 'MongoDB', level: 70 },
  { img: phpImg, label: 'PHP', level: 80 },
  { img: mysqlImg, label: 'MySQL', level: 78 },
];

// Duplicate for seamless marquee
const doubled = [...skills, ...skills, ...skills];

export default function Skills() {
  return (
    <section id="Skills" className="rn-section-gap" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <style>{`
        .skills-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .skills-hdr {
          margin-bottom: 60px;
        }
        /* Marquee */
        .marquee-outer {
          position: relative;
          overflow: hidden;
          padding: 4px 0;
        }
        .marquee-outer::before,
        .marquee-outer::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-outer::before {
          left: 0;
          background: linear-gradient(to right, #0d0d0d, transparent);
        }
        .marquee-outer::after {
          right: 0;
          background: linear-gradient(to left, #0d0d0d, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 32px;
          animation: marqueeScroll 22s linear infinite;
          width: max-content;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track:hover { animation-play-state: paused; }
        .skill-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          background: #141414;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 24px 28px;
          min-width: 120px;
          cursor: pointer;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .skill-chip:hover {
          border-color: rgba(255,184,0,0.35);
          background: #1a1a1a;
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(255,184,0,0.1);
        }
        .skill-chip img {
          height: 56px;
          width: 56px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
          transition: filter 0.3s;
        }
        .skill-chip:hover img {
          filter: drop-shadow(0 4px 12px rgba(255,184,0,0.3));
        }
        .skill-chip-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.55);
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .skill-chip:hover .skill-chip-label { color: #FFB800; }
        /* Progress bars */
        .skills-bars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 48px;
          margin-top: 56px;
        }
        .skill-bar-item {}
        .skill-bar-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .skill-bar-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .skill-bar-pct {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #FFB800;
        }
        .skill-bar-track {
          height: 4px;
          background: rgba(255,255,255,0.08);
          border-radius: 4px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(to right, #FFB800, #ffc93c);
          border-radius: 4px;
          transition: width 1.2s ease;
        }
        @media (max-width: 768px) {
          .skills-wrapper { padding: 0 20px; }
          .skills-bars { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="skills-wrapper">
        <div className="skills-hdr" data-aos="fade-up" data-aos-duration="600">
          <div className="section-tag">Expertise</div>
          <h2 className="section-heading">My <span>Skills</span></h2>
        </div>

        <div className="marquee-outer" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <div className="marquee-track">
            {doubled.map((s, i) => (
              <div key={i} className="skill-chip">
                <img src={s.img} alt={s.label} />
                <span className="skill-chip-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-bars" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          {skills.map(s => (
            <div key={s.label} className="skill-bar-item">
              <div className="skill-bar-top">
                <span className="skill-bar-name">{s.label}</span>
                <span className="skill-bar-pct">{s.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
