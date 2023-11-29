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
const next = document.querySelector(".next")

const findDisplayedTabIndex = () => {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains("active-tab")) {
            console.log(tabs[i])
            console.log(i)
            return i;
        }
    }
    return 0; // Default to 0 if no tab is displayed
};
let currentTab = findDisplayedTabIndex();



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
    console.log(tabs.length-1)
    if(currentTab===tabs.length-1){
        return;
    }
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
const showTab = (n)=>{
    for(let i = 0; i<tabs.length; i++){
        tabs[i].classList.remove("active-tab")
    }
    tabs[n].classList.add('active-tab')
    console.log("show "+n)   
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
console.log("outside "+currentTab)


const navigateTab=(n)=>{
    let newIndex = currentTab+n;
    if(newIndex>=0 && newIndex <tabs.length){
        currentTab=newIndex
        showTab(currentTab)
    }
}

const nextPrev = (n)=>{
    navigateTab(n)
    circles.forEach((circle, index)=>{
        if(index == currentTab){
            circles[index].classList.add("active")
        }
        else if(index != currentTab){
            circles[index].classList.remove("active")
        }
    })
}