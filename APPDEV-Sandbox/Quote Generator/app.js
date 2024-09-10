const marcus = ["The happiness of your life depends upon the quality of your thoughts.",
"Waste no more time arguing about what a good man should be. Be one.",
"The best revenge is to be unlike him who performed the injury.",
"The soul becomes dyed with the color of its thoughts.",
"If it is not right do not do it; if it is not true do not say it."]
const btn = document.getElementById("btn")
const quote = document.querySelector(".quote")
let i = 0
document.body.style.backgroundColor = "white"
btn.addEventListener("click", () => {
    console.log("document.body")
    if (i >= marcus.length){
        i = 0
    }
    quote.textContent = marcus[i]
    i++
})