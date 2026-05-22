export default function CustomersSection() {
  const customers = [
    {
      num: '01',
      title: 'Olympic & ISSF Shooters',
      desc: 'Enhancing precision and muscle memory for elite athletes competing at the highest global levels.',
      icon: '🎯'
    },
    {
      num: '02',
      title: 'Police Training Centers',
      desc: 'Equipping law enforcement with realistic, haptic-driven scenarios to improve reaction times and tactical accuracy.',
      icon: '🛡️'
    },
    {
      num: '03',
      title: 'National Defence Academy',
      desc: 'Providing rigorous, analytics-backed training tools to forge the next generation of elite defense forces.',
      icon: '🦅'
    },
    {
      num: '04',
      title: 'Para-Athletes',
      desc: 'Offering accessible, highly adaptable sensor feedback systems tailored for specialized and adaptive training needs.',
      icon: '♿'
    },
  ]

  return (
    <>
      <style>{`
        .customers {
          background: var(--black);
          padding: 0 48px 140px;
          overflow: hidden;
        }
        .customers__top {
          max-width: 1200px;
          margin: 0 auto 80px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
        }
        .customers__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 120px);
          color: var(--white);
          line-height: 0.9;
        }
        .customers__title span { color: var(--red); }
        .customers__intro {
          max-width: 360px;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
        }
        .customers__grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .customers__card {
          background: var(--black);
          padding: 40px 32px;
          transition: background 0.4s, transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }
        .customers__card:hover {
          transform: translateY(-12px) rotateX(1deg);
          box-shadow: 0 26px 72px rgba(0,0,0,0.25);
        }
        .customers__card::after {
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
        .customers__card:hover::after { transform: scaleX(1); }
        .customers__card:hover { background: rgba(232,0,13,0.05); }
        .customers__card-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          color: rgba(255,255,255,0.08);
          line-height: 1;
          margin-bottom: 24px;
        }
        .customers__card-icon {
          font-size: 28px;
          margin-bottom: 16px;
          display: block;
          color: var(--red);
        }
        .customers__card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: var(--white);
          letter-spacing: 0.03em;
          margin-bottom: 12px;
        }
        .customers__card-desc {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
        }
        @media (max-width: 900px) {
          .customers__grid { grid-template-columns: 1fr 1fr; }
          .customers { padding: 0 24px 80px; }
        }
        @media (max-width: 600px) {
          .customers__grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="customers">
        <div className="customers__top">
          <h2 className="customers__title">
            Our<br /><span>Customers</span>
          </h2>
          <p className="customers__intro">
            Trusted by the best. From elite athletes aiming for gold to armed forces preparing for mission-critical scenarios.
          </p>
        </div>

        <div className="customers__grid">
          {customers.map(c => (
            <div className="customers__card" key={c.num}>
              <div className="customers__card-num">{c.num}</div>
              <span className="customers__card-icon">{c.icon}</span>
              <div className="customers__card-title">{c.title}</div>
              <p className="customers__card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
