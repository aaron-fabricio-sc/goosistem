import farmaciaEster from "@images/farmaEster.jpg";
import heladosYeri from "@images/HeladosYeri.jpg";
import perdirAboca from "@images/aPedirDeBoca.jpg";
import Thiago from "@images/Thiago.jpg";
const containerClientes = document.getElementById("containerClientes");
function templateClientes(ruta, container) {
  let informacion = `<div class="slide">
			<img src="${ruta}" height="100" width="250" alt="perdirAboca" />
		</div>`;

  container.innerHTML += informacion;
}

const Clientes = [
  {
    ruta: farmaciaEster,
  },
  {
    ruta: heladosYeri,
  },
  {
    ruta: Thiago,
  },
  {
    ruta: perdirAboca,
  },
  {
    ruta: farmaciaEster,
  },
  {
    ruta: heladosYeri,
  },
  {
    ruta: Thiago,
  },
  {
    ruta: perdirAboca,
  },
  {
    ruta: farmaciaEster,
  },
  {
    ruta: heladosYeri,
  },
  {
    ruta: Thiago,
  },
  {
    ruta: perdirAboca,
  },
];
Clientes.forEach((e) => {
  templateClientes(e.ruta, containerClientes);
});
