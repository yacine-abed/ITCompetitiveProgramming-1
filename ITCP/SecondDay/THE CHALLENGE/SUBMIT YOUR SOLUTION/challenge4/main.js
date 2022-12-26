var callcallStack;   

function executeHanoi()
{ 
 
  callStack=[];  

  Hanoi(diskCount, 0,2,1);
    
  moveDisk();  
}

function Hanoi(n, from, to , via)
{
  if (n==0) return;
  Hanoi(n-1, from, via , to);
  moveDisk(from,to);
  Hanoi(n-1, via, to , from);
}
function moveDisk()
{  if (callStack.length==0) return; 
   var param = callStack.shift();
   fromBar = param[0];
   toBar = param[1];
   var elem = document.getElementById(barsInfo[fromBar].disks.pop());  
   moveInfo = { elem: elem,
                fromBar: fromBar,
                toBar: toBar,
                whichPos: "top", 
                dir: -1,  
                state: "up", 
                endPos:60    
             } 
   myTimer = setInterval(animateMove,speed); 
}