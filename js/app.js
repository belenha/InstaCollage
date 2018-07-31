var secondContainer = document.getElementById('emptyContainer');

function init(){
    var images = document.querySelectorAll('#mainContainer img');
    for(var i = 0; i < images.length; i++){
        images[i].addEventListener('dragstart', dragImgs, false);
        images[i].addEventListener('dragend', finished, false);
    }
    secondContainer.addEventListener('dragenter', function(e){e.preventDefault();},false);
    secondContainer.addEventListener('dragover', function(e){e.preventDefault();},false);
    secondContainer.addEventListener('drop', dropping, false);
}

function dragImgs(e){
    var element=e.target;
    e.dataTransfer.setData('Text',element.getAttribute("id"));
}

function dropping (e){
    e.preventDefault();
    var imgId = e.dataTransfer.getData('Text');
    var source = document.getElementById(imgId).src;
    secondContainer.innerHTML="<img src='"+ source + "'>";
}

function finished (e){
    var elem = e.target;
    elem.style.visibility='hidden';
}

window.addEventListener('load',init,false);