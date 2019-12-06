import { IS_ACTIVE } from '../constants'

export default () => {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.js-scroll-to')

    if (!btn) return
    const href = btn.getAttribute('href')
    const target = document.querySelector(href)
    const btns = [...document.querySelectorAll('.js-scroll-to')]

    if (!target) return
    e.preventDefault()
    const header = document.querySelector('.header')
    if (!header) return
    const headerBottom = header.querySelector('.header__bottom')
    const nav = document.querySelector('.section__nav')
    if (!headerBottom || !nav) return

    const offset = header.offsetHeight + nav.offsetHeight

    const top = target.getBoundingClientRect().top + document.body.scrollTop - offset

    if (btns.length > 0)
      btns.forEach(button => {
        button.classList.remove(IS_ACTIVE)
      })
    btn.classList.add(IS_ACTIVE)

    window.scrollBy({
      top,
      behavior: 'smooth',
    })
  })
}
