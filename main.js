// Step 1: The code above is written using arrow functions. 
// Rewrite the code above without using any arrow functions.

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function(res){return res.json()})
    .then(function(result){
          items= result.items;
          console.log(items);
        }),
      function(error){
       console.log(error);
      }

// Step 2: Rewrite the above code using an async/await function.

async function fetchbooks() {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    const json = await response.json();
    console.log(json);
}

// Step 3: Copy and paste the URL for the API (https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699) 
// into your browser to examine the data returned by google books. 
// Now write the code to display (console log) only the title and description of the book returned.

async function displaybooks() {
    try{
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
        const json = await response.json();
        // console.log(json);
        result= json.items;
        console.log(result[0].volumeInfo.title);
        console.log(result[0].volumeInfo.description);

    }catch(err){
        console.log(err);
    }
}

displaybooks()



// * When clicking the `test timeout` button the following sentence should show up `The timeout has been started`
// * After 3 seconds the follwing sentence should show up with green color `The timeout has been triggered!`
// * When clicking the `clear timeout` button the timeout should be cleared and the following sentence should show up `The timeout has been cleared` 

// <i>Hint use clearTimeout()</i>


//Timing Event
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

let heading = document.createElement("h1")
let timer


btn1.addEventListener("click", function() {
    timer = setInterval(myTimer, 3000);
    heading.innerHTML = "The timeout has been started"
    document.querySelector("div").append(heading)
});

btn2.addEventListener("click", function() {
    heading.style.color = "black"
    clearTimeout(timer);
    heading.innerHTML = "The timeout has been cleared"

});

function myTimer() {
    heading.style.color = "green"
    heading.innerHTML = "The timeout has been triggered!"
}