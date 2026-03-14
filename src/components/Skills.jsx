import { useState } from 'react';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Programming'];

const skills = [
  // Frontend
  { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html', category: 'Frontend' },
  { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css', category: 'Frontend' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js', category: 'Frontend' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react', category: 'Frontend' },
  { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts', category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs', category: 'Backend' },
  { name: 'Express.js', icon: 'https://skillicons.dev/icons?i=express', category: 'Backend' },
  { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php', category: 'Backend' },

  // Database
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb', category: 'Database' },
  { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres', category: 'Database' },
  { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql', category: 'Database' },

  // Programming
  { name: 'Golang', icon: 'https://skillicons.dev/icons?i=go', category: 'Programming' },
  { name: 'Java', icon: 'https://skillicons.dev/icons?i=java', category: 'Programming' },
  { name: 'Python', icon: 'https://skillicons.dev/icons?i=py', category: 'Programming' },
  { name: 'C#', icon: 'https://skillicons.dev/icons?i=cs', category: 'Programming' },
];

export default function Skills() {
  const [active, setActive] = useState('All');
  const [animKey, setAnimKey] = useState(0);

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  const handleFilter = (cat) => {
    setActive(cat);
    setAnimKey(k => k + 1);
  };

  return (
    <section id="Skills" className="rn-section-gap" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <style>{`
        .skills-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .skills-hdr { margin-bottom: 48px; }

        /* ── Filter tabs ── */
        .skills-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .filter-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 8px 18px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.25s;
        }
        .filter-btn:hover {
          border-color: rgba(255,184,0,0.3);
          color: rgba(255,255,255,0.7);
        }
        .filter-btn.active {
          background: #FFB800;
          border-color: #FFB800;
          color: #000;
        }

        /* ── Grid ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 12px;
        }

        /* ── Skill card ── */
        @keyframes cardPop {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        .skill-card {
          background: #111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 24px 12px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: default;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          animation: cardPop 0.35s ease both;
        }
        .skill-card:hover {
          border-color: rgba(255,184,0,0.35);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255,184,0,0.08);
        }
        .skill-card img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
          transition: transform 0.35s;
        }
        .skill-card:hover img {
          transform: scale(1.12);
        }
        .skill-card-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.5);
          text-align: center;
          transition: color 0.3s;
        }
        .skill-card:hover .skill-card-name { color: rgba(255,255,255,0.8); }

        @media (max-width: 768px) {
          .skills-wrapper { padding: 0 20px; }
          .skills-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px; }
          .skill-card { padding: 18px 8px 14px; }
        }
      `}</style>

      <div className="skills-wrapper">
        <div className="skills-hdr" data-aos="fade-up" data-aos-duration="600">
          <div className="section-tag">Expertise</div>
          <h2 className="section-heading">My <span>Skills</span></h2>
        </div>

        {/* Filter tabs */}
        <div className="skills-filters" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Icon grid — re-mounts with new key to retrigger animation */}
        <div className="skills-grid" key={animKey}>
          {filtered.map((skill, i) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${Math.min(i * 40, 400)}ms` }}
            >
              <img src={skill.icon} alt={skill.name} />
              <span className="skill-card-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
