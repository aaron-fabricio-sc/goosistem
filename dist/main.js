/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _img_TodoEnUno_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/TodoEnUno.png */ \"./src/img/TodoEnUno.png\");\n/* harmony import */ var _img_corei5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/corei5.png */ \"./src/img/corei5.png\");\n/* harmony import */ var _img_core5normal_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/core5normal.png */ \"./src/img/core5normal.png\");\n/* harmony import */ var _img_corei3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/corei3.png */ \"./src/img/corei3.png\");\n/* harmony import */ var _img_impresoraTermica_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/impresoraTermica.png */ \"./src/img/impresoraTermica.png\");\n/* harmony import */ var _img_cajadeDinero_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/cajadeDinero.png */ \"./src/img/cajadeDinero.png\");\n/* harmony import */ var _img_lectorCodigoBarras_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/lectorCodigoBarras.png */ \"./src/img/lectorCodigoBarras.png\");\n/* harmony import */ var _img_clientes_farmaEster_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/clientes/farmaEster.jpg */ \"./src/img/clientes/farmaEster.jpg\");\n/* harmony import */ var _img_clientes_HeladosYeri_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/clientes/HeladosYeri.jpg */ \"./src/img/clientes/HeladosYeri.jpg\");\n/* harmony import */ var _img_clientes_aPedirDeBoca_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/clientes/aPedirDeBoca.jpg */ \"./src/img/clientes/aPedirDeBoca.jpg\");\n/* harmony import */ var _img_clientes_Thiago_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/clientes/Thiago.jpg */ \"./src/img/clientes/Thiago.jpg\");\n\n\n\n\n\n\n\n\n\nfunction templateCard(descripcion, url, container) {\n  var informacion = \" <div class=\\\"card\\\">\\n                <div class=\\\"imgBox\\\">\\n                    <img src=\\\"\".concat(url, \"\\\" alt=\\\"\\\">\\n                </div>\\n                <div class=\\\"content\\\">\\n\\n                    <h2>\\n                        \").concat(descripcion, \"\\n                    </h2>\\n                    <div class=\\\"content__boton\\\">\\n                        <a href=\\\"https://wa.me/+59170668135?text=Hola%20quiero%20m\\xE1s%20informaci\\xF3n%20de%20los%20productos.\\\" target=\\\"blank\\\"><span>Cont\\xE1ctar...</span></a>\\n\\n                    </div>\\n                </div>\\n            </div>\");\n  container.innerHTML += informacion;\n}\n\nvar cards = [{\n  descripcion: \"Terminal punto de venta Equipo All in one Impresora térmica Cajon portadinero\",\n  url: _img_TodoEnUno_png__WEBPACK_IMPORTED_MODULE_1__\n}, {\n  descripcion: \"Core i5 Disco duro de 500 Gb. Memoria ram de 4 Gb. Pantalla de 20plgs LED touch camara web incorporada\",\n  url: _img_corei5_png__WEBPACK_IMPORTED_MODULE_2__\n}, {\n  descripcion: \"Core i5 Disco duro de 500 Gb. Memoria ram de 4 Gb. Pantalla de 20plgs Camara web incorporada\",\n  url: _img_core5normal_png__WEBPACK_IMPORTED_MODULE_3__\n}, {\n  descripcion: \"Core i3\\n\\nDisco duro de 200 Gb.\\n\\nMemoria ram de 2 Gb.\\n\\nPantalla de 20\\\"\\n\\nResolucion de 1166 x 768\",\n  url: _img_corei3_png__WEBPACK_IMPORTED_MODULE_4__\n}, {\n  descripcion: \"Cajon portadinero SAT Apertura autom\\xE1tica Para uso prolongado Pisa billetes met\\xE1lico Fabricado con acero\",\n  url: _img_cajadeDinero_png__WEBPACK_IMPORTED_MODULE_6__\n}, {\n  descripcion: \"Impresora t\\xE9rmica Rowell Impresi\\xF3n de 150mm x seg. Compatible todos los Sistemas Operativos. Conector CA integrado\",\n  url: _img_impresoraTermica_png__WEBPACK_IMPORTED_MODULE_5__\n}, {\n  descripcion: \"Lector codigo de barras Conexi\\xF3n USB Escaneo de 72 lineas x seg. 7 tonos diferentes\",\n  url: _img_lectorCodigoBarras_png__WEBPACK_IMPORTED_MODULE_7__\n}];\nvar content_card = document.getElementById(\"content_card\");\ncards.forEach(function (e) {\n  templateCard(e.descripcion, e.url, content_card);\n});\n\n\n\n\nvar containerClientes = document.getElementById(\"containerClientes\");\n\nfunction templateClientes(ruta, container) {\n  var informacion = \"<div class=\\\"slide\\\">\\n\\t\\t\\t<img src=\\\"\".concat(ruta, \"\\\" height=\\\"100\\\" width=\\\"250\\\" alt=\\\"perdirAboca\\\" />\\n\\t\\t</div>\");\n  container.innerHTML += informacion;\n}\n\nvar Clientes = [{\n  ruta: _img_clientes_farmaEster_jpg__WEBPACK_IMPORTED_MODULE_8__\n}, {\n  ruta: _img_clientes_HeladosYeri_jpg__WEBPACK_IMPORTED_MODULE_9__\n}, {\n  ruta: _img_clientes_Thiago_jpg__WEBPACK_IMPORTED_MODULE_11__\n}, {\n  ruta: _img_clientes_aPedirDeBoca_jpg__WEBPACK_IMPORTED_MODULE_10__\n}, {\n  ruta: _img_clientes_farmaEster_jpg__WEBPACK_IMPORTED_MODULE_8__\n}, {\n  ruta: _img_clientes_HeladosYeri_jpg__WEBPACK_IMPORTED_MODULE_9__\n}, {\n  ruta: _img_clientes_Thiago_jpg__WEBPACK_IMPORTED_MODULE_11__\n}, {\n  ruta: _img_clientes_aPedirDeBoca_jpg__WEBPACK_IMPORTED_MODULE_10__\n}, {\n  ruta: _img_clientes_farmaEster_jpg__WEBPACK_IMPORTED_MODULE_8__\n}, {\n  ruta: _img_clientes_HeladosYeri_jpg__WEBPACK_IMPORTED_MODULE_9__\n}, {\n  ruta: _img_clientes_Thiago_jpg__WEBPACK_IMPORTED_MODULE_11__\n}, {\n  ruta: _img_clientes_aPedirDeBoca_jpg__WEBPACK_IMPORTED_MODULE_10__\n}];\nClientes.forEach(function (e) {\n  templateClientes(e.ruta, containerClientes);\n});\nvar evento = document.getElementById(\"send\");\n\nvar enviarFormulario = function enviarFormulario() {\n  var nombre = document.getElementById(\"nombres\").value;\n  var apellido = document.getElementById(\"apellidos\").value;\n  var negocio = document.getElementById(\"negocio\").value;\n  var mensaje = document.getElementById(\"mensaje\").value;\n  var numero = +59170668135;\n  var win = window.open(\"https://wa.me/\".concat(numero, \"?text=Hola%20mi%20nombre%20es%20\").concat(nombre, \"\\n%20\").concat(apellido, \",tengo%20un%20negocio%20de\").concat(negocio, \", Asunto:%20\").concat(mensaje), \"_blank\");\n};\n\nevento.addEventListener(\"click\", enviarFormulario); //numeros y nombres\n\nvar numerosNombres = [{\n  nombre: \"Ing Jhonny\",\n  numero: \"69883567\"\n}, {\n  nombre: \"miguel\",\n  numero: \"73719577\"\n}, {\n  nombre: \"Fabricio Santa Cruz\",\n  numero: \"70668135\"\n}];\nvar numerosContainer = document.getElementById(\"container__numeros\");\n\nfunction templateNumeros(numero) {\n  var nombre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var container = arguments.length > 2 ? arguments[2] : undefined;\n  var informacion = \"<a href=\\\"https://wa.me/+591\".concat(numero, \"?text=Hola%20quiero%20m\\xE1s%20informaci\\xF3n%20de%20los%20productos.\\\" target=\\\"__blank\\\"> <i class=\\\"fab fa-whatsapp\\\"></i> \").concat(numero, \"</a>\\n  \\n  \");\n  container.innerHTML += informacion;\n}\n\nnumerosNombres.forEach(function (e) {\n  templateNumeros(e.numero, e.nombre, numerosContainer);\n});\nvar caracteristicasPlus = [\"Multiterminal. Posibilidad de trabajar con varias terminales HABILITACION DE MAS CAJAS.\", \"Trabajo en red (sin límite de puestos).\", \"Accesible para trabajo desde PDA (PUESTO REMOTO)\", \"Código de barras.\", \"Personalización por cada terminal.\", \"Comandas de cocina.\", \"Estadísticas de fecha a fecha.\", \"Control de stocks.\", \"Pedidos de clientes y proveedores.\", \"Presupuestos.\", \"Control de mesas.\", \"Control de camareros y vendedores.\", \"Control de usuarios.\", \"Informes y listados configurables por el usuario.\", \"Posibilidad de diseñar nuevos listados por parte del usuario.\", \"Asignación de tarifas por lectura de tarjeta de banda magnética.\", \"Control de cierres parciales y totales.\", \"Envío e-mail y SMS 3 móviles directamente del listado de clientes\", \"Envío de los cierres de caja automática- mente a e-maíl o por SMS\", \"Acceso y modiñcáción de cualquier ticket o factura del histórico\", \"Reproductor Multimedia integrado para sonido ambiental  mp3, midi\", \"Separación y división de ticket opcional al cobro\", \"Cambio de colores del TPV a gusto del personal\", \"Cambio de la posición de los botones para una mayor ergonomía de trabajo\", \"Cambio de camarero personalizado con fotografía personal incluída\", \"Venta de producto en porciones o medi- das (ideal para bebidas y raciones)\", \"Nombre de los salones diseñables por el usuario.\", \"Realización de copias de seguridad personalizables por el usuario.\", \"Visualización automática de salones (tanto en Terminal como en PDA).\", \"Agrupación automática de cantidades en una línea (Tickets y Facturas).\", \"Emisión de tickets desde la pantalla de venta (TPV).\", \"Convertir un ticket emitido en factura.\", \"Reimprimir cualquier ticket o factura del histórico.\", \"Imprimir tickets, facturas y cierres en PDF.\", \"Opción de desglose de IVA en informes de TPV (tickets, facturas y cierres).\", \"Envío de informes de TPV (tickets, y cierres) por e-mail.\", \"Mayor facilidad en la configuración de impresoras.\", \"Nuevo diseño de teclado en pantalla (mayor tamaño y manejabilidad).\", \"Contraseña individual por cada camare- ro(opciona1).\", \"Nuevo salón 3D tanto desde TPV como desde PDA.\", \"Unir mesas visualmente de sde salón.\", \"Control de balanzas y venta por peso.\", \"Soporte para cajones serie RS-232. (cajon porta dinero)\", \"Aviso de ruptura de stock y stock bajo mínimos desde TPV.\", \"Selección de distintas impresoras para ticket, e informes.\", \"Soporte para seis impresoras de comandas.\", \"Apertura de cajón por distinta impresora de ticket.\", \"Artículos combinados.\", \"Artículos compuestos.\", \"Control de invitaciones y consumo personal.\", \"Generador de informes de TPV con control total de conñguración\", \"Puesta a cero de los movimientos de la empresa.\", \"Opción de deshabilitar botón eliminar líneas de ticket.\", \"Aviso desde salón de mesas que han pedido comprobante.\", \"Imágenes de artículos y familias ordenadas por categorías.\", \"Opción de apagado automático del equipo al salir del TPV.\", \"Entrada directa a pantalla de ventas TPV  entrar a la aplicación.\", \"Impresión automática de comandas de cocina.\"];\nvar listadoPlus = document.getElementById(\"listadoPlus\");\n\nfunction templateCaracteristicas(caracteristicas, container) {\n  var informacion = \"\\n  <li> \".concat(caracteristicas, \"</li>\\n\");\n  container.innerHTML += informacion;\n}\n\nfor (var key in caracteristicasPlus) {\n  templateCaracteristicas(caracteristicasPlus[key], listadoPlus);\n}\n\nvar itemsDeProducionServiciosFacturar = [\"Registro de productos y sus particularidades como el nombre comercial, presentación, nombre genérico datos financieros proveedor habitual fotocaracterísticas, familia o grupos, subgrupos, bienes o servicios y otros.\", \"Generación de códigos inteligentes según criterio seleccionado numérico o alfanumérico y registro de códigos secundarios (modelo, código proveedor, barcode).\", \"Registro de servicios (envío, asistencia, instalación, etc.)\", \"Registro y generación del código de barras (EAN13 y CODE128)\", \"Registro de varios códigos de barras por producto.\", \"Manejo de hasta cuatro precios de productos con cálculo de márgenes de ganancias\"];\nvar $itemsDeProducionServiciosFacturar = document.getElementById(\"itemsDeProducionServiciosFacturar\");\n\nfor (var _key in itemsDeProducionServiciosFacturar) {\n  templateCaracteristicas(itemsDeProducionServiciosFacturar[_key], $itemsDeProducionServiciosFacturar);\n}\n\nvar facturacionComputarizadaQR = [\"Genera el CÓDIGO DE CONTROL\", \"Genera el CÓDIGO QR\", \"Generar los Libros de Compras y Ventas (LCV) compatible con LCV Facilito en formato XLS, CSV y TXT.\", \"Emisión de facturas en distintos tamaños (carta, media carta, cuarto oficio y cinta).\", \"Emisión de facturas con características especiales (sin derecho a crédito fiscal, alquiler, tasa cero y de exportación)\", \"Las facturas pueden exportarse a formato PDF y enviarse fácilmente por correo electrónico.\", \"Registro automático de clientes con reconociendo su NIT.\", \"Permite registrar facturas manuales.\"];\nvar $facturacionComputarizadaQR = document.getElementById(\"facturacionComputarizadaQR\");\n\nfor (var _key2 in facturacionComputarizadaQR) {\n  templateCaracteristicas(facturacionComputarizadaQR[_key2], $facturacionComputarizadaQR);\n}\n\nvar clientes = [\"Registro completo de los clientes (datos generales, garante, foto y anexos) para historial de ventas, tareas de marketing, cobranzas y otros.\", \"Especificación de límite y tiempo de crédito\", \"Agrupación de clientes en diferentes categorías o grupos\"];\nvar $clientes = document.getElementById(\"clientes\");\n\nfor (var _key3 in clientes) {\n  templateCaracteristicas(clientes[_key3], $clientes);\n}\n\nvar ventasRegistradas = [\"Múltiples criterios de búsqueda de productos o servicios.\", \"Diferentes formas de pago: efectivo, tarjeta, cheque, depósito\", \"Posibilidad de realizar ventas-prepago.\", \"Venta mayorista, minorista, por paquetes o por unidades.\", \"Cálculo y registro de efectivo recibido y el cambio a entregar\", \"Venta con opción de descuento general o por cliente.\"];\nvar $ventasRegistradas = document.getElementById(\"ventasRegistradas\");\n\nfor (var _key4 in ventasRegistradas) {\n  templateCaracteristicas(ventasRegistradas[_key4], $ventasRegistradas);\n}\n\nvar administracionSeguridad = [\"Configuración del sistema para adaptarse a su negocio.\", \"Registro de usuarios del sistema, con la fotografía de los usuarios, así como su hoja de vida respectiva.\", \"Configuración de roles o perfiles (administrador, operador y vendedor) de forma personalizada, mediante la asignación y revocación de permisos para el usuario sobre las funciones del sistema.\", \"Generación de copias de respaldo (backups) de la base de datos de forma manual y automática.\", \"Registro de datos generales de la empresa así como el logotipo.\", \"Mantiene la privacidad de los datos sensibles como los costos de adquisición, ganancias y contacto con proveedores.\"];\nvar $administracionSeguridad = document.getElementById(\"administracionSeguridad\");\n\nfor (var _key5 in administracionSeguridad) {\n  templateCaracteristicas(administracionSeguridad[_key5], $administracionSeguridad);\n}\n\nvar informesGerenciales = [\"De las compras y ventas, por rango de fechas, por día y por horas, por vendedor, por cliente, por producto, etc.\", \"De las ganancias, ventas y compras filtradas por varios criterios.\", \"Todos los listados los puede exportar a un archivo para luego utilizarlos con Hojas de cálculo y/o Procesadores de Texto\", \"Reportes de movimientos comerciales detallado y resumido.\", \"Reporte de información tributaria para declaraciones.\", \"Capacidad para exportar todos los registros a Excel.\"];\nvar $informesGerenciales = document.getElementById(\"informesGerenciales\");\n\nfor (var _key6 in informesGerenciales) {\n  templateCaracteristicas(informesGerenciales[_key6], $informesGerenciales);\n}\n\n//# sourceURL=webpack://goosistem/./src/index.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goosistem/./src/sass/styles.scss?");

