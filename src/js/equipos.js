import todoEnUnoTouch from "@images/todoEnUnoTactil.png";
import todoEnUno from "@images/TodoEnUno.png";
import corei5 from "@images/corei5.png";
import corei5normal from "@images/core5normal.png";
import corei3 from "@images/corei3.png";
import impresoraTermica from "@images/impresoraTermica.png";
import cajadeDinero from "@images/cajadeDinero.png";
import lectorCodigoBarras from "@images/lectorCodigoBarras.png";

function templateCard(descripcion, url, container) {
  let informacion = ` <div class="card">
                <div class="imgBox">
                    <img src="${url}" alt="">
                </div>
                <div class="content">

                    <h2>
                        ${descripcion}
                    </h2>
                    <div class="content__boton">
                        <a href="https://wa.me/+59169883567?text=Hola%20quiero%20más%20información%20de%20los%20productos." target="blank"><span>Contáctar...</span></a>

                    </div>
                </div>
            </div>`;
  container.innerHTML += informacion;
}

const cards = [
  {
    descripcion:
      " terminal punto de venta Equipo all in one Pantalla tactil Impresora térmica Cajon portadinero",
    url: todoEnUnoTouch,
  },
  {
    descripcion:
      "Terminal punto de venta Equipo All in one Impresora térmica Cajon portadinero",
    url: todoEnUno,
  },
  {
    descripcion:
      "Core i5 Disco duro de 500 Gb. Memoria ram de 4 Gb. Pantalla de 20plgs LED touch camara web incorporada",
    url: corei5,
  },
  {
    descripcion:
      "Core i5 Disco duro de 500 Gb. Memoria ram de 4 Gb. Pantalla de 20plgs Camara web incorporada",
    url: corei5normal,
  },
  {
    descripcion: `Core i3

Disco duro de 200 Gb.

Memoria ram de 2 Gb.

Pantalla de 20"

Resolucion de 1166 x 768`,
    url: corei3,
  },
  {
    descripcion: `Cajon portadinero SAT Apertura automática Para uso prolongado Pisa billetes metálico Fabricado con acero`,
    url: cajadeDinero,
  },
  {
    descripcion: `Impresora térmica Rowell Impresión de 150mm x seg. Compatible todos los Sistemas Operativos. Conector CA integrado`,
    url: impresoraTermica,
  },
  {
    descripcion: `Lector codigo de barras Conexión USB Escaneo de 72 lineas x seg. 7 tonos diferentes`,
    url: lectorCodigoBarras,
  },
];
const content_card = document.getElementById("content_card");
cards.forEach((e) => {
  templateCard(e.descripcion, e.url, content_card);
});
