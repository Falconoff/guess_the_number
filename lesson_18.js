let nr=0;
restart(nr);
// ползунок-помощник
function catchNumber() {
	let message = "";
	let value2 = document.getElementById("nr").value;
	message = ((value2>=nr-20)&&(value2<=nr+20))?"Тепло":"Холодно";
	if ((value2>=nr-5)&&(value2<=nr+5)) {message = "<span class='victory'>Гарячо!</span>"};
	document.getElementById("rez1").innerHTML = message;
	document.getElementById("gen").innerHTML = value2;
}

// вводим свой вариант ответа
function enterNumber() {
	let value2 = document.getElementById("txt").value;
	let shablon = /^[0-9]{1,2}$/; 		/*регулярное выражение, требующее одно- или двухзначное число*/
	let message = "";
	if (!(shablon.test(value2))) {		/*проверка соответствия текстовой строки value2 регулярному выражению shablon*/
		message = "Введите целое число из одной или двух цифр";
	} else if (!(value2==nr)) {
				message = "Попробуй ещё раз"
			} else {
					message = "Браво! Верно!!!"
					}
	document.getElementById("rez2").innerHTML = message;
}

function restart() {
	nr = Math.floor(Math.random(nr)*99);		
/* Math.random генерирует случайное число от 0 до 1; Math.floor округляет до бОльшего целого числа */
	document.getElementById("rez1").innerHTML = "";
	document.getElementById("rez2").innerHTML = "";
	document.getElementById("txt").value = "";
	document.getElementById("nr").value = "";
	document.getElementById("gen").innerHTML = "";
}
