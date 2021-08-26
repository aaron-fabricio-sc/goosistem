const numerosNombres = [
  {
    nombre: "Ing Jhonny",
    numero: "69883567",
  },
  /* {
    nombre: "miguel",
    numero: "73719577",
  },
  {
    nombre: "Fabricio Santa Cruz",
    numero: "70668135",
  }, */
];
const numerosContainer = document.getElementById("container__numeros");
function templateNumeros(numero, nombre = null, container) {
  let informacion = `<a href="https://wa.me/+591${numero}?text=Hola%20quiero%20más%20información%20de%20los%20productos." target="__blank"> <i class="fab fa-whatsapp"></i> ${numero}</a>
  
  `;
  container.innerHTML += informacion;
}

numerosNombres.forEach((e) => {
  templateNumeros(e.numero, e.nombre, numerosContainer);
});
