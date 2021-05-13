function tercs(){
 var mensaje="sin igualdad";
 var nombre=document.getElementById("nomb").value;
 var x1=Math.trunc(Math.random()*10)+1;
 var x2=Math.trunc(Math.random()*10)+1;
 var x3=Math.trunc(Math.random()*10)+1;

 switch (x1){
 	case 1:
 		document.getElementById("box1").innerHTML="<img src='f01.png'>";
 	break;
 	case 2:
 		document.getElementById("box1").innerHTML="<img src='f02.png'>";
 	break;
 	case 3:
 		document.getElementById("box1").innerHTML="<img src='f03.png'>";
 	break;
 	case 4:
 		document.getElementById("box1").innerHTML="<img src='f04.png'>";
 	break;
 	case 5:
 		document.getElementById("box1").innerHTML="<img src='f05.png'>";
 	break;
 	case 6:
 		document.getElementById("box1").innerHTML="<img src='f06.png'>";
 	break;
 	case 7:
 		document.getElementById("box1").innerHTML="<img src='f07.png'>";
 	break;
 	case 8:
 		document.getElementById("box1").innerHTML="<img src='f08.png'>";
 	break;
 	case 9:
 		document.getElementById("box1").innerHTML="<img src='f09.png'>";
 	break;
 	case 10:
 		document.getElementById("box1").innerHTML="<img src='f10.png'>";
 	break;
 }

 switch (x2){
 	case 1:
 		document.getElementById("box2").innerHTML="<img src='f01.png'>";
 	break;
 	case 2:
 		document.getElementById("box2").innerHTML="<img src='f02.png'>";
 	break;
 	case 3:
 		document.getElementById("box2").innerHTML="<img src='f03.png'>";
 	break;
 	case 4:
 		document.getElementById("box2").innerHTML="<img src='f04.png'>";
 	break;
 	case 5:
 		document.getElementById("box2").innerHTML="<img src='f05.png'>";
 	break;
 	case 6:
 		document.getElementById("box2").innerHTML="<img src='f06.png'>";
 	break;
 	case 7:
 		document.getElementById("box2").innerHTML="<img src='f07.png'>";
 	break;
 	case 8:
 		document.getElementById("box2").innerHTML="<img src='f08.png'>";
 	break;
 	case 9:
 		document.getElementById("box2").innerHTML="<img src='f09.png'>";
 	break;
 	case 10:
 		document.getElementById("box2").innerHTML="<img src='f10.png'>";
 	break;
 }

 switch (x3){
 	case 1:
 		document.getElementById("box3").innerHTML="<img src='f01.png'>";
 	break;
 	case 2:
 		document.getElementById("box3").innerHTML="<img src='f02.png'>";
 	break;
 	case 3:
 		document.getElementById("box3").innerHTML="<img src='f03.png'>";
 	break;
 	case 4:
 		document.getElementById("box3").innerHTML="<img src='f04.png'>";
 	break;
 	case 5:
 		document.getElementById("box3").innerHTML="<img src='f05.png'>";
 	break;
 	case 6:
 		document.getElementById("box3").innerHTML="<img src='f06.png'>";
 	break;
 	case 7:
 		document.getElementById("box3").innerHTML="<img src='f07.png'>";
 	break;
 	case 8:
 		document.getElementById("box3").innerHTML="<img src='f08.png'>";
 	break;
 	case 9:
 		document.getElementById("box3").innerHTML="<img src='f09.png'>";
 	break;
 	case 10:
 		document.getElementById("box3").innerHTML="<img src='f10.png'>";
 	break;
 }

 if ((x1==x2)&&(x1==x3)){
 	mensaje="TERCIA <3";
 }else if (x1==x2){
	mensaje="PARES <3";
}else if (x1==x3){
	mensaje="PARES <3";
}else if (x2==x3){
	mensaje="PARES <3";
}
else{
	mensaje="SIN IGUALDAD =(";
}
document.getElementById("Sal01").innerHTML="Hola "+nombre+" tu resultado es";
document.getElementById("resul").innerHTML=mensaje;
}