
//1
fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(res => res.json())
    .then((result) => {
          items= result.items;
          console.log(items);
        }),
      
      (error) => {
       console.log(error);
      }



//2


const req=async()=>{
    const response=await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const data= await response.json();
    console.log(data)
    } 
        
req();


const display=async()=>{
    try{
    const response=await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const data= await response.json();
    result=json.items;
    console.log(result[0].volumeInfo.title)
    console.log(result[0].volumeInfo.description)

    } catch(err){
        console.log(error)
    }
}
        display();



//settimeout

 var myinput1=document.getElementById("bttn1")
 var myinput2=document.getElementById("bttn1")
var h=document.getElementById("head")

var timeout;
 function testTimeout(){
    
    h.innerHTML="The timeout has been started";
   var timeout= setTimeout(test, 3000)

 }
function test()
    {
        h.style.color="green";
       
        h.innerHTML="The timeout has been triggered!"


    }

  

 
 function clTimeout(){
  clearTimeout(timeout)
  h.style.color="black";
  h.innerHTML="The timeout has been cleared"
}
    
  