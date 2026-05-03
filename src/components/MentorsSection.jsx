const mentors = [
  {
    name: 'Admiral R. Hari Kumar',
    title: 'PVSM, AVSM, VSM',
    role: 'Former Chief of Naval Staff, Indian Navy (25th CNS)',
    desc: '41-year decorated naval career. Commanded INS Viraat, led the Western Naval Command. Currently guiding SNYPTR and facilitating connections with the Indian Naval establishment.',
    tag: 'Strategic Advisor',
    img: null,
  },
  {
    name: 'Maj. Gen. Vinod Kumar Nambiar',
    title: 'YSM, SM',
    role: 'Inspector General, Assam Rifles (East)',
    desc: 'Kargil veteran. Para SF commander. Under his leadership, SNYPTR\'s project was officially listed under the Assam Rifles — giving us direct access to one of India\'s most elite paramilitary training ecosystems.',
    tag: 'Defence Advisor',
    img: null,
  },
  {
    name: 'Prof. Udaya Raghunath Birje',
    title: 'Harvard Business School Alumni',
    role: 'Expert Panel Member, NSRCEL — IIM Bangalore',
    desc: 'Seasoned entrepreneur and startup ecosystem builder. Mentoring SNYPTR and actively facilitating our entry into the PRTC (Police & Paramilitary Training Centre) for product trials.',
    tag: 'Business Mentor',
    img: null,
  },
  {
    name: 'Cdr Jasleen Kaur (Retd.)',
    title: 'Indian Navy',
    role: 'Director – Logistics, SCM & Procurement | 17 Years Naval Service',
    desc: 'Managed a ₹3,000 Cr defence procurement budget. Connecting SNYPTR to INS Dronacharya and INS Chilka to pilot our system where India\'s next generation of naval shooters train.',
    tag: 'Procurement Advisor',
    img: null,
  },
  {
    name: 'Wadhwani Foundation',
    title: 'Global Nonprofit',
    role: 'AI & Entrepreneurship for Social Good',
    desc: 'One of India\'s most respected startup support ecosystems. SNYPTR secured Wadhwani Foundation membership through our 1st place finish at the Startup Summit Finals.',
    tag: 'Institutional Partner',
    img: null,
  },
]

export default function MentorsSection() {
  return (
    <>
      <style>{`
        .mentors {
          background: var(--white);
          padding: 140px 48px;
          overflow: hidden;
        }
        .mentors__header {
          max-width: 1200px;
          margin: 0 auto 80px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
        }
        .mentors__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 110px);
          line-height: 0.9;
          color: var(--black);
        }
        .mentors__title span { color: var(--red); }
        .mentors__intro {
          max-width: 360px;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--grey);
        }
        .mentors__list {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: var(--light-grey);
        }
        .mentor-row {
          background: var(--white);
          display: grid;
          grid-template-columns: 280px 1fr 160px;
          align-items: center;
          gap: 40px;
          padding: 36px 40px;
          transition: background 0.3s;
          position: relative;
          overflow: hidden;
        }
        .mentor-row::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--red);
          transform: scaleY(0);
          transition: transform 0.4s ease;
        }
        .mentor-row:hover::after { transform: scaleY(1); }
        .mentor-row:hover { background: #fafafa; }
        .mentor-row__left {}
        .mentor-row__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: var(--black);
          letter-spacing: 0.02em;
          margin-bottom: 4px;
        }
        .mentor-row__title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 4px;
        }
        .mentor-row__role {
          font-size: 12px;
          color: var(--grey);
          line-height: 1.5;
        }
        .mentor-row__desc {
          font-size: 14px;
          line-height: 1.7;
          color: #555;
        }
        .mentor-row__tag {
          text-align: right;
        }
        .mentor-row__tag span {
          display: inline-block;
          border: 1px solid var(--light-grey);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--grey);
          transition: border-color 0.3s, color 0.3s;
        }
        .mentor-row:hover .mentor-row__tag span {
          border-color: var(--red);
          color: var(--red);
        }
        @media (max-width: 900px) {
          .mentor-row {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 28px 24px;
          }
          .mentor-row__tag { text-align: left; }
          .mentors { padding: 80px 24px; }
        }
      `}</style>

      <section className="mentors">
        <div className="mentors__header">
          <div>
            <p className="section-label">Guided By The Best</p>
            <h2 className="mentors__title">
              Our<br /><span>Mentors</span>
            </h2>
          </div>
          <p className="mentors__intro">
            Generals, admirals, IIM professors, and global nonprofits — backing SNYPTR at every step.
          </p>
        </div>

        <div className="mentors__list">
          {mentors.map((m, i) => (
            <div className="mentor-row" key={i}>
              <div className="mentor-row__left">
                <div className="mentor-row__title">{m.title}</div>
                <div className="mentor-row__name">{m.name}</div>
                <div className="mentor-row__role">{m.role}</div>
              </div>
              <p className="mentor-row__desc">{m.desc}</p>
              <div className="mentor-row__tag">
                <span>{m.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}