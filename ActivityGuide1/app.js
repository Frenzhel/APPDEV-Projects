//This is the  component for the 1st item
const btn1 = document.getElementById("btn1");
//for displaying the information
btn1.addEventListener("click", () => {
    //create and initialize our variables
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let telephone = document.getElementById("telephone").value;
    let major = document.getElementById("major").value;
    //display message in a template string
    let x = `Hello! ${name}, I see that you are from
    ${address} and you are also pusruing ${major}
    and you can be contacted using ${telephone}.`;
    document.getElementById("output1").innerHTML = x;
})

//This is the components for the 2nd item
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    let totalSales = document.getElementById("totalSales").value;
    let profit = parseFloat(totalSales * 0.23) + totalSales*1;
    let displayProfit = `The profit that will be made from the Sales is ${profit}.`;
    document.getElementById("output2").innerHTML = displayProfit;
})

//This is the components for the 3rd item
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    let speed = 60;
    let five = 5 * speed;
    let eight = 8 * speed;
    let twelve = 12 * speed;
    let display = `The distance the car will travel in 5 hours: ${five} miles. <br><br>
    The distance the car will travel in 8 hours: ${eight} miles. <br><br>
    The distance the car will travel in 12 hours: ${twelve} miles.`;
    document.getElementById("output3").innerHTML = display;
})  

//This is the components for the 4th item
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    let miles = document.getElementById("miles").value;
    let gallons = document.getElementById("gallons").value;
    let mpg = miles/gallons;
    let display = `The car’s miles per gallon: ${mpg} mile/'s per gallon`;
    document.getElementById("output4").innerHTML=display
})  

//This is the components for the 5th item
const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    let celsius = document.getElementById("celsius").value;
    let f = 9/5*celsius+32;
    let display = `The temperature converted to Fahrenheit: ${f}F`;
    document.getElementById("output5").innerHTML=display
})

//This is the components for the 6th item
const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    let cookies = document.getElementById("cookies").value;
    let calories = cookies/4*300;
    let display = `The total calories consumed: ${calories}cal`;
    document.getElementById("output6").innerHTML=display
})

//This is the components for the 7th item
const btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
    let males = document.getElementById("males").value;
    let females = document.getElementById("females").value;
    let total = males*1+females*1;
    let percentMale = (males/total)*100;
    let percentFemale = (females/total)*100;
    let display = `The percentage of Males: ${percentMale}% <br><br>
    The percentage of Females: ${percentFemale}%`;
    document.getElementById("output7").innerHTML=display
})