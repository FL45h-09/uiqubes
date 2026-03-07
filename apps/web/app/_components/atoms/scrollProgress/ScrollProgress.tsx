'use client'
import { useEffect, useRef } from "react"

export const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    const onScroll = () => {
      requestAnimationFrame(updateScroll)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    updateScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 w-full h-[2px] z-50 bg-transparent">
      <div
        ref={progressRef}
        className="h-full origin-left bg-[var(--color-primary)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  )
}