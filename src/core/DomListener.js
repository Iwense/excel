import {capitalize} from './utils'

export class DomListener {
    constructor(root, listeners = []) {
        if (!root) {
            throw new Error('No root for DomListener')
        }
        this.$root = root
        this.listeners = listeners
        console.log('Element = ', root)
        console.log('Listeners = ', listeners)
    }

    // Добавляем слушателей к компоненту addEventListener
    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            // Если такой метод не реализован в компоненте, будет ошибка
            if (!this[method]) {
                const name = this.name
                throw new Error(
                    `Method ${method} is not implemented in ${name} Component`)
            }
            // Решения для сохранения контекста , иначе remove not work
            this[method] = this[method].bind(this)
            // обёртка для addEventListener, так как $root уже НЕ нативная node
            this.$root.on(listener, this[method])
        })
    }
    removeDOMListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}


function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
