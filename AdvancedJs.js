    // fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    //     .then(res => res.json())
    //     .then((result) => {
    //         items= result.items;
    //         console.log(items);
    //         }),
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //     console.log(error);
    //     }

// Step 1: The code above is written using arrow functions. Rewrite the code above without using any arrow functions.


    // fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    //     .then(function(res){return res.json()} )
    //     .then(function(result){
    //         items= result.items;
    //         console.log(items);
    //         }),
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     function(error){
    //     console.log(error);
    //     }

// Step 2: Rewrite the above code using an async/await function.
// Step 3: Copy and paste the URL for the API (https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699) into your browser to examine the data returned by google books. Now write the code to display (console log) only the title and description of the book returned.
        const request = async () => {
            const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
            const json = await response.json();
            console.log(json.items[0].volumeInfo.title );
            console.log( json.items[0].volumeInfo.description );
            }
            request();



