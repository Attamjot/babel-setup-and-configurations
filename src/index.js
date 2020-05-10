import nav, { mapping } from './nav';

const name = "Attamjot Singh";
const printNumbers = (a, b) => a + b;
[1, 2, 3].map((n) => n + 1);

const pro = () => {
  return new Promise((resolve, reject) => {
     if(name) {
       resolve("resolved");
     } else {
       reject("reject");
     }
  });
}

pro().then((data) => {
  console.log("data", data);
});


class A {}
class B  extends A {}

async function getPost() {
  const response  = await console.log("Hi awaiting");
  console.log('done!!!');
}

getPost().then(() => {
  console.log("finally done!!!");
});

console.log(name);
console.log(printNumbers(10,20));
console.log("nav", nav);