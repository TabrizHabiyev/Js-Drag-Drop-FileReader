let photoupload = document.getElementById("photoupload")
let table=document.getElementById("table");
let tableBody=table.lastElementChild;
photoupload.addEventListener("change", function(e){
console.log(e.target.files.length)
for (let i = 0; i < e.target.files.length; i++) {

    var reader= new FileReader();
        reader.onload = (e)=>{
         let tr=document.createElement("tr");
         tr.setAttribute("id",  `${i}`);
         tr.classList.add("trlist");
         let tdImage=document.createElement("td");
         let image=document.createElement("img");
         let trash=document.createElement("i");  
         trash.classList.add("fas");
         trash.classList.add("fa-trash-alt")
         trash.classList.add("text-danger")
         trash.setAttribute("onclick", `delete_row(${i})`);
         image.setAttribute("src",e.target.result)
         image.style.height="50px";
         image.style.width="50px"
         tdImage.append(image);
         let tdImageName=document.createElement("td");
         tdImageName.innerText=this.name;
         let tdSize=document.createElement("td")
         tdSize.innerText=this.size;
        
         tr.append(tdImage,tdImageName,tdSize,trash);
         tableBody.append(tr);
          };
          reader.readAsDataURL(this.files[i]);
        }
  })
  function delete_row(no)
  {
   document.getElementById(no).outerHTML="";
  }
  