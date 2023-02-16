
function refresh() {
    alert('refresh')
}
function addPeople() {
    alert('AddPeople')
}
function submit() {
    // PEGANDO OS CAMPOS DOS VALORES
    var pessoa1 = document.getElementById('name1').value;
    var valor1 = document.getElementById('valor1').value;
    var pessoa2 = document.getElementById('name2').value;
    var valor2 = document.getElementById('valor2').value;
    var valortotal = document.getElementById('valorTotal').value;

    // PEGANDO OS CAMPOS DOS INNERHTML
    var simulatorValortotal = document.getElementById('resumoDoValor');
    var valor1Pessoa = document.getElementById('resumoPessoa1');
    var valorPessoa2 = document.getElementById('resumoPessoa2');

    var porcentagem1 = ((valor1) * (valortotal)) / 100
    var porcentagem2 = ((valor2) * (valortotal)) / 100
    if ((new Number(porcentagem1) + new Number(porcentagem2)) < new Number(valortotal)) {
        if ((valor1 == 100 || valor1 < 100)
            &&
            (valor2 == 100 || valor2 < 100)
        ) {
            simulatorValortotal.innerHTML = `Sabendo que o valor total foi R$ ${valortotal}`
            valor1Pessoa.innerHTML = `
            ${pessoa1} 
            enviou ${valor1}% de <span class='result'>R$ ${valortotal}</span>, 
            cujo o seu valor nela é: 
            R$ ${porcentagem1}
        `
        valorPessoa2.innerHTML = `
            ${pessoa2} 
            enviou ${valor2}% de <span class='result'>R$ ${valortotal}</span>, 
            cujo o seu valor nela é: 
            R$ ${porcentagem2}
        `
        } else {
            alert('Valor persentual estáacima de 100%')
        }
    } else {
        alert(`
        A soma do valor do 
        ${pessoa1} e do ${pessoa2} 
        equivale a ${new Number(valor1) + new Number(valor2)},
        comparado a valor total ${valortotal}, nisso
        passa dos limites, por isso a conta é rejeitada ):`)
    }
}