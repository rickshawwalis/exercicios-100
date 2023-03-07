let n1 = 1
let n2 = 0
let n3 = 0

let vetor = []

for(let i = 1; i <= 16;i++) {
    n3 = n1 + n2
    vetor.push(n3)
    n1 = n2
    n2 = n3
}

console.log(vetor)
