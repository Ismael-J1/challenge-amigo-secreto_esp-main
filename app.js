//Mucha suerte
let amigo = [];

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value;

  if (!nombreAmigo) {
    alert("Debes ingresar un nombre");
    return;
  }

  if(amigo.includes(inputAmigo.value)) {
    alert('Ese nombre ya ha sido ingresado. No podemos agregar duplicados');
    limpiarCaja();
    return;
  }

  amigo.push(nombreAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  renderizarAmigos();
}

function renderizarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigo.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigo[i];
    listaAmigos.appendChild(item);
  }
}

document.body.addEventListener('click', () => {
    const audio = document.getElementById("miAudio");
    audio.play();
});


function sortearAmigo() {
  if (amigo.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }
  let sortearAmigo = amigo[Math.floor(Math.random() * amigo.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${sortearAmigo}`;

  let limpiarLista = document.getElementById("listaAmigos");
  limpiarLista.innerHTML = "";
}