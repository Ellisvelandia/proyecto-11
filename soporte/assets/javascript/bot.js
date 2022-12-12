var botui = new BotUI("my-botui-app");

function showMenuInicio() {
  return new Promise((responseTotal) => {
    setTimeout(() => {
      $("html, body").animate(
        {
          scrollTop: $(document).height()
        },
        "slow"
      );
    }, 1000);

    botui.message
      .bot({
        type: "html",
        content: "<div class='contentMessages'> Hola soy Qubitto <br> agente equipado con inteligencia artificial puedo responder todos los interrogantes referente a PayQubit. </div>",
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.message.bot({
          type: "html",
          content: "<div class='contentMessages'><img src='./assets/Group 276.png' class='iconBot'> Cuentame , cual de estos describe tu solicitud de contacto: </div>",
          loading: true,
          delay: 600
        });
      })
      .then(() => {
        botui.message.bot({
          type: "html",
          content: '<div class="contentOption" onclick="showDetalledOptions(1)"><br><br> <img src="./assets/Icons.png"> <h2>Máquinas de lavado</h2> </div> <div class="contentOption" onclick="showDetalledOptions(2)"><br><br> <img src="./assets/Icons (1).png"> <h2>Pagos y recargas</h2> </div> <div class="contentOption" onclick="showDetalledOptions(3)"><br><br> <img src="./assets/Icons (2).png"> <h2>Uso de la aplicación</h2> </div>',
          loading: true,
          delay: 600
        });
      });
  });
}

function showDetalledOptions(number) {
  setTimeout(() => {
    $("html, body").animate(
      {
        scrollTop: $(document).height()
      },
      "slow"
    );
  }, 1000);

  if (number == 1) {
    botui.message
      .bot({
        type: "html",
        content: "<div class='contentMessages'><img src='./assets/Group 276.png' class='iconBot'> Veo que tienes problemas con Máquinas de lavado ahora selecciona cual de estas opciones sería: </div>",
        loading: true,
        delay: 600
      })
      .then(() => {
        return botui.message.bot({
          type: "html",
          content: '<div class="arrowBack"  onclick="showMenuInicio()"> > </div> <div class="typeOptions2"> <div class="content" onclick="showMesaggesHelp(1)"> <img src="./assets/Icons (3).png"> <h1>La máquina no arranca</h1> </div> <div class="content"  onclick="showMesaggesHelp(2)"> <img src="./assets/Icons (4).png"> <h1>La máquina me cobró dos veces</h1> </div> <div class="content"  onclick="showMesaggesHelp(3)"> <img src="./assets/Icons (5).png"> <h1>No puedo escanear</h1> </div> <div class="content"  onclick="showMesaggesHelp(4)"> <img src="./assets/Icons (6).png"> <h1>Quiero hablar con un asesor</h1> </div> </div>',
          loading: true,
          delay: 600
        });
      });
  } else if (number == 2) {
    botui.message
      .bot({
        type: "html",
        content: "<div class='contentMessages'><img src='./assets/Group 276.png' class='iconBot'> Veo que tienes problemas con Pagos y recargas. Ahora, selecciona cual de estas opciones sería: </div>",
        loading: true,
        delay: 600
      })
      .then(() => {
        return botui.message.bot({
          type: "html",
          content: '<div class="arrowBack"  onclick="showMenuInicio()"> > </div> <div class="typeOptions3"> <div class="content"  onclick="showMesaggesHelp(5)"> <img src="./assets/Icons (7).png"> <h1>Recargué, descontó de mi tarjeta pero no aparece en el saldo de PayQubit</h1> </div> <div class="content" onclick="showMesaggesHelp(6)"> <img src="./assets/Icons (8).png"></div> <div class="content" onclick="showMesaggesHelp(4)"> <img src="./assets/Icons (9).png"> <h1>Quiero hablar con un asesor</h1> </div> </div>',
          loading: true,
          delay: 600
        });
      });
  } else if (number == 3) {
    botui.message
      .bot({
        type: "html",
        content: "<div class='contentMessages'><img src='./assets/Group 276.png' class='iconBot'> Veo que tienes problemas con Uso de la aplicación ahora selecciona cual de estas opciones sería: </div>",
        loading: true,
        delay: 600
      })
      .then(() => {
        return botui.message.bot({
          type: "html",
          content: '<div class="arrowBack"  onclick="showMenuInicio()"> > </div> <div class="typeOptions2"> <div class="content" onclick="showMesaggesHelp(7)"> <img src="./assets/Icons (10).png"> <h1>No puedo iniciar sesión en la aplicación</h1> </div> <div class="content" onclick="showMesaggesHelp(8)"> <img src="./assets/Icons (11).png"> <h1>¿Cómo funciona la aplicación?</h1> </div> <div class="content" onclick="showMesaggesHelp(9)"> <img src="./assets/Icons (12).png"> <h1>La aplicación no funciona bien</h1> </div> <div class="content" onclick="showMesaggesHelp(4)"> <img src="./assets/Icons (13).png"> <h1>Quiero hablar con un asesor</h1> </div> </div>',
          loading: true,
          delay: 600
        });
      });
  }
}

