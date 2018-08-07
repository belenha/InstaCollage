function init(){
    var images = document.querySelectorAll('#mainContainer img');
    for(var i = 0; i < images.length; i++){
        images[i].addEventListener('dragstart', dragImgs, false);
        //images[i].addEventListener('dragend', finished, false); //Ya no se llama finished
    }
    
    //Se puede replicar lo usado en images para asignar los eventos de drop a más de un elemento
    var containers = document.querySelectorAll('.emptyContainer');
    for(var i = 0; i < containers.length; i++){
        containers[i].addEventListener('dragenter', function(e){e.preventDefault();},false);
        containers[i].addEventListener('dragover', function(e){e.preventDefault();},false);
        containers[i].addEventListener('drop', dropping, false);
    }
}

function dragImgs(e){
    var element=e.target;
    e.dataTransfer.setData('Text',element.getAttribute("id"));
}

function dropping (e){
    e.preventDefault();
    var imgId = e.dataTransfer.getData('Text');
    //como img lo usamos 2 veces (esconderla y obtener su src, mejor la guardamos en una variable)
    var img = document.getElementById(imgId);
    img.style.visibility='hidden';
    e.currentTarget.innerHTML="<img src='"+ img.src + "'>";
}
//Moví el pedazo de código que esconde la imagen seleccionada a
//dropping, para que solo se haga cuando el drop se hace sobre un elemento válido
//de drop
/*function finished (e){
    var elem = e.target;
    elem.style.visibility='hidden';
}*/

window.addEventListener('load',init,false);