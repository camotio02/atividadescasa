const tasks = [
    `  <h3 id="tarefa0">
        Acontecendo mudanças...
        </h3>
    `,
    `   <h3 id="tarefa1">
        Acontecendo mudanças...
        </h3>
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
        containers[0].innerHTML = tasks[0]
        containers[1].innerHTML = tasks[1]
    } else {
        containers[0].innerHTML = tasks[1]
        containers[1].innerHTML = tasks[0]
    }
}

function time() {
    const dey = document.querySelectorAll("div.day")
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
    var semana = [0, 1, 2, 3, 4, 5, 6];
    const deyFind = semana.find((item) =>
        item == today.getDay()
    )

    if (dey[deyFind]) {
        dey[deyFind].classList.add("hoje")
    } else {
        dey[!deyFind].classList.remove("hoje")
    }
    getTasks()
    setTimeout('time()', 500);
}