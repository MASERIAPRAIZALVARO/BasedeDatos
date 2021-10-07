"use strict";
class Skate {
    constructor() {
        this.x = "";
        this.y = 0;
        this.z = 0;
        this._o = 0;
    }
    gama(x) {
        if (x = 'family') {
            this.z = 0.4;
        }
        else if (x = 'enjoy') {
            this.z = 0.10;
        }
        else {
            this.z = 0.21;
        }
    }
    ancho(y) {
        if (y > 8.5) {
            this.y = 100;
        }
        else if (y > 7.5) {
            this.y = 80;
        }
        else {
            this.y = 50;
        }
    }
    precio() {
        this._o = this.y * this.z + this.y;
    }
    get O() {
        return this._o;
    }
}
let S1;
S1 = new Skate();
S1.gama('family');
S1.ancho(10);
S1.precio();
console.log(`mamahuevo tu tabla vale: ${S1.O}`);
