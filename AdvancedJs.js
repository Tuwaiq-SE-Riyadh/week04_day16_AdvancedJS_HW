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


    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
        .then(function(res){return res.json()} )
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