import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mjkvpkkz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <section id="contacts" className="rn-section-gap" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <style>{`
        .contact-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .contact-hdr {
          margin-bottom: 60px;
        }
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 60px;
          align-items: start;
        }
        /* Info side */
        .contact-info {}
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }
        .contact-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255,184,0,0.1);
          border: 1px solid rgba(255,184,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFB800;
          font-size: 18px;
          flex-shrink: 0;
        }
        .contact-info-text {}
        .contact-info-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 4px;
        }
        .contact-info-value {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
        }
        .contact-info-value a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: color 0.3s;
        }
        .contact-info-value a:hover { color: #FFB800; }
        /* Form */
        .form-card {
          background: #111;
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .form-group input,
        .form-group textarea {
          padding: 13px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.04);
          transition: all 0.3s;
          outline: none;
          resize: vertical;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder { color: rgba(255,255,255,0.2); }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: rgba(255,184,0,0.4);
          background: rgba(255,184,0,0.04);
          box-shadow: 0 0 0 3px rgba(255,184,0,0.08);
        }
        .form-group.full { margin-bottom: 20px; }
        .submit-btn {
          background: #FFB800;
          color: #000;
          border: none;
          padding: 15px 36px;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          width: 100%;
        }
        .submit-btn:hover:not(:disabled) {
          background: #ffc93c;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255,184,0,0.4);
        }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .status-msg {
          text-align: center;
          margin-top: 16px;
          font-weight: 600;
          font-size: 13px;
          padding: 12px;
          border-radius: 8px;
        }
        .status-msg.success { background: rgba(34,197,94,0.1); color: #22c55e; border: 1px solid rgba(34,197,94,0.2); }
        .status-msg.error { background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.2); }
        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr; gap: 40px; }
          .contact-wrapper { padding: 0 20px; }
          .form-row { grid-template-columns: 1fr; }
          .form-card { padding: 24px 18px; }
        }
      `}</style>

      <div className="contact-wrapper">
        <div className="contact-hdr" data-aos="fade-up" data-aos-duration="600">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-heading">Contact <span>Me</span></h2>
        </div>

        <div className="contact-layout">
          <div className="contact-info" data-aos="fade-right" data-aos-duration="700">
            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div className="contact-info-text">
                <div className="contact-info-label">Location</div>
                <div className="contact-info-value">Tamil Nadu, India</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📱</div>
              <div className="contact-info-text">
                <div className="contact-info-label">Phone</div>
                <div className="contact-info-value"><a href="tel:+919360248850">+91 93602 48850</a></div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-info-text">
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value"><a href="mailto:gowthamjayaram333@gmail.com">gowthamjayaram333@gmail.com</a></div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">💼</div>
              <div className="contact-info-text">
                <div className="contact-info-label">LinkedIn</div>
                <div className="contact-info-value"><a href="https://www.linkedin.com/in/gowtham-j-1917g/" target="_blank" rel="noreferrer">linkedin.com/in/gowtham-j</a></div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" name="name" type="text" required placeholder="Enter Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" maxLength="10" required placeholder="Enter Your Phone Number" />
                  </div>
                </div>
                <div className="form-group full">
                  <label htmlFor="_replyto">Email Address</label>
                  <input id="_replyto" name="_replyto" type="email" required placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group full" style={{ marginBottom: '28px' }}>
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="6" required placeholder="Write your message here..." />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
                {status === 'success' && (
                  <div className="status-msg success">✓ Message sent! I'll get back to you soon.</div>
                )}
                {status === 'error' && (
                  <div className="status-msg error">✕ Something went wrong. Please try again.</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
