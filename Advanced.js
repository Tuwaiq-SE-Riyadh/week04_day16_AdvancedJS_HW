 try{
   
async function book ()
 { 
   await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(await function(res){
      return res.json()})
    .then(await function(result){
          items = result.items;
          console.log("Title: " + items[0].volumeInfo.title);
          console.log("Description: " + items[0].volumeInfo.description);}),
    
  function error(e){
    console.log(e);}
  }

book();

}
catch(e){
    error(e);}
    