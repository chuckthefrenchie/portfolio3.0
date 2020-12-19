// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//         console.log(this.hash)
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });


// const shooter = document.getElementById("player-controlled-shooter")


// function moveUp() {
//     let topPosition = window.getComputedStyle( document.getElementById('player-controlled-shooter'), 'top')
//     // let topPosition = window.getComputedStyle(shooter).getPropertyValue('top')
//     const shooter = document.getElementById
//     ("player-controlled-shooter")
//     if (shooter.style.top === "0px"){
//         return
//     } else{
//         let position = parseInt(topPosition)
//         position -= 4
//         shooter.style.top = `${position}px`
//     }
// }

// function moveDown() {
//     // let topPosition = window.getComputedStyle(shooter).getPropertyValue('top')
//     let topPosition = window.getComputedStyle( document.getElementById('player-controlled-shooter'), 'top')
//     const shooter = document.getElementById("player-controlled-shooter")
//     if (shooter.style.top === "360px"){
//         return
//     } else{
//         let position = parseInt(topPosition)
//         position += 4
//         shooter.style.top = `${position}px`
//     }
// }

// function letShipFly (event){
//     if (event.key === "ArrowUp") {
//         event.preventDefault()
//         moveUp()
//     } else if (event.key === "ArrowDown") {
//         event.preventDefault()
//         moveDown()
//     } else if (event.key === " ") {
//         event.preventDefault()
//         fireLaser()
//     }

// }
// window.addEventListener("keydown", letShipFly)