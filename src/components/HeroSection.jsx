import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0)
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const heroImages = ['/hero-landing.jpg', '/hero-2.jpg', '/hero-3.jpg', '/hero-4.jpg']

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.size = Math.random() * 80 + 20
        this.speedY = -(Math.random() * 0.4 + 0.1)
        this.speedX = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.12 + 0.03
        this.life = 0
        this.maxLife = Math.random() * 300 + 200
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life++
        if (this.life > this.maxLife) this.reset()
        const progress = this.life / this.maxLife
        this.currentOpacity = this.opacity * Math.sin(progress * Math.PI)
      }
      draw() {
        const grad = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        )
        grad.addColorStop(0, `rgba(232, 0, 13, ${this.currentOpacity})`)
        grad.addColorStop(1, `rgba(232, 0, 13, 0)`)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }
    }

    for (let i = 0; i < 40; i++) {
      const p = new Particle()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((current) => (current + 1) % heroImages.length)
    }, 1500) // Changed from 4000 to 1500 milliseconds (1.5 seconds)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 700px;
          background: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1400px;
          transform-style: preserve-3d;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: radial-gradient(circle at 20% 25%, rgba(232,0,13,0.14), transparent 18%),
                      radial-gradient(circle at 75% 20%, rgba(255,255,255,0.08), transparent 14%),
                      radial-gradient(circle at 50% 75%, rgba(232,0,13,0.08), transparent 22%);
          opacity: 0.45;
          filter: blur(35px);
          animation: smokeDrift 24s linear infinite;
          mix-blend-mode: screen;
        }
        .hero__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.08);
          transition: opacity 1.2s ease, transform 4s ease, filter 1s ease;
          background-blend-mode: overlay;
          filter: saturate(1.1) contrast(1.05);
          z-index: 0;
        }
        .hero__bg--active {
          opacity: 0.92;
          transform: scale(1.02);
          filter: blur(0.4px) saturate(1.2) contrast(1.15);
        }
        .hero__canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.45;
        }
        .hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: radial-gradient(circle at center, rgba(0,0,0,0.08), rgba(0,0,0,0.26) 45%, rgba(0,0,0,0.72) 100%);
          pointer-events: none;
        }
        .hero__grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image:
            linear-gradient(rgba(232,0,13,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,0,13,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero__content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 0 24px;
          transform: translateZ(48px);
          transition: transform 0.4s ease;
          text-shadow: 0 20px 60px rgba(0,0,0,0.55);
        }
        .hero:hover .hero__content {
          transform: translateZ(56px);
        }
        .hero__label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
          transform: translateY(60px) rotateX(15deg);
        }
        .hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(80px, 14vw, 200px);
          line-height: 0.9;
          color: #ffffff;
          letter-spacing: 0.02em;
          opacity: 0;
          animation: fadeUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards;
          text-shadow: 0 26px 80px rgba(0,0,0,0.75);
          transform: translateY(80px) rotateX(20deg) scale(0.9);
        }
        .hero__title span {
          color: var(--red);
          display: block;
        }
        .hero__sub {
          font-size: clamp(14px, 2vw, 18px);
          font-weight: 400;
          color: rgba(255,255,255,0.92);
          margin-top: 24px;
          letter-spacing: 0.08em;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.8s forwards;
          text-shadow: 0 18px 50px rgba(0,0,0,0.5);
          transform: translateY(40px) rotateX(10deg);
        }
        .hero__actions {
          margin-top: 48px;
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.9s forwards;
        }
        .hero__btn-primary {
          background: var(--red);
          color: var(--white);
          padding: 16px 40px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: none;
          border-radius: 2px;
          transition: background 0.3s, transform 0.2s;
          display: inline-block;
        }
        .hero__btn-primary:hover {
          background: #c0000b;
          transform: translateY(-2px);
        }
        .hero__btn-secondary {
          background: transparent;
          color: var(--white);
          padding: 16px 40px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 2px;
          transition: border-color 0.3s, transform 0.2s;
          display: inline-block;
        }
        .hero__btn-secondary:hover {
          border-color: var(--red);
          color: var(--red);
          transform: translateY(-2px) translateZ(8px);
        }
        .hero__btn-primary:hover,
        .hero__btn-secondary:hover {
          box-shadow: 0 18px 45px rgba(232,0,13,0.24);
        }
        .hero__scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          animation: fadeUp 0.8s ease 1.2s forwards;
        }
        .hero__scroll span {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .hero__scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--red), transparent);
          animation: scrollPulse 2s ease infinite;
        }
        .hero__stats {
          position: absolute;
          bottom: 40px;
          right: 48px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 20px;
          opacity: 0;
          animation: fadeUp 0.8s ease 1.1s forwards;
        }
        .hero__stat {
          text-align: right;
        }
        .hero__stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          color: var(--white);
          line-height: 1;
        }
        .hero__stat-num span {
          color: var(--red);
        }
        .hero__stat-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .hero__badge {
          position: absolute;
          bottom: 40px;
          left: 48px;
          z-index: 2;
          border: 1px solid rgba(232,0,13,0.4);
          padding: 12px 20px;
          border-radius: 2px;
          opacity: 0;
          animation: fadeUp 0.8s ease 1.1s forwards;
        }
        .hero__badge-text {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .hero__badge-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          color: var(--red);
          letter-spacing: 0.05em;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes smokeDrift {
          0% { transform: translate3d(-15px, -15px, 0); }
          50% { transform: translate3d(18px, 20px, 0); }
          100% { transform: translate3d(-15px, -15px, 0); }
        }
        @media (max-width: 768px) {
          .hero__stats, .hero__badge { display: none; }
        }
      `}</style>

      <section className="hero" ref={heroRef}>
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`hero__bg ${bgIndex === index ? 'hero__bg--active' : ''}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="hero__overlay" />
        <canvas className="hero__canvas" ref={canvasRef} />
        <div className="hero__grid" />

        <div className="hero__content">
          <p className="hero__label">India's First Shooting Performance Technology</p>
          <h1 className="hero__title">
            SNYPTR
            <span>Aim. Train. Dominate.</span>
          </h1>
          <p className="hero__sub">
            AI-powered haptic feedback for precision shooting. Built for athletes, police & defence.
          </p>
        </div>

      </section>
    </>
  )
}