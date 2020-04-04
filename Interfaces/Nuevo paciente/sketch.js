/**
 * 
 * @param {string} id - String con el tipo de id elegido
 */

function isValidID(idType, id){
    switch(idType){
        case "DNI":
            if(!(/^(\d{8})([A-Z])$/.test(id))){ //Si no cumple el formato pedido
                return false;
            }
            let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
            let numero = parseInt(id.substring(0, id.length - 1));
            let letraDNI = id.substring(id.length - 1).toUpperCase(); //Pasa a mayúsculas
            return letra[numero % letra.length] == letraDNI;
        case "Pasaporte":
            return /^[A-Z][0-9]{8}$/.test(id);//Regex expression
        case "NIE":

        case "Nº Seguridad Social":
            return true;
        case "Otro":
            return false;//Borrar cuando se sepa el id del textbox
            //return document.getElementById(/* ID del texbox */).value != "";
    }
    return false; //Si llega aquí no es ninguno de los anteriores.
}
