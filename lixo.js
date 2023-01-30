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
        containers[0].innerHTML = tasks[0]
        containers[1].innerHTML = tasks[1]
    } else {
        containers[0].innerHTML = tasks[1]
        containers[1].innerHTML = tasks[0]
    }
    getTasks()
}