function solucao(precos) {
    //seu codigo aqui
      const desconto = 0.5 //50%
    const itemMaisBataro = precos.reduce((a, b) => b < a ? b : a)
      const somaTotal = precos.reduce((a, b) => a + b)
     
      const descontoNoMenorPreco = itemMaisBataro * desconto
      if (precos.length >= 3) {
          console.log(somaTotal - descontoNoMenorPreco)
      } else {
          console.log(somaTotal)
      }
      
  }