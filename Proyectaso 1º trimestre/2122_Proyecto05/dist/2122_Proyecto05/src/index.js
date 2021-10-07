"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auto_1 = require("./classes/auto");
const entradaTeclado_1 = require("./util/entradaTeclado");
const menuPral_1 = require("./util/menuPral");
const nuevo = () => __awaiter(void 0, void 0, void 0, function* () {
    let automovil;
    const marca = yield (0, entradaTeclado_1.leer)('\nMarca');
    const combustible = yield (0, entradaTeclado_1.leer)('Combustible (gasolina o diessel)');
    const traccion = parseInt(yield (0, entradaTeclado_1.leer)('Tracción (2 o 4)'));
    const precioBase = parseInt(yield (0, entradaTeclado_1.leer)('Precio base'));
    automovil = new auto_1.Automovil(marca, traccion, precioBase, combustible);
    return automovil;
});
const mostrar = (automovil) => {
    if (automovil != undefined) {
        console.log(`\nDatos del automóvil:`);
        console.log(`Marca: ${automovil.marcaA}`);
        console.log(`Tracción: ${automovil.traccionA}`);
        console.log(`Combustible: ${automovil.combustibleA}`);
        console.log(`Precio: ${automovil.precioA}`);
    }
    else {
        console.log(`\nAutomovil no creado`);
    }
};
const actualizar = (automovil) => __awaiter(void 0, void 0, void 0, function* () {
    if (automovil != undefined) {
        automovil.traccionA = parseInt(yield (0, entradaTeclado_1.leer)('Tracción (2 o 4)'));
    }
    else {
        console.log(`\nAutomovil no creado`);
        try {
            console.log(`Precio: ${automovil.precioA}`);
            // Si "strictNullChecks": false,  me permite. A true no me deja el compilador
            // usar automovil aun cuando es undefined pero tendría que controlar el error 
            // en ejecución para cuando lo fuera
            // Esto es una prueba.
        }
        catch (err) {
            console.log(`NO CREADO--- ${err}`);
        }
    }
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    let auto;
    //mientras no asigne valor será undefined
    do {
        n = yield (0, menuPral_1.menuPral)();
        switch (n) {
            case 1:
                auto = yield nuevo();
                break;
            case 2:
                mostrar(auto);
                break;
            case 3:
                yield actualizar(auto);
                break;
            case 0:
                console.log('\nAdios');
        }
    } while (n != 0);
});
main();
