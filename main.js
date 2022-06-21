let nota1 = parseInt(prompt('Ingese la nota 1'));
let nota2 = parseInt(prompt('Ingese la nota 2'));
let nota3 = parseInt(prompt('Ingese la nota 3'));
let nota4 = parseInt(prompt('Ingese la nota 4'));
let nota5 = parseInt(prompt('Ingese la nota 5'));

let prom = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
let promRound = Math.round(prom)
if(promRound >= 70){
    window.alert(`Aprobado: ${promRound}`);
}
else {
    window.alert(`No Aprobado: ${promRound} `);

}

