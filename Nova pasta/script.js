

function executar1() {
    var numero1 = prompt("Digite um número")
    var numero2 = prompt("Digite outro número")

    if (numero1 > numero2) {
        alert("Este é o maior número " + numero1)
    }

    else {
        alert("Este é o maior número " + numero2)

    };
}


/*2.Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.*/

function exercicio2() {
    var numero = parseFloat(prompt("Digite qualquer número positivo ou negativo"))

    if (numero > 0) {
        alert(numero + " Este número é positivo")
    };
    if (numero < 0) {
        alert(numero + " Este número é negativo")
    };
    if (numero == 0) {
        alert(numero + " Este número é igual a 0")
    };
}


/*3.Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.*/

function exercicio3() {
    var valor1 = parseFloat(prompt("Digite qualquer valor numérico"))
    var valor2 = parseFloat(prompt("Digite outro valor numérico"))
    var valor3 = parseFloat(prompt("Digite o último valor numérico"))

    if (valor1 > valor2 && valor3) {
        alert("Este é o maior valor numérico = " + valor1)
    };
    if (valor2 > valor1 && valor3) {
        alert("Este é o maior valor numérico = " + valor2)
    };
    if (valor3 > valor1 && valor2) {
        alert("Este é o maior valor numérico = " + valor3)
    };
}


/*4.Faça um programa que leia 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.*/

function exercicio4() {
    var numbera = parseFloat(prompt("Digite qualquer valor numérico"))
    var numberb = parseFloat(prompt("Digite outro valor numérico"))
    var numberc = parseFloat(prompt("Digite o último valor numérico"))

    if (numbera > numberc && numberb > numberc) {
        alert("Esta é a soma dos dois maiores valores = " + (numbera + numberb))
    };
    if (numbera > numberb && numberc > numberb) {
        alert("Esta é a soma dos dois maiores valores = " + (numbera + numberc))
    };
    if (numberb > numbera && numberc > numbera) {
        alert("Esta é a soma dos dois maiores valores = " + (numberb + numberc))
    };
}