/***/ }),

/***/ "./src/img/TodoEnUno.png":
/*!*******************************!*\
  !*** ./src/img/TodoEnUno.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/608e5784dd3e397f17ce.png\";\n\n//# sourceURL=webpack://goosistem/./src/img/TodoEnUno.png?");

/***/ }),

/***/ "./src/img/cajadeDinero.png":
/*!**********************************!*\
  !*** ./src/img/cajadeDinero.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/d70da6d1099dbf5f5d1c.png\";\n\n//# sourceURL=webpack://goosistem/./src/img/cajadeDinero.png?");

/***/ }),

/***/ "./src/img/clientes/HeladosYeri.jpg":
/*!******************************************!*\
  !*** ./src/img/clientes/HeladosYeri.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/369d52ce9c99e5931e91.jpg\";\n\n//# sourceURL=webpack://goosistem/./src/img/clientes/HeladosYeri.jpg?");

/***/ }),

/***/ "./src/img/clientes/Thiago.jpg":
/*!*************************************!*\
  !*** ./src/img/clientes/Thiago.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/f7ed06991ba45b313ec6.jpg\";\n\n//# sourceURL=webpack://goosistem/./src/img/clientes/Thiago.jpg?");

/***/ }),

/***/ "./src/img/clientes/aPedirDeBoca.jpg":
/*!*******************************************!*\
  !*** ./src/img/clientes/aPedirDeBoca.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/a514db0070a99975a23f.jpg\";\n\n//# sourceURL=webpack://goosistem/./src/img/clientes/aPedirDeBoca.jpg?");

/***/ }),

