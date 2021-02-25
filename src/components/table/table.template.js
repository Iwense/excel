const CODES = {
    A: 65,
    Z: 90,
}

function createCell() {
    return `
        <div class="cell" contenteditable></div>
    `
}

function toColumn(col) {
    return `
        <div class="column">${col}</div>
    `
}
function createRow(content, count = '') {
    return `
    <div class="row">
        <div class="row-info">${count}</div>
        <div class="row-data">${content}</div>
    </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

function generateCell(count) {
    return new Array(count)
        .fill('')
        .map(createCell)
        .join('')
}

export function createTable(rowsCount = 40) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols))

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(generateCell(colsCount), i+1))
    }

    return rows.join('')
}
