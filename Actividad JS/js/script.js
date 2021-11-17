function generarEdificios() {
    var edificioA = new Edificio("Garcia Prieto", 58, 15706);
    var edificioB = new Edificio("Camino Caneiro", 29, 32004);
    var edificioC = new Edificio("San Clemente", "s/n", 15705);
    var sMensaje = document.createElement('p');
    sMensaje.innerHTML = "El código postal del edificio A es: " + edificioA.imprimeCodigoPostal() + ".";
    document.body.appendChild(sMensaje);
    var sMensaje = document.createElement('p');
    sMensaje.innerHTML = "La calle del edificio C es: " + edificioC.imprimeCalle() + ".";
    document.body.appendChild(sMensaje);
    var sMensaje = document.createElement('p');
    sMensaje.innerHTML = "El edificio B está situado en la calle " + edificioB.imprimeCalle() + " número " + edificioB.imprimeNumero() + ".";
    document.body.appendChild(sMensaje);
    edificioA.agregarPlantasYPuertas(2, 3);
    edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
    edificioA.agregarPropietario("Luisa Martinez", 1, 2);
    edificioA.agregarPropietario("Marta Castellón", 1, 3);
    edificioA.agregarPropietario("Antonio Pereira", 2, 2);
    var sListado = document.createElement('p');
    sListado.innerHTML = "Listado de propietarios del edificio calle " + edificioA.imprimeCalle() + " número " + edificioA.imprimeNumero();
    sListado.setAttribute("font-weight", "bold");
    document.body.appendChild(sListado);
    edificioA.imprimePlantas();
    edificioA.agregarPlantasYPuertas(1, 3);
    edificioA.agregarPropietario("Pedro Meijide", 3, 2);
    document.body.appendChild(sListado);
    edificioA.imprimePlantas();
}

function Edificio(calle, num, codPos) {
    //Propiedades:
    this.calle = calle;
    this.num = num;
    this.codPos = codPos;
    this.planta = new Array();
    var sMensaje = document.createElement('p');
    sMensaje.innerHTML = "Construido nuevo edificio en calle: " + this.calle + " nº: " + this.num + ", C.P.: " + this.codPos;
    document.body.appendChild(sMensaje);

    //Metodos:
    //Añadir plantas y puertas
    this.agregarPlantasYPuertas = function(numplantas, puertas) {
        if (numplantas > 0 && puerta > 0) {
            for (var i = this.planta.length + 1; i < this.planta.length + 1 + numplantas; i++) {
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
            var i = 0;
            var j = 0;
            //Recorro todos los array, y el primer numero que corresponde con la planta
            while (this.planta[i][j] != planta) {
                i++;
            } //Fin Mientras
            j++;
            //Sigo recorriendo, pero comparando com las puertas
            while (this.planta[i][j] != puerta) {
                i++;
            } //Fin Mientras
            //Cuando la tengo, compruebo si tiene ya propietario, si tiene borro y pongo el nuevo,
            //si no, lo añado.
            if (this.planta[i].length == 3) {
                this.planta[i].pop();
                this.planta[i].push(nombre);
            } else {
                this.planta[i].push(nombre);
            } //Fin Si
            var sMensaje = document.createElement('p');
            sMensaje.innerHTML = nombre + " es ahora el propietario de la puerta " + this.planta[i][j] + " de la planta " + this.planta[i][j - 1] + ".";
            document.body.appendChild(sMensaje);
        } //Fin si
    };

    this.imprimePlantas = function() {
        for (var i = 0; i <= this.planta; i++) {
            var sMensaje = document.createElement('p');
            if (this.planta[i].length == 3) {
                sMensaje.innerHTML = "El propietario del piso " + this.planta[i][1] + " de la planta " + this.planta[i][0] + " es:" + this.planta[i][2] + ".";
            } else {
                sMensaje.innerHTML = "El propietario del piso " + this.planta[i][1] + " de la planta " + this.planta[i][0] + " es: VACÍO.";
            } //Fin Si
            document.body.appendChild(sMensaje);
        } //Fin Para
    };
}