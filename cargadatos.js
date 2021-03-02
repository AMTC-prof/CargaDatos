/* Función que se ejecuta al cambiar el valor del primer select */

function cargarSelect2(valor){

    /**
     * Este array contiene los valores del segundo select
     * Los valores del mismo son tres:
     *  - El primero hace referencia al valor del primer select. Es para saber que 
     *    valores mostrar una vez se haya seleccionado una opcion en el primer select.
     *  - El segundo es valor que se asignara a dicha selección.
     *  - El tercero es el texto que se asignara.
     */
    /* alert("Valor seleccionado = " + valor) */
    var arrayValores=new Array(
        new Array(1,1,"Gandalf"),
        new Array(1,2,"Galadriel"),
        new Array(1,3,"Saruman"),
        new Array(2,1,"Bilbo"),
        new Array(2,2,"Frodo"),
        new Array(2,3,"Samsagaz"),
        new Array(3,1,"Balin"),
        new Array(3,2,"Bifur"),
        new Array(3,3,"Bofur"),
        new Array(3,4,"Bombur"),
        new Array(3,5,"Dori"),
        new Array(3,6,"Dwalin"),
        new Array(3,7,"Fili"),
        new Array(3,8,"Glóin"),
        new Array(3,9,"Kili"),
        new Array(3,10,"Nori"),
        new Array(3,11,"Óin"),
        new Array(3,12,"Ori"),
        new Array(3,13,"Thorin")
    );

    

    /* Si no hay ningun valor seleccionado.. */

    if(valor==0){

         /* Desactivamos el segundo select, cambiamos el fondo y quitamos la foto */

        document.getElementById("select2").disabled=true;
        document.getElementById("foto").style.display='none';
        
        document.body.style.background = "url('fondos/bokeh.jpg') norepeat center fixed";
       
        document.getElementById("select2").options[0]=new Option("Desactivado", "0");

    }else {
        
        /* Mostramos la foto del anillo único por defecto */

        document.getElementById("foto").style.display= 'block';

        /********
        Lanzamos la función "fondo" para cambiar el fondo de pantalla, 
        aunque podríamos haber incluido la orden aquí directamente,
         pero la reservamos por si acaso queremos introducir cambios en dicha función
        ********/

        var index = document.getElementById("select1").value;
        fondo(index);

        /* Eliminamos todos los posibles valores que contenga el select2 */

        document.getElementById("select2").options.length=0;

        /* Añadimos los nuevos valores del select 2 */

        document.getElementById("select2").options[0]=new Option("Selecciona una opcion", "0");

        /* Recorremos el bucle */
        /* console.log(arrayValores.length) */
        for(var i = 0; i < arrayValores.length; i++){
            
            /* Unicamente añadimos las opciones que pertenecen al id seleccionado del primer set */
            console.log(arrayValores[i][0]+ " == " + valor)
            if(arrayValores[i][0] == valor){
                    
                document.getElementById("select2").options[document.getElementById("select2").options.length]=new Option(arrayValores[i][2], arrayValores [i][1]);
            }
        }

        /* Habilitamos el segundo select con los valores cargados */

        document.getElementById("select2").disabled=false;
        /* alert("Valor select 2 despues del bucle for -> " + document.getElementById("select2").value); */
        /* Reiniciamos la imagen del anillo si cambiamos la raza. */

        if( document.getElementById("select2".value == 0)){

            /* Mostramos la imagen del anillo */

            document.getElementById("foto").src="img/10.jpg";
        }
    }
}


/*******
• Función que se carga al inicio de la página
*******/
function inicio(value){
    document.getElementById("watch").style.display= 'none';
    document.getElementById("reset").style.display= 'none';
    document.getElementById("foto").style.display= 'none';
} 

function seleccionado_select2(value){

    // Inicializamos las variables con las que trabajaremos
    var v1 = document.getElementById("select1");
    var valor1 = v1.options[v1.selectedIndex].value;
    var text1 = v1.options[v1.selectedIndex].text;
    var v2 = document.getElementById("select2");
    var valor2 = v2.options[v2.selectedIndex].value;
    var text2 = v2.options[v2.selectedIndex].text; 


    // Obtenemos el número de las selecciones concatenadas para el nombre de la imagen del personaje

    var ruta_foto = document.getElementById("select1").value + document.getElementById("select2").value;

    // Mostramos la foto correspondiente al personaje seleccionado

    document.getElementById("foto").src="img/" + ruta_foto + ".jpg"; 


    // Si la ruta de la foto es igual a 13...
    if(ruta_foto=="13"){
        
        // Lanzamos los siguientes comandos y funciones
        
        window.setTimeout(sauron,3000);
        
        // Bloqueamos los dos select
    
        document.getElementById("select1").disabled=true;
    
        document.getElementById("select2").disabled=true;
        
        // Mostramos el elemento HTML con id “watch”
    
        document.getElementById("watch").style.display= 'block';
        
    }else{
        window.clearTimeout(sauron);
    } 
}
// Función para cambiar el fondo de pantalla según selección
function fondo(value){
    
    if (value==1){
    document.body.style.backgroundImage = "url('fondos/rivendell.jpg')";
    }else if (value == 2){
    document.body.style.backgroundImage = "url('fondos/hobbiton.jpg')";
    }else{
    document.body.style.backgroundImage = "url('fondos/lothlorien.jpg')";
     }
}


/*******
• Función para cambiar la imagen del infiltrado por la de su
amo
• y el fondo por uno más acorde a la temática oscura de Mordor
*******/
function sauron(value){ 
   
    document.getElementById("foto").src="img/0.jpg";
    
    document.body.style.backgroundImage = "url('fondos/mordor.png')";
    
    // Cambiamos el texto con id “watch”
    
    document.getElementById("watch").innerHTML = "Has capturado al infiltrado.";
    
    // Mostramos el botón de reinicio.
    
    document.getElementById("reset").style.display= 'block';
} 
