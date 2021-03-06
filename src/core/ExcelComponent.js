import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }
    // Return layout component
    toHTML() { }

    init() {
        this.initDOMListeners()
    }
    destroy() {
        this.removeDOMListener()
    }
}
