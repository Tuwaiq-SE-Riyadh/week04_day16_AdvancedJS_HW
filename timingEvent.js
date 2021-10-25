
function startFunction(){

    document.querySelector("#timeout_text").innerHTML="The timeout has been started";
    setTimeout(start, 3000)
}

function start(){

    const txt=document.querySelector("#timeout_text");
    txt.innerHTML="The timeout has been triggered!"; 
    txt.style.color="green";
    
}

function stopFunction(){

    const h = document.querySelector("#timeout_text").innerHTML="The timeout has been cleared";
}

clearTimeout(stopFunction)
