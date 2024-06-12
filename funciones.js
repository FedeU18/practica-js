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
  if (mes < 13 && mes > 0) {
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
    if (dia > meses[mes - 1].dias) {
      valido = false;
    }
    if (mes > 12) {
      valido = false;
    }
  } else {
    valido = false;
  }

  return valido;
}

function validarEmail(email) {
  let validar = false;
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!expr.test(email)) validar = true;
  return validar;
}

function validar() {
  const inputNombre = document.getElementById("nombre");
  const inputApellido = document.getElementById("apellido");
  const inputEmail = document.getElementById("email");
  const selectObraSocial = document.getElementById("obras_sociales");

  const inputDia = document.getElementById("dia");
  const inputMes = document.getElementById("mes");
  const inputAnio = document.getElementById("anio");

  if (inputNombre.value == "") {
    inputNombre.style.borderColor = "red";
  } else {
    inputNombre.style.borderColor = "#cccccc";
  }
  if (inputApellido.value == "") {
    inputApellido.style.borderColor = "red";
  } else {
    inputApellido.style.borderColor = "#cccccc";
  }
  if (inputEmail.value == "") {
    inputEmail.style.borderColor = "red";
  } else {
    inputEmail.style.borderColor = "#cccccc";
  }
  if (selectObraSocial.value == "") {
    selectObraSocial.style.borderColor = "red";
  } else {
    selectObraSocial.style.borderColor = "#cccccc";
  }

  if (validarEmail(inputEmail.value)) {
    inputEmail.style.borderColor = "red";
  } else {
    inputEmail.style.borderColor = "#cccccc";
  }

  if (
    !esFechaValida(
      Number(inputDia.value),
      Number(inputMes.value),
      Number(inputAnio.value)
    )
  ) {
    inputAnio.style.borderColor = "red";
    inputMes.style.borderColor = "red";
    inputDia.style.borderColor = "red";
  } else {
    inputAnio.style.borderColor = "#cccccc";
    inputMes.style.borderColor = "#cccccc";
    inputDia.style.borderColor = "#cccccc";
  }
}

function onChangeEvent(e) {
  console.log(e);
}
