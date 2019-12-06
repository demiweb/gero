import { IS_OPEN } from '../constants'
import { isTouch } from '../helpers'

export default () => {
  function toggleDropdown(e) {
    if (window.matchMedia('(min-width: 1200px)').matches && !isTouch) return
    if (!e.target) return

    let menuItem

    if (e.target.classList && e.target.classList.contains('js-dropdown')) {
      menuItem = e.target
    }
    if (
      e.target.parentNode &&
      e.target.parentNode.classList &&
      e.target.parentNode.classList.contains('js-dropdown')
    ) {
      menuItem = e.target.parentNode
    }

    if (!menuItem) return
    e.preventDefault()
    const subMenu = menuItem.querySelector('ul')
    if (!subMenu) return

    if (subMenu.classList.contains(IS_OPEN)) {
      subMenu.classList.remove(IS_OPEN)
      subMenu.style.maxHeight = ''
    } else {
      subMenu.classList.add(IS_OPEN)
      subMenu.style.maxHeight = `${subMenu.scrollHeight}px`
    }
  }

  document.addEventListener('click', toggleDropdown)
}
