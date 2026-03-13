import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <style>{`
        .backto-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 999;
          opacity: ${visible ? 1 : 0};
          pointer-events: ${visible ? 'auto' : 'none'};
          transition: opacity 0.3s, transform 0.3s;
          transform: ${visible ? 'translateY(0)' : 'translateY(16px)'};
        }
        .backto-top button {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #FFB800;
          color: #000;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(255,184,0,0.4);
          transition: all 0.3s;
          font-size: 18px;
          font-weight: 900;
          font-family: 'Montserrat', sans-serif;
        }
        .backto-top button:hover {
          background: #ffc93c;
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(255,184,0,0.55);
        }
      `}</style>
      <div className="backto-top">
        <button onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      </div>
    </>
  );
}
