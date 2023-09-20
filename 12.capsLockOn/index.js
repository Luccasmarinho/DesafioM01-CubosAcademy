function processData(input) {
    //Enter your code here
    const arrayInput = input.split(" ")
    
    const arrayFrases = arrayInput.filter((palavras) => {    
    if (palavras === palavras.toUpperCase()) {
        console.log(palavras.toLowerCase())
    } else if (palavras.slice(0, 1) === palavras.slice(0, 1).toLowerCase() && palavras.slice(1) === palavras.slice(1).toUpperCase()) {
        console.log(palavras.slice(0, 1).toUpperCase() + palavras.slice(1).toLowerCase())
    } else if (palavras.length === 1 && palavras === palavras.toLowerCase()) {
        console.log(palavras.toLowerCase())
    } else {
        console.log(palavras)
    }
})
console.log(arrayFrases)
} 
