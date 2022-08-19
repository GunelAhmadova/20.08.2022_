let tabs =document.querySelectorAll(".tab") 
let contents=document.querySelectorAll(".content")

tabs.forEach((tab) =>{ 
    tab.addEventListener("click",function() { 
        let targetTab=tab.getAttribute("data-target"); 
        contents.forEach((content)=>{
            if(content.getAttribute("data-content")==targetTab) {
                content.classList.remove("d-none");
            } else{
                content.classList.add("d-none");
            }

        })
    })

}) 
