import { throttle } from 'throttle-debounce'
import { IS_FIXED } from '../constants'

export default () => {
  const header = document.querySelector('.js-header')
  if (!header) return

  const top = header.querySelector('.header__top')
  const bottom = header.querySelector('.header__bottom')
  if (!top || !bottom) return

  function handleScroll() {
    if (!window.matchMedia('(min-width: 1200px)').matches) return
    if (window.pageYOffset >= top.offsetHeight) {
      header.classList.add(IS_FIXED)
    } else {
      header.classList.remove(IS_FIXED)
    }
  }

  const onScroll = throttle(66, handleScroll)
  window.addEventListener('scroll', onScroll)
}
