// fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
//     .then(res => res.json())
//     .then((result) => {
//           items= result.items;
//           items1=items[0].volumeInfo
//           title=items1.title
//           description=items1.description
//           console.log(items1);
//           console.log(description);      

//         }),
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//        console.log(error);
//       }
 const request= async() =>{
    try{
        const response= await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
        const json = await response.json();
        const items=await json.items
            const items1= await items[0].volumeInfo
            title= await items1.title
            description=items1.description
            console.log(title);
            console.log(description);   
        
    } catch(error) {
        console.log(error);
       }

 }
 request()

 //event 
 let button =document.querySelector("#clear")
 
 button.addEventListener("click",function(){
    clearTimeout(stop)
     document.getElementById("timeout_clear").innerHTML="The timeout has been cleared";
 })
function myFunction() {
    document.getElementById("timeout_text").innerHTML="The timeout has been started";
    let stop=setTimeout(() => {
        let h3=document.getElementById("timeout_text")
        h3.innerText="The timeout has been started";
        h3.style.color="green"
    }, 3000);
    
}

  
