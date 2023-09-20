function solucao(numeros) {
    // seu codigo aqui
   // x = numero qlq que e jogado
   //s = soma dos numeros jogados
   //n = numero de jogadores

     let posicao;
     const soma = numeros.reduce((a, b) => a + b)
   
   if (soma % numeros.length === 0) {
       posicao = numeros.length
       console.log(posicao)
   } else {
       posicao = soma % numeros.length
       console.log(posicao)
   }
       
       


}