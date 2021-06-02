var inputALista = document.getElementById("addToDo");
var lista = document.querySelector("ul");

window.addEventListener("keydown", function(key) {
	if (key.keyCode == "13") {
		return add_task();
	}
});

window.addEventListener("click", () => {
	let botonTrash = document.querySelectorAll("li");
	botonTrash.forEach((item, index) => {
		item.addEventListener("click", event => {
			botonTrash[index].innerHTML = "";
		});
	});
});

function add_task() {
	let valor_inputALista = inputALista.value;
	let newItem = document.createElement("li");
	let textNode = document.createTextNode(valor_inputALista);
	newItem.appendChild(textNode);
	lista.insertBefore(newItem, lista.childNodes[0]);
	return console.log(textNode);
}
