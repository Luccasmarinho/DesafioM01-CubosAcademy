function processData(input) {
    //Enter your code here
    const arrayInput = input.trim().split("\n")
    const n = Number(arrayInput[0], 10)
    const coordenadas = []
    for (let i = 1; i < arrayInput.length; i++) {
        const coord = arrayInput[i].split(" ")
        coordenadas.push({
            x: Number(coord[0]),
            y: Number(coord[1])
        })

    }

    const x = []
    const y = []
    for (let i = 0; i < coordenadas.length; i++) {
        x.push(coordenadas[i].x)
        y.push(coordenadas[i].y)
    }

    let distancia
    let maiorDistancia = 0
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < y.length; j++) {
            distancia = Math.sqrt(Math.pow(x[j] - x[i], 2) + Math.pow(y[j] - y[i], 2))
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia
            }

        }
    }
    console.log(maiorDistancia)


} 