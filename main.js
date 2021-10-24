//google book api
async function a() {fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
 .then(await function (res) {return res.json();})
    .then(function(result) {
        //title and description
         items= result.items[0].volumeInfo.title;
         item= result.items[0].volumeInfo.description
          console.log(items);
          console.log(item);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
       console.log(error);
      }
    }

    a()


//Timing Event
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let timing
let h1 = document.createElement("h1")

button1.onclick = function() {
    timing = setInterval(myTimer, 3000);
    h1.innerHTML = "The timeout has been started"
    document.querySelector("div").append(h1)
    
}

function myTimer() {
    h1.style.color = "green"
h1.innerHTML = "The timeout has been triggered!"
}

button2.onclick = function(){
    h1.style.color = "black"
    clearTimeout(timing);
    h1.innerHTML = "The timeout has been cleared"
    
}