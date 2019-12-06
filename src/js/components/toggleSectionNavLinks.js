import { IS_ACTIVE } from '../constants'

export default () => {
  const sections = [...document.querySelectorAll('.js-scroll-to-section')]
  const btns = [...document.querySelectorAll('.js-scroll-to')]

  if (!sections.length || !btns.length) return

  function handleObserving(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { id } = entry.target

        const [currentBtn] = btns.filter(btn => btn.getAttribute('href') === `#${id}`)

        btns.forEach(btn => {
          if (btn !== currentBtn) btn.classList.remove(IS_ACTIVE)
          currentBtn.classList.add(IS_ACTIVE)
        })
      }
    })
  }
  const observer = new IntersectionObserver(handleObserving, { threshold: 0.5 })

  sections.forEach(section => {
    observer.observe(section)
  })
}
