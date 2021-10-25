// step 1

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
.then(function(res) { return res.json() })
.then(function(result) {
      const items= result.items;
      console.log(items);
    })
  .catch(function(error) {
   console.log(error);
  })



// step 2

const request = async()=>{
  const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
  const json = await response.json();
  items=json.items
  console.log(items);

  console.log(items[0].volumeInfo.title);
  console.log(items[0].volumeInfo.description);
}
