// Q1 Step1 -->I have ?
fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function (res){return res.json()
    })
    .then(function (result)  {
          items= result.items;
          console.log(items);
        }),

      function(error)  {
       console.log(error);
      }




// Q1 step2
const request= async()=>{

    const response= await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    const json=await response.json()
          console.log(json);
      (error) => {
       console.log(error);
      }
      // Q1 step3
      console.log("Title is "+json.items[0].volumeInfo.title)
      console.log("Description is "+json.items[0].volumeInfo.description)
    }
    request()


// Q1 step3

function step3(items){
console.log("The in step 3")
console.log(items)
}

























// Q2
let time;
document.querySelector("#test").addEventListener("click", function (e){
    let output=document.querySelector("#timeout_text")
    output.innerText="The timeout has been started"
     time=setTimeout(function(){ 
        output.style.color="green" 
         output.innerText="The timeout has been triggered!"}, 3000);

})

document.querySelector("#clear").addEventListener("click", function (e){
    clearTimeout(time);
    let output=document.querySelector("#timeout_text")
    output.style.color="black" 
    output.innerText="The timeout has been cleared"


})