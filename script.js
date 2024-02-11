
//localStorage.clear()
let jugadores =[[],[],[],[]]
let turnos= 0;

let puntaje1=0
let puntaje2=0
let puntaje3=0
let puntaje4=0
let puntajes=[puntaje1, puntaje2,puntaje3,puntaje4]

let nombre1=""
let nombre2=""
let nombre3=""
let nombre4=""

let nombres=[nombre1,nombre2,nombre3,nombre4]

let Dimension= document.getElementById("Dimension")

let ruleta= document.getElementById("Ruleta")

let titulo = document.getElementById("titulo")
titulo.setAttribute("hola",1)

///let aver=JSON.parse(localStorage.getItem("Ganadores"))
//aver.push(1)

//localStorage.setItem("Ganadores",JSON.stringify(aver))

//console.log(JSON.parse(localStorage.getItem("Ganadores")))

let turno=document.getElementById("turno")
let primero=document.getElementById("1")
let segundo=document.getElementById("2")
let tercero=document.getElementById("3")



const grande = document.querySelector(".grande")
const punto =  document.querySelectorAll(".punto")


punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -25

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})





















let boton= document.getElementById("Jugar")
boton.disabled=true;

function BotonReiniciar(){

    let reiniciar=document.getElementById("BotonReiniciar")
    let formulario=document.getElementById("formularioNombres")
    
    reiniciar.addEventListener('click', () => {

    puntajes=[0,0,0,0]
    turnos=0;

    nombres=[]
    jugadores =[[],[],[],[]]
    formulario.nombre1.value=""
    formulario.nombre2.value=""
    formulario.nombre3.value=""
    formulario.nombre4.value=""
    const zonaTableros= document.getElementById("Tableros")


    while (zonaTableros.firstChild) {
        zonaTableros.removeChild(zonaTableros.firstChild);
      }


      boton.disabled=true; 
      ruleta.disabled=false
    
        tercero.style.display = "none";
        segundo.style.display = "flex";
        acutualizarGanadores()
    })
    

}





function BotonJuego(){
    
    let ermg= document.getElementById("Jugar")


    ermg.addEventListener('click', () => {

       
            const numero= document.getElementById("Dimension").value;
            
            //carrousel
            const zonaTableros= document.getElementById("Tableros")
            nombres[0]=document.getElementById("nombre1").value
            nombres[1]=document.getElementById("nombre2").value
            nombres[2]=document.getElementById("nombre3").value
            nombres[3]=document.getElementById("nombre4").value







            for (let i = 0; i < 4; i++) {

                const contenedorJuegoBingo= document.createElement("div")
                
                contenedorJuegoBingo.className="contenedorJuegoBingo"

                const contenedorNombre= document.createElement("h2")
                contenedorNombre.className="contenedorNombre"

                
                contenedorNombre.innerText=`${nombres[i]}`

                const contenedorJugador= document.createElement("div")
                contenedorJugador.className="contenedorJugador"
                
                const puntos= document.createElement("h2")
                puntos.innerText="0"
                puntos.className="puntos"
                const Carton= document.createElement("div")
                Carton.className= "carton"

                Carton.id= `${i}`

                let player= i;
        
                let esta=[];
                for (let i = 0; i < numero; i++) {
                    const fila= document.createElement("div")
                    fila.className="fila"
                    let row=i;
                    let rowArray=[];
                    
                    for (let i = 0; i < numero; i++) {

                        let boxi=i;
                        let random = aleatorio(50, 1)
                        while(esta.includes(random)){
                            console.log("Hola")
                            random = aleatorio(50, 1)
                        }
                        esta.push(random)
                        const cajita= document.createElement("h2")
                        cajita.className="caja"
                        cajita.innerText=`${random}`
                        cajita.setAttribute("seleccionado",false)
                        
                        rowArray.push(cajita)
                        






                        fila.appendChild(cajita)
                    }
                    jugadores[player].push(rowArray)
                    Carton.appendChild(fila)
                }
                
                contenedorJugador.appendChild(Carton)
                contenedorJugador.appendChild(puntos)
                
                contenedorJuegoBingo.appendChild(contenedorNombre)
                contenedorJuegoBingo.appendChild(contenedorJugador)
                //contenedor juegoBingo es cada uno de los elementos del carrousel
                zonaTableros.appendChild(contenedorJuegoBingo)
            }


            
            primero.style.display = "none";
            tercero.style.display = "flex"
 
    })


}

function irMenu1(){

    let boton= document.getElementById("Menu")
    boton.addEventListener('click', () => {

        segundo.style.display = "none";
        primero.style.display = "flex"


    })
}

irMenu1()

