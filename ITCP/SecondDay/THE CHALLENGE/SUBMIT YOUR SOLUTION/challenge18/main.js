function isPrime(n){
    for(let i = 2; i <= n/2; i++){
       if(n % i === 0){
          return false;
       }
    };
    return true;
 };
function findPrimeFactors(num){
    let start = 2;
    while(start <= num){
       if(num % start === 0){
          if(isPrime(start)){
            if(start !=2 && start !=3 && start !=5){
                return false
            }
          };
       };
       start++;
    };
    return true
 };
 console.log(findPrimeFactors(6));