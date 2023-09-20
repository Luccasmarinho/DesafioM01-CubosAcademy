function solucao(jogadores) {
    //seu codigo aqui   
      const quemColocouUm = jogadores.filter((numero) => numero.jogada === 1)
      const quemColocouZero = jogadores.filter((numero) => numero.jogada === 0)
      
      
      if (quemColocouUm.length === 1) {
          console.log(quemColocouUm[0].nome)
      } else if(quemColocouZero.length === 1){
          console.log(quemColocouZero[0].nome)
      } else {
          console.log("NINGUEM")
      }
      
  }