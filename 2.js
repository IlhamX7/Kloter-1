//Nomer 2
const arr = [12, 6, 43, 5, 7, 2, 5];
const rotateByOne = arr => {
   for(let i = 0; i < arr.length-1; i++){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
   };
}
Array.prototype.rotateBy = function(n){
const { length: l } = this;
   if(n >= l){
       return;
   };
   for(let i = 0; i < n; i++){
       rotateByOne(this);
   };
};
const a = ["a","b","c","d","e"];
const b = ["a","b","c","d","e"];
const c = ["a","b","c","d","e"];
const d = ["a","b","c","d","e"];
a.rotateBy(1);
b.rotateBy(2);
c.rotateBy(3);
d.rotateBy(4);
console.log("Putaran 1: [" + a + "]");
console.log("Putaran 2: [" + b + "]");
console.log("Putaran 3: [" + c + "]");
console.log("Putaran 4: [" + d + "]");
