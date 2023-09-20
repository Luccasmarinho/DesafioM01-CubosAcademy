function solucao(texto) {
    // Seu codigo aqui
    let contador = 0;
    const arrayTexto = texto.trim().split(" ")
    for (let i = 0; i < arrayTexto.length; i++) {
        if (arrayTexto[i] !== "") {
            contador += 1
        }
    }
    console.log(contador)
    
    
}