function showMesaggesHelp(number) {
  setTimeout(() => {
    $("html, body").animate(
      {
        scrollTop: $(document).height()
      },
      "slow"
    );
  }, 1000);

  if (number == 1) {
    botui.message
      .bot({
        type: "html",
        content: '<div class="contentMessages"> <img src="./assets/Group 276.png" class="iconBot2">Intentar en otra máquina. Retirar el dispositivo del QR de la máquina, esperar unos momentos e intentar nuevamente.<br><br> Cerrar sesión y cerrar la aplicación móvil. Esperar unos segundos, iniciar sesión e intentar de nuevo.</div>',
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.action
          .button({
            autoHide: false,
            action: [
              {
                text: "volver",
                value: "back"
              }
            ]
          })
          .then(() => {
            botui.action.hide();
            showMenuInicio();
          });
      });
  } else if (number == 2) {
    botui.message
      .bot({
        type: "html",
        content: '<div class="contentMessages"> Esto ocurre comúnmente cuando se presiona varias veces el botón de activar la máquina. <br><br> El sistema requiere un mínimo de tiempo de 5 segundos luego de la activación del servicio, para garantizar la comunicación entre la máquina y el software. Si el usuario escanea nuevamente el código de la máquina e inicia el servicio sin que se complete la activación del anterior, va a incurrir en este posible error, sin embargo se toman medidas y restricciones para evitar en lo posible este problema arrojando un mensaje al usuario "Tiene un servicio en espera de activación, una vez se complete el proceso, podrá activar otra máquina" <br><br> Para cumplir con un buen proceso de activación del servicio, le invitamos a seguir el paso a paso: <br><br> Iniciar sesión Presionar el botón del scanner en la parte inferior central de la pantalla, Apuntar la cámara al QR a unos 30 o 45 cm de este. Esperar el mensaje de respuesta. Retirar la cámara del QR. Si la lectura es exitosa activar el servicio. Esperar mínimo 5 segundos para la activación del servicio. Disfrutar del servicio. </div>',
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.action
          .button({
            autoHide: false,
            action: [
              {
                text: "volver",
                value: "back"
              }
            ]
          })
          .then(() => {
            botui.action.hide();
            showMenuInicio();
          });
      });
  } else if (number == 3) {
    botui.message
      .bot({
        type: "html",
        content: '<div class="contentMessages"> La aplicación de PayQubit requiere una serie de permisos especiales para tener acceso a las características y componentes del dispositivo, como la cámara y los archivos. Para la resolución del problema "No puedo escanear" verifique lo siguiente: <br><br> Permisos de para el uso de la cámara para la aplicación <br><br> Tener la última versión instalada, disponible en: <br><br> iOs -App Store: https://apple.co/3iwIKBM Android -Play Store: https://bit.ly/2YoBkJO Si los permisos están concedidos verifique lo siguiente: <br><br> Verifique el mensaje mostrado por la aplicación al momento de escanear un código QR Apunte la cámara del dispositivo al QR hasta que se realice la acción Si la lectura del QR no es exitosa, retire la cámara del QR, espere unos segundo e inténtelo nuevamente Tenga en cuenta que para una mejor experiencia, debe retirar la cámara luego de cada lectura. <br><br> Si los permisos están concedidos y la última versión correspondiente a su sistema operativo esta instalada, proceda a realizar una consulta al chat de soporte. </div>',
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.action
          .button({
            autoHide: false,
            action: [
              {
                text: "volver",
                value: "back"
              }
            ]
          })
          .then(() => {
            botui.action.hide();
            showMenuInicio();
          });
      });
  } else if (number == 4) {
    fetch("https://conexioncibernetica.com/star/qubitto/horachile.php")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.permiso == 1) {
          const params = new URLSearchParams(window.location.search);
          email = params.get("email");
          fname = params.get("fname");
          lname = params.get("lname");
          phone = params.get("phone");
          window.open(`https://api.whatsapp.com/send?phone=573022636463&text=Para%20agilizar%20favor%20comparta%20sus%20datos%3A%0A*Nombre:*%20${fname}%20${lname}%0A*Celular:*%20${phone}%0A*E-mail:*%20${email}`, "_parent");
        } else {
          botui.message.bot({
            type: "html",
            content: '<div class="contentMessages">No hay ningún agente disponible: Recuerda que nuestro horario de atención funciona así: de lunes a sábado de 09:00 A.M. a 09:00 P.M. y domingos de 10:00 A.M. a 07:00 P.M.</div>',
            loading: true,
            delay: 600
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } else if (number == 5) {
    botui.message
      .bot({
        type: "html",
        content: '<div class="contentMessages"> PayQubit recibe sus abonos y recargas originadas desde su cuenta bancaria, tarjetas de crédito o débito o cualquier otro medio de pago, mediante la intermediación de TransBank. Al respecto se debe considerar lo siguiente: <br><br> En algunos casos por cuestiones de protocolos de seguridad, su banco retrasa o rechaza la autorización de transferencias y esta queda retenida en servidores de su banco, hasta que se revierta y le sea reintegrado su dinero en su cuenta. <br><br> En otras ocasiones, también debido a protocolos de seguridad, Transbank retiene en sus servidores algunas transacciones que no llegan a su cuenta virtual de PayQubit. Estas son revertidas a su cuenta bancaria, según un procedimiento interno de Transbank, que puede tomar minutos y en algunos casos hasta algunas horas. <br><br> Es importante subrayar que en ambas instancias fallidas, PayQubit no tiene injerencia alguna y no tiene como evitarlas. En el caso de Transbank el error standard para estas operaciones, está en un rango cercano al 1% del total de transacciones. Es importante considerar que su dinero en ningún caso estará en peligro de perderse, dado que están garantizadas tanto por su banco como por Transbank según corresponda. <br><br> PayQubit así como toda plataforma de pagos que opera en Chile, (Ej. Cornershop, Rappy, tiendas de retail, etc.), tiene dependencia de las plataformas tecnológicas mencionadas. </div>',
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.action
          .button({
            autoHide: false,
            action: [
              {
                text: "volver",
                value: "back"
              }
            ]
          })
          .then(() => {
            botui.action.hide();
            showMenuInicio();
          });
      });
  } else if (number == 6) {
    botui.message
      .bot({
        type: "html",
        content: '<div class="contentMessages"> Las plataformas tecnológicas de los diversos intermediarios de cada operación, en ocasiones tienen limitaciones por incompatibilidades de los sistemas operativos de algunos teléfonos. Recomendamos en estos casos, actualizar dichos sistemas operativos a las últimas versiones, tanto en Apple Store para sistemas IOS, como en Play Store para Android. <br><br> También podría ser un problema del almacenamiento de archivos temporales en la caché del mismo. En estos casos intente borrar el cache y archivos temporales, salir de la aplicación y volver a ingresar con sus credenciales originales.',
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.action
          .button({
            autoHide: false,
            action: [
              {
                text: "volver",
                value: "back"
              }
            ]
          })
          .then(() => {
            botui.action.hide();
            showMenuInicio();
          });
      });
  } else if (number == 7) {
    botui.message
      .bot({
        type: "html",
        content: '<div class="contentMessages"> Las posibles soluciones al problema al iniciar sesión son: <br><br> Problemas de conexión: Valide y este seguro de tener una conexión a internet por red wi-fi o por red de datos móviles Token vencido: PayQubit utiliza la tecnología de validación de identidades por medio de tokens que expiran con el tiempo, si uno de los mensajes mostrados por la aplicación es "Su token ha expirado" le recomendamos cerrar sesión e ingresar nuevamente con su usuario y contraseña. <br><br> Contraseña incorrecta: verifique las mayúsculas (en caso de tenerlas) y caracteres especiales Cerrar la aplicación móvil. Esperar unos segundos, iniciar sesión e intentar de nuevo. Tener la última versión instalada, disponible en: <br><br> iOs -App Store: https://apple.co/3iwIKBM <br><br> Android -Play Store: https://bit.ly/2YoBkJO </div>',
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.action
          .button({
            autoHide: false,
            action: [
              {
                text: "volver",
                value: "back"
              }
            ]
          })
          .then(() => {
            botui.action.hide();
            showMenuInicio();
          });
      });
  } else if (number == 8) {
    botui.message
      .bot({
        type: "html",
        content: '<div class="contentMessages"> Payqubit es una solución que se ejecuta en un proceso rápido y sencillo, con solo escanear un código QR tendrá acceso a la activación de un servicio u obtener un producto, elige la máquina de tu preferencia y comienza a disfrutar de esta solución. El funcionamiento de la aplicación esta basado en un proceso finito que consiste en Escanear un código QR. <br><br> Tener la última versión instalada, disponible en: <br><br> iOs -App Store: https://apple.co/3iwIKBM <br><br> Android -Play Store: https://bit.ly/2YoBkJO <br><br> Realice el proceso de registro para acceder a la aplicación. <br><br> Recargue saldo a su billetera a través de nuestra plataforma de pagos y recargas <br><br> Ubique un establecimiento afiliado a Payqubit, abra la aplicación y escanee el código QR. <br><br> Active el servicio y disfrute. </div>',
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.action
          .button({
            autoHide: false,
            action: [
              {
                text: "volver",
                value: "back"
              }
            ]
          })
          .then(() => {
            botui.action.hide();
            showMenuInicio();
          });
      });
  } else if (number == 9) {
    botui.message
      .bot({
        type: "html",
        content: '<div class="contentMessages">',
        loading: true,
        delay: 600
      })
      .then(() => {
        botui.action
          .button({
            autoHide: false,
            action: [
              {
                text: "volver",
                value: "back"
              }
            ]
          })
          .then(() => {
            botui.action.hide();
            showMenuInicio();
          });
      });
  }
}

showMenuInicio();
