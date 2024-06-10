const meses = [
  {
    mes: "Enero",
    dias: 31,
  },
  {
    mes: "Febrero",
    dias: 28,
  },
  {
    mes: "Marzo",
    dias: 31,
  },
  {
    mes: "Abril",
    dias: 30,
  },
  {
    mes: "Mayo",
    dias: 31,
  },
  {
    mes: "Junio",
    dias: 30,
  },
  {
    mes: "Julio",
    dias: 31,
  },
  {
    mes: "Agosto",
    dias: 31,
  },
  {
    mes: "Septimbre",
    dias: 30,
  },
  {
    mes: "Octubre",
    dias: 31,
  },
  {
    mes: "Noviembre",
    dias: 30,
  },
  {
    mes: "Diciembre",
    dias: 31,
  },
];

function validarEsEnteroPositivo(numero) {
  return Number.isInteger(numero) && numero > 0;
}
/**
 * retorna 1 si el mes tiene 31 días, -1 si tiene 30 y 0 si es febrero
 * @param {int} $mes
 * @return {int}
 */
function verificarDiasDelMes(mes) {
  let diasDelMes = 0;

  if (meses[mes].dias == 31) {
    diasDelMes = 1;
  } else if (meses[mes].dias == 30) {
    diasDelMes = -1;
  }

  return diasDelMes;
}

function verificarAnioBisiesto(anio) {
  return anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0);
}

function validar() {
  console.log("verificar bisiesto: ", verificarAnioBisiesto(2010));
  console.log("verificar bisiesto: ", verificarAnioBisiesto(2012));
  console.log("verificar entero positivo: ", validarEsEnteroPositivo(10));
  console.log("verificar entero positivo: ", validarEsEnteroPositivo(-10));
  console.log("verificar entero positivo: ", validarEsEnteroPositivo(10.1));
  console.log("verificar dias del mes: ", verificarDiasDelMes(0));
  console.log("verificar dias del mes: ", verificarDiasDelMes(1));
  console.log("verificar dias del mes: ", verificarDiasDelMes(3));
}
