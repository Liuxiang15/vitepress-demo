const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 1000);
});
const promise2 = promise1.catch(() => {
  return 2;
});

console.log('promise1', promise1); 
// Promise{ 'pending', value: undefined }
console.log('promise2', promise2);
// Promise{ 'pending', value: undefined }

setTimeout(() => {
  console.log('promise1', promise1);
  // Promise{ 'rejected', value: undefined }
  console.log('promise2', promise2);
  // Promise{ 'fulfilled', value: 2 }
}, 2000);
