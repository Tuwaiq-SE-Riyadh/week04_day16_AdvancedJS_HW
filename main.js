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


//--------Step 1: The code above is written using arrow functions. Rewrite the code above without using any arrow functions-----------

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function (res) {return res.json() }) 
    .then(function (result){
          items= result.items;
          console.log(items);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function(error) {
       console.log(error);
      }

//---------Step 2: Rewrite the above code using an async/await function-----------------------------------------------------------

const request = async()=>{

    try{
    const response =await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    const json = await response.json()
    console.log(json)
    }
    catch(error){
        console.log(error)
    }
}

request()


//Step 3: Copy and paste the URL for the API (https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699) 
//into your browser to examine the data returned by google books. Now write the code to display (console log) 
//only the title and description of the book returned.

const display = async () =>{

    try{
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
        const json = await response.json();
        console.log(items[0].volumeInfo.title);
        console.log(items[0].volumeInfo.description); 

    }catch(error){
        console.log(error);
    }
}

display()

//---------------------------------------Timing Event-----------------------------------------------------


const h1 = document.createElement("h1")
let timeout

document.querySelector("#button1").addEventListener("click", () => {

    h1.innerHTML = "The timeout has been started"
    document.querySelector("div").append(h1)
    timeout = setInterval(time, 3000);
});

document.querySelector("#button2").addEventListener("click", () =>{

    h1.style.color = "black"
    h1.innerHTML = "The timeout has been cleared"
    clearTimeout(timeout);
    

});

const time = () =>{
    h1.style.color = "green"
    h1.innerHTML = "The timeout has been triggered!"
}