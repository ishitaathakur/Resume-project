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
var progressbar=document.querySelectorAll('.skill1 > div');
var skillcont=document.getElementById('skillani');
window.addEventListener('scroll',checkScroll);
var animadone=false;
function intialisebars(){
    for(let b of progressbar){
        b.style.width=0+'%';
    }
}
intialisebars();
function fillbars(){
    for(let b of progressbar){
        let finalani=b.getAttribute('barwidth');
        let cur=0;
        var interval=setInterval(function(){
        if(cur> finalani){
            clearInterval(interval);
            return;
        }
        cur++;
        b.style.width=cur+'%';
    },15);
    }
}
function checkScroll(){
     var point=skillcont.getBoundingClientRect();
     if(!animadone && point.top < window.innerHeight){
        animadone=true;
        fillbars();
     }
     else if(point.top>window.innerHeight){
        animadone=false;
         intialisebars();
     }

}


