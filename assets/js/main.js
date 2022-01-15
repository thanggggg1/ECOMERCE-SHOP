function changecolor(){
    document.querySelectorAll(".header__sort-bar li").forEach(btn=>{
        btn.addEventListener("click",()=>{
            btn.classList.add("change-color");
            console.log("afafaf")
        })
    })
}
document.addEventListener("DOMContentLoaded",()=>{
    changecolor();
});