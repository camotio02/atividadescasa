const firstFinshDays = document.querySelectorAll('.data_termino')
console.log(firstFinshDays)
let date = new Date();

const inicioSemana = dateFns
    .startOfWeek(date, { weekStartsOn: 0 })
    .toLocaleDateString('pt');
const fimSemana = dateFns
    .endOfWeek(date, { weekStartsOn: 0 })
    .toLocaleDateString('pt');

    firstFinshDays[0].innerHTML = ` De ${inicioSemana} até ${fimSemana}`
    firstFinshDays[1].innerHTML = ` De ${inicioSemana} até ${fimSemana}`
console.log('Para a data: ', date.toLocaleDateString('pt'));
console.log('Inicio da semanda: ', inicioSemana);
console.log('Fim da semanda: ', fimSemana);
