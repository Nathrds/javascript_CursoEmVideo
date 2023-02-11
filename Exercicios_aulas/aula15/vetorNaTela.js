let num = [8, 1, 7, 4, 2, 9]

// valores ordenados
num.sort()

// maneira simplificada
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


// maneira tradicional
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
