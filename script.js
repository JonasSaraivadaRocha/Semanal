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
                document.getElementById('validou').innerHTML = "Foi digitado uma estrutura correta de IP";
                valida_classe(validaIP[0])

            }
          }
    }

}

function valida_classe(oc1) {
    if (oc1 >=1 && oc1 <=126 ){
        document.getElementById('classe').innerHTML = "Este IP é de classe A, disponível para internet";
    }
    else if (oc1 >=128 && oc1 <=191 ){
        document.getElementById('classe').innerHTML = "Este IP é de classe B, disponível para internet";
    }
    else if (oc1 >=192 && oc1 <=223 ){
        document.getElementById('classe').innerHTML = "Este IP é de classe C disponível para internet";
    }
    else if (oc1 >=224 && oc1 <=239 ){
        document.getElementById('classe').innerHTML = "Este IP é de classe D e é para Multicast (manda mensagem para vários hosts da rede), não é disponível para internet";
    }
    else if (oc1 >=240 && oc1 <=255 ){
        document.getElementById('classe').innerHTML = "Este IP é de classe E, classe reservada para testes de novas tecnologias";
    }
}


