export class Automovil{
    private marca: string
    private traccion: number
    private combustible: string
    private precioBase: number
    constructor(    
        marca: string, 
        traccion: number, 
        precioBase: number,
        combustible: string
    ){
        this.marca = marca
        this.traccion = traccion
        this.precioBase = precioBase
        this.combustible = combustible
    }
    public get marcaA(){
        return this.marca
    }
    get traccionA(){
        return this.traccion
    }
    get combustibleA(){
        return this.combustible
    }
    get precioA(): number{
        let precio: number = this.precioBase
        if (this.traccion == 4){
            precio += this.precioBase * 0.30
        }
        if (this.combustible == 'diessel'){
            precio += this.precioBase * 0.20
        }
        return precio
    }
    set traccionA(traccion: number){
        this.traccion = traccion
    }
}