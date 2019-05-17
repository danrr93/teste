function teste(){
  var a = 2;
  var b = 3;
  console.log(a + b);
}
teste();

function teste2(){
  const array = [1, 2, 3];
  const result = array[3];
  console.log(result);
}
teste2();

function teste3(){
  var a = [0, 1, 2, 3, 4];
  var r = a.indexOf(2);
  console.log(r);
}
teste3();

function teste4(){
  const o = {name: "Dan"};
  const s = JSON.parse(JSON.stringify(o));
  const result = s === o;
  console.log(result);
}
teste4();