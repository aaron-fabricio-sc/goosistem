import todoEnUnoTouch from "@images/elo_e-series_features_914x570_right-removebg-preview.png";
import todoEnUno from "@images/TodoEnUno.png";
import corei5 from "@images/corei5.png";
import corei5normal from "@images/core5normal.png";
import corei3 from "@images/POS-LCB-HON-005_grande-removebg-preview.png";
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
      " Módelo IntelliTouch ZB - 15E2 Procesador Intel CELERON 2.4GHz Gráficos HD Intel Pantalla de 15 pulgadas Disco Duro de 320 GB Memoria RAM 4 GB Windows 7 Pro",
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
    descripcion: `Lector Código de Barras Omnidireccional  Tecnología laser de alta velocidad: 1120 scans por segundo. Lectura  hasta 22 cm de distancia  Interface USB`,
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
