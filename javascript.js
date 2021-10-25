    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function(res){return res.json()})
    .then(function(result){
        items= result.items;
          console.log(items);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function(error){
       console.log(error);
      }

      const recuest = async()=>{
          const res=await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
          const result = await res.json();
          items= result.items;
          console.log(items);
          console.log(items[0].volumeInfo.title);
          console.log(items[0].volumeInfo.description);
      }
      recuest();
let timeout;
      function timeoutTest(){
          const h = document.getElementById("timeout_text");
          h.innerText="The timeout has been started";
          h.style.color="black";
          timeout = setTimeout(function(){ const h = document.getElementById("timeout_text");
              h.innerText="The timeout has been triggered!";
              h.style.color="green";
          }, 3000);

      }
      
      function timeoutStop(){
        clearTimeout(timeout);
        const h = document.getElementById("timeout_text");
              h.innerText="The timeout has been cleared";
              h.style.color="black";
      }

