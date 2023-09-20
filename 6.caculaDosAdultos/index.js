function solucao(lista) {
    // seu codigo aqui
    let pessoaMaisJovem = Infinity;
  
  for (let i = 0; i < lista.length; i++) {
      if (lista[i] >= 18 && lista[i] < pessoaMaisJovem) {
          pessoaMaisJovem = lista[i]
      }
  }
  
  if (pessoaMaisJovem === Infinity) {
      console.log("CRESCA E APARECA")
  } else {
      console.log(pessoaMaisJovem)
  }
  }