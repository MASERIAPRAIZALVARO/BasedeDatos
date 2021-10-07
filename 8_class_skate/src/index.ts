class Skate {
    private x: string
    private y: number 
    private z: number 
    private _o: number 
    constructor(){
        this.x= ""
        this.y= 0
        this.z= 0
        this._o= 0
    }
    gama(x:string){
        if (x='family') {
            this.z = 0.4
        }
        else if (x='enjoy') {
            this.z = 0.10
        }
        else {
            this.z = 0.21
        }
    }
    ancho(y:number){
        if (y > 8.5) {
            this.y = 100
        }
        else if (y > 7.5) {
            this.y = 80
        }
        else {
            this.y = 50
        }
    }
    precio(){
        this._o = this.y*this.z + this.y
    }
    get O (){
        return this._o
    }
 }  

 let S1 : Skate
 S1= new Skate () 
S1.gama('family')
S1.ancho(10)
S1.precio()
console.log(`mamahuevo tu tabla vale: ${S1.O}`)