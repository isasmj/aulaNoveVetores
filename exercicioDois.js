let notas = [];
let nota;
let soma = 0;
let media;
for (let index = 0; index < 4; index++) {
    nota = parseFloat(prompt(`Escreva sua ${index + 1}ª nota:`));

    if (!isNaN(nota)) {
        notas[index] = nota;
        soma += nota
    } else {
        alert("O valor digitado é não é válido, por favor escreva novamente");
        index--;
    }
}

media = soma / notas.length;
alert(`Com as notas ${notas} sua média sera de ${media}`);