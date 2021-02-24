import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
    className = 'excel__formula'
    getClassName() {
        return this.className
    }
    toHTML() {
        return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
    }
}
