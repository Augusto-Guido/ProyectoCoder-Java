

const user = "comprador";
const pass_comprador = "pass1234";


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
                    producto = "Moto id= 1";
                    break;
        case "2" : 
                    producto = "Moto id= 2";
                    break;
        case "3" : 
                    producto = "Moto id= 3" ;
                    break;
        case "4" : 
                    producto = "Moto id= 4"
                    break;       
        case "5" : 
                    producto = "Moto id = 5" ;
                    break;
        case "6":
                    producto ="Moto id = 6"
                    break;

         default :
                    producto = false;           

    }


   return producto ;  



}

solicitarDatos ();