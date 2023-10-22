window.addEventListener("load", (event)=>{
    event.preventDefault();
})

console.log("hello")

const button= document.getElementsByTagName("button")[0];
console.log(button)

button.addEventListener("click", (event)=>{
    event.preventDefault();
});