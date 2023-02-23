let conjunto = [];
let acim5 = 0;
let div3 = 0;

for (let i = 0; i < 20; i++) {
    let autom = Math.floor(Math.random() * 11);
    conjunto.push(autom);


    if (auton < 5) {
        acim5++;
    } else if (autom%3===0) {
        div3++
    }
}

console.log(conjunto)
console.log(acim5)
console.log(div3)