/*5.Faça um programa que leia dois valores informados pelo usuário e exiba uma das três mensagens a seguir: ‘Números iguais’,
caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/

function exercicio5() {
    var valor1 = parseFloat(prompt("Digite Qualquer valor"));
    var valor2 = parseFloat(prompt("Digite Qualquer valor"));
    if (valor1 > valor2) {
        alert("Primeiro é maior " + valor1);
    }
    if (valor1 < valor2) {
        alert("Segundo é maior " + valor2)
    }
    if (valor1 == valor2) {
        alert("Os número são iguais")
    }



}

function exercicio6() {

    var valor1 = parseFloat(prompt("Digite Qualquer valor"));
    var valor2 = parseFloat(prompt("Digite Qualquer valor"));
    var valor3 = parseFloat(prompt("Digite Qualquer valor"));
    var valor4 = parseFloat(prompt("Digite Qualquer valor"));
    var valor5 = parseFloat(prompt("Digite Qualquer valor"));
    var valor6 = parseFloat(prompt("Digite Qualquer valor"));
    var valor7 = parseFloat(prompt("Digite Qualquer valor"));
    var valor8 = parseFloat(prompt("Digite Qualquer valor"));
    var valor9 = parseFloat(prompt("Digite Qualquer valor"));
    var valor10 = parseFloat(prompt("Digite Qualquer valor"));

    alert("Calcular média aritimética desses valores? " + (valor1 + ", " + valor2 + ", " + valor3 + ", " + valor4 + ", " + valor5 + ", " + valor6 + ", " + valor7 + ", " + valor8 + ", " + valor9 + ", " + valor10));
    resultado = ((valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10) / (10));
    alert("A média aritimética é = " + resultado);

}

function exercicio7() {
    var valor1 = parseFloat(prompt("Digite Qualquer valor"));
    var valor2 = parseFloat(prompt("Digite outro valor"));
    var valor3 = parseFloat(prompt("Digite outro valor"));
    var valor4 = parseFloat(prompt("Digite outro valor"));

    alert("Este é o primeiro valor= " + valor1);
    alert("Este é o último valor= " + valor4);
    if (valor1 > valor2 && valor1 > valor3 && valor1 > valor4) {
        alert("Este é o maior valor = " + valor1)
    };
    if (valor2 > valor1 && valor2 > valor3 && valor2 > valor4) {
        alert("Este é o maior valor = " + valor2)
    };
    if (valor3 > valor1 && valor3 > valor2 && valor3 > valor4) {
        alert("Este é o maior valor = " + valor3)
    };
    if (valor4 > valor1 && valor4 > valor2 && valor4 > valor3) {
        alert("Este é o maior valor = " + valor4)
    };

}

function exercicio8() {
    var valor1 = parseFloat(prompt("Digite Qualquer valor"));
    var valor2 = parseFloat(prompt("Digite Qualquer valor"));
    var valor3 = parseFloat(prompt("Digite Qualquer valor"));
    var valor4 = parseFloat(prompt("Digite Qualquer valor"));
    var valor5 = parseFloat(prompt("Digite Qualquer valor"));
    var valor6 = parseFloat(prompt("Digite Qualquer valor"));
    var valor7 = parseFloat(prompt("Digite Qualquer valor"));
    var valor8 = parseFloat(prompt("Digite Qualquer valor"));
    var valor9 = parseFloat(prompt("Digite Qualquer valor"));
    var valor10 = parseFloat(prompt("Digite Qualquer valor"));

    alert("Calcular a soma desses valores? " + (valor1 + ", " + valor2 + ", " + valor3 + ", " + valor4 + ", " + valor5 + ", " + valor6 + ", " + valor7 + ", " + valor8 + ", " + valor9 + ", " + valor10));
    resultado = ((valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10));
    alert("A soma dos 10 números é = " + resultado);


}

function exercicio9() {
    var valor1 = parseFloat(prompt("Digite Qualquer valor"));
    var valor2 = parseFloat(prompt("Digite Qualquer valor"));
    var valor3 = parseFloat(prompt("Digite Qualquer valor"));
    var valor4 = parseFloat(prompt("Digite Qualquer valor"));
    var valor5 = parseFloat(prompt("Digite Qualquer valor"));
    var valor6 = parseFloat(prompt("Digite Qualquer valor"));


    alert("Somar todos os valores menores que 72? = " + (valor1 + ", " + valor2 + ", " + valor3 + ", " + valor4 + ", " + valor5 + ", " + valor6));

    var soma = 0

    if (valor1 < 72) {
        soma = soma += valor1
    };

    if (valor2 < 72) {
        soma = soma += valor2
    };
    if (valor3 < 72) {
        soma = soma += valor3
    };
    if (valor4 < 72) {
        soma = soma += valor4
    };
    if (valor5 < 72) {
        soma = soma += valor5
    };
    if (valor6 < 72) {
        soma = soma += valor6
    }
    alert("Essa é a soma de todos os valores menosres que 72 = " + soma);

}

function exercicio10() {

    var valor1 = parseFloat(prompt("Digite Qualquer valor"));
    var valor2 = parseFloat(prompt("Digite Qualquer valor"));
    var valor3 = parseFloat(prompt("Digite Qualquer valor"));
    var valor4 = parseFloat(prompt("Digite Qualquer valor"));

    var soma = 0

    if (valor1 > 0 && valor1 < 10) {
        soma = soma += valor1
    }
    if (valor2 > 0 && valor2 < 10) {
        soma = soma += valor2
    }
    if (valor3 > 0 && valor3 < 10) {
        soma = soma += valor3
    }
    if (valor4 > 0 && valor4 < 10) {
        soma = soma += valor4
    }
    resultado = ((soma) / (4))
    if (resultado > 5) {
        alert("Você passou no teste!")
    };
    if (resultado < 5) {
        alert("Tente novante")
    }
}

/*11 - Um motorista de táxi deseja calcular o rendimento de seu carro na praça
    Sabendo-se que o preço do combustível é de R$ 2,90, escreva um programa para ler:
    a marcação do odômetro (Km) no início do dia, a marcação (Km) no final do dia, o número de litros de
    combustível gasto e o valor total (R$) recebido dos passageiros. Calcular e escrever: 
    a média do consumo em Km/L e o lucro (líquido) do dia.  */


function exercicio11() {
    var fuelPrice = parseFloat(2.90);
    var start = parseFloat(prompt("Digite aqui a marcação inicial do odômetro (KM): "));
    var end = parseFloat(prompt("Digite aqui a marcação final do odômetro (KM): "));
    var fuelUsed = parseFloat(prompt("Digite aqui a quantidade de combustível gasta (L): "));
    var gain = parseFloat(prompt("Digite o valor total recebido dos passageiros (R$): "));
    alert("A média do consumo de combustível foi de " + (fuelUsed / (end - start)) +
        "km/l" + ". O lucro líquido do dia foi de R$" + (gain - (fuelUsed * fuelPrice)) + ".");

}

