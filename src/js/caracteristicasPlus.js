const caracteristicasPlus = [
  "Multiterminal. Posibilidad de trabajar con varias terminales HABILITACION DE MAS CAJAS.",
  "Trabajo en red (sin límite de puestos).",
  "Accesible para trabajo desde PDA (PUESTO REMOTO)",
  "Código de barras.",
  "Personalización por cada terminal.",
  "Comandas de cocina.",
  "Estadísticas de fecha a fecha.",
  "Control de stocks.",
  "Pedidos de clientes y proveedores.",
  "Presupuestos.",
  "Control de mesas.",
  "Control de camareros y vendedores.",
  "Control de usuarios.",
  "Informes y listados configurables por el usuario.",
  "Posibilidad de diseñar nuevos listados por parte del usuario.",
  "Asignación de tarifas por lectura de tarjeta de banda magnética.",
  "Control de cierres parciales y totales.",
  "Envío e-mail y SMS 3 móviles directamente del listado de clientes",
  "Envío de los cierres de caja automática- mente a e-maíl o por SMS",
  "Acceso y modiñcáción de cualquier ticket o factura del histórico",
  "Reproductor Multimedia integrado para sonido ambiental  mp3, midi",
  "Separación y división de ticket opcional al cobro",
  "Cambio de colores del TPV a gusto del personal",
  "Cambio de la posición de los botones para una mayor ergonomía de trabajo",
  "Cambio de camarero personalizado con fotografía personal incluída",
  "Venta de producto en porciones o medi- das (ideal para bebidas y raciones)",
  "Nombre de los salones diseñables por el usuario.",
  "Realización de copias de seguridad personalizables por el usuario.",
  "Visualización automática de salones (tanto en Terminal como en PDA).",
  "Agrupación automática de cantidades en una línea (Tickets y Facturas).",
  "Emisión de tickets desde la pantalla de venta (TPV).",
  "Convertir un ticket emitido en factura.",
  "Reimprimir cualquier ticket o factura del histórico.",
  "Imprimir tickets, facturas y cierres en PDF.",
  "Opción de desglose de IVA en informes de TPV (tickets, facturas y cierres).",
  "Envío de informes de TPV (tickets, y cierres) por e-mail.",
  "Mayor facilidad en la configuración de impresoras.",
  "Nuevo diseño de teclado en pantalla (mayor tamaño y manejabilidad).",
  "Contraseña individual por cada camare- ro(opciona1).",
  "Nuevo salón 3D tanto desde TPV como desde PDA.",
  "Unir mesas visualmente de sde salón.",
  "Control de balanzas y venta por peso.",
  "Soporte para cajones serie RS-232. (cajon porta dinero)",
  "Aviso de ruptura de stock y stock bajo mínimos desde TPV.",
  "Selección de distintas impresoras para ticket, e informes.",
  "Soporte para seis impresoras de comandas.",
  "Apertura de cajón por distinta impresora de ticket.",
  "Artículos combinados.",
  "Artículos compuestos.",
  "Control de invitaciones y consumo personal.",
  "Generador de informes de TPV con control total de conñguración",
  "Puesta a cero de los movimientos de la empresa.",
  "Opción de deshabilitar botón eliminar líneas de ticket.",
  "Aviso desde salón de mesas que han pedido comprobante.",
  "Imágenes de artículos y familias ordenadas por categorías.",
  "Opción de apagado automático del equipo al salir del TPV.",
  "Entrada directa a pantalla de ventas TPV  entrar a la aplicación.",
  "Impresión automática de comandas de cocina.",
];

const listadoPlus = document.getElementById("listadoPlus");

function templateCaracteristicas(caracteristicas, container) {
  let informacion = `
  <li> ${caracteristicas}</li>
`;
  container.innerHTML += informacion;
}

for (const key in caracteristicasPlus) {
  templateCaracteristicas(caracteristicasPlus[key], listadoPlus);
}

