function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('result').innerHTML = '결과: '+ result;
}   
function subtract() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('result').innerHTML = '결과: '+ result;
}   
function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result').innerHTML = '결과: '+ result;
}   
function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').innerHTML = '0으로 나눌 수 없습니다.'
    }
    
    let result = num1 / num2;
    document.getElementById('result').innerHTML = '결과: '+ result;
}   
function zero() {
    let num1 = document.getElementById('num1').value 
    let num2 = document.getElementById('num2').value
    
}