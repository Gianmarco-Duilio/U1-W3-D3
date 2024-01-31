const inputIt = document.getElementById("inputItem");
const list = document.getElementById("lista");
const bottone = document.getElementById("aggiungi");

bottone.onclick = function () {
  if (inputIt.value !== "") {
    const li = document.createElement("li");

    li.innerHTML = inputIt.value;

    list.appendChild(li);

    const bottone = document.createElement("button");
    bottone.className = "buttonRem";

    bottone.innerText = "X";

    li.appendChild(bottone);

    bottone.onclick = () => li.remove();

    li.ondblclick = () => li.classList.add("crossLine");
  }
  inputIt.value = "";
};
