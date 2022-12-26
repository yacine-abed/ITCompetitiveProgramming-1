function columnNumber(x){
    var a=[]
    while(x>26){
        x-=26;
        let b=x;
        while (b>26){
            b=b-26
        }
        a.push(String.fromCharCode(64+b))
    }
    a.push(String.fromCharCode(64+x))
    return a.join("")
}
console.log(columnNumber(27))