/*fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(res => res.json())
    .then((result) => {
          items= result.items;
          console.log(items[0].name);
        }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
       console.log(error);
      }*/

const request = async() => {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const res = await response.json();
    console.log(res.title)
    console.log(res.description)

}
request();
  
/////////////////////////////////////////////////////////////////////////

/*const request = async() => {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    const data = await response.json();
    console.log(data);
}
request();

//console.log(data.title)
//console.log(data.description)*/

