let timeOut;


function test_timeout(){
    let time = document.querySelector("#timeout_text")
    time.innerHTML = "The timeout has been started";
    timeOut = setTimeout(function(){
    time.innerHTML = "The timeout has been triggered!";
    time.style = "color:green;"
 }, 3000);}



function clear_timeout(){
    clearTimeout(timeOut);
    let time = document.querySelector("#timeout_text")
    time.innerHTML = "The timeout has been cleared";

}