import { Automovil } from './classes/auto'
import { leer } from './util/entradaTeclado'
import {menuPral} from './util/menuPral'

const nuevo = async () =>  {
    let automovil: Automovil
    const marca = await leer('\nMarca')
    const combustible = await leer('Combustible (gasolina o diessel)')
    const traccion = parseInt( await leer('Tracción (2 o 4)') )
    const precioBase = parseInt( await leer('Precio base') )
    automovil = new Automovil(marca, traccion, precioBase, combustible)
    return automovil
}

const mostrar = (automovil: Automovil | undefined) => {
    if (automovil != undefined){
        console.log(`\nDatos del automóvil:`)
        console.log(`Marca: ${automovil.marcaA}`)
        console.log(`Tracción: ${automovil.traccionA}`)
        console.log(`Combustible: ${automovil.combustibleA}`)
        console.log(`Precio: ${automovil.precioA}`)
    }else{
        console.log(`\nAutomovil no creado`)
    }
}

const actualizar = async (automovil: Automovil | undefined) => {
    if (automovil != undefined){
        automovil.traccionA = parseInt( await leer('Tracción (2 o 4)') )
    }else{
        console.log(`\nAutomovil no creado`)
        try{
            console.log(`Precio: ${automovil.precioA}`)
            // Si "strictNullChecks": false,  me permite. A true no me deja el compilador
            // usar automovil aun cuando es undefined pero tendría que controlar el error 
            // en ejecución para cuando lo fuera
            // Esto es una prueba.
        }catch(err){
            console.log(`NO CREADO--- ${err}`)
        }
        
    }
}

const main = async () => {
    let n: number
    let auto: Automovil | undefined
    //mientras no asigne valor será undefined
    do {
        n = await menuPral()
        switch(n){
            case 1:
                auto = await nuevo()
                break
            case 2:
                mostrar(auto)
                break
            case 3:
                await actualizar(auto)
                break
            case 0:
                console.log('\nAdios')
        }
    }while (n != 0)
}
main()

