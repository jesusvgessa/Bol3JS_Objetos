function Edificio(calle, num, codPos) {
    //Propiedades:
    this.calle = calle;
    this.num = num;
    this.codPos = codPos;
    this.planta = new Array();

    //Metodos:
    //Añadir plantas y puertas
    this.agregarPlantasYPuertas = function(numplantas, puertas) {
        if (numplantas > 0 && puerta > 0) {
            for (var i = 0; i <= numplantas; i++) {
                var planta = i;
                for (var f = 1; f <= puertas; f++) {
                    var puerta = f;
                    var piso = [planta, puerta];
                    this.planta.push(piso);
                } //Fin Para
            } //Fin Para
        } else {
            alert("Debe introducir un numero de plantas y puertas valido.")
        } //Fin Si
    };

    //setters
    this.modificarNumero = function(numero) {
        this.num = numero;
    };
    this.modificarCalle = function(calle) {
        this.calle = calle;
    };
    this.modificarCodigoPostal = function(codigo) {
        this.codPos = codigo;
    };

    //getters
    this.imprimeCalle = function() {
        return this.calle;
    };
    this.imprimeNumero = function() {
        return this.num;
    };
    this.imprimeCodigoPostal = function() {
        return this.codPos;
    };

    //Añadir propietarios
    this.agregarPropietario = function(nombre, planta, puerta) {
        if (nombre == "") {
            alert("Debe introducir un nombre.");
        } else if (planta < 0 || planta > this.planta.length) {
            alert("La planta debe ser mayor o igual que 0 y menor que " + this.planta.length);
        } else if (puerta < 1 || puerta > this.planta[-1][1]) {
            alert("El numero de la puerta debe ser mayor que 0 y menor que " + this.planta[-1][1]);
        } else {

        } //Fin si
    };
    this.imprimePlantas = function() {

    };
}