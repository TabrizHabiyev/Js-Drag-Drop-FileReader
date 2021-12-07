let Box=document.querySelectorAll(".box")
let BoxArea=document.querySelectorAll(".area");

let id;

Box.forEach(x=>{
    x.ondragstart=(e)=>{
        id=document.getElementById(x.id).getAttribute("id");
      };
    
})

BoxArea.forEach(x=>{
    x.ondragover=(e)=>{
        e.preventDefault();
    };
   x.ondrop=()=>{
        let dataID =  x.getAttribute("data-id");
        let dragElement=document.getElementById(id);
        if (dataID!=id) {
            alert("get isinle mesqul ol")
        }else
        {
            x.appendChild(dragElement);
        }
    };
})

  

    
