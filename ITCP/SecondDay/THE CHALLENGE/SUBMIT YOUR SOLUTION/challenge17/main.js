function columnNumber(x){
    var a=[]
    let i=0;
    while(x>26){
        x-=26;
        i++;
        a.push(String.fromCharCode(64+i))
    }
    a.push(String.fromCharCode(64+x))
    return a.join("")
}
console.log(columnNumber(28))