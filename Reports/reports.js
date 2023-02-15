
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
    var pessoa1 = document.getElementById('resumoDoValor');
    var valor1 = document.getElementById('resumoPessoa1');
    var pessoa2 = document.getElementById('resumoPessoa2');

    const porcentagem1 = (Number(valor1) * Number(valortotal))/100
    console.log(new Number(porcentagem1))
    alert(`result:', ${porcentagem1}, '%'`)
    
}