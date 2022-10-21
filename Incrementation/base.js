const totalBoxes = 2

//In game variables
var points = 0.0

var gamedata = {
	p: 1.0,
	b: 1.0,
	boxCount: 1
}

//Other variables
var nextBoxPurchasePrice = 10

function start() {
	gameLoop()
}

function gameLoop() {
	var pointFormula
	pointFormula = "p"
	points = gamedata.p
	if (document.getElementById("formulaChangesBox2").checked) {
		pointFormula += " * b"
		points *= gamedata.b
	}
	
	document.getElementById("Points").innerHTML = "Points = " + pointFormula + " = " + Math.round(points)
	
	document.getElementById("pValue").innerHTML = "p = " + Math.round(gamedata.p)
	document.getElementById("bValue").innerHTML = "b = " + Math.round(gamedata.b)
	
	if (gamedata.boxCount == totalBoxes) {
		document.getElementById("buyNewBoxButton").style.backgroundColor = "black"
	}
	else {
		document.getElementById("buyNewBoxButton").style.backgroundColor = "white"
	}
	
	if (gamedata.boxCount >= 2) {
		document.getElementById("box2").style.display = "inline-block"
	}
	else {
		document.getElementById("box2").style.display = "none"
	}
	
	window.requestAnimationFrame(gameLoop)
}

function incrementA() {
	gamedata.p += 1
}

function increaseB() {
	gamedata.b += 0.01
}

function buyNewBox () {
	if (points >= nextBoxPurchasePrice && totalBoxes > gamedata.boxCount) {
		points -= nextBoxPurchasePrice
		nextBoxPurchasePrice *= 10
		gamedata.boxCount += 1
	}
}

function save () {
	localStorage.setItem(prompt("To what file?"), JSON.stringify(gamedata))
}

function load () {
	console.log(localStorage.getItem("uwu"))
	gamedata =  JSON.parse(localStorage.getItem(prompt("From what file?")))
}