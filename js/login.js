alert("Introducír 'cebolla', 'papa' ó 'ajo' y hectareas en numeros");

/* Función para guardar en LocalStorage */
let guardarLocal = (clave,valor) =>{localStorage.setItem(clave,valor);};

const boton = document.getElementById('btnCont');
console.log(boton);



/* Mandar info a LocaStorage */
boton.onclick = ()=> {
    let nombre = document.getElementById("Name").value;
    let cultivo = document.getElementById("Cultivo").value;
    let hc = document.getElementById("Hc").value;
    let validado = false;

    /* Validar cultivo y guardar en Local Storage */

    switch(cultivo){
        case "papa": localStorage.getItem('cultivo') ?? guardarLocal('cultivo',JSON.stringify(cultivo));
        console.log(JSON.parse(localStorage.getItem('cultivo')));
        validado = true;
        break;

        case "cebolla": localStorage.getItem('cultivo') ?? guardarLocal('cultivo',JSON.stringify(cultivo));
        console.log(JSON.parse(localStorage.getItem('cultivo')));
        validado = true;
        break;

        case "ajo": localStorage.getItem('cultivo') ?? guardarLocal('cultivo',JSON.stringify(cultivo));
        console.log(JSON.parse(localStorage.getItem('cultivo')));
        validado = true;
        break;

        default:alert('Introdcir un cultivo valido');


    }

    localStorage.getItem('nombre') ?? guardarLocal('nombre',JSON.stringify(nombre));
    console.log(JSON.parse(localStorage.getItem('nombre')));

    localStorage.getItem('hc') ?? guardarLocal('hc',JSON.stringify(hc));
    console.log(JSON.parse(localStorage.getItem('hc')));

   validado ?  window.location.href = "./index.html": alert('Cultivo in valido, intente cebolla,papa ó ajo');
}





    
