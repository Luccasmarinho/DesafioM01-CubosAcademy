function solucao(min, km) {
    //seu codigo aqui
    //calcular o preco da viagem
    //cobrar inicialmente 50c por min
    //cobrar 70c por cada km 
    //se a viagem tiver mais de 10km, passa a custar 50c por km, acima de 10.
    //se durar mais de 20min,passa a custar 30c por min acima de 20
    //calcular em centavos
    //arredondar para baixo o valor final
    // min = minutos de duracao da viagem
    //km = quantos km foram percorridos
    const porMinuto = min * 50;
    const porKm = km * 70;
    
    const porMinAcimaDe20Min = (min - 20) * 30;
    const porKmAcimaDe10km = (km - 10) * 50;
    
    
    
    if (min <= 20 && km <= 10) {
        console.log(porMinuto + porKm)
    } else if (min > 20 && km > 10) {
        console.log(porMinAcimaDe20Min + porKmAcimaDe10km + (20 * 50) + (10 * 70))
    } else if (min <= 20 && km > 10) {
        console.log(porMinuto + porKmAcimaDe10km + (10 * 70))
    } else if (min > 20 && km <= 10) {
        console.log(porKm + (20 * 50) + porMinAcimaDe20Min)
    }
    

    
    
}