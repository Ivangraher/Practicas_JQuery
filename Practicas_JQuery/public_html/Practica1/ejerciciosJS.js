/*Ejercicio 2*/
/*apartado 2.4*/
function progresion1(){
    var numero;
    do{
        numero = (window.prompt("Escribe un numero"));
    }while(isNaN(numero)||numero == null||numero == "");
        numero = parseInt(numero);
    for(var i=0; i<numero+2; i+=2){
        console.log(i);
    }
}

/*apartado 2.5*/
function progresion2(){
    var numero;
    do{
        numero = (window.prompt("Escribe un numero"));
      }while(isNaN(numero)||numero == null||numero == "");
        numero = parseInt(numero);
        document.write("<ul>");
        for(var i=0; i<numero+1; i+=1){
            document.write("<li>"+i+"</li>");
        }
        document.write("</ul>");    
}

/*apartado 2.6*/
function numsuperior(){
    var numero1;  
    var numero2; 
    
    do{
    numero1 = window.prompt("Escribe el 1r numero : ");
    numero2 = window.prompt("Escribe el 2n numero : ");
} while(isNaN(numero1, numero2)||numero1 == null||numero2 == null||numero1 == ""||numero2 == "");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    if(numero1>numero2){
    document.write("El numero "+numero1+" es el mas grande");
    console.log("El numero "+numero1+" es el mas grande");
    }
    else 
    document.write("El numero "+numero2+" es el mas grande");
    console.log("El numero "+numero2+" es el mas grande");
}


/*apartado 2.7*/
function numdiaSemana(){
var dia = window.prompt("Escribe un dia de la semana");
    switch(dia){
        case "lunes":
            document.write("Lunes es el primer dia de la semana");
            break;
    
        case "martes":
            document.write("Martes es el segundo dia de la semana");
            break;
            
        case "miercoles":
            document.write("Miercoles es el tercer dia de la semana");
            break;   
        
        case "jueves":
            document.write("Jueves es el cuarto dia de la semana");
            break;
        
        case "viernes":
            document.write("Viernes es el quinto dia de la semana");
            break;
        
        case "sabado":
            document.write("Sabado es el sexto dia de la semana");
            break;
            
        case "domingo":
            document.write("Domingo es el septimo dia de la semana");
            break;
    }
}


/*apartado 2.8*/
function numRandom(){
    var randomnumero = Math.floor((Math.random()*10)+1);
    var numerointentos = 0;
    var div = document.getElementById("console");
    while(numero != randomnumero){
    var numero = parseInt(window.prompt("Escribe un numero"));
    if(numero > randomnumero){
        div.innerHTML=("El numero introducido es mas grande");
        numerointentos++;
    }
    else{
        div.innerHTML=("El numero introducido es mas pequeño");
        numerointentos++;
    }
    
    }
    div.innerHTML+=("<br>Felicidades! Has acertado el numero. Has echo " + numerointentos + " intento/s");
    
}


/*Ejercicio 3*/
/*apartado 3.9*/
function suma(){
    var numero1;
    var numero2; 
do{
    numero1 = window.prompt("Escribe el 1r numero : ");
    numero2 = window.prompt("Escribe el 2n numero : ");
} while(isNaN(numero1, numero2)||numero1 == null||numero2 == null||numero1 == ""||numero2 == "");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
var resultado = numero1 + numero2;
var div = document.getElementById("resultado");
div.innerHTML+=("El resultado de sumar " +numero1 + " + " +numero2 + " es " + resultado);
}

/*apartado 3.10*/
function resta(){
    var numero1;
    var numero2;
    do{
    numero1 = window.prompt("Escribe el 1r numero : ");
    numero2 = window.prompt("Escribe el 2n numero : ");
} while(isNaN(numero1, numero2)||numero1 == null||numero2 == null||numero1 == ""||numero2 == "");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
var resultado = numero1 - numero2;
var div = document.getElementById("resultado");
div.innerHTML+=("El resultado de restar " +numero1 + " - " + numero2 + " es " + resultado);
}

/*apartado 3.11*/
function multiplicacion(){
    var numero1;
    var numero2;
    do{
    numero1 = window.prompt("Escribe el 1r numero : ");
    numero2 = window.prompt("Escribe el 2n numero : ");
} while(isNaN(numero1, numero2)||numero1 == null||numero2 == null||numero1 == ""||numero2 == "");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
var div = document.getElementById("resultado");
var resul = numero1 * numero2;
div.innerHTML=("<ul>");
div.innerHTML+=("El resultado de multiplicar " +numero1 + " * " +numero2 + " es " + resul);
div.innerHTML+=("<li>" + numero1 + "</li>");
for(i=numero1; i<resul; i+=numero1){
var resultado = numero1+i;
div.innerHTML+=("<li>" + resultado + "</li>");
}
div.innerHTML+=("</ul>");
}

/*apartado 3.12*/
function division(){
    var numero1;
    var numero2;
    do{
    numero1 = window.prompt("Escribe el 1r numero : ");
    numero2 = window.prompt("Escribe el 2n numero : ");
} while(isNaN(numero1, numero2)||numero1 == null||numero2 == null||numero1 == ""||numero2 == ""||numero2>0);
    result = numero1/numero2;
    div = document.getElementById("alerta_resultado");
    div.innerHTML+=("<div class='alert alert-success'><strong>Resultado</strong> El resultado de dividir " +numero1 + " entre " + numero2 + " es "+ result +"</div>");
}



