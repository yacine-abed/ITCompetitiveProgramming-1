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
function anagrams(a,b){
        a=a.split("");
        b=b.split("");
        a.sort()
        b.sort()
        return isEqual(a,b)
}
if(anagrams("silent","lisen")){
    console.log("son anagrams")
}else{
    console.log("non")
}