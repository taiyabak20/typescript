var num1Element = document.getElementById('num1');
var num2ELemenet = document.getElementById('num2');
var button = document.querySelector('button');
var numResult = [];
var textResult = [];
button.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2ELemenet.value;
    var result = sum(+num1, +num2);
    var stringResult = sum(num1, num2);
    console.log(result);
    console.log(stringResult);
    numResult.push(result);
    textResult.push(stringResult);
    printVal({ val: result, timeStamp: new Date() });
    console.log(numResult, textResult);
});
function printVal(obj) {
    console.log(obj.val);
}
function sum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2;
    else
        return +num1 + +num2;
}
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
