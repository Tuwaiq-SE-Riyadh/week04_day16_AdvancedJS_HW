const btn1 =document.querySelector("#btn1")
const btn2 =document.querySelector("#btn2")
const div = document.querySelector("#container")
const text = document.createElement("h2")
const text1 = document.createElement("h2")
const text2 = document.createElement("h2")
text.innerText="The timeout has been started"
text1.innerText="The timeout has been triggered!"
text2.innerText="The timeout has been cleared"
text1.style.color='green'

let st 
btn1.addEventListener('click', event =>  {
    document.querySelector('#container').innerHTML = ""
    div.append(text)

         st =setTimeout(function (){div.append(text1)}, 3000) // was not sure why the code inside the "setTimeout" method excutes immediately so
                                                         // I looked online and found out that I need to use function inside the "setTimeout"
                                                         // source https://www.w3schools.com/jsreF/met_win_settimeout.asp 
        
  });

  btn2.addEventListener('click', event =>  {
   
    clearTimeout(st) // was not sure how to use "clearTimeout" method and found help at 
    div.append(text2)// https://www.w3schools.com/Jsref/met_win_cleartimeout.asp
        
  });
  
