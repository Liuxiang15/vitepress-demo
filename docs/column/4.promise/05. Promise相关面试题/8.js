var a;
var b = new Promise((resolve, reject) => {
  console.log('promise1');
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then(() => {
    console.log('promise2');
  })
  .then(() => {
    console.log('promise3');
  })
  .then(() => {
    console.log('promise4');
  });

a = new Promise(async (resolve, reject) => {
  console.log(a); // undefined
  await b;  // 等待b执行，但是程序可不会卡在这里，也不会执行21-25行代码，而是结束
  console.log(a);
  console.log('after1');
  await a; // 等待自己完成，这里是永远等不到的，后面代码不执行了
  resolve(true);
  console.log('after2');
});

console.log('end');

// 同步
// promise1
// undefined
// end 
// // 异步
// promise2
// promise3
// promise4
// Promise{pending}
// after1
