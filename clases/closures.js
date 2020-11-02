//Closures

//IIFE
//Immediately-invoked function expressions
(()=>{
    let color = 'green'

    function printColor(){
        console.log(color)
    }

    printColor()
})()


//Functions that returns functions
function makeColorPrinter(color){
    let colorMessage = `The color is ${color}`
    return () => console.log(colorMessage)
}

let greenColorPrinter = makeColorPrinter('green')
console.log(greenColorPrinter())

//private variables
function makeCounter(n){
    let count = n
    return {
        increase: () => {
            count++
        },
        decrease: () => {
            count--
        },
        getCount: () => {
            return count
        }
    }
}

let counter = makeCounter(7)
console.log(counter)
//that is closures