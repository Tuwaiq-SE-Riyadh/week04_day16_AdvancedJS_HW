//Rewritting the code without using arrow functions

 fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
     .then(function (res){
          return res.json()})
     .then(function (result){
           items= result.items;
           console.log(items);
         }),
       // Note: it's important to handle errors here
       // instead of a catch() block so that we don't swallow
       // exceptions from actual bugs in components.
       function (error) {
       console.log(error);
      }

//rewritting the code using await

const request = async () => {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const json = await response.json();
    console.log(json);

    const ch = json.items;
    console.log(ch);
    console.log(ch[0].title);
    const myDiv = document.querySelector("#container");

    for(let i=0; i<ch.length; i++){
                
        const divs = document.createElement("div");
        const text = document.createElement("h2")
        const text2 = document.createElement("p")
        text.innerText = ch[i].volumeInfo.title;
        text2.innerText = ch[i].volumeInfo.description
    

        
        divs.append(text)
        divs.append(text2)
        myDiv.append(divs)
    }
}  

request()


