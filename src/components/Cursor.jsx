import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Cursor() {
  const cursorDotRef = useRef(null)

  useEffect(() => {
    const dot = cursorDotRef.current
    if (!dot) return

    let lastX = window.innerWidth / 2
    let lastY = window.innerHeight / 2

    const updateCursor = (x, y) => {
      lastX = x
      lastY = y
      const transform = `translate3d(${x}px, ${y}px, 0)`
      dot.style.transform = `${transform} translate(-50%, -50%)`
    }

    const onMouseMove = (event) => {
      updateCursor(event.clientX, event.clientY)
    }

    const checkHover = (element) => {
      if (!element) return false
      return element.closest(
        'a, button, input, textarea, select, label, .product-card, .team-card, .win-card, .footer__contact-link, [role="button"], [style*="cursor: pointer"]'
      )
    }

    const onMouseOver = (event) => {
      if (checkHover(event.target)) {
        dot.classList.add('cursor-dot--hover')
      } else {
        dot.classList.remove('cursor-dot--hover')
      }
    }

    const onScroll = () => {
      const target = document.elementFromPoint(lastX, lastY)
      if (checkHover(target)) {
        dot.classList.add('cursor-dot--hover')
      } else {
        dot.classList.remove('cursor-dot--hover')
      }
    }

    const onMouseLeave = () => {
      dot.style.opacity = '0'
    }

    const onMouseEnter = () => {
      dot.style.opacity = '1'
    }

    const previousCursor = document.body.style.cursor
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    
    // Initial position in center of viewport
    updateCursor(window.innerWidth / 2, window.innerHeight / 2)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.body.style.cursor = previousCursor
    }
  }, [])

  return createPortal(
    <>
      <style>{`
        .cursor-dot {
          pointer-events: none;
          position: fixed;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
          z-index: 2147483647;
          will-change: transform;
          cursor: none !important;
          opacity: 1;
        }

        .cursor-dot {
          width: 36px;
          height: 36px;
          background: url('/icons8-target-48.svg') no-repeat center / contain;
          filter: drop-shadow(0 0 8px rgba(232, 0, 13, 0.5));
          transition: width 0.15s ease, height 0.15s ease, opacity 0.15s ease;
          border-radius: 0;
          border: none;
          box-shadow: none;
        }

        .cursor-dot--hover {
          width: 48px;
          height: 48px;
          filter: drop-shadow(0 0 12px rgba(255, 26, 26, 0.7));
        }
      `}</style>
      <div className="cursor-dot" ref={cursorDotRef} />
    </>,
    document.body
  )
}
