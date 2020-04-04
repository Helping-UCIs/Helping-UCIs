/**
 * @param {String} idType - String con el tipo de id elegido
 * @param {String} id - Contenido con el ID (ej DNI: "26324869Y")
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
            return letra[numero % letra.length] == letraDNI;//Si es válido
        case "Pasaporte":
            return /^[A-Z][0-9]{8}$/.test(id); //Regex expression
        case "NIE":
            return /^[XYZ]\d{7,8}[A-Z]$/.test(id); //Regex expression
        case "Nº Seguridad Social":
            //No sé cómo es el formato :S
            return true;
        case "Otro":
            return false; //Borrar cuando se sepa el id del textbox
            //return document.getElementById(/* ID del texbox */).value != "";
    }
    return false; //Si llega aquí no es ninguno de los anteriores.
}


function isValidData(dataType, ...data){
    switch(dataType){
        case "Temperatura":
            // Temp: double
        case "Presión Arterial":
            //2 valores: Sistólica: double y diastólica: double
        case "Ferritina":
            //Ferritina: double
        case "Dimero D":
            //Dimero D: double
        case "Linfocitos":
            //Linfocitos: int
        case "Proteina C":
            //Proteína C: double
        case "Fibrinogeno":
            //Fibrinogeno: double
        case "Saturación Oxígeno":
            //Satu oxi: double
        case "RX Torax":
            //PENDIENTE POR DETERMINAR
    }
}