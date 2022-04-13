fetch("https://api.imgflip.com/get_memes")
.then((x)=>x.json())
.then((response)=>{
    console.log(response);
   
    let arr = response.data.memes
    arr.map((x)=>{
      let content =document.getElementById("content")

      let item =document.createElement("div")
      item.classList.add("item")
      let image =document.createElement("img")
      image.src = x.url ;
      image.classList.add("img-fluid", "d-flex","justify-content-center","rounded", "img-thumbnail")
       image.addEventListener("click",()=>{
         
        let canvas = document.createElement("input")
        canvas.classList.add("canvas")
        image.appendChild(canvas)
       

      })

      item.appendChild(image)

      let name = document.createElement("p")
      name.innerText = x.name
      name.classList.add("fs-5","text-center","bg-secondary","m-0")
      item.appendChild(name)
      content.appendChild(item)
    })
    
   
   })       
 .catch((er)=>{
   console.error(er);
   })