fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function(res) {
        return res.json()
    })

.then(function(result) {
        items = result.items;
        console.log(items);
    }),
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function(error) {
        console.log(error);
    }

//Rewrite the above code using an async/await function.

async function myFetch() {
    let res = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699");
    let result = await res.json();
    let items = result.items;
    console.log(result);
    console.log(items);
    // Now write the code to display (console log) only the title and description of the book returned.
    console.log(items[0].searchInfo.textSnippet);


    //Timing Event
    let time
    let btn1 = document.getElementById("testTime")
    btn1.addEventListener('click', function() {
        document.getElementById("demo").innerText = 'The timeout has been started'
        time = setInterval(function() {
            let pragraph = document.getElementById("demo")
            pragraph.style = 'color:green'
            pragraph.innerText = 'The timeout has been triggered!'
        }, 3000);
    })
    let btn2 = document.getElementById("clearTime")
    btn2.addEventListener('click', function() {
        clearTimeout(time);
        let pragraph = document.getElementById("demo")
        pragraph.style = 'color:black'
        pragraph.innerText = 'The timeout has been cleared'
    })

}
myFetch()
    .catch(error => {
        console.log(error);
    })