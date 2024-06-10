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
  return Number.isInteger(numero) && numero >= 0;
}
// /**
//  * retorna 1 si el mes tiene 31 días, -1 si tiene 30 y 0 si es febrero
//  * @param {int} $mes
//  * @return {int}
//  */
// function verificarDiasDelMes(mes) {
//   let diasDelMes = 0;

//   if (meses[mes].dias == 31) {
//     diasDelMes = 1;
//   } else if (meses[mes].dias == 30) {
//     diasDelMes = -1;
//   }

//   return diasDelMes;
// }

function verificarAnioBisiesto(anio) {
  return anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0);
}

function esFechaValida(dia, mes, anio) {
  // let diasDelMes = verificarDiasDelMes(mes)
  let valido = true;
  if (verificarAnioBisiesto(anio)) {
    meses[1].dias = 29;
  } else {
    meses[1].dias = 28;
  }
  if (
    !(
      validarEsEnteroPositivo(dia) &&
      validarEsEnteroPositivo(mes) &&
      validarEsEnteroPositivo(anio)
    )
  ) {
    valido = false;
  }
  if (dia == 0) {
    valido = false;
  }
  if (dia > meses[mes].dias) {
    valido = false;
  }
  if (mes > 12) {
    valido = false;
  }

  return valido;
}

function validarEmail(email) {
  let validar = true;
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!expr.test(email)) validar = false;
  return validar;
}

function validar() {
  // console.log("verificar bisiesto: ", verificarAnioBisiesto(2010));
  // console.log("verificar bisiesto: ", verificarAnioBisiesto(2012));
  // console.log("verificar entero positivo: ", validarEsEnteroPositivo(10));
  // console.log("verificar entero positivo: ", validarEsEnteroPositivo(-10));
  // console.log("verificar entero positivo: ", validarEsEnteroPositivo(10.1));
  // console.log("verificar dias del mes: ", verificarDiasDelMes(0));
  // console.log("verificar dias del mes: ", verificarDiasDelMes(1));
  // console.log("verificar dias del mes: ", verificarDiasDelMes(3));

  // console.log("validar fecha: ", esFechaValida(31, 4, 2023));

  console.log("validar email: ", validarEmail("algo@algo.com"));
}
