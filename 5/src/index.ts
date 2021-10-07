import { leerTeclado } from "./util/entradaTeclado";
console.log("hola mundo")
//creamos variable main que le llamamos main
let main = async () => {
// async significa que la funcion es asincrona lo cual es necesario para el await
let edad : number
    const valor = await leerTeclado('Cual es tu edad')
     edad = parseInt (valor)   
    
    if (edad < 18)
    {
        console.log(`tienes menos de 18 porque tienes ${edad}`)
    } else
    {
        console.log (`tienes mas de ${edad}`)
    }
}
//invocamos la funcion
main();