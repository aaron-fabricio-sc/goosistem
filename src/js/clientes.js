import farmaciaEster from "@images/farmaEster.jpg";
import heladosYeri from "@images/HeladosYeri.jpg";
import perdirAboca from "@images/aPedirDeBoca.jpg";
import Thiago from "@images/Thiago.jpg";
import bocaya from "@images/restaurantBocaya.jpeg";

const containerClientes = document.getElementById("containerClientes");
function templateClientes(ruta, url, container) {
  let informacion = `<div class="slide">
  <a href="${url}" target="_black" ><img src="${ruta}" height="100" width="250" alt="perdirAboca" /></a>
			
		</div>`;

  container.innerHTML += informacion;
}

const Clientes = [
  {
    ruta: farmaciaEster,
    url: "#",
  },
  {
    ruta: heladosYeri,
    url: "https://www.facebook.com/HeladeriaYERI",
  },
  {
    ruta: Thiago,
    url: "https://www.facebook.com/Supermercado-THIAGOs-11003255799359",
  },
  {
    ruta: perdirAboca,
    url: "https://www.facebook.com/apdb.banqueteria",
  },
  {
    ruta: bocaya,
    url: "#",
  },
  {
    ruta: farmaciaEster,
    url: "#",
  },
  {
    ruta: heladosYeri,
    url: "https://www.facebook.com/HeladeriaYERI",
  },
  {
    ruta: Thiago,
    url: "https://www.facebook.com/Supermercado-THIAGOs-110032557993519",
  },
  {
    ruta: perdirAboca,
    url: "https://www.facebook.com/apdb.banqueteria",
  },
  {
    ruta: bocaya,
    url: "#",
  },
  {
    ruta: farmaciaEster,
    url: "#",
  },
  {
    ruta: heladosYeri,
    url: "https://www.facebook.com/HeladeriaYERI",
  },
  {
    ruta: Thiago,
    url: "https://www.facebook.com/Supermercado-THIAGOs-110032557993519",
  },
  {
    ruta: perdirAboca,
    url: "https://www.facebook.com/apdb.banqueteria",
  },
  {
    ruta: bocaya,
    url: "#",
  },
];
Clientes.forEach((e) => {
  templateClientes(e.ruta, e.url, containerClientes);
});
