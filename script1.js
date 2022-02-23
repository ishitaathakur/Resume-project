var navtag=document.querySelectorAll('.space a');
// console.log(navtag);
var interval;
for(var i=0;i<navtag.length;i++){
    navtag[i].addEventListener('click',function(event){
     event.preventDefault();
     var targetID= this.textContent.trim().toLowerCase();
    //  console.log(targetsection);
     var targetsection=document.getElementById(targetID);
     interval=setInterval(scrollvertically,60,targetsection);
    });
}

function scrollvertically(targetsection){
    var targetseccordinates=targetsection.getBoundingClientRect();
    if(targetseccordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}
