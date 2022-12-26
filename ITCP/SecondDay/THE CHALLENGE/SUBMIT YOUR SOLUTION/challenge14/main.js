function affichage(n){
    for(let i=1;i<=n;i++){
        console.log(decomposition(i))
    }
}
function decomposition(n){
    if(n==1){
        return "1"
    }else{
        return decomposition(Math.floor(n/2)).concat(""+n %2+"");
    }
}
affichage(14)