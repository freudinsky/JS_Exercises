const intervalID = setInterval(printHello, 2000);
let i = 0;
function printHello() {
  console.log("Hello");
  i++;
  if (i > 3) {
    clearInterval(intervalID);
  }
}

printHello();
