import { leerTeclado } from "./util/entradaTeclado";
//creamos variable main que le llamamos main
let main = async () => {
// async significa que la funcion es asincrona lo cual es necesario para el await
console.log("1 sumar 2 restar 3 multiplicar 4 dividir 0 salir")
let operacion : number
let num3: number
let num4: number
    const valor = await leerTeclado('Elija una opcion')
     operacion = parseInt (valor)   
    while (operacion!=0){
        switch(operacion){
            case 1:
                const num1 = await leerTeclado('numero1')
                const num2 = await leerTeclado('numero2')
                num3 = parseInt (num1)
                num4 = parseInt (num2)
                let A = num3 + num4
                console.log(A)
                const valor = await leerTeclado('Elija otra opcion')
                operacion = parseInt (valor)
                break;
            case 2:
                const num5 = await leerTeclado('numero1')
                const num6 = await leerTeclado('numero2')
                num3 = parseInt (num5)
                num4 = parseInt (num6)
                let B = num3 - num4
                console.log(B)
                const valor1 = await leerTeclado('Elija otra opcion')
                operacion = parseInt (valor1)
                break;
             case 3:
                const num7 = await leerTeclado('numero1')
                const num8 = await leerTeclado('numero2')
                num3 = parseInt (num7)
                num4 = parseInt (num8)
                let C = num3 * num4
                console.log(C)
                const valor2 = await leerTeclado('Elija otra opcion')
                operacion = parseInt (valor2)
                break;
            case 4:
                const num9 = await leerTeclado('numero1')
                const num10 = await leerTeclado('numero2')
                num3 = parseInt (num9)
                num4 = parseInt (num10)
                let D = num3 / num4
                console.log(D)
                const valor3 = await leerTeclado('Elija otra opcion')
                operacion = parseInt (valor3)
                break;

        }
    }
}
//invocamos la funcion
main();