function validarInputs(){
    let formulario= document.getElementById("formularioNombres")
    
    formulario.addEventListener("keyup",()=>{


        if(formulario.nombre1.value!="" && formulario.nombre2.value!="" && formulario.nombre3.value!="" && formulario.nombre4.value!="" 
        && Dimension.value >=3 && Dimension.value <=5){
            boton.disabled=false;
    
        }
    
        
        
    })

    Dimension.addEventListener("change",()=>{
        if(Dimension.value>5){
            Dimension.value=5;
        }
        if(Dimension.value<3){
            Dimension.value=3;
        }
        
        if(formulario.nombre1.value!="" && formulario.nombre2.value!="" && formulario.nombre3.value!="" && formulario.nombre4.value!="" 
        && Dimension.value >=3 && Dimension.value <=5){
            boton.disabled=false;
    
        }
        
    })


    
    

}
validarInputs()


function botonRuleta(){

   
    
    
    ruleta.addEventListener('click', () => {

        

        if(revisarGanador()==1){
            

            agregarAlocalStorage(regresarGanador());
            

        }else{
        
            if(turnos<25){
        let numero= aleatorio(50, 1)
        
        let numeroSalio= document.getElementById("numeroQueSalio")
        numeroSalio.innerText=numero
        

        for (let i = 0; i < jugadores.length; i++) {
            let number= i;
            
            
            for (let i = 0; i < jugadores[number].length; i++) {
                let fila=i;
              
                for (let i = 0; i < jugadores[number][fila].length; i++) {
                    
                if(jugadores[number][fila][i].innerText== numero){
                    
                    jugadores[number][fila][i].setAttribute("seleccionado",true);
                    jugadores[number][fila][i].style.color="red";

                }
            }

            
                
            }
            
        }
        
        turnos++;
        puntajes=[0,0,0,0]
        revisarFilas()
        revisarColumnas()
        revisarDiagonales()


    }
}
    if(turnos==25){
        console.log("si paso")
        

        

        if( determinarGanadoresPuntos(puntajes).length == 1){

            agregarAlocalStoragePuntaje(determinarGanadoresPuntos(puntajes)[0]);
        


        }else{
            console.log("empate lol")
        }
        acutualizarGanadores()
        ruleta.disabled=true

    }
    turno.innerText=`TURNO: ${turnos}`
    })

   



}

function acutualizarGanadores(){
    console.log("hola si funciono")
    let hola=JSON.parse(localStorage.getItem("Ganadores"))
    let listaUlGanadores= document.getElementById("listaGanadores")
    let etiqueta= document.getElementById("etiqueta")
    while (listaUlGanadores.firstChild) {
        listaUlGanadores.removeChild(listaUlGanadores.firstChild);
      }
    if(hola != null){

        etiqueta.style.display="none"

        for (const ganador of hola) {
            let elemento= document.createElement("li")
            elemento.className="winner"
            let name= document.createElement("h3")
            name.innerText=ganador[0]
            let wins=document.createElement("div")
            wins.className="uwu"

            wins.innerText=ganador[1]

            elemento.appendChild(name)
            elemento.appendChild(wins)

            listaUlGanadores.appendChild(elemento)
        }
    }
}


function determinarGanadoresPuntos(puntajes){
    //let maximo= Math.max(puntajes)
    console.log(puntajes)
    maximo=maximoNumero(puntajes)
    let puntero=0
    let contador=0
    let posicion=[]

    if(maximo==0){
        return posicion
    }



    for (const puntaje of puntajes) {
        if(puntaje==maximo){
            
            posicion.push(contador);

        }
        contador++;

       
    }

    return posicion
    
}


//si hay un ganador por puntos



function agregarAlocalStoragePuntaje(numero){

    let infoGanador= []
            

            let numeroGanador=numero;
            let nombreGanador=nombres[numeroGanador]

            if(localStorage.getItem("Ganadores")!=null){

            let listaGanadores=JSON.parse(localStorage.getItem("Ganadores")) 

            if(siesta(nombreGanador,listaGanadores)){
                console.log("si")

                agregarVictoria(nombreGanador,listaGanadores)

            }else{
                
                infoGanador.push(nombreGanador)
                infoGanador.push(1)
                listaGanadores.push(infoGanador)
                localStorage.clear()
                localStorage.setItem("Ganadores",JSON.stringify(listaGanadores))
            }



            //chevere
            }else{
                let listaGanadores=[]
                infoGanador.push(nombreGanador)
                infoGanador.push(1)
                listaGanadores.push(infoGanador)
                localStorage.clear()
                localStorage.setItem("Ganadores",JSON.stringify(listaGanadores))

            }




}


//si hay un ganador por llenar todas

function agregarAlocalStorage(numero){

    let infoGanador= []
            

            let numeroGanador=numero;
            let nombreGanador=nombres[numeroGanador]

            if(localStorage.getItem("Ganadores")!=null){

            let listaGanadores=JSON.parse(localStorage.getItem("Ganadores")) 

            if(siesta(nombreGanador,listaGanadores)){
                console.log("si")

                agregarVictoria(nombreGanador,listaGanadores)

            }else{
                console.log("no")
                infoGanador.push(nombreGanador)
                infoGanador.push(1)
                listaGanadores.push(infoGanador)
                localStorage.clear()
                localStorage.setItem("Ganadores",JSON.stringify(listaGanadores))
            }



            //chevere
            }else{
                let listaGanadores=[]
                infoGanador.push(nombreGanador)
                infoGanador.push(1)
                listaGanadores.push(infoGanador)
                localStorage.clear()
                localStorage.setItem("Ganadores",JSON.stringify(listaGanadores))

            }


}

