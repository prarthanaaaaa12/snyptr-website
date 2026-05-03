import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <style>{`
        .about-hero {
          background: var(--black);
          padding: 160px 48px 100px;
          position: relative;
          overflow: hidden;
        }
        .about-hero::before {
          content: 'SNYPTR';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 280px;
          color: rgba(255,255,255,0.02);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }
        .about-hero__inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .about-hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 12vw, 160px);
          color: var(--white);
          line-height: 0.9;
          margin-bottom: 40px;
        }
        .about-hero__title span { color: var(--red); }
        .about-hero__body {
          max-width: 680px;
          font-size: 20px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.6);
        }
        .about-mission {
          background: var(--white);
          padding: 120px 48px;
        }
        .about-mission__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-mission__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 88px);
          color: var(--black);
          line-height: 0.95;
        }
        .about-mission__title span { color: var(--red); }
        .about-mission__body {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.9;
          color: #555;
        }
        .about-mission__body p { margin-bottom: 20px; }
        .about-values {
          background: var(--black);
          padding: 120px 48px;
        }
        .about-values__inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-values__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 100px);
          color: var(--white);
          line-height: 0.9;
          margin-bottom: 64px;
        }
        .about-values__title span { color: var(--red); }
        .about-values__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        .about-value-card {
          background: var(--black);
          padding: 48px 40px;
          transition: background 0.3s;
          position: relative;
        }
        .about-value-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--red);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .about-value-card:hover::after { transform: scaleX(1); }
        .about-value-card:hover { background: #111; }
        .about-value-card__num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          color: rgba(255,255,255,0.05);
          line-height: 1;
          margin-bottom: 16px;
        }
        .about-value-card__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          color: var(--white);
          margin-bottom: 12px;
        }
        .about-value-card__desc {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.4);
        }
        .about-story {
          background: var(--off-white);
          padding: 120px 48px;
        }
        .about-story__inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .about-story__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 80px);
          color: var(--black);
          margin-bottom: 40px;
        }
        .about-story__title span { color: var(--red); }
        .about-story__text {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.9;
          color: #555;
        }
        .about-story__text p { margin-bottom: 24px; }
        @media (max-width: 900px) {
          .about-mission__inner { grid-template-columns: 1fr; gap: 40px; }
          .about-values__grid { grid-template-columns: 1fr; }
          .about-hero { padding: 140px 24px 80px; }
          .about-mission, .about-values, .about-story { padding: 80px 24px; }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-hero__inner">
          <p className="section-label">Who We Are</p>
          <h1 className="about-hero__title">
            About<br /><span>SNYPTR</span>
          </h1>
          <p className="about-hero__body">
            We are a team of engineers, athletes, and strategists building India's first
            AI-powered haptic feedback system for precision shooting. Born in Bangalore.
            Built for the battlefield and the podium.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission__inner">
          <div>
            <p className="section-label">Why We Exist</p>
            <h2 className="about-mission__title">
              Mission &<br /><span>Vision</span>
            </h2>
          </div>
          <div className="about-mission__body">
            <p>
              <strong>Our Mission:</strong> To make every training session count — fewer rounds,
              more insights, faster skill gains — through hardware and software that gives
              real-time, intelligent feedback to every shooter in India.
            </p>
            <p>
              <strong>Our Vision:</strong> A future where no Indian shooter trains blind.
              Where every police officer, defence recruit, and Olympic athlete has access
              to world-class precision training technology — affordable, portable, and intelligent.
            </p>
            <p>
              We align with Khelo India, Atmanirbhar Bharat, and Digital India — supporting
              innovation at the grassroots of sports and national defence.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__inner">
          <p className="section-label">What Drives Us</p>
          <h2 className="about-values__title">
            Core<br /><span>Values</span>
          </h2>
          <div className="about-values__grid">
            {[
              { num: '01', title: 'Precision First', desc: 'Every decision we make — hardware, software, design — is optimised for accuracy. We obsess over millimetres.' },
              { num: '02', title: 'Built For India', desc: 'Affordable, rugged, field-ready. We build for the Indian athlete and the Indian soldier — not just the global elite.' },
              { num: '03', title: 'Data Over Guesswork', desc: 'Intuition has its place. But we believe in numbers, patterns, and proof. Every insight is earned from real data.' },
              { num: '04', title: 'Defence-Grade Reliability', desc: 'Our systems need to work in a shooting range and on a Himalayan post. We engineer for both.' },
              { num: '05', title: 'Radical Transparency', desc: 'With our athletes, our investors, and our mentors. No fluff. No spin. Just honest progress.' },
              { num: '06', title: 'Win Together', desc: 'The shooter wins. The coach wins. The institution wins. We only succeed when the whole ecosystem does.' },
            ].map(v => (
              <div className="about-value-card" key={v.num}>
                <div className="about-value-card__num">{v.num}</div>
                <div className="about-value-card__title">{v.title}</div>
                <p className="about-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__inner">
          <p className="section-label">The Origin</p>
          <h2 className="about-story__title">
            Our <span>Story</span>
          </h2>
          <div className="about-story__text">
            <p>
              SNYPTR was born from a simple frustration: India's shooters were training
              with no real-time feedback. Coaches weren't always available. Ammunition
              was expensive. Progress was slow and hard to measure.
            </p>
            <p>
              Three engineering students at RV University, Bangalore decided to fix that.
              A wristband. A laser. A smart target. And a lot of late nights. What started
              as a university project became a validated, award-winning startup — pitching
              before the CM of Delhi, presenting at the Assam Regimental Centre, and
              winning competitions across IIT Guwahati, FKCCI Karnataka, and IGDTUW Delhi.
            </p>
            <p>
              SNYPTR is now mentored by an Admiral, a Major General, IIM Bangalore faculty,
              and the Wadhwani Foundation. We're just getting started.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}