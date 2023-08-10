const myTimeout = setTimeout(myGreeting, 2000);

function myTimer() {
  clearTimeout(myTimeout);
}
function myGreeting() {
  console.log("hello");
}
