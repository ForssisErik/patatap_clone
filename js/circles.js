var circles = [];

var keyData = {
	a: {
		color: "purple",
		sound: new Howl({
			src: ['sounds/bubbles.mp3']
		})
	},
	b: {
		color: "#583803",
		sound: new Howl({
			src: ['sounds/clay.mp3']
		})
	},
	c: {
		color: "#4548e7",
		sound: new Howl({
			src: ['sounds/confetti.mp3']
		})
	},
	d: {
		color: "#5f569e",
		sound: new Howl({
			src: ['sounds/corona.mp3']
		})
	},
	e: {
		color: "#b4ec57",
		sound: new Howl({
			src: ['sounds/dotted-spiral.mp3']
		})
	},
	f: {
		color: "#60a506",
		sound: new Howl({
			src: ['sounds/flash-1.mp3']
		})
	},
	g: {
		color: "#674049",
		sound: new Howl({
			src: ['sounds/flash-2.mp3']
		})
	},
	h: {
		color: "#6644c5",
		sound: new Howl({
			src: ['sounds/flash-3.mp3']
		})
	},
	i: {
		color: "#c79d6c",
		sound: new Howl({
			src: ['sounds/glimmer.mp3']
		})
	},
	j: {
		color: "#a0cadc",
		sound: new Howl({
			src: ['sounds/moon.mp3']
		})
	},
	k: {
		color: "#0b4925",
		sound: new Howl({
			src: ['sounds/pinwheel.mp3']
		})
	},
	l: {
		color: "#1d80ca",
		sound: new Howl({
			src: ['sounds/piston-1.mp3']
		})
	},
	m: {
		color: "#075213",
		sound: new Howl({
			src: ['sounds/piston-2.mp3']
		})
	},
	n: {
		color: "purple",
		sound: new Howl({
			src: ['sounds/piston-3.mp3']
		})
	},
	o: {
		color: "#7938ae",
		sound: new Howl({
			src: ['sounds/prism-1.mp3']
		})
	},
	p: {
		color: "#481c50",
		sound: new Howl({
			src: ['sounds/prism-2.mp3']
		})
	},
	q: {
		color: "#37a0f7",
		sound: new Howl({
			src: ['sounds/prism-3.mp3']
		})
	},
	r: {
		color: "#94b3dc",
		sound: new Howl({
			src: ['sounds/splits.mp3']
		})
	},
	s: {
		color: "#cdb065",
		sound: new Howl({
			src: ['sounds/squiggle.mp3']
		})
	},
	t: {
		color: "#4ac7d3",
		sound: new Howl({
			src: ['sounds/strike.mp3']
		})
	},
	u: {
		color: "#3e5e8e",
		sound: new Howl({
			src: ['sounds/suspention.mp3']
		})
	},
	v: {
		color: "#124ca4",
		sound: new Howl({
			src: ['sounds/timer.mp3']
		})
	},
	w: {
		color: "#6b4687",
		sound: new Howl({
			src: ['sounds/ufo.mp3']
		})
	},
	x: {
		color: "#f4b996",
		sound: new Howl({
			src: ['sounds/veil.mp3']
		})
	},
	y: {
		color: "#d7c497",
		sound: new Howl({
			src: ['sounds/wipe.mp3']
		})
	},
	z: {
		color: "#c7e648",
		sound: new Howl({
			src: ['sounds/zig-zag.mp3']
		})
	}, 
}

function onKeyDown(e){
	if(keyData[e.key]){
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxPoint * randomPoint;
		var newCircle = new Path.Circle(point, 450);
		newCircle.fillColor = keyData[e.key].color;
		keyData[e.key].sound.play();
		circles.push(newCircle);
	}
	
}

function onFrame(e) {
	for(var i = 0; i < circles.length; i++){
		circles[i].fillColor.hue += 1;
		circles[i].scale(0.9);

		if(circles[i].area < 1){
			circles[i].remove();
			circles.splice(i, 1);
			i--;
		} 

		/*var x = Math.floor(Math.random() * (50 + 50 + 1)) - 50;
		var y = Math.floor(Math.random() * (50 + 50 + 1)) - 50;
		var randomP = new Point(x, y);
		circles[i].position += new Point(randomP);*/
	}
}