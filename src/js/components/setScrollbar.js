import SimpleBar from 'simplebar'
import { isWebkit } from '../helpers'

export default function setScrollbar() {
  if (isWebkit) return
  const containers = [...document.querySelectorAll('.js-scrollbar')]
  if (!containers.length) return

  containers.forEach(container => {
    const scrollbar = new SimpleBar(container)
  })
}