const itemsDeProducionServiciosFacturar = [
  "Registro de productos y sus particularidades como el nombre comercial, presentación, nombre genérico datos financieros proveedor habitual fotocaracterísticas, familia o grupos, subgrupos, bienes o servicios y otros.",
  "Generación de códigos inteligentes según criterio seleccionado numérico o alfanumérico y registro de códigos secundarios (modelo, código proveedor, barcode).",
  "Registro de servicios (envío, asistencia, instalación, etc.)",
  "Registro y generación del código de barras (EAN13 y CODE128)",
  "Registro de varios códigos de barras por producto.",
  "Manejo de hasta cuatro precios de productos con cálculo de márgenes de ganancias",
];
const $itemsDeProducionServiciosFacturar = document.getElementById(
  "itemsDeProducionServiciosFacturar"
);
for (const key in itemsDeProducionServiciosFacturar) {
  templateCaracteristicas(
    itemsDeProducionServiciosFacturar[key],
    $itemsDeProducionServiciosFacturar
  );
}

const facturacionComputarizadaQR = [
  "Genera el CÓDIGO DE CONTROL",
  "Genera el CÓDIGO QR",
  "Generar los Libros de Compras y Ventas (LCV) compatible con LCV Facilito en formato XLS, CSV y TXT.",
  "Emisión de facturas en distintos tamaños (carta, media carta, cuarto oficio y cinta).",
  "Emisión de facturas con características especiales (sin derecho a crédito fiscal, alquiler, tasa cero y de exportación)",
  "Las facturas pueden exportarse a formato PDF y enviarse fácilmente por correo electrónico.",
  "Registro automático de clientes con reconociendo su NIT.",
  "Permite registrar facturas manuales.",
];

const $facturacionComputarizadaQR = document.getElementById(
  "facturacionComputarizadaQR"
);

for (const key in facturacionComputarizadaQR) {
  templateCaracteristicas(
    facturacionComputarizadaQR[key],
    $facturacionComputarizadaQR
  );
}

const clientes = [
  "Registro completo de los clientes (datos generales, garante, foto y anexos) para historial de ventas, tareas de marketing, cobranzas y otros.",
  "Especificación de límite y tiempo de crédito",
  "Agrupación de clientes en diferentes categorías o grupos",
];

const $clientes = document.getElementById("clientes");
for (const key in clientes) {
  templateCaracteristicas(clientes[key], $clientes);
}

const ventasRegistradas = [
  "Múltiples criterios de búsqueda de productos o servicios.",
  "Diferentes formas de pago: efectivo, tarjeta, cheque, depósito",
  "Posibilidad de realizar ventas-prepago.",
  "Venta mayorista, minorista, por paquetes o por unidades.",
  "Cálculo y registro de efectivo recibido y el cambio a entregar",
  "Venta con opción de descuento general o por cliente.",
];

const $ventasRegistradas = document.getElementById("ventasRegistradas");
for (const key in ventasRegistradas) {
  templateCaracteristicas(ventasRegistradas[key], $ventasRegistradas);
}

const administracionSeguridad = [
  "Configuración del sistema para adaptarse a su negocio.",
  "Registro de usuarios del sistema, con la fotografía de los usuarios, así como su hoja de vida respectiva.",
  "Configuración de roles o perfiles (administrador, operador y vendedor) de forma personalizada, mediante la asignación y revocación de permisos para el usuario sobre las funciones del sistema.",
  "Generación de copias de respaldo (backups) de la base de datos de forma manual y automática.",
  "Registro de datos generales de la empresa así como el logotipo.",
  "Mantiene la privacidad de los datos sensibles como los costos de adquisición, ganancias y contacto con proveedores.",
];

const $administracionSeguridad = document.getElementById(
  "administracionSeguridad"
);
for (const key in administracionSeguridad) {
  templateCaracteristicas(
    administracionSeguridad[key],
    $administracionSeguridad
  );
}

const informesGerenciales = [
  "De las compras y ventas, por rango de fechas, por día y por horas, por vendedor, por cliente, por producto, etc.",
  "De las ganancias, ventas y compras filtradas por varios criterios.",
  "Todos los listados los puede exportar a un archivo para luego utilizarlos con Hojas de cálculo y/o Procesadores de Texto",
  "Reportes de movimientos comerciales detallado y resumido.",
  "Reporte de información tributaria para declaraciones.",
  "Capacidad para exportar todos los registros a Excel.",
];

const $informesGerenciales = document.getElementById("informesGerenciales");
for (const key in informesGerenciales) {
  templateCaracteristicas(informesGerenciales[key], $informesGerenciales);
}
