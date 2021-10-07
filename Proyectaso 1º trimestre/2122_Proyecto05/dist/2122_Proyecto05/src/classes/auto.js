"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovil = void 0;
class Automovil {
    constructor(marca, traccion, precioBase, combustible) {
        this.marca = marca;
        this.traccion = traccion;
        this.precioBase = precioBase;
        this.combustible = combustible;
    }
    get marcaA() {
        return this.marca;
    }
    get traccionA() {
        return this.traccion;
    }
    get combustibleA() {
        return this.combustible;
    }
    get precioA() {
        let precio = this.precioBase;
        if (this.traccion == 4) {
            precio += this.precioBase * 0.30;
        }
        if (this.combustible == 'diessel') {
            precio += this.precioBase * 0.20;
        }
        return precio;
    }
    set traccionA(traccion) {
        this.traccion = traccion;
    }
}
exports.Automovil = Automovil;
