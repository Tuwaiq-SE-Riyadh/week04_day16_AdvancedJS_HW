fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
  .then((res) => res.json())
  .then(function (result) {
    items = result.items;
    console.log(items);
  }),
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  (error) => {
    console.log(error);
  };

//   Rewrite the above code using an async/await function.
const test = async () => {
  const fetechTest = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699"
  );
  const res = await fetechTest.json();
  console.log(fetechTest, res);
  //title and description of the book returned.
  console.log(res.items[0].volumeInfo.title);
  console.log(res.items[0].searchInfo.textSnippet);
};
test();
