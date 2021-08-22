import "./sass/styles.scss";

import "./js/equipos";
import "./js/clientes";
import "./js/formulario";
import "./js/numeroTrabajadores";
//numeros y nombres
import "./js/caracteristicasPlus";

const ExploracionDeLaInterfazDelSistema = "https://youtu.be/_nDGzplKnsY";
const FuentesDeLasGrillas = "https://youtu.be/aSPR3oGTJRk";
const containerEntorno = document.getElementById("entornoDeTrabajo");
function templateListaPreguntas(ruta, texto, container) {
  let informacion = `<li>
                                       <a href="${ruta}" class="link_preguntas" target="__blank">${texto}</a>
                                   </li>`;

  container.innerHTML += informacion;
}
const entornoDeTrabajo = [
  {
    url: ExploracionDeLaInterfazDelSistema,
    texto: "Exploración de la interfaz del sistema",
  },
  {
    url: FuentesDeLasGrillas,
    texto: "Fuentes de la grillas(ordenar, filtrar, ordenar)",
  },
];

entornoDeTrabajo.forEach((e) => {
  templateListaPreguntas(e.url, e.texto, containerEntorno);
});

const instalarDependencias = "https://youtu.be/aZ0_rs9BaLA";
const configuracionDeParametros = "https://youtu.be/bL5V0sPE2Ac";
const $instalacionConfiguracion = document.getElementById(
  "instalacionConfiguracion"
);
const instalacionYconfiguracion = [
  {
    url: instalarDependencias,
    texto: "Instalación de Dependencias.",
  },
  {
    url: configuracionDeParametros,
    texto: "Configuración de parametros y alta de usuarios.",
  },
];
instalacionYconfiguracion.forEach((e) => {
  templateListaPreguntas(e.url, e.texto, $instalacionConfiguracion);
});

const RegistrnadoProveedoresYresgistros = "https://youtu.be/_nDGzplKnsY";
const RegisrtroDeSaldos = "https://youtu.be/I7UKn1Qgig4";
const operacionesDeSistemas = "https://youtu.be/13_WKLOxsXU";

const $primerosPasos = document.getElementById("primerosPasos");

const primerosPasos = [
  {
    url: RegistrnadoProveedoresYresgistros,
    texto: "Registrando proveedores y productos.",
  },
  {
    url: RegisrtroDeSaldos,
    texto: "Registro saldos iniciales en stock y clientes",
  },
  {
    url: operacionesDeSistemas,
    texto: "Operación del sistema",
  },
];

primerosPasos.forEach((e) => {
  templateListaPreguntas(e.url, e.texto, $primerosPasos);
});

const RegistroCompras = "https://youtu.be/A9YM-UlxsCQ";
const RegistroVentas = "https://youtu.be/VgEVI3cOAl8";
const RegistroDeTraspasos = "https://youtu.be/Z-T8IpJnje0";
const CuentasPorPagarYcobrar = "https://youtu.be/8MSIdIdDZAQ";
const cotizacionesProformas = "https://youtu.be/y1zIS5t7IwA";
const pedidosDeRepocicion = "https://youtu.be/SbviHR9z-vM";
const devolucionDeVenta = "https://youtu.be/8lZGg1fY6HA";
const devolucionDeCompra = "https://youtu.be/JgCblo2YqYI";
const cajaChica = "https://youtu.be/4Uc2ssnBglg";
const $registroMovimientos = document.getElementById("registroMovimientos");
const registroMovimientos = [
  {
    url: RegistroCompras,
    texto: "Registro de Compras",
  },
  {
    url: RegistroVentas,
    texto: "Registro de Ventas",
  },
  {
    url: RegistroDeTraspasos,
    texto: "Registro de traspasos inter-almacen",
  },
  {
    url: CuentasPorPagarYcobrar,
    texto: "Cuentas por pagar y cunetas por cobrar",
  },
  {
    url: cotizacionesProformas,
    texto: "Cotizaciones Y proformas",
  },
  {
    url: pedidosDeRepocicion,
    texto: "Pedidos de reposición",
  },
  {
    url: devolucionDeVenta,
    texto: "Devoluciones de venta",
  },
  {
    url: devolucionDeCompra,
    texto: "Devolución De Compra",
  },
  {
    url: cajaChica,
    texto: "Registro de movimientos de caja chica",
  },
];

registroMovimientos.forEach((e) => {
  templateListaPreguntas(e.url, e.texto, $registroMovimientos);
});

const registroProveeadores = "https://youtu.be/hQDpGgSQ2x0";
const gestionCatalogo = "https://youtu.be/azBwsUwW1yQ";
const codigoBarras = "https://youtu.be/VGKEI6SSjrA";
const registroAlmacenes = "https://youtu.be/I4J5Edj2UUc";
const registroClientes = "https://youtu.be/ganYVvKMWx0";
const gestionInventario = "https://youtu.be/xze_TnpQ1q4";
const importacionExportacionExcel = "https://youtu.be/JevSuGoO4W4";

const $registrosMaestros = document.getElementById("registrosMaestros");

const registrosMaestros = [
  {
    url: registroProveeadores,
    texto: "Registrando Proveedores",
  },
  {
    url: gestionCatalogo,
    texto: "Gestion del catálogo de venta",
  },
  {
    url: codigoBarras,
    texto: "Manejo del Código de barras",
  },
  {
    url: registroAlmacenes,
    texto: "Registro de almacenes",
  },
  {
    url: registroClientes,
    texto: "Registro de clientes",
  },
  {
    url: gestionInventario,
    texto: "Gestion de inventario",
  },
  {
    url: importacionExportacionExcel,
    texto: "Exportación e importación de registros con excel",
  },
];
registrosMaestros.forEach((e) => {
  templateListaPreguntas(e.url, e.texto, $registrosMaestros);
});

const analisesDeInventario = "https://youtu.be/lDUqaT-Y5I0";
const monitoreoVencimiento = "https://youtu.be/TPm8m5kRiuE";
const reimpresionDocumentos = "https://youtu.be/Yy4CoRR0W-8";
const reportesDeTexto = "https://youtu.be/-ON7FUwneWg";

const $reportesDocumentos = document.getElementById("reportesDocumentos");

const reportesDocumentos = [
  {
    url: analisesDeInventario,
    texto: "Análisis de inventario con indicadores de gestión",
  },
  {
    url: monitoreoVencimiento,
    texto:
      "Monitoreo de vencimientos, existencias mínimas, cuentas en mora y otros",
  },
  {
    url: reimpresionDocumentos,
    texto: "Reimpresión de documentos comerciales",
  },
  {
    url: reportesDeTexto,
    texto: "Reportes de textos e informes estadísticos",
  },
];

reportesDocumentos.forEach((e) => {
  templateListaPreguntas(e.url, e.texto, $reportesDocumentos);
});

const licenciaSoftware = "";
const creandoUsuarios = "";
const copiasRespaldo = "";
const certificadoCodigo = "";

const $seguridadInformacion = document.getElementById("seguridadInformacion");

const seguridadInformacion = [
  {
    url: licenciaSoftware,
    texto: "Licencia del software",
  },
  {
    url: creandoUsuarios,
    texto: "Creando usuarios",
  },
  {
    url: copiasRespaldo,
    texto: "Copias de respaldo y restauración",
  },
  {
    url: certificadoCodigo,
    texto: "Certificación del código de control",
  },
];
seguridadInformacion.forEach((e) => {
  templateListaPreguntas(e.url, e.texto, $seguridadInformacion);
});
