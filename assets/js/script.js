let input = document.getElementById("item-input");
let btnAdicionar = document.getElementById("btn-adicionar");
let itensUl = document.getElementById("itens-ul");
let itens = document.getElementsByTagName("li");
let itensButtons = document.getElementsByClassName("remove");


function adicionarItens() {
    let li = document.createElement("li");
    let btnExcluir = document.createElement("button");

    btnExcluir.innerHTML = "X";
    btnExcluir.className = "remove";
    li.appendChild(btnExcluir);

    let text = document.createTextNode(input.value);

    li.appendChild(text);

    itensUl.appendChild(li);

    input.value = "";
    buttonEvents();
}


function buttonEvents() {
    for(let i = 0; i < itensButtons.length; i++) {
        itensButtons[i].addEventListener("click", deleteItem);
    }
}


function deleteItem() {
    this.parentElement.remove();
}


btnAdicionar.addEventListener("click", adicionarItens);
buttonEvents();