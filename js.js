function teste(){
  var a = 2;
  var b = 3;
  console.log(a + b);
}
teste();

const obj = Object.assign({
  name: "JavaScript"
}, {
  name: "ECMAScript"
}, {
  name: "LiveScript"
});

const result = obj.name;
console.log(result);

const array = [1, 2, 3, 5];
const result2 = array.indexOf(3); // pega o index do valor
console.log(result2);
