import { useState } from 'react'
import Footer from '../components/Footer'

const products = [
  {
    id: 1,
    name: 'SNYPTR Wristband v1',
    tag: 'Hardware',
    price: 8299,
    desc: 'Real-time haptic feedback wristband.',
    img: 'https://snyptr-a12af.web.app/images/wristband.jpg',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Laser Module',
    tag: 'Hardware',
    price: 6399,
    desc: 'Compact laser module for dry-fire training.',
    img: 'https://snyptr-a12af.web.app/images/laser.jpg',
    badge: null,
  },
  {
    id: 3,
    name: 'Sensor Target Module',
    tag: 'Hardware',
    price: 4199,
    desc: 'Shot localization sensor target.',
    img: 'https://snyptr-a12af.web.app/images/sensor.jpg',
    badge: null,
  },
  {
    id: 4,
    name: 'Post-shot Analysis',
    tag: 'Software',
    price: 999,
    desc: 'Monthly cloud analytics subscription.',
    img: 'https://snyptr-a12af.web.app/images/post_shot.jpg',
    badge: 'Popular',
    monthly: true,
  },
]

const bundles = [
  {
    name: 'Starter Kit',
    includes: ['Laser Module', 'Sensor Target Module'],
    price: '₹9,999',
    saving: 'Save ₹599',
  },
  {
    name: 'Pro Kit',
    includes: ['Wristband v1', 'Laser Module', 'Sensor Target Module'],
    price: '₹17,499',
    saving: 'Save ₹1,398',
  },
  {
    name: 'Full System',
    includes: ['Wristband v1', 'Laser Module', 'Sensor Target Module', '3 Months Analysis'],
    price: '₹20,494',
    saving: 'Save ₹2,395',
  },
]

