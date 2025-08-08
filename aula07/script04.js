//4

let l1 =  parseInt(prompt('lado 1: '))
let l2 =  parseInt(prompt('lado 2: '))
let l3 =  parseInt(prompt('lado 3: '))

if (l1 == l2 && l2 == l3 && l3 == l1){
    console.log('Equilatero')
}
else if(l1 != l2 && l2 != l3 && l3 != l1){
    console.log('Isosceles')
}
else{
    console.log('Escaleno')
}