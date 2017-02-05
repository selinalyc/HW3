function setup() {
	createCanvas(400,400);
	
}

function draw(){
		colorMode(HSB);
	background(255);
		var h = 0;
		for(var x=0;x<400;x=x+10){
		line(200,0,x,400);
		}

}
