function Calculate(){
    
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    const btnCount=document.querySelector(".btnCount")
    const btnDelete=document.querySelector(".btnDelete") 
    let result=document.querySelector('#payment') 
    let list =document.querySelector('.list-payment')
    let totall=document.querySelector("#total")  

     
    let total=+amount+(amount*interest_rate/100)*months 
   
    let monthPayment=total/months
    
    
    btnCount.addEventListener("click",function(){ totall.innerHTML=`Toplam =${Math.floor(total)} <span>&#8380;</span>` 

    var now = new Date();
    
   

   for (let i = 1; i <=months; i++) { 
    
     var li=document.createElement("li")  
    
     li.innerHTML=Math.floor(monthPayment)+"<span>&#8380;</span>"
     

       list.append(li)  

       let h4=document.createElement("h")

       now.setDate(now.getDate()+30) 

       let year=now.getFullYear();
       let month=now.getMonth()+1;
       let day=now.getDate(); 
       h4.innerText=`${day}-${month}-${year}`
       
       li.append(h4)
       console.log(year, month, day);     
    
   }
    
    }) 
    btnDelete.addEventListener("click",function(){
        result.innerHTML="";

    })
    } 
    