function siesta(nombre,lista){

    
    for (const ganador of lista) {
        
        if (ganador[0]== nombre) {
            return true
        }
    
    }
    return false;
}

function agregarVictoria(nombre,lista){
    localStorage.clear()
  
    for (const ganador of lista) {
        
        if (ganador[0]== nombre) {
            ganador[1]++;
        }
    }
    localStorage.setItem("Ganadores",JSON.stringify(lista))
}



function revisarGanador(){
   

    for (const jugador of jugadores) {
        let numero=1
        
        //columnas
        for (let i = 0; i < jugador.length; i++) {
            let fila=i;
            
            for (let i = 0; i < jugador.length; i++) {

                if  (jugador[fila][i].getAttribute("seleccionado")=="false"){
                    numero=0
                    
                  }
            }

        }

        if(numero==1){
            return numero;
        }
  
    }


}

function regresarGanador(){
   let iterador=0

    for (const jugador of jugadores) {
        let numero=1
        
        //columnas
        
        for (let i = 0; i < jugador.length; i++) {
            let fila=i;
            
            for (let i = 0; i < jugador.length; i++) {




                if  (jugador[fila][i].getAttribute("seleccionado")=="false"){
                    numero=0
                    
                  }
            }
  
        }

        if(numero==1){
            return iterador;
        }
      
        

        iterador ++;  
    }
}


//reviar si  las filas estan completas
function revisarFilas(){
    let points = document.getElementsByClassName("puntos")
    

    for (let i = 0; i < jugadores.length; i++) {
        let number= i;
        
       

        
        for (let i = 0; i < jugadores[number].length; i++) {
            let fila=i;
            let sumar=true
            //console.log(i)
            for (let i = 0; i < jugadores[number][fila].length; i++) {
                //console.log(i +" "+jugadores[number][fila][i].innerText)
                //console.log(jugadores[number][fila][i].getAttribute("seleccionado")+ jugadores[number][fila][i].innerText)
              if  (jugadores[number][fila][i].getAttribute("seleccionado")=="false"){
               
                sumar=false
              }


            
        }
      
       if(sumar){
        
        puntajes[number]++;
        points[number].innerText=`${puntajes[number]}`
       }
            
        }
        
        


    }

  

}

//revisar si las columnas se llenan
function revisarColumnas(){
    let points = document.getElementsByClassName("puntos")
    let number=0



    for (const jugador of jugadores) {
        
        //columnas
        
        for (let i = 0; i < jugador.length; i++) {
            let columna=i;
            
            //console.log(i)
            let sumar=true
            for (let i = 0; i < jugador.length; i++) {




                if  (jugador[i][columna].getAttribute("seleccionado")=="false"){
               
                    sumar=false
                  }
            }


            if(sumar){
                
                puntajes[number]++;
                points[number].innerText=`${puntajes[number]}`
               }

               
            
        }
      
       

        number++;
    }
    

}


function revisarDiagonales(){
    revisarDiagonal1()
    revisarDiagonal2()
}

//revisar diagonal izquierda a derecha    
function revisarDiagonal1(){
    let points = document.getElementsByClassName("puntos")
    let number=0
    let sumar=true

    for (const jugador of jugadores) {

        //filas
        let sumar=true
        for (let i = 0; i < jugador.length; i++) {
            let fila=i;
            
            //console.log(i)
            
            if  (jugador[fila][fila].getAttribute("seleccionado")=="false"){
               
                sumar=false
              }

               
            
        }
        if(sumar){
            console.log("diagonal1")
            puntajes[number]++;
            puntajes[number]++;
            puntajes[number]++;
            points[number].innerText=`${puntajes[number]}`
           }
        number++;
    }
    

}

//revisar diagonal derecha a izquierda  
function revisarDiagonal2(){
    let points = document.getElementsByClassName("puntos")
    let number=0
   


    for (const jugador of jugadores) {
        

        let numero=jugador[0].length-1
       




        //filas
        let sumar=true
        for (let i = 0; i < jugador.length; i++) {
            
            let fila=i;
            
            //console.log(i)
            
            if  (jugador[fila][numero].getAttribute("seleccionado")=="false"){
               
                sumar=false
              }

            numero--;   
            
        }
        if(sumar){
            
            puntajes[number]++;
            puntajes[number]++;
            puntajes[number]++;
            points[number].innerText=`${puntajes[number]}`
           }
        number++;
    }
    

}
  



function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

function maximoNumero(lista){

    let puntero =0;

    for (let i = 0; i < lista.length; i++) {
        if(lista[i]>puntero){
            puntero=lista[i];
        }
        
    }
    return puntero;

}



botonRuleta()

BotonJuego()



BotonReiniciar()

