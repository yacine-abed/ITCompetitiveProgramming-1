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
function sortedarray(arr){
    let cpt=0;
    let a=[...arr];
    arr.sort((a,b)=>a-b);
    console.log(arr)
    while(!isEqual(a,arr)){
        a.unshift(a[a.length-1]);
        a.pop();
        cpt++
    }
    return cpt;
}
console.log(sortedarray([8, 9, 10, 2, 5, 6]))