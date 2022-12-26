function capital(word){
    let a=word.valueOf();
    console.log(a)
    let b=word.toUpperCase();
    console.log(b)
    return a==b
}
if(capital("YACINE")){
    console.log("true")
}else{
    console.log("false")
}