
const text = document.querySelector("#timeout_text");
let myTimeOut ;

// when click the button this function will start working
// it will show up the sentence and it will set timeout for 3 seconds after that the color will change
function ShowUp() {
    const text = document.querySelector("#timeout_text");
    text.innerText = "The timeout has been started";
    
    myTimeOut = setTimeout(function(){ 
      text.innerText = "The timeout has been triggered!"
      text.style.color = "green" }, 3000);
}

// when click cleare timeout button this function will cleare the timeout
function cleare() {
    text.innerText = "The timeout has been cleared"
    clearTimeout(myTimeOut);
}