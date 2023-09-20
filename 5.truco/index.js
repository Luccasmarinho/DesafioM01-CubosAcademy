function solucao(carta) {
    //seu codigo aqui
    const arrayCartas = ["Q", "J", "K", "A", "2", "3"];
    let manilha = "";
    for (let i = 0; i < arrayCartas.length; i++) {
            if (arrayCartas[arrayCartas.length - 1] === carta) {
                manilha = arrayCartas[0];
            } else if (arrayCartas[i] === carta) {
                manilha = arrayCartas[i + 1];
            }
    }
    console.log(manilha)
}