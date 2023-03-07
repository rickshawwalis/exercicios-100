let num1 = 0;
let num2 = 1;
let proximoTermo;
for (let i = 1; i <= 10; i++) {
    console.log(num2);
    proximoTermo = num1 + num2;
    num1 = num2;
    num2 = proximoTermo;
 
}


/*
proximotermo = 0 + 1;
0 = 1;
1 = 1;
*/