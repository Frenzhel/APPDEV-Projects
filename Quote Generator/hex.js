const hex = ["If you don't know, ask. You will be a fool for the moment, but a wise man for the rest of your life.",
"The important thing about a problem is not its solution, but the strength we gain in finding the solution",
"We suffer more in imagination than in reality.",
"Men can be divided into 2 groups:  one that goes ahead and achieves something, and one that comes after and criticizes.",
"It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult"]
const btn = document.getElementById("btn")
const color = document.querySelector(".quote")
document.body.style.backgroundColor = "white"
btn.addEventListener("click", () => {
    console.log("document.body")
    const randomNumber = getRandomNumber()
    color.textContent = hex[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}