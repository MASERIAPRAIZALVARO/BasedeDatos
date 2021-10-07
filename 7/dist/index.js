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
//creamos variable main que le llamamos main
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    // async significa que la funcion es asincrona lo cual es necesario para el await
    console.log("1 sumar 2 restar 3 multiplicar 4 dividir 0 salir");
    let operacion;
    let num3;
    let num4;
    const valor = yield (0, entradaTeclado_1.leerTeclado)('Elija una opcion');
    operacion = parseInt(valor);
    while (operacion != 0) {
        switch (operacion) {
            case 1:
                const num1 = yield (0, entradaTeclado_1.leerTeclado)('numero1');
                const num2 = yield (0, entradaTeclado_1.leerTeclado)('numero2');
                num3 = parseInt(num1);
                num4 = parseInt(num2);
                let A = num3 + num4;
                console.log(A);
                const valor = yield (0, entradaTeclado_1.leerTeclado)('Elija otra opcion');
                operacion = parseInt(valor);
                break;
            case 2:
                const num5 = yield (0, entradaTeclado_1.leerTeclado)('numero1');
                const num6 = yield (0, entradaTeclado_1.leerTeclado)('numero2');
                num3 = parseInt(num5);
                num4 = parseInt(num6);
                let B = num3 - num4;
                console.log(B);
                const valor1 = yield (0, entradaTeclado_1.leerTeclado)('Elija otra opcion');
                operacion = parseInt(valor1);
                break;
            case 3:
                const num7 = yield (0, entradaTeclado_1.leerTeclado)('numero1');
                const num8 = yield (0, entradaTeclado_1.leerTeclado)('numero2');
                num3 = parseInt(num7);
                num4 = parseInt(num8);
                let C = num3 * num4;
                console.log(C);
                const valor2 = yield (0, entradaTeclado_1.leerTeclado)('Elija otra opcion');
                operacion = parseInt(valor2);
                break;
            case 4:
                const num9 = yield (0, entradaTeclado_1.leerTeclado)('numero1');
                const num10 = yield (0, entradaTeclado_1.leerTeclado)('numero2');
                num3 = parseInt(num9);
                num4 = parseInt(num10);
                let D = num3 / num4;
                console.log(D);
                const valor3 = yield (0, entradaTeclado_1.leerTeclado)('Elija otra opcion');
                operacion = parseInt(valor3);
                break;
        }
    }
});
//invocamos la funcion
main();
