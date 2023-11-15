const body = document.getElementsByTagName("body")[0]
console.log(body)
body.addEventListener("load", (event)=>{
    event.preventDefault();
    console.log("loaded")
})

const info = document.querySelector(".info")
const button= document.getElementsByTagName("button")[0];
const plan_switch = document.querySelector(".plan-switch")
const plan = document.querySelectorAll(".plans")
const rate = document.querySelectorAll(".rate");
const month = document.querySelectorAll(".months")
const control = document.querySelectorAll(".control")
const circles = document.querySelectorAll(".circle")
const form_control = document.querySelector(".form-control")
const prev = document.querySelector(".prev")
const tabs = document.getElementsByClassName("tab")
let currentTab = 0;
const next = document.querySelector(".next")





plan.forEach(plans=>{
    plans.addEventListener("click", ()=>{
        plan.forEach(otherDiv=>{
            otherDiv.classList.remove("plan-bg")
        })
        plans.classList.add("plan-bg")
        console.log(plans.innerHTML)
    })
})

button.addEventListener("click", (event)=>{
    event.preventDefault();
});
next.addEventListener("click", (event)=>{
    event.preventDefault()
}
)

// Switch Toggler
const oldPrice = ["$9/mo", "$12/mo", "$15/mo"]
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
        for(let x = 0; x < oldPrice.length; x++){
            for (let z = 0; z < rate.length; z++) {
                if(x==z){
                    rate[z].innerHTML=oldPrice[x]
                }
                
            }
        }   
    }
    
})

const controlElements = document.querySelectorAll('.control');

// Add a click event listener to each "control" div
controlElements.forEach(function(controlElement) {
    controlElement.addEventListener('click', function activeCircle(event) {
        // Remove the 'active' class from all circles within all "control" divs
        document.querySelectorAll('.control .circle').forEach(function(circle) {
            circle.classList.remove('active');
        });

        // Add the 'active' class to the clicked circle within the clicked "control" div
        this.querySelector('.circle').classList.add('active');
    });
});

const showTab = (n)=>{
    tabs[n].style.display="block"

    if(n==0){
        prev.style.display = "none"
    }
    else{
        prev.style.display="inline-block"
    }
    if(n==3){
        next.innerHTML="SUBMIT"
    }
    else{
        next.innerHTML="NEXT STEP"
    }
    console.log(n)
}
showTab(currentTab)
console.log(currentTab)



const nextPrev = (n)=>{
    currentTab =currentTab + n;
    for(let i = 0; i<tabs.length; i++){
        if(i == currentTab){
            tabs[i].style.display = "block"
        }
        else if(i!=currentTab){
            tabs[i].style.display = "none"
        }
        if(currentTab>=tabs.length){
            tabs[3].style.display = "block"
        }
    }
    circles.forEach((circle, index)=>{
        if(index == currentTab){
            circles[index].classList.add("active")
        }
        else if(index != currentTab){
            circles[index].classList.remove("active")
        }
    })
    showTab(currentTab)
}


const sideTabs= (n)=>{
    for(let i = 0; i<tabs.length; i++){
        if(i == n){
            tabs[i].style.display = "block"
        }
        else if(i!=n){
            tabs[i].style.display = "none"
        }
        // if(currentTab>=tabs.length){
        //     tabs[2].style.display = "block"
        // }
    }
    showTab(n)
}