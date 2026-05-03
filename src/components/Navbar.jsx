import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9000;
          padding: 24px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
        }
        .navbar--scrolled {
          padding: 16px 48px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(232,0,13,0.1);
        }
        .navbar__logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.1em;
          color: var(--white);
          transition: color 0.4s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .navbar--scrolled .navbar__logo {
          color: var(--black);
        }
        .navbar__logo-dot {
          width: 8px;
          height: 8px;
          background: var(--red);
          border-radius: 50%;
          display: inline-block;
        }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
        }
        .navbar__links a {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          transition: color 0.4s cubic-bezier(0.23, 1, 0.32, 1), transform 0.3s ease;
          position: relative;
          transform: translateY(0);
        }
        .navbar--scrolled .navbar__links a {
          color: var(--black);
        }
        .navbar__links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--red), #ff4757);
          transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: 1px;
        }
        .navbar__links a:hover::after,
        .navbar__links a.active::after {
          width: 100%;
        }
        .navbar__links a:hover {
          color: var(--red);
          transform: translateY(-3px);
          text-shadow: 0 4px 12px rgba(232, 0, 13, 0.3);
        }
        .navbar--scrolled .navbar__links a:hover {
          color: var(--red);
        }
        .navbar__cta {
          background: linear-gradient(135deg, var(--red), #ff4757);
          color: var(--white) !important;
          padding: 12px 28px;
          border-radius: 4px;
          font-size: 12px !important;
          font-weight: 600 !important;
          letter-spacing: 0.15em !important;
          transition: background 0.4s cubic-bezier(0.23, 1, 0.32, 1), transform 0.3s ease, box-shadow 0.4s ease !important;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 4px 20px rgba(232, 0, 13, 0.3);
        }
        .navbar__cta:hover {
          background: linear-gradient(135deg, #c0000b, #e63946) !important;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 30px rgba(232, 0, 13, 0.5);
          color: var(--white) !important;
        }
        .navbar__cta::after {
          display: none !important;
        }
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 4px;
        }
        .navbar__hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--white);
          transition: all 0.3s;
        }
        .navbar--scrolled .navbar__hamburger span {
          background: var(--black);
        }
        .navbar__hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .navbar__hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .navbar__hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }
        .navbar__mobile {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--black);
          z-index: 8999;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        .navbar__mobile.open {
          display: flex;
        }
        .navbar__mobile a {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px;
          color: var(--white);
          letter-spacing: 0.05em;
          transition: color 0.3s;
        }
        .navbar__mobile a:hover {
          color: var(--red);
        }
        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .navbar__hamburger { display: flex; }
          .navbar { padding: 20px 24px; }
          .navbar--scrolled { padding: 14px 24px; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <Link to="/" className="navbar__logo">
          SNYPTR
          <span className="navbar__logo-dot" />
        </Link>

        <ul className="navbar__links">
          {links.map(({ to, label }) => (
            <li key={to}>
              {label === 'Shop' ? (
                <Link
                  to={to}
                  className={`navbar__cta ${location.pathname === to ? 'active' : ''}`}
                >
                  {label}
                </Link>
              ) : (
                <Link
                  to={to}
                  className={location.pathname === to ? 'active' : ''}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {links.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </div>
    </>
  )
}