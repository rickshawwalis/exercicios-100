/*100) Melhore o exercício 96, criando além da função Media() uma outra função 
chamada Situacao(), que vai retornar para o programa principal se o aluno está 
APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como 
parâmetro o resultado retornado pela função Media(). */

let not1 = 1;
let not2 = 1;
let soma = not1 + not2;

let media = () => { //primeira função
    return soma / 2;
}

let Situacao = (media) => { //segunda função
   
    if (soma / 2 >= media) {
        console.log("Aprovado");
    } else if (soma / 2 < media) {
        console.log("Reprovado");
    } else {
        console.log("Recuperação");
    }
}

let mediaAluno = media();
Situacao(mediaAluno);
