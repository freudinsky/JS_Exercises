let n1 = 0;
let n2 = 1;
let nxN;
function fibonacci() {
  for (let i = 0; i < 10; i++) {
    console.log(n1);
    nxN = n1 + n2;
    n1 = n2;
    n2 = nxN;
  }
}
fibonacci();
