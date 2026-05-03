import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: var(--black);
          padding: 80px 48px 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer__inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer__top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .footer__brand {}
        .footer__logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          color: var(--white);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer__logo span {
          width: 8px;
          height: 8px;
          background: var(--red);
          border-radius: 50%;
          display: inline-block;
        }
        .footer__tagline {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.35);
          max-width: 260px;
          margin-bottom: 24px;
        }
        .footer__contact-link {
          font-size: 13px;
          color: var(--red);
          font-weight: 500;
          transition: opacity 0.3s;
        }
        .footer__contact-link:hover { opacity: 0.7; }
        .footer__col-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
        }
        .footer__col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer__col ul a {
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          transition: color 0.3s;
        }
        .footer__col ul a:hover { color: var(--white); }
        .footer__bottom {
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer__copy {
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
        }
        .footer__copy span { color: var(--red); }
        .footer__made {
          font-size: 12px;
          color: rgba(255,255,255,0.2);
        }
        .footer__made span { color: rgba(255,255,255,0.4); }
        @media (max-width: 900px) {
          .footer__top { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer { padding: 60px 24px 32px; }
        }
        @media (max-width: 500px) {
          .footer__top { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__brand">
              <div className="footer__logo">
                SNYPTR <span />
              </div>
              <p className="footer__tagline">
                India's first AI-powered haptic feedback system for precision shooting training.
                Built for athletes, police & defence.
              </p>
              <a href="mailto:snyptr.llp@gmail.com" className="footer__contact-link">
                snyptr.llp@gmail.com
              </a>
            </div>

            <div className="footer__col">
              <div className="footer__col-title">Navigate</div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <div className="footer__col-title">Products</div>
              <ul>
                <li><Link to="/products">Wristband v1</Link></li>
                <li><Link to="/products">Laser Module</Link></li>
                <li><Link to="/products">Sensor Target</Link></li>
                <li><Link to="/products">Shot Analysis</Link></li>
                <li><Link to="/products">AR/VR Suite</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <div className="footer__col-title">Contact</div>
              <ul>
                <li><a href="mailto:snyptr.llp@gmail.com">Email Us</a></li>
                <li><a href="tel:+919606093503">+91 96060 93503</a></li>
                <li><a href="https://www.linkedin.com/company/snyptr/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/snyptr.2006/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              © 2026 <span>SNYPTR</span>. All rights reserved.
            </p>
            <p className="footer__made">
              Built in <span>Bangalore, India 🇮🇳</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}