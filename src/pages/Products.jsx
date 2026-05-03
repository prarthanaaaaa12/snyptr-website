import { useState } from 'react'
import Footer from '../components/Footer'

const products = [
  {
    id: 1,
    name: 'SNYPTR Wristband v1',
    tag: 'Hardware',
    price: '₹8,299',
    desc: 'Robust wristband for shot timing & biomechanical capture with real-time haptic feedback. Designed for field and range use.',
    specs: ['ESP32 MCU', 'Haptic vibration motor', 'Bluetooth 5.0', 'Rechargeable battery', 'Water resistant'],
    img: '/prod1.png',
    available: true,
  },
  {
    id: 2,
    name: 'Laser Module',
    tag: 'Hardware',
    price: '₹6,399',
    desc: 'Compact laser module for dry-fire training. Attaches to any standard pistol barrel. Works seamlessly with the Sensor Target Module.',
    specs: ['Class IIIA laser', 'Universal mount', 'Trigger-activated', 'Compact & lightweight', 'No live ammo needed'],
    img: '/prod2.png',
    available: true,
  },
  {
    id: 3,
    name: 'Sensor Target Module',
    tag: 'Hardware',
    price: '₹4,199',
    desc: 'Impact detection and shot localization sensor. Detachable. Works with any standard target face. Millimetre-accurate.',
    specs: ['Photodiode array', 'Shot localization', 'Detachable design', 'WiFi data sync', 'Durable enclosure'],
    img: '/prod3.png',
    available: true,
  },
  {
    id: 4,
    name: 'Post-shot Analysis',
    tag: 'Software',
    price: '₹999/mo',
    desc: 'Cloud subscription for shot analytics, session reports, error pattern detection and performance trends. Works across all SNYPTR hardware.',
    specs: ['Shot-by-shot breakdown', 'Error pattern detection', 'Session history', 'Coach dashboard', 'Export reports'],
    img: '/prod4.png',
    available: true,
  },
  {
    id: 5,
    name: 'AR/VR Visualization Suite',
    tag: 'Software',
    price: '₹2,499/mo',
    desc: 'Immersive visualization-based training for next-level mental rehearsal. Simulate range environments without live fire.',
    specs: ['VR range simulation', 'Mental rehearsal mode', 'Performance overlays', 'Multi-device support', 'Coach integration'],
    img: '/prod5.png',
    available: true,
  },
]

export default function Products() {
  const [fullscreenImg, setFullscreenImg] = useState(null)

  return (
    <>
      <style>{`
        .products-page-hero {
          background: var(--black);
          padding: 160px 48px 100px;
          position: relative;
          overflow: hidden;
        }
        .products-page-hero::before {
          content: 'GEAR';
          position: absolute;
          right: -40px;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 300px;
          color: rgba(255,255,255,0.02);
          pointer-events: none;
          user-select: none;
        }
        .products-page-hero__inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .products-page-hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 12vw, 160px);
          color: var(--white);
          line-height: 0.9;
        }
        .products-page-hero__title span { color: var(--red); }
        .products-page-hero__sub {
          max-width: 560px;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
          margin-top: 32px;
        }
        .products-page-list {
          background: var(--white);
          padding: 100px 48px;
        }
        .products-page-list__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: var(--light-grey);
        }
        .product-detail-row {
          background: var(--white);
          display: grid;
          grid-template-columns: 340px 1fr;
          overflow: hidden;
          transition: box-shadow 0.4s;
        }
        .product-detail-row:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
          z-index: 1;
          position: relative;
        }
        .product-detail-row__img {
          height: 320px;
          object-fit: cover;
          width: 100%;
          filter: grayscale(20%);
          transition: filter 0.4s, transform 0.6s;
        }
        .product-detail-row:hover .product-detail-row__img {
          filter: grayscale(0%);
          transform: scale(1.03);
        }
        .product-detail-row__img-wrap {
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        .product-detail-row__body {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .product-detail-row__tag {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 12px;
        }
        .product-detail-row__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 40px;
          color: var(--black);
          letter-spacing: 0.02em;
          margin-bottom: 16px;
        }
        .product-detail-row__desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--grey);
          margin-bottom: 28px;
        }
        .product-detail-row__specs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }
        .product-detail-row__spec {
          background: var(--off-white);
          border: 1px solid var(--light-grey);
          padding: 6px 12px;
          border-radius: 2px;
          font-size: 12px;
          color: var(--grey);
          letter-spacing: 0.05em;
        }
        .product-detail-row__footer {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .product-detail-row__price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 40px;
          color: var(--black);
        }
        .fullscreen-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .fullscreen-modal img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
        }
        .fullscreen-modal__close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.2);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fullscreen-modal__close:hover {
          background: rgba(255,255,255,0.3);
        }
        @media (max-width: 900px) {
          .product-detail-row { grid-template-columns: 1fr; }
          .product-detail-row__img { height: 240px; }
          .product-detail-row__body { padding: 28px 24px; }
          .products-page-hero { padding: 140px 24px 80px; }
          .products-page-list { padding: 60px 24px; }
        }
      `}</style>

      <section className="products-page-hero">
        <div className="products-page-hero__inner">
          <p className="section-label">The Arsenal</p>
          <h1 className="products-page-hero__title">
            Our<br /><span>Products</span>
          </h1>
          <p className="products-page-hero__sub">
            Hardware, software, and AR/VR tools engineered for precision.
            Built modular — use one or the whole system.
          </p>
        </div>
      </section>

      <section className="products-page-list">
        <div className="products-page-list__inner">
          {products.map(p => (
            <div className="product-detail-row" key={p.id}>
              <div className="product-detail-row__img-wrap" onClick={() => setFullscreenImg(p.img)}>
                <img src={p.img} alt={p.name} className="product-detail-row__img" />
              </div>
              <div className="product-detail-row__body">
                <div>
                  <div className="product-detail-row__tag">{p.tag}</div>
                  <div className="product-detail-row__name">{p.name}</div>
                  <p className="product-detail-row__desc">{p.desc}</p>
                  <div className="product-detail-row__specs">
                    {p.specs.map(s => (
                      <span className="product-detail-row__spec" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="product-detail-row__footer">
                  <span className="product-detail-row__price">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {fullscreenImg && (
        <div className="fullscreen-modal" onClick={() => setFullscreenImg(null)}>
          <button className="fullscreen-modal__close" onClick={() => setFullscreenImg(null)}>×</button>
          <img src={fullscreenImg} alt="Product view" />
        </div>
      )}

      <Footer />
    </>
  )
}