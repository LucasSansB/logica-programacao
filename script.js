function mediaAluno() { 
    console.log("Olá Mundo!");
    console.log("Imprimindo no console");
    window.alert("Texto no modal do navegador");

    //Lógica de programação
    //Problema: receber 3 notas de um aluno.
    //Calcular e apresentar a média e o resultado
    //se o aluno foi aprovado, reprovado ou ficou de exame

    console.log("Início do programa");

    //declaração das "variaveis"
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);
    

    //Cálculo da média
    media = (nota1 + nota2 + nota3) / 3;

    document.getElementById('resultado').innerHTML = 'A média do aluno é: ' + media + '<br>';
    console.log("\n");
    console.log("Média é:" , media);
    console.log("\n");

    if (media >= 7){
        document.getElementById('resultado').innerHTML += Image;
    } else if (media >= 5){
        document.getElementById('resultado').innerHTML += 'EXAME';
    } else {
        document.getElementById('resultado').innerHTML += 'REPROVADO';
    }

    console.log("Fim do processo.");
}