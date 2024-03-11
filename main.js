canvas = document.getElementById('myCanvas');
/*
Corrija o nome da função e uso o context 2d
*/
ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1Image = "car1.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2Image = "car2.png";
car2X = 10;
car2Y = 100;

backgroundImage = "racing.jpg";

function add() {
	backgroundImage = new Image(); //definindo uma variável com uma nova imagem
	backgroundImage.onload = uploadBackground; // ajustando uma função, onloading essa variável
	backgroundImage.src = "racing.jpg";   // carregue a imagem

	car1Image = new Image(); //definindo uma variável com uma nova imagem
	/*
	Upload the correct car
	*/
	car1Image.onload = uploadcar1; // ajustando uma função, onloading essa variável
	/*
	Assign a correct carImage variable
	*/
	car1Image.src = "car1.png";   // carregue a imagem

	car2Image = new Image(); //definindo uma variável com uma nova imagem
	car2Image.onload = uploadcar2; // ajustando uma função, onloading essa variável
	car2Image.src = "car2.png";   // carregue a imagem
}

function uploadBackground() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
} 

function uploadcar1() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(car1Image, car1X, car1Y, car1Width, car1Height);
}
function uploadcar2() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(car2Image, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("rigth");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("W");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("S");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("A");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("D");
		}
}