function processData(input) {
    //Enter your code here
    
    const arrayInput = input.trim().split("\n")
    let senhaCorreta = arrayInput[0].split("");
    let senhaDigitada = arrayInput[1].split("");
    
    for (let i = 0; i < senhaCorreta.length; i++) {
        if (senhaDigitada.includes(senhaCorreta[i])) {
            senhaDigitada = senhaDigitada.slice(senhaDigitada.indexOf(senhaCorreta[i]))
        } else {
            return console.log("NAO")
        }
    }    
    return console.log("SIM")
    
}