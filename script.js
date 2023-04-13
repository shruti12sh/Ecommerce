const bar = document.getElementById('bar');
const closse = document.getElementById("close");
const nav = document.getElementById('navbar');
console.log(bar, closse)
console.log(nav)
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('activeNav');
    })
}
if(closse){
    closse.addEventListener('click',()=>{
        nav.classList.remove('activeNav');
    }) 
}