const team = [
  {
    name: 'Prarthana V Bhat',
    role: 'CEO',
    desc: 'Owns product vision and strategic direction, grounded in first-hand athlete experience. Leads partnerships, market alignment, and long-term roadmap with a strong focus on defence and high-performance training ecosystems.',
    img: '/found-1.jpg',
    social: '@prarthana',
  },
  {
    name: 'Bonthala Lalith Aditya',
    role: 'CFO',
    desc: 'Heads finances and end-to-end hardware architecture, including sensors, haptics, and device integration. Ensures system reliability, ruggedness, and readiness for field and defence-grade deployment.',
    img: '/found-2.jpg',
    social: '@lalith',
  },
  {
    name: 'Pranav P Krishna',
    role: 'CTO',
    desc: 'Heads the design and development of AI-driven accuracy, motion, and error-detection models. Translates raw sensor data into clear, actionable insights for real-time training feedback.',
    img: '/found-3.jpg',
    social: '@pranav',
  },
]

export default function TeamSection() {
  return (
    <>
      <style>{`
        .team {
          background: var(--black);
          padding: 140px 48px;
          overflow: hidden;
          position: relative;
        }
        .team::before {
          content: 'TEAM';
          position: absolute;
          bottom: -20px;
          left: -20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 260px;
          color: rgba(255,255,255,0.02);
          letter-spacing: -0.02em;
          user-select: none;
          pointer-events: none;
        }
        .team__header {
          max-width: 1200px;
          margin: 0 auto 80px;
        }
        .team__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 120px);
          color: var(--white);
          line-height: 0.9;
        }
        .team__title span { color: var(--red); }
        .team__grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .team-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.4s, box-shadow 0.6s ease;
          transform-style: preserve-3d;
          background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%);
        }
        .team-card:hover {
          border-color: rgba(232,0,13,0.9);
          transform: translateY(-28px) rotateX(3deg) rotateY(-2deg) scale(1.03);
          box-shadow: 0 60px 140px rgba(0,0,0,0.35), 0 0 100px rgba(232,0,13,0.15);
        }
        .team-card__img-wrap {
          position: relative;
          height: 320px;
          overflow: hidden;
          background: #111;
        }
        .team-card__img-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(232,0,13,0.12), transparent 18%);
          opacity: 0.6;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .team-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          filter: grayscale(30%) brightness(0.9);
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), filter 0.5s ease;
        }
        .team-card:hover .team-card__img {
          transform: scale(1.08) rotate(0.5deg);
          filter: grayscale(0%) brightness(1.1) contrast(1.05);
        }
        .team-card__crosshair {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .team-card:hover .team-card__crosshair { opacity: 1; }
        .team-card__crosshair::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(232,0,13,0.4);
        }
        .team-card__crosshair::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(232,0,13,0.4);
        }
        .team-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
        }
        .team-card__role-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--red);
          color: var(--white);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 2px;
        }
        .team-card__body {
          padding: 24px;
          background: var(--black);
        }
        .team-card__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          color: var(--white);
          letter-spacing: 0.03em;
          margin-bottom: 12px;
        }
        .team-card__desc {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.4);
        }
        @media (max-width: 900px) {
          .team__grid { grid-template-columns: 1fr; max-width: 480px; }
          .team { padding: 80px 24px; }
        }
      `}</style>

      <section className="team">
        <div className="team__header">
          <p className="section-label">The Founders</p>
          <h2 className="team__title">
            Meet The<br /><span>Team</span>
          </h2>
        </div>

        <div className="team__grid">
          {team.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-card__img-wrap">
                <img src={m.img} alt={m.name} className="team-card__img" />
                <div className="team-card__crosshair" />
                <div className="team-card__overlay" />
                <div className="team-card__role-badge">{m.role}</div>
              </div>
              <div className="team-card__body">
                <div className="team-card__name">{m.name}</div>
                <p className="team-card__desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}