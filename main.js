// # Advanced JavaSript HW

// The following code will fetch data about book that is made available using the google book api `https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699`

// ``` 
// fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
//     .then(res => res.json())
//     .then((result) => {
//           items= result.items;
//           console.log(items);
//         }),
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//        console.log(error);
//       }
// ```

// Step 1: The code above is written using arrow functions. Rewrite the code above without using any arrow functions.
fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function (res){ return res.json() })
    .then(function(result){
          items= result.items;
          console.log(items);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error){
       console.log(error);
      }

// Step 2: Rewrite the above code using an async/await function.
const request = async()=>{
    try{
        const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
        const json = await res.json()
        console.log("here");
        console.log(json.items)
    }catch (error){
        console.log(error);
    }

}

request()

// Step 3: Copy and paste the URL for the API (https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699) into your browser
// to examine the data returned by google books. Now write the code to display (console log) only the title and description of the book returned.

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(res => res.json())
    .then((result) => {
          items= result.items;
          console.log(items[0].volumeInfo.title);
          console.log(items[0].volumeInfo.description);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
       console.log(error);
      }



// ## Timing Event 
// use the following html code for the next question 

// ``` 
// <html>
// <body>
// <h1>Press the buttons below to see how setTimeout is used. Wait to see how the text below changes after a timeout of 3 seconds.</h1>

//   <div>
//       <input type="button" value="test timeout"  />
//       <input type="button" value="clear timeout"  />
//   </div>
//   <br>
//   <h3 id="timeout_text"></h3>

// </body>
// </html>
// ```
// * When clicking the `test timeout` button the following sentence 
//should show up `The timeout has been started`
let time;
const testB = document.querySelector("#testTimeout")
testB.addEventListener("click",function(e){
    const h = document.querySelector("#timeout_text")
    h.innerText = "The timeout has been started"
    // * After 3 seconds the follwing sentence should show up with green color `The timeout has been triggered!`
    time = setTimeout(function(){ 
        // const h = document.querySelector("#timeout_text")
        h.innerText = "The timeout has been triggered!"
        h.style.color = "green"
    }, 3000);
    
})

// * When clicking the `clear timeout` button the timeout should be cleared and the following sentence should show up `The timeout has been cleared` 

// <i>Hint use clearTimeout()</i>

const clearB = document.querySelector("#clearTimeout")
clearB.addEventListener("click",function(e){
    const h = document.querySelector("#timeout_text")
    clearTimeout(time)
    h.innerText = "The timeout has been cleared"
    h.style.color ="black"
})