import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })
        return $root
    }

    render() {
        /* к основному Div с классном app добавляются новые компоненты
            со своими классами и стилями
        */
        this.$el.append(this.getRoot())
        /* У каждого компонента переданного в массиве добавляем слушателей
            через метод init класса родителя ExcelComponent. Который вызывает
            метод initDOMListenter родителя DomListener
        */
        this.components.forEach(Component => {
            Component.init()
        });
    }
}
