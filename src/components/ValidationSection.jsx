const wins = [
  {
    city: 'Guwahati',
    event: 'IIT Guwahati — Disrupt',
    result: 'Winners',
    
    detail: 'Won against startups with multi-crore turnovers. Led to direct invite to present at Assam Regimental Centre.',
    color: '#E8000D',
  },
  {
    city: 'Bangalore',
    event: 'FKCCI Karnataka',
    result: 'Top 10',
    
    detail: 'Won out of 2000+ participants and 570 teams on one of Karnataka\'s most prestigious startup platforms.',
    color: '#E8000D',
  },
  {
    city: 'Delhi',
    event: 'Startathon Delhi',
    result: '1st Place',
    prize: '₹30,000',
    detail: 'Selected among 400+ teams. Pitched at IGDTUW before founders, investors and industry experts.',
    color: '#E8000D',
  },
  {
    city: 'Delhi',
    event: 'India Innovates 2026',
    result: 'Top 6 ',
    prize: 'Bharat Mandapam',
    detail: 'From 25,000+ registrations. Pitched before CM of Delhi, Environment Minister and CEO of Unstop.',
    color: '#E8000D',
  },
  {
    city: 'Bangalore',
    event: 'Startup Summit Finals',
    result: 'Top 4',
    prize: 'Wadhwani + CEDAT',
    detail: 'Secured Wadhwani Foundation membership and CEDAT Incubation. Now actively mentored on strategy.',
    color: '#E8000D',
  },
  {
    city: 'Bangalore',
    event: 'PitchCraft, Dayananda Sagar',
    result: 'Top 4',
    
    detail: 'Out of 80+ teams. Cleared a Shark Tank-style round before 12 panelists.',
    color: '#E8000D',
  },
]

export default function ValidationSection() {
  return (
    <>
      <style>{`
        .validation {
          background: var(--black);
          padding: 140px 48px;
          overflow: hidden;
          position: relative;
        }
        .validation::before {
          content: 'WINS';
          position: absolute;
          top: 40px;
          right: -20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 240px;
          color: rgba(255,255,255,0.02);
          letter-spacing: -0.02em;
          user-select: none;
          pointer-events: none;
        }
        .validation__header {
          max-width: 1200px;
          margin: 0 auto 80px;
        }
        .validation__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 120px);
          color: var(--white);
          line-height: 0.9;
        }
        .validation__title span { color: var(--red); }
        .validation__sub {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          margin-top: 20px;
          max-width: 500px;
        }
        .validation__grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        .win-card {
          background: var(--black);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: background 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease;
          transform-style: preserve-3d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
        }
        .win-card:hover {
          background: #0a0a0a;
          transform: translateY(-20px) rotateX(2deg) rotateY(-0.5deg) scale(1.02);
          box-shadow: 0 50px 120px rgba(0,0,0,0.3), 0 0 80px rgba(232,0,13,0.1);
          border-color: rgba(232,0,13,0.3);
        }
        .win-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .win-card:hover::before { transform: scaleX(1); }
        .win-card__city {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 12px;
        }
        .win-card__event {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: var(--white);
          letter-spacing: 0.02em;
          margin-bottom: 8px;
        }
        .win-card__result {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          color: var(--red);
          line-height: 1;
          margin-bottom: 4px;
        }
        .win-card__prize {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          margin-bottom: 16px;
        }
        .win-card__detail {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.3);
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 16px;
        }
        .validation__total {
          max-width: 1200px;
          margin: 64px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        .validation__total-item {
          background: var(--black);
          padding: 32px;
          text-align: center;
        }
        .validation__total-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px;
          color: var(--white);
          line-height: 1;
        }
        .validation__total-num span { color: var(--red); }
        .validation__total-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-top: 8px;
        }
        @media (max-width: 900px) {
          .validation__grid { grid-template-columns: 1fr 1fr; }
          .validation__total { grid-template-columns: 1fr 1fr; }
          .validation { padding: 80px 24px; }
        }
        @media (max-width: 600px) {
          .validation__grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="validation">
        <div className="validation__header">
          <p className="section-label">Proven. Validated. Recognized.</p>
          <h2 className="validation__title">
            Our<br /><span>Wins</span>
          </h2>
          <p className="validation__sub">
            Competing against seasoned startups, pitching to ministers and generals — and winning.
          </p>
        </div>

        <div className="validation__grid">
          {wins.map((w, i) => (
            <div className="win-card" key={i}>
              <div className="win-card__city">{w.city}</div>
              <div className="win-card__event">{w.event}</div>
              <div className="win-card__result">{w.result}</div>
              <div className="win-card__prize">{w.prize}</div>
              <p className="win-card__detail">{w.detail}</p>
            </div>
          ))}
        </div>

        {/* <div className="validation__total">
          <div className="validation__total-item">
            <div className="validation__total-num">₹1.5<span>L+</span></div>
            <div className="validation__total-label">Total Prize Money</div>
          </div>
          <div className="validation__total-item">
            <div className="validation__total-num">7<span>+</span></div>
            <div className="validation__total-label">Competitions Won</div>
          </div>
          <div className="validation__total-item">
            <div className="validation__total-num">25<span>K+</span></div>
            <div className="validation__total-label">Competed Against</div>
          </div>
          <div className="validation__total-item">
            <div className="validation__total-num">3<span>+</span></div>
            <div className="validation__total-label">States Reached</div>
          </div>
        </div> */}
      </section>
    </>
  )
}