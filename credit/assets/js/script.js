function Calculate(){
    
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    const btnCount=document.querySelector(".btnCount")
    const btnDelete=document.querySelector(".btnDelete") 
    let result=document.querySelector('#payment') 
    let total=+amount+(amount*interest_rate/100)*months 
    let list =document.querySelector('.list-payment')
    let totall=document.querySelector("#total") 
    let monthPayment=total/months
   
    
    
    btnCount.addEventListener("click",function(){ result.innerHTML = `Aylıq ödəniş = ${monthPayment}`; totall.innerHTML=`Toplam =${total}`
   for (let i = 1; i <=months; i++) {
     var li=document.createElement("li")  
     li.classList.add("li")
     li.innerHTML=monthPayment
       list.append(li) 
    
   }
    
    }) 
    btnDelete.addEventListener("click",function(){
        result.innerHTML="";

    })
    } 
      