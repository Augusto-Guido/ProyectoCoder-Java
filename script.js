

const user = "comprador";
const pass_comprador = "pass1234";


function Moto (marca, modelo, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
}

let moto1 = new Moto ("KTM", "200 Ng", 5.380)
let moto2 = new Moto ("KTM", "200", 4.100)
let moto3 = new Moto ("KTM", "Adventure 390", 13.000)
let moto4 = new Moto ("KTM", "250F", 21.000)
let moto5 = new Moto ("KTM", "200 Ng", 10.998)
let moto6 = new Moto ("KTM", "200 Ng", 4.300)


let edad = prompt ("Ingrese su edad")

if (edad < 18){
    console.log("no pasa")
}else{
    console.log("puede pasar, usted es mayor")
}


function  solicitarDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");


    if (validarDatos (usuario,pass)){

        iniciarCarrito();


    }else{

        let mensaje = "ingresar correctamente los siguientes datos: \n"

        if(usuario != user){
            mensaje+="Usuario"
        }
        if(pass !=pass_comprador){
            mensaje +="\nContraseña"
        }
    
        alert(mensaje);

    }




}



function validarDatos(usuario,pass){


    if (usuario ===  user && pass === pass_comprador ){


        return true ;

    }else {


        return false ;

    }





}


function iniciarCarrito(){


    let lista = "" ;

    let finalizar_carrito = false ;


    while (!finalizar_carrito){


        let cod = prompt("Ingrese codigo de producto");
        let producto = obtenerProducto(cod);


        if (producto){

            console.log("producto agregado con exito :"+producto);
            lista += "\n"+producto;


        }else{

            if (cod === null){

                finalizar_carrito = true ;


            }else {


                alert("Ingrese un id de producto valido");
            
            }

        }

    }

    if (lista != ""){

        let resp = confirm ("Desea finalizar la compra de :"+lista);
        if (resp){

            alert("Gracias por haber adquirido los siguientes productos: " + lista);


        }


    }








}



function obtenerProducto(cod){ 


    let producto  ;
    switch(cod){

        case "1" : 
                    producto = "KTM Duke 200 Ng";
                    break;
        case "2" : 
                    producto = "KTM duke 200";
                    break;
        case "3" : 
                    producto = "KTM Adventure 390" ;
                    break;
        case "4" : 
                    producto = "KTM 250F"
                    break;       
        case "5" : 
                    producto = "KTM Duke 390" ;
                    break;
        case "6":
                    producto ="KTM RC 200"
                    break;

         default :
                    producto = false;           

    }


   return producto ;  



}

solicitarDatos ();