export default function Shop() {
  const [cart, setCart] = useState([])
  const [added, setAdded] = useState(null)

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <>
      <style>{`
        .shop-hero {
          background: var(--black);
          padding: 160px 48px 100px;
          position: relative;
          overflow: hidden;
        }
        .shop-hero::before {
          content: 'SHOP';
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
        .shop-hero__inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 32px;
        }
        .shop-hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 12vw, 160px);
          color: var(--white);
          line-height: 0.9;
        }
        .shop-hero__title span { color: var(--red); }
        .shop-cart-summary {
          border: 1px solid rgba(255,255,255,0.1);
          padding: 24px 32px;
          border-radius: 4px;
          min-width: 220px;
        }
        .shop-cart-summary__label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 8px;
        }
        .shop-cart-summary__total {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 40px;
          color: var(--white);
          line-height: 1;
        }
        .shop-cart-summary__total span { color: var(--red); }
        .shop-cart-summary__items {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          margin-top: 4px;
        }
        .shop-main {
          background: var(--white);
          padding: 100px 48px;
        }
        .shop-main__inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .shop-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          color: var(--black);
          margin-bottom: 40px;
        }
        .shop-section-title span { color: var(--red); }
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 100px;
        }
        .shop-card {
          border: 1px solid var(--light-grey);
          border-radius: 4px;
          overflow: hidden;
          transition: transform 0.4s, box-shadow 0.4s, border-color 0.4s;
          background: var(--white);
        }
        .shop-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          border-color: var(--red);
        }
        .shop-card__img-wrap {
          height: 180px;
          overflow: hidden;
          background: var(--off-white);
          position: relative;
        }
        .shop-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .shop-card:hover .shop-card__img { transform: scale(1.06); }
        .shop-card__badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--red);
          color: var(--white);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 2px;
        }
        .shop-card__body { padding: 20px; }
        .shop-card__tag {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 6px;
        }
        .shop-card__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          color: var(--black);
          margin-bottom: 6px;
        }
        .shop-card__desc {
          font-size: 12px;
          color: var(--grey);
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .shop-card__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .shop-card__price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: var(--black);
        }
        .shop-card__btn {
          background: var(--black);
          color: var(--white);
          border: none;
          padding: 8px 16px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 2px;
          transition: background 0.3s;
        }
        .shop-card__btn:hover { background: var(--red); }
        .shop-card__btn--added { background: #22c55e !important; }
        .shop-bundles {
          margin-top: 20px;
        }
        .bundles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .bundle-card {
          border: 1px solid var(--light-grey);
          border-radius: 4px;
          padding: 36px 32px;
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .bundle-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--red);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .bundle-card:hover::before { transform: scaleX(1); }
        .bundle-card:hover {
          border-color: var(--red);
          transform: translateY(-4px);
        }
        .bundle-card__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          color: var(--black);
          margin-bottom: 16px;
        }
        .bundle-card__includes {
          list-style: none;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .bundle-card__includes li {
          font-size: 13px;
          color: var(--grey);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bundle-card__includes li::before {
          content: '✓';
          color: var(--red);
          font-weight: 700;
          font-size: 12px;
        }
        .bundle-card__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bundle-card__price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          color: var(--black);
        }
        .bundle-card__saving {
          font-size: 12px;
          font-weight: 600;
          color: #22c55e;
          margin-top: 2px;
        }
        .bundle-card__btn {
          background: var(--red);
          color: var(--white);
          border: none;
          padding: 12px 24px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border-radius: 2px;
          transition: background 0.3s, transform 0.2s;
        }
        .bundle-card__btn:hover {
          background: #c0000b;
          transform: translateY(-2px);
        }
        .shop-inquiry {
          background: var(--black);
          padding: 80px 48px;
          text-align: center;
        }
        .shop-inquiry__inner { max-width: 600px; margin: 0 auto; }
        .shop-inquiry__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px;
          color: var(--white);
          margin-bottom: 16px;
        }
        .shop-inquiry__title span { color: var(--red); }
        .shop-inquiry__sub {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          margin-bottom: 32px;
          line-height: 1.7;
        }
        .shop-inquiry__btn {
          display: inline-block;
          background: var(--red);
          color: var(--white);
          padding: 16px 48px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border-radius: 2px;
          transition: background 0.3s, transform 0.2s;
        }
        .shop-inquiry__btn:hover {
          background: #c0000b;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .shop-grid { grid-template-columns: 1fr 1fr; }
          .bundles-grid { grid-template-columns: 1fr; }
          .shop-hero { padding: 140px 24px 80px; }
          .shop-main { padding: 60px 24px; }
          .shop-inquiry { padding: 60px 24px; }
        }
        @media (max-width: 500px) {
          .shop-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="shop-hero">
        <div className="shop-hero__inner">
          <div>
            <p className="section-label">Get Equipped</p>
            <h1 className="shop-hero__title">
              Shop<br /><span>SNYPTR</span>
            </h1>
          </div>
          <div className="shop-cart-summary">
            <div className="shop-cart-summary__label">Cart Total</div>
            <div className="shop-cart-summary__total">
              ₹<span>{total.toLocaleString('en-IN')}</span>
            </div>
            <div className="shop-cart-summary__items">
              {cart.reduce((s, i) => s + i.qty, 0)} item(s)
            </div>
          </div>
        </div>
      </section>

      <section className="shop-main">
        <div className="shop-main__inner">
          <h2 className="shop-section-title">
            All <span>Products</span>
          </h2>
          <div className="shop-grid">
            {products.map(p => (
              <div className="shop-card" key={p.id}>
                <div className="shop-card__img-wrap">
                  <img src={p.img} alt={p.name} className="shop-card__img" />
                  {p.badge && <span className="shop-card__badge">{p.badge}</span>}
                </div>
                <div className="shop-card__body">
                  <div className="shop-card__tag">{p.tag}</div>
                  <div className="shop-card__name">{p.name}</div>
                  <p className="shop-card__desc">{p.desc}</p>
                  <div className="shop-card__footer">
                    <span className="shop-card__price">
                      ₹{p.price.toLocaleString('en-IN')}{p.monthly ? '/mo' : ''}
                    </span>
                    <button
                      className={`shop-card__btn ${added === p.id ? 'shop-card__btn--added' : ''}`}
                      onClick={() => addToCart(p)}
                    >
                      {added === p.id ? '✓ Added' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="shop-bundles">
            <h2 className="shop-section-title">
              Bundle <span>Deals</span>
            </h2>
            <div className="bundles-grid">
              {bundles.map(b => (
                <div className="bundle-card" key={b.name}>
                  <div className="bundle-card__name">{b.name}</div>
                  <ul className="bundle-card__includes">
                    {b.includes.map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <div className="bundle-card__footer">
                    <div>
                      <div className="bundle-card__price">{b.price}</div>
                      <div className="bundle-card__saving">{b.saving}</div>
                    </div>
                    <button className="bundle-card__btn">Buy Bundle</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shop-inquiry">
        <div className="shop-inquiry__inner">
          <h2 className="shop-inquiry__title">
            Bulk & <span>Institutional</span> Orders
          </h2>
          <p className="shop-inquiry__sub">
            Police forces, defence academies, shooting clubs — we offer custom pricing,
            training support, and deployment assistance for institutional orders.
          </p>
          <a href="/contact" className="shop-inquiry__btn">
            Request a Quote →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}