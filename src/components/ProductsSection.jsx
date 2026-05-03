import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'SNYPTR Wristband v1',
    tag: 'hardware',
    price: '₹8,299',
    desc: 'Robust wristband for shot timing & biomechanical capture with real-time haptic feedback.',
    img: '/prod1.png',
  },
  {
    id: 2,
    name: 'Laser Module',
    tag: 'hardware',
    price: '₹6,399',
    desc: 'Compact laser module for ranges and dry-fire training. Attaches to any standard pistol.',
    img: '/prod2.png',
  },
  {
    id: 3,
    name: 'Sensor Target Module',
    tag: 'hardware',
    price: '₹4,199',
    desc: 'Impact detection and shot localization sensor. Detachable. Works with any target face.',
    img: '/prod3.png',
  },
  {
    id: 4,
    name: 'Post-shot Analysis',
    tag: 'software',
    price: '₹999/mo',
    desc: 'Cloud subscription for shot analytics, session reports, and performance trends.',
    img: '/prod4.png',
  },
  {
    id: 5,
    name: 'AR/VR Visualization Suite',
    tag: 'hardware',
    price: 'coming soon',
    desc: 'Immersive visualization-based training for next-level mental rehearsal.',
    img: '/prod5.png',
  },
]

export default function ProductsSection() {
  const [hovered, setHovered] = useState(null)
  const [visibleIds, setVisibleIds] = useState([])
  const [fullscreenImg, setFullscreenImg] = useState(null)

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card')
    if (!cards.length) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-product-id'))
            setVisibleIds((current) => current.includes(id) ? current : [...current, id])
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.25,
      }
    )

    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .products-sec {
          background: var(--white);
          padding: 140px 48px;
        }
        .products-sec__header {
          max-width: 1200px;
          margin: 0 auto 64px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
        }
        .products-sec__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 100px);
          line-height: 0.9;
          color: var(--black);
        }
        .products-sec__title span { color: var(--red); }
        .products-sec__link {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--red);
          border-bottom: 1px solid var(--red);
          padding-bottom: 2px;
          transition: opacity 0.3s;
        }
        .products-sec__link:hover { opacity: 0.7; }
        .products-sec__grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .product-card {
          position: relative;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease, border-color 0.4s, opacity 0.8s ease;
          background: linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%);
          transform-style: preserve-3d;
          opacity: 0;
          transform: translateY(80px) rotateX(15deg) scale(0.9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.05);
          perspective: 1000px;
        }
        .product-card.product-card--visible {
          opacity: 1;
          transform: translateY(0) rotateX(0deg) scale(1);
        }
        .product-card:hover {
          transform: translateY(-32px) rotateX(2deg) rotateY(-1deg) scale(1.02);
          box-shadow: 0 60px 140px rgba(0,0,0,0.25), inset 0 2px 8px rgba(255,255,255,0.3), 0 0 60px rgba(232,0,13,0.1);
          border-color: rgba(232,0,13,0.9);
        }
        .product-card__img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: var(--off-white);
          cursor: pointer;
        }
        .product-card__img-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 25% 25%, rgba(232,0,13,0.08), transparent 18%);
          opacity: 0.65;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .product-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s ease;
        }
        .product-card:hover .product-card__img {
          transform: scale(1.1) rotate(1deg);
          filter: brightness(1.1) contrast(1.05);
        }
        .product-card__tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0,0,0,0.7);
          color: rgba(255,255,255,0.8);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }
        .product-card__body {
          padding: 24px;
        }
        .product-card__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.03em;
          color: var(--black);
          margin-bottom: 8px;
        }
        .product-card__desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--grey);
          margin-bottom: 20px;
        }
        .product-card__price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
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
          .products-sec__grid { grid-template-columns: 1fr 1fr; }
          .products-sec { padding: 80px 24px; }
        }
        @media (max-width: 600px) {
          .products-sec__grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="products-sec">
        <div className="products-sec__header">
          <div>
            <p className="section-label">What We Build</p>
            <h2 className="products-sec__title">
              Our<br /><span>Products</span>
            </h2>
          </div>
        </div>

        <div className="products-sec__grid">
          {products.map(p => (
            <div
              key={p.id}
              data-product-id={p.id}
              className={`product-card ${visibleIds.includes(p.id) ? 'product-card--visible' : ''}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="product-card__img-wrap" onClick={() => setFullscreenImg(p.img)}>
                <img src={p.img} alt={p.name} className="product-card__img" />
                <span className="product-card__tag">{p.tag}</span>
              </div>
              <div className="product-card__body">
                <div className="product-card__name">{p.name}</div>
                <p className="product-card__desc">{p.desc}</p>
                <span className="product-card__price">{p.price}</span>
              </div>
            </div>
          ))}
        </div>

        {fullscreenImg && (
          <div className="fullscreen-modal" onClick={() => setFullscreenImg(null)}>
            <button className="fullscreen-modal__close" onClick={() => setFullscreenImg(null)}>×</button>
            <img src={fullscreenImg} alt="Product view" />
          </div>
        )}
      </section>
    </>
  )
}