/*12 - A equipe Mercedes deseja calcular o número mínimo de litros que deverá colocar no tanque de seu carro
para que ele possa percorrer um determinado número de voltas até o primeiro reabastecimento.
Escreva um programa que leia o comprimento da pista (em metros), o número total de voltas a serem percorridas no grande prêmio,
o número de reabastecimentos desejados e o consumo de combustível do carro (em Km/L). 
O programa deve calcular e exibir o número mínimo de litros necessários para percorrer até o primeiro reabastecimento.

Observação: considere que a quantidade de voltas entre os reabastecimentos é o mesmo, mas não poderá ser maior ou igual a 2. 
O usuário deve informar a quantidade de quilômetros total do circuito e a quantidade de litros que o carro pode possuir.*/

function exercicio12() {
    // 12 - A equipe Mercedes deseja calcular o número mínimo de litros que deverá colocar no tanque de seu carro para que ele possa percorrer um determinado número de voltas até o primeiro reabastecimento.                                                                                      Escreva um programa que leia o comprimento da pista (em metros), o número total de voltas a serem percorridas no grande prêmio, o número de reabastecimentos desejados e o consumo de combustível do carro (em Km/L).                                                                                                       O programa deve calcular e escrever o número mínimo de litros necessários para percorrer até o primeiro reabastecimento.                                                                                    Observação: considere que o número de voltas entre os reabastecimentos é o mesmo.                           O usuário deve informar a quantidade de quilômetros total do circuito e a quantidade de litros que o carro pode possuir. 

    var comprimentoPista = parseFloat(prompt("Digite o comprimento da pista em metros: "));
    var numeroVoltas = parseFloat(prompt("Digite o número total de voltas percorridas: "));
    var numeroReabastecimentos = parseFloat(prompt("Digite o número de reabastecimentos desejados: "));
    var consumoCombustivel = parseFloat(prompt("Digite o consumo de combustível do carro em Km/L: "));
    var quantidadeCombustivel = parseFloat(prompt("Digite a quantidade de litros que o carro comporta: "));


    if (quantidadeCombustivel <= ((((((comprimentoPista / 1000)) / numeroVoltas) / consumoCombustivel) * numeroVoltas) / numeroReabastecimentos)) {
        alert("VOCÊ PRECISA TER UM NÚMERO MAIOR DE REABASTECIMENTOS")
    }

    else {
        alert("o número mínimo de litros necessários para percorrer até o primeiro reabastecimento é: " + ((((((comprimentoPista / 1000)) / numeroVoltas) / consumoCombustivel) * numeroVoltas) / numeroReabastecimentos) + "L")
    }

}

