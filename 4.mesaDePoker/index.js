function solucao(min, max, valores) {
    //seu codigo aqui
      const valoresAutorizados = valores.filter((elemento) => {
          return elemento >= min && elemento <= max
      })
      console.log(valoresAutorizados)
    
  }