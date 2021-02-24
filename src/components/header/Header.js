import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
    className = 'excel__header'
    getClassName() {
        return this.className
    }
    toHTML() {
        return `
        <input type="text" class="input" value="New table">
        <div class="header__buttons">
           <div class="button">
              <i class="material-icons">delete</i>
           </div>

           <div class="button">
              <i class="material-icons">exit_to_app</i>
           </div>
        </div>
        `
    }
}
