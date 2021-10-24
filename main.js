//-------------------the code without arrow function------------------



// fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
//     .then(function(res) {return res.json()})
//     .then(function(result) {
//           items= result.items;
//           console.log(items);
//         }),
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//      function (error) {
//        console.log(error);
//       }


//-------------------the code without arrow function END ------------------

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(res => res.json())
    .then((result) => {
          items= result.items;
          console.log(items);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
       console.log(error);
      }


      const nnn = async() => {
          const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
          const json1 = await res.json();
          return "Title Name: " + json1.items[0].volumeInfo.title +"\n And the description is: " +json1.items[0].volumeInfo.description
      }
      nnn().then(json1 =>{
          console.log(json1);
      })


      function testTimeOut(){
          const text = document.querySelector("#timeout_text")
          text.innerHTML = "The timeout has been started"
      }

      
        const btn1 = document.querySelector(".timeOut")
        var Time
        btn1.addEventListener("click",function testTimeOut2(){
            const text2 = document.querySelector("#timeout_text")
            
           Time = setTimeout(()=>{
                text2.style.color= "green"
                text2.innerHTML = "The timeout has been triggered!"},3000);
        })


        function stopTimeout(){
            clearTimeout(Time);
            const text3 = document.querySelector("#timeout_text")
            text3.innerHTML = "The timeout has been cleared"
        }