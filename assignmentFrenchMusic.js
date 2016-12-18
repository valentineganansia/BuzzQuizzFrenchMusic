
var score=0;

function CheckedOpera(){
	var arr=document.getElementsByClassName("opera");
	if(arr[1].checked){
		score+=4;
	}
	console.log(score);
}
function checkedColor(){
	var arr=document.getElementsByClassName("color");
	if(arr[2].checked){
		score+=4;
	}
	console.log(score);
}


function SelectedChanteur(){
	var arr=document.getElementById("sel1").options.item(1);

if(arr.selected){
		score+=4;
	}
	console.log(score);
}


function AddFour(){
		score+=4;
	console.log(score);
}

function Selected(){
	var arr=document.getElementsByClassName("chanson");

	if(arr[0].value==4 && arr[1].value==3 && arr[2].value==2 && arr[3].value==1) {
	score+=4;
	}

	console.log(score);
}

function Result(){
	// score = score + amountToAdd;



	if(score ==20){
	alert("Your score : " +score+" You are the best, you could be French ! You know everything about french music!!")
}
	
	else if(score==16){
	alert("Your score: " +score+ "You could be french, great job!" )
}

	else if(score==12){
	alert("Your score: "+score+"You know part of the french music culture but not everything")
	}
	else if(score==8){
	alert ("Your score:"+score+ "You've got only two good answers, you need to listen more french music" )
	}
	else{
	alert ("Your score:"+score+"You don't know anything about french music, you need to listen to french music.")
	}
}


var myVideo = document.getElementById("video1"); 

function playPause() { 
    if (myVideo.pauseVideo()){
        myVideo.play(); 
    }
    else {
        myVideo.pauseVideo(); 
    }
 

function makeBig() { 
    myVideo.style.width = '1200px'; 
} 

function makeSmall() { 
    myVideo.style.width = '320px'; 
} 

function makeNormal() { 
    myVideo.style.width = '600px'; 
} 
