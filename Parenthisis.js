
// function isValidParentheses(s){
//   const stack = [];
//   const map = {
//     ')':'(',
//     '}':'{',
//     ']':'[',
//   }
//   for(let char of s){
//     if(char === '(' || char === '{' || char === '['){
//       stack.push(char);
//     }else if(char === ')' || char === '}' || char === ']'){
//       if(stack.pop() !== map[char]){
//         return false;
//       }

      
//     }
//   }
//   return stack.length === 0;
// }

// console.log(isValidParentheses("()"));

// function isValidParentheses(s){
//   let stack = [];
//   let map = {
//     '}':'{',
//     ']':'[',
//     ')':'('
//   }
//   for (let chars of s){
//     if(chars ==='('||chars ==='['||chars ==='{'){
//       stack.push(chars);
//     }else if(chars ===')'||chars ===']'||chars ==='}'){
//       if(stack.pop !== map[chars]){
//         return false;

//       }
//     }
//   }
//   return stack.length === 0;
// }

function twoSum(nums,target){
  const map  = {};
  for(let i = 0 ; i < nums.length;i++){
    const complement = target - nums[i];
    if(map[complement] !== undefined){
      return [map[complement],i];
    }
    map[nums[i]] = i;

  }
  return [];
}
let nums = [2,7,11,15] 
let target = 9;
console.log(twoSum(nums,target));


function isPalidrome(str){
  const cleanedStr = str.toLowerCase('').replace(/[^a-z0-9]/g,'');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

let str = '121'
console.log(isPalidrome(str))