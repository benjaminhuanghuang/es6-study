function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  var y = await resolveAfter2Seconds(x+2);
  

  console.log(y); // 10
}
f1();