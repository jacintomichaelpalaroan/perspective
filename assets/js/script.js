
// variable setting
let row=0, header, instructions, ChA, ChB, ChC, modal, bgImg, hint, ans, choice="";
// table data of question resources
const tableData= [
	["SEEING COLORS","Looks like you are seeing colors. How can you make them disappear?",	"Stare", "Close eyes",	"Cross eyes", "./assets/img/oi_1r.jpg", "./../img/oi_1r.jpg", "The answer you are looking for rhyms with claire.", "A"],
			
	["BLACK POLKA DOTS","Dots, dots everywhere. How many black dots are there?","30","3","0","./assets/img/oi_2.jpg","./../img/","It is a number that is round","C"],
			
	["ITS WAVY IN HERE","Is it just you or the image is really moving?","Yes","No","Just Drunk","./assets/img/oi_3.gif","./../img/oi_3.gif","It is a word","B"],
			
	["HOCUS FOCUS","Dots you can see all at the same time. But, how many are they?","21","15","10","./assets/img/oi_4.jpg","./../img/oi_4.jpg","Count them one by one","A"],
			
	["EINSTEIN IS A SHE!","Who is the secret identity of the genius?","Marie Curie","Manilyn Monroe","Mocha Uson","./assets/img/oi_5.jpg","./../img/oi_5.jpg","She is dead","B"],
];

// function to set the questions or text per game question or level
const renderGame=()=>{
	header=tableData[row][0];
	instructions=tableData[row][1];
	ChA=tableData[row][2];
	ChB=tableData[row][3];
	ChC=tableData[row][4];
	modal=tableData[row][5];
	bgImg=tableData[row][6];
	hint=tableData[row][7];
	ans=tableData[row][8];
	$("#header").html(header);
	$("#instructions").html(instructions);
	$("#A").html(ChA);
	$("#B").html(ChB);
	$("#C").html(ChC);
	$("#hint").html(hint);
}
		
// function to set the images per game question or level
const renderImage=()=>{
	if(row==0){
		$("#illusion").attr("src", "./assets/img/oi_1r.jpg");
		$('#questionbox').css("background-image", "url('./assets/img/oi_1r.jpg')");
	}else if(row==1){
		$("#illusion").attr("src", "./assets/img/oi_2.jpg");
		$('#questionbox').css("background-image", "url('./assets/img/oi_2.jpg')");
	}else if(row==2){
		$("#illusion").attr("src", "./assets/img/oi_3.gif");
		$('#questionbox').css("background-image", "url('./assets/img/oi_3.gif')");
	}else if(row==3){
		$("#illusion").attr("src", "./assets/img/oi_4.jpg");
		$('#questionbox').css("background-image", "url('./assets/img/oi_4.jpg')");
	}else if(row==4){
		$("#illusion").attr("src", "./assets/img/oi_5.jpg");
		$('#questionbox').css("background-image", "url('./assets/img/oi_5.jpg')");
	}
}

//function that proceeds to  the next question if answer is correct and displays end message 
const gameDecision=()=>{
	if (((row+1)<(tableData.length))&&(choice==ans)) {
		row++;
		renderGame();
		renderImage();
	}else if(((row+1)>=(tableData.length))&&(choice==ans)){
		$("#background").css("display","none");
		$('#body').css("background-image", "url('./assets/img/bg_5.jpg')");
		$("#message").html("Congratulations!")
		$("#message2").html("Game Completed!")
		row=0;
		$("#start_end").show();
	}
}

// displays intro message then hides it then shows game area
$("#start_end").click(function(){
	$(this).hide();
	$("#background").css("display","block");
	$("#background").css("background-size","cover");
	renderGame();
	renderImage(); 
});

//makes decision per click on choices 
$("#A").click(function(){
	choice="A";
	gameDecision();
});

$("#B").click(function(){
	choice="B";
	gameDecision();
});
			
$("#C").click(function(){
	choice="C";
	gameDecision();
});

//toggles hint
$("#hintTitleText").click(function(){
	$("#hint").toggleClass("show");
});
			



