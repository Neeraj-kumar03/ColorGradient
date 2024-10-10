let btn1 = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let copyCode = document.querySelector(".copyCode");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexValue = () => {
    let myhexValue = "0123456789abcdef";
    let colors = "#"
    for(let i=0; i<6; i++){
        colors += myhexValue[Math.floor(Math.random() * 16)]
    }
    return colors;
}
const handlebtn1 = () =>{
    rgb1 = hexValue();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode.innerHTML = `background-image: linaer-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.innerHTML = `${rgb1}`;
}
const handlebtn2 = () =>{
    rgb2 = hexValue();
    console.log(rgb2);
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode.innerHTML = `background-image: linaer-gradient(to right, ${rgb1}, ${rgb2})`;
    btn2.innerHTML = `${rgb2}`;
}

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);

copyCode.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerText);
    alert("Your code is copied.")
});