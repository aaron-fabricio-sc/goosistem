const evento = document.getElementById("send");
const enviarFormulario = () => {
  let nombre = document.getElementById("nombres").value;
  let apellido = document.getElementById("apellidos").value;
  let negocio = document.getElementById("negocio").value;

  let mensaje = document.getElementById("mensaje").value;
  let numero = +59169883567;
  var win = window.open(
    `https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}
%20${apellido},tengo%20un%20negocio%20de:${negocio},%20Asunto:%20${mensaje}`,
    "_blank"
  );
};
evento.addEventListener("click", enviarFormulario);
