export default function SolutionSection() {
  const features = [
    {
      num: '01',
      title: 'Real-Time Haptic Feedback',
      desc: 'Vibration patterns on your wrist correct aim deviation the instant it happens — no coach needed.',
      icon: '◎'
    },
    {
      num: '02',
      title: 'Muscle Memory Reinforcement',
      desc: 'Repeated haptic cues train your body to self-correct, building precision at a neurological level.',
      icon: '⚡'
    },
    {
      num: '03',
      title: 'Sensor-Integrated Target',
      desc: 'Detachable smart target registers and localizes every shot with millimetre accuracy.',
      icon: '⊕'
    },
    {
      num: '04',
      title: 'AI-Powered Shot Analysis',
      desc: 'Cloud dashboard turns raw sensor data into actionable insights — patterns, errors, progress.',
      icon: '◈'
    },
  ]

  const targets = [
    { label: 'Olympic & ISSF Shooters' },
    { label: 'Police Training Centers' },
    { label: 'National Defence Academy' },
    { label: 'Para-Athletes' },
  ]

  return (
    <>
      <style>{`
        .solution {
          background: var(--black);
          padding: 140px 48px;
          overflow: hidden;
        }
        .solution__top {
          max-width: 1200px;
          margin: 0 auto 80px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
        }
        .solution__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 120px);
          color: var(--white);
          line-height: 0.9;
        }
        .solution__title span { color: var(--red); }
        .solution__intro {
          max-width: 360px;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
        }
        .solution__grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .solution__card {
          background: var(--black);
          padding: 40px 32px;
          transition: background 0.4s, transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }
        .solution__card:hover {
          transform: translateY(-12px) rotateX(1deg);
          box-shadow: 0 26px 72px rgba(0,0,0,0.25);
        }
        .solution__card::after {
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
        .solution__card:hover::after { transform: scaleX(1); }
        .solution__card:hover { background: rgba(232,0,13,0.05); }
        .solution__card-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          color: rgba(255,255,255,0.08);
          line-height: 1;
          margin-bottom: 24px;
        }
        .solution__card-icon {
          font-size: 28px;
          margin-bottom: 16px;
          display: block;
          color: var(--red);
        }
        .solution__card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: var(--white);
          letter-spacing: 0.03em;
          margin-bottom: 12px;
        }
        .solution__card-desc {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
        }
        .solution__targets {
          max-width: 1200px;
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .solution__target {
          border: 1px solid rgba(255,255,255,0.1);
          padding: 20px 24px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .solution__target:hover {
          border-color: var(--red);
          transform: translateY(-2px);
        }
        .solution__target-icon { font-size: 20px; }
        .solution__target-label {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.02em;
        }
        @media (max-width: 900px) {
          .solution__grid { grid-template-columns: 1fr 1fr; }
          .solution__targets { grid-template-columns: 1fr 1fr; }
          .solution { padding: 80px 24px; }
        }
        @media (max-width: 600px) {
          .solution__grid { grid-template-columns: 1fr; }
          .solution__targets { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section className="solution">
        <div className="solution__top">
          <h2 className="solution__title">
            The<br /><span>Solution</span>
          </h2>
          <p className="solution__intro">
            A smart wristband paired with a laser-mounted module and sensor-enhanced target.
            AI-powered. India-built. First of its kind.
          </p>
        </div>

        <div className="solution__grid">
          {features.map(f => (
            <div className="solution__card" key={f.num}>
              <div className="solution__card-num">{f.num}</div>
              <span className="solution__card-icon">{f.icon}</span>
              <div className="solution__card-title">{f.title}</div>
              <p className="solution__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="solution__targets">
          {targets.map(t => (
            <div className="solution__target" key={t.label}>
              <span className="solution__target-icon">{t.icon}</span>
              <span className="solution__target-label">{t.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}