//one piece ep generator
let ep;
let watchButton = document.getElementById("watch");
if(localStorage.length>0){
    document.querySelector("h2").innerHTML= +JSON.parse(localStorage.ep)+1;
    watchButton.onclick = function(){
        ep= JSON.parse(localStorage.ep);
        ep++;
        localStorage.ep=JSON.stringify(ep);
        open("https://witanime.com/episode/one-piece-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-"+JSON.parse(localStorage.ep)+"/") 
        setTimeout(2000,location.reload());
    }
}else{
    let input = document.createElement("input");
    input.setAttribute("type","number");
    let label=document.createElement("label");
    label.innerHTML="next ep";
    document.body.removeChild(watchButton);
    document.body.appendChild(label);
    document.body.appendChild(input);
    document.body.appendChild(watchButton);
    watchButton.onclick = function(){
        ep= input.value;
        localStorage.ep=JSON.stringify(ep);
        open("https://witanime.com/episode/one-piece-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-"+JSON.parse(localStorage.ep)+"/");
        location.reload();
    }
}