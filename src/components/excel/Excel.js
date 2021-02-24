import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        this.components.forEach(Component => {
            const $el = document.createElement('div')
            const component = new Component($el)
            $el.classList.add(component.getClassName())
            $el.innerHTML = component.toHTML()
            $root.append($el)
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}
