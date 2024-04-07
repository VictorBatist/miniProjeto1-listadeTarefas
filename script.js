const caixadeTexto = document.querySelector("input")
const botaoAdicionar = document.querySelector("button")
const listadeTarefas = document.querySelector("#lista")

botaoAdicionar.addEventListener("click",() =>{

    const strDigitado = caixadeTexto.value;
    const novaTarefa = document.createElement("li");

    const spanTarefa = document.createElement("span");
        spanTarefa.textContent = strDigitado;

    const checkboxConcluida = document.createElement("input");
        checkboxConcluida.type = "checkbox";
        checkboxConcluida.addEventListener("change", () => {
            if (checkboxConcluida.checked) {
                spanTarefa.style.textDecoration = "line-through";
            } else {
                spanTarefa.style.textDecoration = "none";
            }
        });

    const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover tarefa";
        botaoRemover.addEventListener("click", () => {
            novaTarefa.remove();
        });

    novaTarefa.appendChild(spanTarefa);
    novaTarefa.appendChild(botaoRemover);
    novaTarefa.appendChild(checkboxConcluida);

    caixadeTexto.value ='';
    listadeTarefas.appendChild(novaTarefa);
});

botaoAdicionar.addEventListener("click",() =>{
    const strDigitado = caixadeTexto.value;
    console.log('Adicionou uma nova tarefa',strDigitado);
});

