const citaElem = document.getElementById("cita");
const autorElem = document.getElementById("autor");
const boton = document.getElementById("boton");

function indiceAleatorio() {
  return Math.floor(Math.random() * citas.length);
}

function cambiarCita() {
  let index = indiceAleatorio();
  citaElem.textContent = `"${citas[index].texto}"`;
  autorElem.textContent = citas[index].autor;
}

cambiarCita();

boton.addEventListener("click", cambiarCita);
