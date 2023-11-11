window.addEventListener("load", (event)=>{
    event.preventDefault();
})

const button= document.getElementsByTagName("button")[0];
const plan_switch = document.querySelector(".plan-switch")
const plan = document.querySelectorAll(".plans")
const rate = document.querySelectorAll(".rate");
const month = document.querySelectorAll(".months")

console.log(month)


plan.forEach(plans=>{
    plans.addEventListener("click", ()=>{
        plan.forEach(otherDiv=>{
            otherDiv.classList.remove("plan-bg")
        })
        plans.classList.add("plan-bg")
    })
})

button.addEventListener("click", (event)=>{
    event.preventDefault();
});

// Switch Toggler

const arr = ["$90/yr", "$120/yr", "$150/yr"]

plan_switch.addEventListener("click", ()=>{
    plan_switch.classList.toggle("switch-end")
    if(plan_switch.classList.contains("switch-end")){
        month.forEach(months=>{
            months.style.display="block"
        })   
    }
    else{
        month.forEach(months=>{
            months.style.display="none"
        }) 
    }

    for (let y = 0; y < rate.length; y++) {
       let defaultRate = rate[y].innerHTML;
       if(plan_switch.classList.contains("switch-end")){
            for(let i = 0; i < arr.length; i++){
                for (let z = 0; z < rate.length; z++) {
                    if(i == z){
                        rate[z].innerHTML=arr[i]
                    } 
                }
            }   
        }
        else{
                for (let z = 0; z < rate.length; z++) {
                        rate[z].innerHTML=rate[z]
                    
                }
              
        }
    }
    
})




if(plan_switch.classList.contains("switch-end")){
    month.forEach(months=>{
        console.log(months)
        months.style.display="block"
    })   
}