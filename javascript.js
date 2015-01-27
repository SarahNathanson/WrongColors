window.onclick = changeColor;


function changeColor(){
	var text=["girl","boy","storm","sun","good","evil","danger","safety","happy","sad"];
	var color=["blue","#F781F3","#FFFF99","#4D4D4D","#222222","#E6E6E6","#66FF66","#B20000","#0000CC","#FFFF00"];
	var backgroundcolor=["#0066FF","#FF00FF","#FFFF00","#949494","black","white","#00FF00","red","#00008F","#FFFF99"];
	var number=Math.floor(Math.random()*(backgroundcolor.length));
	document.getElementById("container").innerHTML =text[number];
	document.getElementById("container").style.color=color[number];
	document.body.style.backgroundColor=backgroundcolor[number];
}