function exercicio13() {
    // 13 - Escreva um programa para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: PARABÉNS! Você foi aprovado! somente se o aluno foi aprovado (considere 6.0 a média mínima para aprovação e 4 notas informadas).

    var x = parseFloat(prompt("Digite sua nota 1"));
    var y = parseFloat(prompt("Digite sua nota 2"));
    var media = ((x + y) / 2)

    if (media) {
        alert("média semestral = " + media)
    }

    if (media >= 6) {
        alert("<br><br> PARABÉNS! Você foi aprovado!")
    }
}
function exercicio14() {
    // 14 - Acrescente ao exercício anterior a mensagem "Infelizmente, você foi reprovado!" caso a média calculada seja menor que 6.0.

    var x = parseFloat(prompt("Digite sua nota 1"));
    var y = parseFloat(prompt("Digite sua nota 2"));
    var media = ((x + y) / 2)

    if (media) {
        alert("média semestral = " + media)
    }

    if (media >= 6) {
        alert("<br><br> PARABÉNS! Você foi aprovado!")
    }

    if (media < 6) {
        alert("<br><br> Infelizmente, você foi reprovado!")
    }
}
function exercicio15() {
    // 15 - Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

    var x = parseInt(prompt("Digite o ano do seu nascimento: "));

    if (x <= 2006) {
        alert("Voce nao pode votar esse ano")
    }

    if (x > 2006) {
        alert("Voce ja pode votar esse ano!")
    }
}
function exercicio16() {
    // 16 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas (considere que o usuário informará a quantidade), e calcule e escreva o valor total da compra.

    var x = parseInt(prompt("Digite o o número de maçãs compradas: "));

    if (x < 12) {
        alert("O valor total da compra é: " + "R$ " + (0.30 * x))
    }

    if (x >= 12) {
        alert("O valor total da compra é: " + "R$ " + (0.25 * x))
    }
}
function exercicio17() {
    // 17 - Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. A senha válida é o número "1234" sem aspas. Devem ser impressas as seguintes mensagens: "ACESSO PERMITIDO" caso a senha seja válida. "ACESSO NEGADO" caso a senha seja inválida.

    var x = parseFloat(prompt("Digite a senha:"));


    if (x == 1234) {
        alert("ACESSO PERMITIDO")
    }

    else if (x != 1234) {
        alert("ACESSO NEGADO")
    }
}
function exercicio18() {
    // 18 - Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

    var sexo = parseFloat(prompt("Digite 1 (Feminino)\nDigite 2 (Masculino)"));
    var altura = parseFloat(prompt("Digite a sua altura (em metros):"));


    if (sexo == 1) {
        alert("O peso ideal para você é: " + ((72.7 * altura) - 58) + "Kg");

    }

    if (sexo == 2) {
        alert("O peso ideal para você é: " + ((72.7 * altura) - 58) + "Kg");
    }
}
function exercicio19() {

    // 19 - Escreva um programa para ler o número de gols marcados pelo Grêmio e o número de gols marcados pelo Inter em um GRENAL. Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

    var gremio = parseInt(prompt("Digite o número de gols marcados pelo Grêmio: "));
    var inter = parseInt(prompt("Digite o número de gols marcados pelo Inter: "));

    if (gremio > inter) {
        alert("Grêmio ganhou a partida!")
    }

    if (inter > gremio) {
        alert("Inter ganhou a partida!")
    }

    if (inter == gremio) {
        alert("EMPATE")

    }
}
function exercicio20() {
    // 20 - Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Calcular e imprimir o seguinte: Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor do seu perímetro. Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. Se o número de lados for igual a 5 escrever PENTÁGONO. Observação: Considere que o usuário só informará os valores 3, 4 ou 5. Caso o número de lados seja inferior a 3 escrever NÃO É UM POLÍGONO. Caso o número de lados seja superior a 5 escrever POLÍGONO NÃO IDENTIFICADO.


    var x = parseInt(prompt("Digite o número de lados de um polígono regular: "));

    if (x == 3) {
        alert("É um Triângulo, " + "seu perímetro é: " + (x + x + x) + ".")
    }

    if (x == 4) {
        alert("É um Quadrado, " + "seu perímetro é: " + (x * x) + ".")
    }

    if (x == 5) {
        alert("É um Pentágono. ")
    }

    if (x < 3) {
        alert("Não é um Polígono. ")
    }


    if (x > 5) {
        alert("Polígono não identificado. ")
    }

}
function exercicio21() {
    // 21 - Escreva um programa que leia as notas das duas avaliações normais e a nota da avaliação optativa. Calcular a média do semestre considerando que a prova optativa substitui a nota mais baixa entre as duas primeiras avaliações. Escrever a média e mensagens que indiquem se o aluno foi aprovado, reprovado ou está em exame, de acordo com as informações abaixo:

    var avaliacao1 = parseFloat(prompt("Digite a nota da 1º Avaliação: "));
    var avaliacao2 = parseFloat(prompt("Digite a nota da 2º Avaliação: "));
    var avaliacaoOptativa = parseFloat(prompt("Digite a nota da Avaliação Optativa: "));
    var test1 = ((avaliacao2 + avaliacaoOptativa) / 2);
    var test2 = ((avaliacao1 + avaliacaoOptativa) / 2);
    var test3 = ((avaliacao2 + avaliacao1) / 2);


    if (avaliacao1 <= avaliacao2 && avaliacao1 <= avaliacaoOptativa) {
        alert("A média do semestre é: " + ((avaliacao2 + avaliacaoOptativa) / 2));
    }

    else if (avaliacao2 <= avaliacao1 && avaliacao2 <= avaliacaoOptativa) {
        alert("A média do semestre é: " + ((avaliacao1 + avaliacaoOptativa) / 2));
    }

    else if (avaliacaoOptativa <= avaliacao1 && avaliacaoOptativa <= avaliacao2) {
        alert("A média do semestre é: " + ((avaliacao2 + avaliacao1) / 2));
    }

    if (test1 && test2 && test3 >= 6) {
        alert("<br><br> APROVADO")
    } else if (test1 && test2 && test3 < 3) {
        alert("<br><br> REPROVADO")
    } else if (test1 && test2 && test3 >= 3.5 && test1 && test2 && test3 < 6) {
        alert("<br><br> EXAME")
    }

}
function exercicio22() {
    // 22 - A Loja Remi du Fromage está com uma promoção onde cada capacete artesanal para tartaruga custa R$18.230 e pode ser pago em até 15 vezes sem juros. Crie um programa onde o usuário possa informar o valor parcelas que deseja pagar e exiba o valor de cada parcela.


    var valorCapacete = 18.230
    var parcelasCapacete = parseInt(prompt("Digite em quantas vezes você quer parcelar"));


    if (parcelasCapacete > 15) {
        alert("O máximo é 15 vezes sem juros")
    } else {
        alert("O valor de cada parcela será: " + parcelasCapacete + "x de " + "R$ " + (valorCapacete / parcelasCapacete).toFixed(3));

    }


}
function exercicio23() {
    // 23 - Faça um programa em que o usuário informe 20 valores e no final, escreva o maior e o menor valor lido.

    var maior = 0;
    var menor = 0;
    var verificadorMaior = 0;
    var verificadorMenor = 0;

    for (let contador = 0; contador < 20; contador++) {
        var num = parseFloat(prompt("Digite um numero: "));

        var contadorMaior = num;

        if (contadorMaior > verificadorMaior) {
            verificadorMaior = num;
            maior = verificadorMaior;
        } else {
            if (verificadorMaior == 0) {
                verificadorMaior = num;
            }

        }

        var contadorMenor = num;

        if (contadorMenor < verificadorMenor) {
            verificadorMenor = num;
            menor = verificadorMenor;
        } else {
            if (verificadorMenor == 0) {
                verificadorMenor = num;
                menor = verificadorMenor;
            }
        }
    }

    alert("O maior numero foi: " + maior + ", e o menor foi: " + menor);

}
function exercicio24() {
    // 24 - Um zoológico muito louco. Escreva um programa que leia a idade de 2 javalis e 2 girafas (considere que a idade dos javalis será sempre diferente, assim como das girafas ). Calcule e escreva a soma das idades do javali mais velho com a girafa mais nova, e o produto das idades do javali mais novo com a girafa mais velha.

    var javali1 = parseInt(prompt("Informe a Idade do 1° Javali: "));
    var javali2 = parseInt(prompt("Informe a Idade do 2° Javali: "));
    var girafa1 = parseInt(prompt("Informe a Idade da 1° Girafa: "));
    var girafa2 = parseInt(prompt("Informe a Idade da 2° Girafa: "));
    var javalimaior = 0;
    var javalimenor = 0;
    var girafamaior = 0;
    var girafamenor = 0;

    if (javali1 > javali2) {
        javalimaior = javali1;
        javalimenor = javali2;
    } else {
        javalimaior = javali2;
        javalimenor = javali1;
    }

    if (girafa1 < girafa2) {
        girafamenor = girafa1;
        girafamaior = girafa2;
    } else {
        girafamenor = girafa2;
        girafamaior = girafa1;
    }

    alert("<br>A soma da idade do Javali mais velho com a Girafa mais nova é: " + (javalimaior + girafamenor) + "<br><br> O produto da idade do Javali mais novo com a Girafa mais velha é: " + (javalimenor * girafamaior));

}

function exercicio25() {
    // 25 - Uma micro calculador Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a sereexecutadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considereque só serão lidos os valores 1, 2, 3 ou 4 para as operações

    var num1 = parseInt(prompt("Digite um número inteiro: "));
    var num2 = parseInt(prompt("Digite um número inteiro: "));
    var operacao = parseInt(prompt("DIGITE O NÚMERO DE QUAL OPERAÇÃO VOCÊ DESEJA REALIZAR? \n 1.) Adição \n 2.) Subtração  \n 3.) divisão  \n 4.) Multplicação   "));

    if (operacao == 1) {
        alert(num1 + num2);
    }

    if (operacao == 2) {
        alert(num1 - num2);
    }

    if (operacao == 3) {
        alert(num1 / num2);
    }

    if (operacao == 4) {
        alert(num1 * num2);
    }

}
































