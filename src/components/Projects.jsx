// Project images
import nexyugaImg from '../assets/project/nexyuga.png';
import gradixImg from '../assets/project/gradix.png';
import commonManImg from '../assets/project/commonman.png';
import adInnovantImg from '../assets/project/AD.png';
import echodigiImg from '../assets/project/Echodigiworks.png';
import uccashTourismImg from '../assets/project/uccash tourism.jpg';
import greensImg from '../assets/project/Greens.png';
import svcImg from '../assets/project/svc.png';
import pranavaImg from '../assets/project/pranava.jpg';
import webthroneImg from '../assets/project/Webthrone tech.jpg';
import highlightsImg from '../assets/project/highlights.jpg';
import foreverImg from '../assets/project/forever.jpg';
import jbsImg from '../assets/project/JBS.jpg';
import aghavanImg from '../assets/project/aghavan.jpg';
import aghanImg from '../assets/project/aghan.jpg';

const projects = [
  { id: 2, img: nexyugaImg, title: 'Nexyuga', url: 'https://nexyuga.in/', tag: 'Company', desc: 'Company portfolio website built with a modern design, showcasing services, team, and company vision.' },
  { id: 0, img: gradixImg, title: 'Gradix Technologies', url: 'https://gradixtech.com/', tag: 'Tech', desc: 'Technology company website showcasing web development services, portfolio, and digital solutions.' },
  { id: 1, img: commonManImg, title: 'Common Man', url: 'https://the-commonman.com/home/', tag: 'Brand', desc: 'Brand website with a clean modern design showcasing products, story, and customer engagement.' },
  { id: 3, img: adInnovantImg, title: 'AD Innovant Media', url: 'https://adinnovantmedia.netlify.app/', tag: 'Media', desc: 'Digital media and advertising agency website with services, campaigns, and creative portfolio.' },
  { id: 4, img: echodigiImg, title: 'Echo Digital Works', url: 'https://echodigitalworks.in/', tag: 'Agency', desc: 'Full digital agency website with services, portfolio, and contact sections featuring modern design.' },
  { id: 6, img: uccashTourismImg, title: 'Uccash Tourism', url: 'https://uccashtourism.com/', tag: 'Travel', desc: 'Tourism platform showcasing travel packages, destinations, and booking capabilities.' },
  { id: 7, img: greensImg, title: 'Greens Technologies', url: 'https://cloudgt.in/', tag: 'Tech', desc: 'Tech company website with service offerings, team profiles, and project showcases.' },
  { id: 8, img: svcImg, title: 'Sri Vishnu Communications', url: 'https://www.srivishnucommunications.com/', tag: 'Telecom', desc: 'Telecom services website with service plans, coverage maps, and contact forms.' },
  { id: 5, img: pranavaImg, title: 'Pranava Catering', url: 'https://pranava.netlify.app/', tag: 'Food', desc: 'Catering service website with menu showcases, event gallery, and inquiry forms.' },
  { id: 9, img: webthroneImg, title: 'Webthrone Technologies', url: 'https://webthronetech.netlify.app/', tag: 'Tech', desc: 'Web technology company for digital solutions, hosting, and web development services.' },
  { id: 10, img: highlightsImg, title: 'Highlights Makeover', url: 'https://www.highlights-makeover-artistry.in/', tag: 'Beauty', desc: 'Beauty salon website with service listings, portfolio gallery, and appointment booking.' },
  { id: 11, img: foreverImg, title: 'Forever Finds', url: 'https://forever-find.netlify.app/', tag: 'E-Commerce', desc: 'E-commerce platform for unique products with cart, filters, and smooth shopping UX.' },
  { id: 12, img: jbsImg, title: 'Jayalakshmi Borewells', url: 'https://jayalakshmiborewells.netlify.app/', tag: 'Services', desc: 'Borewell services website with project portfolio and quick contact functionality.' },
  { id: 13, img: aghavanImg, title: 'Aghavan Foundation', url: 'https://aghavan.org/', tag: 'NGO', desc: 'Foundation website for social welfare initiatives with events and volunteer registration.' },
  { id: 14, img: aghanImg, title: 'Aghan Promoters', url: 'https://testing-aghan.netlify.app/', tag: 'Real Estate', desc: 'Real estate promoters website with property listings, enquiry forms, and location maps.' },
];

