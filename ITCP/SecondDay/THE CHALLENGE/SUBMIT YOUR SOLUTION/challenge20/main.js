function primeNumber(x){
    for(i=2;i<=x/2;i++){
        if(x % i==0){
            return false
        }
    }
    return true
}
console.log(primeNumber(10))