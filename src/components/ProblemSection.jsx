export default function ProblemSection() {
  return (
    <>
      <style>{`
        .problem {
          background: var(--white);
          padding: 140px 48px;
          overflow: hidden;
        }
        .problem__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .problem__left {}
        .problem__number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 200px;
          line-height: 1;
          color: var(--off-white);
          letter-spacing: -0.02em;
          margin-left: -10px;
          user-select: none;
        }
        .problem__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 88px);
          line-height: 0.95;
          color: var(--black);
          margin-top: -60px;
          position: relative;
          z-index: 1;
        }
        .problem__title span {
          color: var(--red);
        }
        .problem__right {}
        .problem__body {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.8;
          color: #444;
          margin-bottom: 48px;
        }
        .problem__body strong {
          color: var(--black);
          font-weight: 700;
        }
        .problem__stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .problem__stat-card {
          border: 1px solid var(--light-grey);
          padding: 24px;
          border-radius: 4px;
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .problem__stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 0;
          background: var(--red);
          transition: height 0.4s ease;
        }
        .problem__stat-card:hover::before {
          height: 100%;
        }
        .problem__stat-card:hover {
          border-color: var(--red);
          transform: translateY(-4px);
        }
        .problem__stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          color: var(--black);
          line-height: 1;
        }
        .problem__stat-num span {
          color: var(--red);
        }
        .problem__stat-desc {
          font-size: 13px;
          color: var(--grey);
          margin-top: 6px;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .problem__inner { grid-template-columns: 1fr; gap: 40px; }
          .problem__number { font-size: 120px; }
          .problem__title { margin-top: -40px; }
          .problem { padding: 80px 24px; }
        }
      `}</style>

      <section className="problem">
        <div className="problem__inner">
          <div className="problem__left">
            <div className="problem__number">01</div>
            <h2 className="problem__title">
              India Trains<br /><span>Blind.</span>
            </h2>
          </div>
          <div className="problem__right">
            <p className="section-label">The Problem</p>
            <p className="problem__body">
              India's shooters and security forces are forced to train without real-time feedback —
              <strong> wasting time, money, and talent</strong> because no affordable system exists
              to correct errors instantly. Precision training remains slow,
              <strong> coach-dependent, and inaccessible</strong> to most.
            </p>
            <div className="problem__stats">
              <div className="problem__stat-card">
                <div className="problem__stat-num">30<span>K+</span></div>
                <div className="problem__stat-desc">ISSF & national-level shooters with no real-time feedback</div>
              </div>
              <div className="problem__stat-card">
                <div className="problem__stat-num">2.2<span>M</span></div>
                <div className="problem__stat-desc">Police personnel needing structured training tools</div>
              </div>
              <div className="problem__stat-card">
                <div className="problem__stat-num">1100<span>+</span></div>
                <div className="problem__stat-desc">Registered training facilities across India</div>
              </div>
              <div className="problem__stat-card">
                <div className="problem__stat-num">70<span>%</span></div>
                <div className="problem__stat-desc">Reduction in live-fire rounds with SNYPTR</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}