let miniBox=document.querySelector(".mini-box");
let bigBox=document.querySelector(".big-box");

let id;
miniBox.ondragstart=()=>{
    id=document.getElementById("drag").getAttribute("id");
};


bigBox.ondragover=(e)=>{
    e.preventDefault();
};

document.addEventListener("dragover", function(e){
    let dragElement=document.getElementById(id);
    var dragX = e.pageX, dragY = e.pageY;
    console.log("X: "+dragX+" Y: "+dragY);
    dragElement.style.marginLeft=dragX+"px";
    dragElement.style.marginTop=dragY+"px";
});

bigBox.ondrop=()=>{
   let dragElement=document.getElementById(id);

   bigBox.appendChild(dragElement);
};
