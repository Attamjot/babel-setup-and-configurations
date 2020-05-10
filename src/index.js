const name = "Attamjot Singh";
const printNumbers = (a, b) => a + b;
[1, 2, 3].map((n) => n + 1);

class A {}
class B  extends A {}

async function getPost() {
  const response  = await console.log("Hi awaiting");
  console.log('done!!!');
}

getPost().then(() => {
  console.log("finally done!!!");
})

console.log(name);
console.log(printNumbers(10,20));
