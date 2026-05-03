import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <style>{`
        .contact-sec {
          background: var(--white);
          padding: 140px 48px;
        }
        .contact-sec__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }
        .contact-sec__left {}
        .contact-sec__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 7vw, 100px);
          line-height: 0.9;
          color: var(--black);
          margin-bottom: 32px;
        }
        .contact-sec__title span { color: var(--red); }
        .contact-sec__info {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 40px;
        }
        .contact-sec__info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--light-grey);
        }
        .contact-sec__info-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--red);
        }
        .contact-sec__info-value {
          font-size: 16px;
          font-weight: 500;
          color: var(--black);
        }
        .contact-sec__right {}
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .contact-form__field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .contact-form__label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--grey);
        }
        .contact-form__input,
        .contact-form__textarea {
          background: var(--off-white);
          border: 1px solid var(--light-grey);
          border-radius: 2px;
          padding: 14px 16px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          color: var(--black);
          outline: none;
          transition: border-color 0.3s;
          width: 100%;
        }
        .contact-form__input:focus,
        .contact-form__textarea:focus {
          border-color: var(--red);
          background: var(--white);
        }
        .contact-form__textarea {
          resize: none;
          height: 140px;
        }
        .contact-form__submit {
          background: var(--red);
          color: var(--white);
          border: none;
          padding: 18px 48px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border-radius: 2px;
          transition: background 0.3s, transform 0.2s;
          align-self: flex-start;
        }
        .contact-form__submit:hover {
          background: #c0000b;
          transform: translateY(-2px);
        }
        .contact-form__success {
          background: rgba(232,0,13,0.06);
          border: 1px solid var(--red);
          padding: 24px;
          border-radius: 2px;
          text-align: center;
        }
        .contact-form__success h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          color: var(--red);
          margin-bottom: 8px;
        }
        .contact-form__success p {
          font-size: 14px;
          color: var(--grey);
        }
        @media (max-width: 900px) {
          .contact-sec__inner { grid-template-columns: 1fr; gap: 60px; }
          .contact-form__row { grid-template-columns: 1fr; }
          .contact-sec { padding: 80px 24px; }
        }
      `}</style>

      <section className="contact-sec">
        <div className="contact-sec__inner">
          <div className="contact-sec__left">
            <p className="section-label">Get In Touch</p>
            <h2 className="contact-sec__title">
              Let's<br /><span>Talk.</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--grey)', lineHeight: '1.8', marginTop: '16px' }}>
              Whether you're a shooting academy, defence institution, investor, or athlete —
              we want to hear from you.
            </p>
            <div className="contact-sec__info">
              <div className="contact-sec__info-item">
                <span className="contact-sec__info-label">Email</span>
                <span className="contact-sec__info-value">snyptr.llp@gmail.com</span>
              </div>
              <div className="contact-sec__info-item">
                <span className="contact-sec__info-label">Phone</span>
                <span className="contact-sec__info-value">+91 96060 93503</span>
              </div>
              <div className="contact-sec__info-item">
                <span className="contact-sec__info-label">Based In</span>
                <span className="contact-sec__info-value">Bangalore, India</span>
              </div>
            </div>
          </div>

          <div className="contact-sec__right">
            {sent ? (
              <div className="contact-form__success">
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="contact-form">
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label className="contact-form__label">Name</label>
                    <input
                      className="contact-form__input"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Email</label>
                    <input
                      className="contact-form__input"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Organisation</label>
                  <input
                    className="contact-form__input"
                    name="org"
                    value={form.org}
                    onChange={handleChange}
                    placeholder="Academy / Force / Company"
                  />
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Message</label>
                  <textarea
                    className="contact-form__textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button className="contact-form__submit" onClick={handleSubmit}>
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}