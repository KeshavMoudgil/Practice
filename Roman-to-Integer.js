// function romanToInt(s) {
//   const romanMap ={
//     'I' : 1,
//     'V' : 5,
//     'X' : 10,
//     'L' : 50,
//     'C' : 100,
//     'D' : 500,
//     'M' : 1000,
//   };
//   let total = 0;
//   for(let i=0;i<s.length;i++){
//     const current = romanMap[s[i]];
//     const next = romanMap[s[i+1]];
//     if(next > current){
//       total += next - current;
//       i++;

//     }else{
//       total += current;
//     }
//   }
//   return total;

// }
// console.log(romanToInt("LVIII"));

function romanToInt(s){
  const romanMap={
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000,
  }

  let total = 0;
  for(let i=0; i<s.length; i++){
    const current = romanMap[s[i]];
    const next = romanMap[s[i+1]];
    if(next>current){
      total += next-current;
      i++;
    }else{
      total += current; 
    }
  }
  return total;
} 

console.log(romanToInt("LVIII"));

function isPalidrome(str){
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
let str = '121';
console.log(isPalidrome(str));