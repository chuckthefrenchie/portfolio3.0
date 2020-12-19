// $("#connectSection").on('click', function() {
// 	delay: 10000,
// 	const section = document.getElementsByClassName("about");
// console.log(section);
// let currentPos = window.pageYOffset;


// const update = () => {
// 	const newPos = window.pageYOffset;
// 	const diff = newPos - currentPos;
// 	const speed = diff * 0.35;
	
   
//     section.style.transform = `skewY(${ speed }deg)`;

//     console.log(section.style);
	
// 	currentPos = newPos;
	
// 	requestAnimationFrame(update);
// }

// update();
// });
$('#connectSection').teletype({
	animDelay: 100,
	text: [
		"Send an email to korbyshevadaria@gmail.com or lets connect here"
	]
  });