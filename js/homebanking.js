//Declaración de variables
var nombreUsuario = "Tony-";
var saldoCuenta = 15000;
var limiteExtraccion = 7000;
var cambiarExtraccion = saldoCuenta;
var sumarCuenta = saldoCuenta;
var restarCuenta = saldoCuenta;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var servicio ;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
  cargarNombreEnPantalla(nombreUsuario);
  actualizarSaldoEnPantalla(saldoCuenta);
  actualizarLimiteEnPantalla(limiteExtraccion);
};

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  cambiarLimiteDeExtraccion = prompt(
    "Cambie limite de extraccion porfavor ",
    limiteExtraccion
  );

  limiteExtraccion = +cambiarLimiteDeExtraccion;

  alert("Su nuevo limite es de: " + limiteExtraccion);

  actualizarLimiteEnPantalla();
}
function extraerDinero() {
  restarCuenta = prompt("Cuanto no desea Extraer? ", saldoCuenta);
  console.log("Saldo cuenta", saldoCuenta, "restar Dinero", restarCuenta);
  if (restarCuenta % 10) {
    if (saldoCuenta > restarCuenta) {
      saldoCuenta = parseInt(saldoCuenta) - parseInt(restarCuenta);
      alert(
        "Resumen de la cuenta: " +
          "\n Has depositado: " +
          restarCuenta +
          "\n Su saldo anterior es de: 15000 " +
          "\n Saldo actual : " +
          saldoCuenta
      );
    } else {
      alert(
        "No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero"
      );
    }
  }else {
    alert(
      "Solo puede extraer billetes de  $100"
    );
  }
  actualizarSaldoEnPantalla();
}
function depositarDinero() {
  sumarCuenta = prompt("cuanto desea despositar? ", saldoCuenta); //este sirve para pedir que coloque algo en el cuadro
  saldoCuenta = parseInt(sumarCuenta) + parseInt(saldoCuenta); //es donde se guarda el resultado

  alert(
    "Resumen de la cuenta: " +
      "\n Has depositado: " +
      sumarCuenta +
      "\n Su saldo anterior es de: 15000 " +
      "\n Saldo actual : " +
      saldoCuenta
  );

  actualizarSaldoEnPantalla();
}
function pagarServicio() {

    servicio = prompt(
        "Ingrese el numero que corresponda con el servicio" + 
        "\n 1- Agua. " +
        "\n 2- Luz. " +
        "\n 3- Internet. " +
        "\n 4- Telefono. " 
    );   
    switch (servicio){
        case "1":
            alert("El servicio a pagar es Agua") ;
            break;
        case "2":
            alert("El servicio a pagar es Luz") ;
          break;
        case "3":
          alert("El servicio a pagar es Internet") ;
          break;
        case "4":
          alert("El servicio a pagar es Telefono") ;
          break;
        default:
            mensaje = "No selecciono el servicio o no se encuentra el servicio a pagar";
    }
    if (saldoCuenta< servicio){
      alert("No hay suficiente saldo disponible en tu cuenta");
    }else{

      alert("\n Has pagado el servicio de "+
      "\n Saldo anterior: $"+
      servicio+
      "\n Dinero descontado: $"+
      "\n Saldo actual: $"+
      saldoCuenta      
      );
     }
  actualizarSaldoEnPantalla();
}
function transferirDinero() {}

function iniciarSesion() {}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}