function ProjectCard({ proj, index }) {
  return (
    <div
      className="flip-card"
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 70, 420)}
      data-aos-duration="700"
    >
      <div className="flip-card-inner">
        {/* ── FRONT ── */}
        <div className="flip-card-front">
          <div className="flip-thumb">
            <img src={proj.img} alt={proj.title} />
            <div className="flip-thumb-overlay" />
          </div>
          <span className="flip-tag">{proj.tag}</span>
          <div className="flip-front-body">
            <h3 className="flip-front-title">{proj.title}</h3>
            <div className="flip-hint">
              <span className="flip-hint-icon">↻</span>
              <span>Hover to explore</span>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="flip-card-back">
          {/* blurred bg from the image */}
          <div className="flip-back-bg" style={{ backgroundImage: `url(${proj.img})` }} />
          <div className="flip-back-content">
            <span className="flip-back-tag">{proj.tag}</span>
            <h3 className="flip-back-title">{proj.title}</h3>
            <p className="flip-back-desc">{proj.desc}</p>
            <a
              href={proj.url}
              target="_blank"
              rel="noreferrer"
              className="flip-back-btn"
              onClick={e => e.stopPropagation()}
            >
              Visit Project ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="rn-section-gap"
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.04)', position: 'relative', overflow: 'hidden' }}
    >
      <style>{`
        /* ── Background particle dots ── */
        @keyframes floatDot {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50%       { transform: translateY(-20px) scale(1.4); opacity: 0.7; }
        }
        .proj-dot {
          position: absolute;
          width: 3px; height: 3px;
          background: #FFB800;
          border-radius: 50%;
          animation: floatDot var(--dur, 6s) ease-in-out infinite;
          animation-delay: var(--del, 0s);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Wrapper ── */
        .projects-wrapper {
          max-width: 1260px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }
        .projects-hdr { margin-bottom: 60px; }

        /* ── Stats ── */
        .projects-stats {
          display: flex;
          gap: 0;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-right: 36px;
          margin-right: 36px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 32px;
          font-weight: 900;
          color: #FFB800;
          line-height: 1;
        }
        .stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          font-weight: 500;
          line-height: 1.4;
        }

        /* ── Grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 28px;
        }

        /* ══════════════════════════════
           3D FLIP CARD
        ══════════════════════════════ */
        .flip-card {
          perspective: 1000px;
          height: 320px;
          cursor: pointer;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
          border-radius: 16px;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        /* ── Front face ── */
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          overflow: hidden;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-front {
          background: #141414;
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
        }
        .flip-thumb {
          flex: 1;
          position: relative;
          overflow: hidden;
        }
        .flip-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.65s ease;
        }
        .flip-card:hover .flip-thumb img {
          transform: scale(1.06);
        }
        .flip-thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.0) 50%);
        }
        .flip-tag {
          position: absolute;
          top: 12px; left: 12px;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,184,0,0.3);
          color: #FFB800;
          font-family: 'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 50px;
          z-index: 2;
        }
        .flip-front-body {
          padding: 14px 18px 16px;
        }
        .flip-front-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .flip-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: rgba(255,255,255,0.25);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .flip-hint-icon {
          font-size: 13px;
          animation: spinHint 3s linear infinite;
          display: inline-block;
          color: rgba(255,184,0,0.4);
        }
        @keyframes spinHint {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── Back face ── */
        .flip-card-back {
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .flip-back-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: blur(4px) brightness(0.25) saturate(0.5);
          transform: scale(1.06);
        }
        .flip-back-content {
          position: relative;
          z-index: 2;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: flex-end;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%);
        }
        .flip-back-tag {
          display: inline-block;
          background: rgba(255,184,0,0.15);
          border: 1px solid rgba(255,184,0,0.3);
          color: #FFB800;
          font-family: 'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 50px;
          margin-bottom: 10px;
          align-self: flex-start;
        }
        .flip-back-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.25;
          text-transform: uppercase;
          letter-spacing: -0.3px;
        }
        .flip-back-desc {
          font-size: 12px;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin-bottom: 20px;
        }
        .flip-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFB800;
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 12px 22px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          align-self: flex-start;
        }
        .flip-back-btn:hover {
          background: #ffc93c;
          box-shadow: 0 6px 24px rgba(255,184,0,0.5);
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .projects-wrapper { padding: 0 20px; }
          .projects-grid { grid-template-columns: 1fr; }
          .flip-card { height: 300px; }
          .projects-stats { gap: 16px; }
          .stat-item { padding-right: 20px; margin-right: 20px; }
        }
      `}</style>

      {/* Floating gold dust particles */}
      {[
        { top: '10%', left: '5%',  dur: '7s',  del: '0s' },
        { top: '20%', left: '90%', dur: '9s',  del: '1s' },
        { top: '50%', left: '15%', dur: '6s',  del: '2s' },
        { top: '70%', left: '80%', dur: '8s',  del: '0.5s' },
        { top: '85%', left: '40%', dur: '10s', del: '3s' },
        { top: '30%', left: '60%', dur: '7.5s',del: '1.5s' },
      ].map((p, i) => (
        <div
          key={i}
          className="proj-dot"
          style={{ top: p.top, left: p.left, '--dur': p.dur, '--del': p.del }}
        />
      ))}

      <div className="projects-wrapper">
        <div className="projects-hdr" data-aos="fade-up" data-aos-duration="600">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-heading">My <span>Projects</span></h2>
          <div className="projects-stats">
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects<br/>Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">4+</span>
              <span className="stat-label">Years of<br/>Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-label">Client<br/>Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {[...new Map(projects.map(p => [p.id, p])).values()]
            .sort((a, b) => a.id - b.id)
            .map((proj, i) => (
              <ProjectCard key={proj.id} proj={proj} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
