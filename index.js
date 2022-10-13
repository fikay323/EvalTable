function create() {
    let columnInp = document.querySelector('.num1').value
    let rowInp = document.querySelector('.num2').value
    let table = document.querySelector('table')
    let tableData = document.querySelector('tbody')
    let operand = document.querySelector('#operand')
    let operandValue = operand.options[operand.selectedIndex].text
    tableData.innerHTML = ''
    let column = Number(columnInp)
    let row = Number(rowInp)
    table.style.visibility = 'visible'

    for (var i = 1; i <= row; i++) {
        let tr = document.createElement('tr')
        tableData.appendChild(tr)
        for(var j = 1; j<= column; j++) {
            if (operandValue === 'Addition') {
                result = i + j
                symbol = ' + '
            }
            else if (operandValue === 'Subtraction') {
                result = i - j
                symbol = ' - '
            }
            else if (operandValue === 'Multiplication') {
                result = i * j
                symbol = ' x '
            }
            else if (operandValue === 'Division') {
                result = i / j
                symbol = ' / '
            }
            text = `${i} ${symbol} ${j} = ${result}`
            let td = document.createElement('td')
            td.innerHTML = text
            tr.appendChild(td)
        }

    }

}