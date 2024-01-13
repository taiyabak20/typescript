const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2ELemenet = document.getElementById('num2') as HTMLInputElement;
const button =document.querySelector('button') as HTMLButtonElement;

type numOrString = number | string


const numResult : number[]= []
const textResult : string[] = []

type Result = {val : number ; timeStamp : Date}

button.addEventListener('click',()=>{
    const num1 = num1Element.value
    const num2 = num2ELemenet.value
    const result = sum(+num1 , +num2)
    const stringResult = sum(num1 , num2)
    console.log(result)
    console.log(stringResult)
    numResult.push(result as number) 
    textResult.push(stringResult as string)
    printVal({val : result as number , timeStamp : new Date()})
    console.log(numResult , textResult)
})

function printVal(obj : Result){
    console.log(obj.val)
}

function sum(num1 :numOrString, num2 : numOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if(typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2
    else
        return +num1 + +num2
}

const myPromise = new Promise<string>((resolve , reject)=>{
    setTimeout(() => {
        resolve('It worked')
    }, 1000);
})

myPromise.then(result => {
    console.log(result.split('w'))
})