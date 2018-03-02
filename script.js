function Fibb(){
	var num = Number(prompt("Input number"));
	var a = 1;
	var b = 1;
	var c;
	for(i = 3; i<=num; i++){
		c = a + b;
		a=b;
		b=c;
	}
	alert(b)
}

Fibb();