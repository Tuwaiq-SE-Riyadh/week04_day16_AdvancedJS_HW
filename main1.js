
// step 1 (Rewrite the code without using any arrow functions)
fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function (res) {return res.json()})
    .then(function(result){
          items= result.items;
          console.log(items);
        }),
      function(error) {
       console.log(error);
      }

    // step 2 (async/await)
    const request = async() => {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");

        const json = await  response.json();
        console.log("step 2");
        console.log(json);

        // step 3 (title and description)
        console.log("step 3")
        // console log the title
        console.log("Title: " ,json.items[0].volumeInfo.title)
        // console log the description
        console.log("Description: " ,json.items[0].volumeInfo.description)

    }
    request();