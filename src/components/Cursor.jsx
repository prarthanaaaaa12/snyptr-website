import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorDotRef = useRef(null)
  const cursorRingRef = useRef(null)

  useEffect(() => {
    const dot = cursorDotRef.current
    const ring = cursorRingRef.current
    if (!dot || !ring) return

    const updateCursor = (x, y) => {
      const transform = `translate3d(${x}px, ${y}px, 0)`
      dot.style.transform = `${transform} translate(-50%, -50%)`
      ring.style.transform = `${transform} translate(-50%, -50%)`
    }

    const onMouseMove = (event) => {
      updateCursor(event.clientX, event.clientY)
    }

    const hoverElements = document.querySelectorAll(
      'a, button, input, textarea, select, label, .product-card, .team-card, .win-card, .footer__contact-link'
    )

    const addHoverState = () => {
      dot.classList.add('cursor-dot--hover')
      ring.classList.add('cursor-ring--hover')
    }

    const removeHoverState = () => {
      dot.classList.remove('cursor-dot--hover')
      ring.classList.remove('cursor-ring--hover')
    }

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', addHoverState)
      el.addEventListener('mouseleave', removeHoverState)
    })

    const previousCursor = document.body.style.cursor
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', onMouseMove)
    updateCursor(window.innerWidth / 2, window.innerHeight / 2)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverState)
        el.removeEventListener('mouseleave', removeHoverState)
      })
      document.body.style.cursor = previousCursor
    }
  }, [])

  return (
    <>
      <style>{`
        .cursor-dot,
        .cursor-ring {
          pointer-events: none;
          position: fixed;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
          z-index: 2147483647;
          will-change: transform;
          cursor: none !important;
        }

        .cursor-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 0, 13, 1), rgba(232, 0, 13, 0.9));
          box-shadow: 0 0 20px rgba(232, 0, 13, 0.95), 0 0 40px rgba(232, 0, 13, 0.35);
          border: 2px solid rgba(255, 255, 255, 0.9);
          transition: width 0.12s ease, height 0.12s ease, background 0.12s ease, box-shadow 0.12s ease;
        }

        .cursor-ring {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 3px solid rgba(232, 0, 13, 0.9);
          background: rgba(232, 0, 13, 0.12);
          box-shadow: 0 0 28px rgba(232, 0, 13, 0.3);
          z-index: 2147483646;
        }

        .cursor-dot--hover {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.95);
          border-color: var(--red);
          box-shadow: 0 0 32px rgba(255, 255, 255, 0.95), 0 0 80px rgba(255, 255, 255, 0.3);
        }

        .cursor-ring--hover {
          width: 150px;
          height: 150px;
          border-color: rgba(232, 0, 13, 1);
          background: rgba(232, 0, 13, 0.2);
          box-shadow: 0 0 90px rgba(232, 0, 13, 0.45);
        }
      `}</style>
      <div className="cursor-ring" ref={cursorRingRef} />
      <div className="cursor-dot" ref={cursorDotRef} />
    </>
  )
}
