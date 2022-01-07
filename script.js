let endereco = "";

function capturar() {
    endereco = document.getElementById('IP').value;
     validaIP= endereco.split(".");

    if (validaIP.length < 4 || validaIP.length > 4) {
        document.getElementById('validou').innerHTML = "O valor digitado não é um endereço IP válido";
    } 

    else {

        for(var i = 0; i < validaIP.length; i++) {
            if (isNaN(validaIP[i]) === true) {
                document.getElementById('validou').innerHTML = "O valor digitado não é um endereço IP válido";
                break;
            }
            if (parseInt(validaIP[i]) < 0 || parseInt(validaIP[i]) >254) {
                    document.getElementById('validou').innerHTML = "O valor digitado não é um endereço IP válido";
                    break;
                }
            else {
                document.getElementById('validou').innerHTML = "IP válido";
            }
          }
    }

}