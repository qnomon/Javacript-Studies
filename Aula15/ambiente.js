let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)    
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
for(let pos = 0; pos<num.length; pos++){
    console.log(`Valor ${num[pos]} na posição ${pos}`)
}
for(let pos in num){
    console.log(`A Posição ${pos}  tem o valor ${num[pos]}`)
}
let position = num.indexOf(8)
console.log(`O valor 8 esta na posição ${position}`)