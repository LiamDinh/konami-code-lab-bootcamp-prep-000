const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0; 

function init() {
  // your code here
   // your code herelet index = 0; 
  let index = 0;
  document.addEventListener('keydown', function(e) {
    const key = e.key; 
    if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  //  alert("Wrong Codes!")
  }
  })
}
