let runnunTotal = 0;
let buffer = "0";
let previusOperator;

const tela = document.querySelector(".tela");

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        tela.innerText = buffer;
    }
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previusOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            previusOperator = null;
            buffer = runningTotal;
            runnunTotal = 0;
            break;
        case '←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if (buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runnunTotal === 0){
        runnunTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previusOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previusOperator === '+'){
        runnunTotal +=intBuffer;
    }else if(previusOperator === '-'){
        runnunTotal -= intBuffer;
    }else if(previusOperator ==='x'){
        runningTotal *= intBuffer;
    }else if(previusOperator === '÷'){
        runnunTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-botoes').addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    })
}

init();