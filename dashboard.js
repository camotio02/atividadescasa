var pessoas = {
    pessoa1: 'Casa, todos lixos, roupas, panos e os lixos da cozinha.',
    pessoa2: 'Cozinha, todos os banheiros e a calçada.'
}
function time() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    const addZero = (value) => value < 10 ? `0${value}` : value
    document.getElementById('txt').innerHTML = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
    document.getElementById('datas').innerHTML = `
        ${addZero(today.getDate())}/
        ${addZero(today.getMonth() + 1)}/
        ${addZero(today.getFullYear())}
        `
    tarefa0 = document.getElementById('tarefa0')
    tarefa1 = document.getElementById('tarefa1')
    domingo = document.getElementById('domingo')
    segunda = document.getElementById('segunda')
    terca = document.getElementById('terca')
    quarta = document.getElementById('quinta')
    quinta = document.getElementById('quarta')
    sexta = document.getElementById('sexta')
    sabado = document.getElementById('sabado')
    var semana = [0, 1, 2, 3, 4, 5, 6];
    if (semana.indexOf(0) == today.getDay()) {
        domingo.classList.add("hoje")
    } else if (semana.indexOf(1) == today.getDay()) {
        domingo.classList.remove('hoje');
        segunda.classList.add("hoje")

    } else if (semana.indexOf(2) == today.getDay()) {

        segunda.classList.remove('hoje');
        terca.classList.add("hoje")

    } else if (semana.indexOf(3) == today.getDay()) {

        terca.classList.remove('hoje');
        quarta.classList.add("hoje")

    } else if (semana.indexOf(4) == today.getDay()) {

        quarta.classList.remove('hoje');
        quinta.classList.add("hoje")

    } else if (semana.indexOf(5) == today.getDay()) {

        quinta.classList.remove('hoje');
        sexta.classList.add("hoje")

    } else if (semana.indexOf(6) == today.getDay()) {

        sexta.classList.remove('hoje');
        sabado.classList.add("hoje")

    } else {
        sabado.classList.remove('hoje');
        segunda.classList.add("hoje")
    }
    setTimeout('time()', 500);
}
const tasks = [
    `  <strong id="tarefa0">
        Cozinha, todos os banheiros e a calçada.
        </strong>
    `,
    `   <strong id="tarefa1">
        Casa, todos lixos, roupas,
        panos e os lixos da cozinha.
        </strong>
    `
]
function getTasks() {
    const containers = document.querySelectorAll('.lista')
    const currentdate = new Date()
    const oneJan = new Date(currentdate.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    //verifica se o weekNumber é par
    if ((weekNumber % 2) === 0) {
        containers[0].innerHTML = tasks[1]
        containers[1].innerHTML = tasks[0]
    } else {
        containers[0].innerHTML = tasks[0]
        containers[1].innerHTML = tasks[1]
    }
}
getTasks()