console.log("Olá Mundo!");
document.write("Salve Salve");
console.log("Imprimindo no console");
window.alert("Texto no modal do navegador");

//Lógica de programação
//Problema: receber 3 notas de um aluno.
//Calcular e apresentar a média e o resultado
//se o aluno foi aprovado ou não

console.log("Início do programa");

// const nota1 = 8;
// const nota2 = 7;
// const nota3 = 9;

nota1 = parseInt(prompt("Digite a sua 1° nota:"));
nota2 = parseInt(prompt("Digite a sua 2° nota:"));
nota3 = parseInt(prompt("Digite a sua 3° nota:"));

//Cálculo da média
media = (nota1 + nota2 + nota3) / 3;

console.log("A 1° nota é:" + nota1);
console.log("A 2° nota é:" + nota2);
console.log("A 3° nota é:" + nota3);
console.log("\n");

console.log("Média é:" , media);
console.log("\n");

console.log("Fim do processo.");

// console.log("A média do aluno é:" );
// console.log(media);