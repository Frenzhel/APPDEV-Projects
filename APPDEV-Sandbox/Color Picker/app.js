const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
//functions for changing color of the HTML file
btn.addEventListener("click", () => {
    //targeting the document body
    console.log("document.body")//not required
    //getting random number from getRandomNumber()
    const randomNumber = getRandomNumber()
    //referencing the background color of the document body
    document.body.style.backgroundColor = colors[randomNumber]
    //change the text content of th span tag
    color.textContent = colors[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}