
let input=document.querySelector("#input")
let btn=document.querySelector("#btn")
btn.addEventListener("click",(e)=>{
    let container=document.querySelector(".container")
    if(input.value.length ==0){
        alert("no puedes dejar la tarea vacia")
    }
    else{
        let div= document.createElement("ARTICLE")
    div.textContent=input.value
    container.appendChild(div)
    
    setTimeout(()=>{
        input.value=""
    },100)
    }
})












