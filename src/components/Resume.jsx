const education = [
  {
    degree: 'Bachelor of Technology',
    desc: 'Artificial Intelligence and Data Science',
    meta: 'K.S.Rangasamy College of Technology (2020 - 2024)',
    score: '8.81 CGPA',
  },
  {
    degree: 'MERN Stack Certification',
    desc: 'Web Design and MERN Stack Development',
    meta: 'FITA Academy, Coimbatore',
    score: null,
  },

];

const experience = [
  {
    title: 'Founder',
    company: 'Gradix Technologies',
    period: 'January 2026 – Present',
    companyLink: 'https://gradixtech.com/',
    desc: 'Working as a Web Developer at Gradix Technologies, contributing to web development projects and building scalable web solutions.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Echo Digital Works, Chennai',
    period: 'June 2024 – July 2025',
    desc: 'Built responsive websites, managed databases, and integrated APIs as a Full Stack developer.',
  },
  {
    title: 'Web Developer Intern',
    company: 'Smart Stream Technologies, Coimbatore',
    period: 'Jan – Mar 2024',
    desc: 'Designed websites, optimized performance, ensured responsiveness, and integrated APIs.',
  },
];

function ResumeItem({ degree, desc, meta, score, title, company, period, companyLink, isLast }) {
  return (
    <div className="resume-item" data-aos="fade-up" data-aos-duration="500">
      <div className="ri-dot" />
      {!isLast && <div className="ri-line" />}
      <div className="ri-body">
        <div className="ri-header">
          <div>
            <h4 className="ri-title">{degree || title}</h4>
            {desc && <p className="ri-desc">{desc}</p>}
            {(meta || company) && (
              <p className="ri-meta">
                {companyLink
                  ? <a href={companyLink} target="_blank" rel="noreferrer" style={{ color: '#FFB800' }}>{company}</a>
                  : (meta || company)}
                {period && <span style={{ marginLeft: 8, color: 'rgba(255,255,255,0.3)' }}>• {period}</span>}
              </p>
            )}
          </div>
          {score && <span className="ri-badge">{score}</span>}
        </div>
        {desc && title && <p className="ri-long">{desc}</p>}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="rn-section-gap" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <style>{`
        .resume-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .resume-hdr { margin-bottom: 60px; }
        .resume-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        .resume-col-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #FFB800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .resume-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,184,0,0.15);
        }
        .resume-item {
          position: relative;
          padding-left: 24px;
          margin-bottom: 28px;
        }
        .ri-dot {
          position: absolute;
          left: 0; top: 5px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #FFB800;
          box-shadow: 0 0 0 3px rgba(255,184,0,0.15);
          z-index: 1;
        }
        .ri-line {
          position: absolute;
          left: 4px;
          top: 15px;
          bottom: -28px;
          width: 2px;
          background: rgba(255,184,0,0.1);
        }
        .ri-body {
          background: #141414;
          border-radius: 12px;
          padding: 16px 18px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s;
        }
        .resume-item:hover .ri-body {
          border-color: rgba(255,184,0,0.2);
        }
        .ri-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }
        .ri-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          margin-bottom: 4px;
        }
        .ri-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 4px;
        }
        .ri-meta {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }
        .ri-badge {
          background: rgba(255,184,0,0.12);
          color: #FFB800;
          border: 1px solid rgba(255,184,0,0.2);
          padding: 3px 10px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: 'Montserrat', sans-serif;
        }
        .ri-long {
          font-size: 12.5px;
          color: rgba(255,255,255,0.4);
          line-height: 1.7;
          margin-top: 10px;
        }
        @media (max-width: 768px) {
          .resume-grid { grid-template-columns: 1fr; }
          .resume-wrapper { padding: 0 20px; }
        }
      `}</style>

      <div className="resume-wrapper">
        <div className="resume-hdr" data-aos="fade-up" data-aos-duration="600">
          <div className="section-tag">Timeline</div>
          <h2 className="section-heading">My <span>Resume</span></h2>
        </div>

        <div className="resume-grid">
          <div className="resume-col">
            <div className="resume-col-title" data-aos="fade-up" data-aos-duration="500">Education</div>
            {education.map((item, i) => (
              <ResumeItem key={i} {...item} isLast={i === education.length - 1} />
            ))}
          </div>
          <div className="resume-col">
            <div className="resume-col-title" data-aos="fade-up" data-aos-duration="500">Experience</div>
            {experience.map((item, i) => (
              <ResumeItem key={i} {...item} isLast={i === experience.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
