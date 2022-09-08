for (let i = 1; i <= 8; i++) {
  //En el for, por convencion le ponemos "i" al elemento iterable
  let nombre = prompt("Ingrese su nombre");
  let mensaje = `Su reserva es la #${i} A nombre de:${nombre}`;
  alert(mensaje);
}
