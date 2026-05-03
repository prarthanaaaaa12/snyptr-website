import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-page-hero {
          background: var(--black);
          padding: 160px 48px 100px;
          position: relative;
          overflow: hidden;
        }
        .contact-page-hero::before {
          content: 'TALK';
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 300px;
          color: rgba(255,255,255,0.02);
          pointer-events: none;
          user-select: none;
        }
        .contact-page-hero__inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .contact-page-hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 12vw, 160px);
          color: var(--white);
          line-height: 0.9;
        }
        .contact-page-hero__title span { color: var(--red); }
        .contact-page-hero__sub {
          max-width: 560px;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
          margin-top: 32px;
        }
      `}</style>

      <section className="contact-page-hero">
        <div className="contact-page-hero__inner">
          <p className="section-label">Reach Out</p>
          <h1 className="contact-page-hero__title">
            Contact<br /><span>Us</span>
          </h1>
          <p className="contact-page-hero__sub">
            Institutions, investors, athletes, media — we're open to all conversations.
            Drop us a message and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  )
}