/***/ "./src/img/clientes/farmaEster.jpg":
/*!*****************************************!*\
  !*** ./src/img/clientes/farmaEster.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/bb08e2e5c6d7d894bb10.jpg\";\n\n//# sourceURL=webpack://goosistem/./src/img/clientes/farmaEster.jpg?");

/***/ }),

/***/ "./src/img/core5normal.png":
/*!*********************************!*\
  !*** ./src/img/core5normal.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/930f0ca4cad5fdba67f3.png\";\n\n//# sourceURL=webpack://goosistem/./src/img/core5normal.png?");

/***/ }),

/***/ "./src/img/corei3.png":
/*!****************************!*\
  !*** ./src/img/corei3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/2d1eb8384046b1502671.png\";\n\n//# sourceURL=webpack://goosistem/./src/img/corei3.png?");

/***/ }),

/***/ "./src/img/corei5.png":
/*!****************************!*\
  !*** ./src/img/corei5.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/901d7b8d62c9465e76d5.png\";\n\n//# sourceURL=webpack://goosistem/./src/img/corei5.png?");

/***/ }),

/***/ "./src/img/impresoraTermica.png":
/*!**************************************!*\
  !*** ./src/img/impresoraTermica.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/ce76aa5cabd076975665.png\";\n\n//# sourceURL=webpack://goosistem/./src/img/impresoraTermica.png?");

/***/ }),

/***/ "./src/img/lectorCodigoBarras.png":
/*!****************************************!*\
  !*** ./src/img/lectorCodigoBarras.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/e86309f0c4aae41a41ee.png\";\n\n//# sourceURL=webpack://goosistem/./src/img/lectorCodigoBarras.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;