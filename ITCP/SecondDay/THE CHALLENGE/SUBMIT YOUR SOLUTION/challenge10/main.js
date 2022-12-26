function isEqual(a,b)
    {
     
      if(a.length!=b.length)
       return false;
      else
      {
       
       for(var i=0;i<a.length;i++)
       if(a[i]!=b[i])
        return false;
        return true;
      }
    }
function arrayMonotone(arr){
    const a=[...arr];
    console.log(a);
    let b=[...arr.sort()]
    let c=[...arr.sort(function(a, b){return b - a})]
    console.log(a);
    console.log(b);
    console.log(c);
    return isEqual(a,b) || isEqual(a,c);
} 
if(arrayMonotone([4,3,2,1])){
    console.log("monotone");
}else{
    console.log("non monotone");
}