function perfectNumber(x){
    let S=0;
    for(let i=0;i<=x/2;i++){
        if(x % i==0){
            S+=i;
        }
    }
    return S==x
}
if(perfectNumber(28)){
    console.log(true)
}else{
    console.log(false)
}