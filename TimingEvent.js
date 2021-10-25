// When clicking the test timeout button the following sentence should show up The timeout has been started
// After 3 seconds the follwing sentence should show up with green color The timeout has been triggered!
let testTimeoutButton = document.querySelector("#test_timeout")

    testTimeoutButton.addEventListener("click",function(){
        document.querySelector("#timeout_text").innerHTML="The timeout has been started"

        mySetTimeout = setTimeout(function(){
        const toGreenColor =  document.querySelector("#timeout_text")
        toGreenColor.innerHTML="The timeout has been triggered!"
        toGreenColor.style.color="green" }, 3000);

        
    })


// When clicking the clear timeout button the timeout should be cleared and the following sentence should show up The timeout has been cleared
let clearTimeoutButton = document.querySelector("#clear_timeout")

    clearTimeoutButton.addEventListener("click",function(){
        document.querySelector("#timeout_text").innerHTML="The timeout has been cleared"
        document.querySelector("#timeout_text").style.color="black"
        clearTimeout(mySetTimeout);
    })
