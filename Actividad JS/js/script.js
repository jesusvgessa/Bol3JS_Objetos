function Edificio(calle, num, codPos) {
    //Propiedades:
    this.calle = calle;
    this.num = num;
    this.codPos = codPos;
    this.planta = new Array();

    //Metodos:
    this.agregarPlantasYPuertas = function(numplantas, puertas) {
        if (numplantas > 0 && puerta > 0) {
            for (var i = 0; i <= numplantas; i++) {
                var piso = new Array(puertas);
                this.planta.push(piso);
                // for (var f = 1; f <= puertas; f++) {
                //     var puerta = f;
                //     var piso = [planta, puerta];
                //     this.planta.push(piso);
                // } //Fin Para
            } //Fin Para
        } else {
            //Mensaje de que debe introducir mas numplantas/puertas
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

    this.agregarPropietario = function(nombre, planta, puerta) {
        //Array de plantas, y dentro las puertas nombre
        if (planta >= 0 && planta < this.planta.length) {
            this.planta[planta][puerta] = nombre;
        }
    };
    this.imprimePlantas = function() {

    };
}