let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let currentOperation = ''
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (operation)=>{
    calculatorScreen.value = operation
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        if(currentOperation===''){
            currentOperation = currentNumber
        }
        else{
            currentOperation =+ currentNumber
        }
        updateScreen(currentOperation)
    })
})

const inputNumber = (number)=>{
    if(currentNumber==='0'){
        currentNumber = number
    }
    else{
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        if(calculationOperator === ''){
            inputOperator(event.target.value)
            currentOperation += calculationOperator
        }
        // else{
        //     if(currentNumber === '' || prevNumber === '')
        //     {
                
        //     }
        //     else{
        //         currentOperation += calculationOperator
        //         calculate()
        //         prevNumber = currentNumber
        //         currentNumber = ''
        //     }
        // }
    })
})

const inputOperator = (operator)=>{
    if(calculationOperator === ''){
        prevNumber = currentNumber
        calculationOperator = operator
        currentNumber = ''
    }
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=>{
    if(prevNumber===''){

        updateScreen(currentNumber)
    }
    if(currentNumber===''){
        updateScreen(prevNumber)
    }
    else{
        calculate()
        calculationOperator=''
        updateScreen(currentNumber)
    }
})

const calculate = ()=>{
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break    
    }
    currentNumber=result
    prevNumber = ''
    updateScreen(currentNumber)
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = ()=>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot)=>{
    currentNumber+=dot
}