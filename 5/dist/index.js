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
const entradaTeclado_1 = require("./util/entradaTeclado");
console.log("hola mundo");
//creamos variable main que le llamamos main
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    // async significa que la funcion es asincrona lo cual es necesario para el await
    let edad;
    const valor = yield (0, entradaTeclado_1.leerTeclado)('Cual es tu edad');
    edad = parseInt(valor);
    if (edad < 18) {
        console.log(`tienes menos de 18 porque tienes ${edad}`);
    }
    else {
        console.log(`tienes mas de ${edad}`);
    }
});
//invocamos la funcion
main();
