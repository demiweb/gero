import { tns } from 'tiny-slider/src/tiny-slider'
import setLazy from './setLazy'

export default () => {
  const sliders = [...document.querySelectorAll('.js-slider')]

  if (!sliders.length) return

  const getOptions = ({ container, prevButton, nextButton, onInit }) => ({
    gallery: {
      container,
      prevButton,
      nextButton,
      onInit,
      loop: false,
      // mouseDrag: true,
      items: 4,
      gutter: 5,
      nav: false,
    },
  })

  sliders.forEach(slider => {
    const name = slider.dataset.slider
    const wrap = slider.closest('.slider__wrap')
    const prevButton = wrap.querySelector('.js-slider-prev')
    const nextButton = wrap.querySelector('.js-slider-next')
    const mySlider = tns(
      getOptions({
        container: slider,
        prevButton,
        nextButton,
        onInit: setLazy,
      })[name]
    )
  })
}
