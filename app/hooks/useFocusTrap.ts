import { useEffect } from 'react'

export const useFocusTrap = (isActive: boolean, containerRef: React.RefObject<HTMLElement>) => {
    useEffect(() => {
        if (!isActive || !containerRef.current) return

        const focusableElements = containerRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus()
                    e.preventDefault()
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus()
                    e.preventDefault()
                }
            }
        }

        document.addEventListener('keydown', handleTabKey)
        firstElement?.focus()

        return () => {
            document.removeEventListener('keydown', handleTabKey)
        }
    }, [isActive, containerRef])
} 