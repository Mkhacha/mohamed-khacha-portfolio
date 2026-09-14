import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible')
          element.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .reveal-blur').forEach(child => {
            child.classList.add('visible')
          })
          observer.unobserve(element)
        }
      },
      {
        threshold: options.threshold || 0.05,
        rootMargin: options.rootMargin || '0px 0px 40px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

export default useScrollReveal
