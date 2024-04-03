const caixadeTexto = document.querySelector("input")
const botaoAdicionar = document.querySelector("button")
const listadeTarefas = document.querySelector("#lista")

botaoAdicionar.addEventListener("click",() =>{

    const strDigitado = caixadeTexto.value;
    const novaTarefa = document.createElement("li");

    const spanTarefa = document.createElement("span");
        spanTarefa.textContent = strDigitado;

    novaTarefa.appendChild(spanTarefa);

    caixadeTexto.value ='';
    listadeTarefas.appendChild(novaTarefa);
});

botaoAdicionar.addEventListener("click",() =>{
    const strDigitado = caixadeTexto.value;
    console.log('Adicionou uma nova tarefa',strDigitado);
});

