function leapyear(year){
    return year % 4==0 && (year % 100 !=0 || year % 400 ==0);
}
if(leapyear(1504)){
    console.log("its a leap year")
}else{
    console.log("its not a leap year")
}