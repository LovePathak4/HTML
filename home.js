var x = document.getElementById("btn");
x.addEventListener("click", myFunction);

function myFunction() {
    const newELM= document.createElement("h1");
    newELM.innerText = "I got all of your information sucker.. no i am going to steal all your money, BYE LIL KID";
    document.body.appendChild(newELM);
}