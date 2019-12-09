import Select from 'select-custom'

class CustomSelect extends Select {
  constructor(select, props) {
    super(select, props)
    this.name = select.dataset.type
  }

  init() {
    if (this.select.classList && this.select.classList.contains('custom-select')) {
      return
    }
    super.init()
  }
}

export default function setSelects() {
  const selects = [...document.querySelectorAll('.js-select')]
  if (!selects.length) return

  const customSelectObjects = []

  const props = {
    default: {},
  }

  selects.forEach(select => {
    const name = select.dataset.type
    const customSelect = new CustomSelect(select, props[name])
    customSelect.init()
    customSelectObjects.push(customSelect)
  })
}
