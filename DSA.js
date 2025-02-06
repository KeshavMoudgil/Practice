// function twoSum(nums,target){
//   const map ={};
//   for(let i=0;i<nums.length;i++){
//     const complement = target-nums[i]
//     if(map[complement] !== undefined){
//       return [map[complement],i]
//     }
//     map[nums[i]] = i;

//   }
//   return [];
// }

// const nums = [2,7,11,15];
// const target = 9;
// console.log(twoSum(nums,target));


// function sumTwo(nums,target){
//   let map = {};
//   for
// (let i=0;i<nums.length;i++){
//     const complement = target - nums[i]
//     if(map[complement] !== undefined){
//       return [map[complement],i] 
//     }
//     map[nums[i]] = i;
    
//   }
//   return [];
// }
// const nums =  [3,2,4];
// const target = 6;
// console.log(sumTwo(nums,target));


// //nums = [3,2,4], target = 6 Output: [1,2]

// function twoSum(nums,target){
//   let  map ={};
//   for(let i = 0; i<nums.length; i++){
//   const complement = target - nums[i]
//   if(map[complement] !== undefined){
//   return [map[complement],i]}
//   map[nums[i]]= i;
//   }
//   return [];
//   }
  
//   const nums =[3,3];
//   target=6;
//   console.log(twoSum(nums,target));

  // function isPalidrome(str){
  //   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  //   return cleanedStr === cleanedStr.split('').reverse().join('');
  // }
  // let str = '121';
  // console.log(isPalidrome(str));



 function twoSum(nums,target){
  let map = {};
  for(let i = 0; i <nums.length;i++){
    const complement = target - nums[i];
    if(map[complement] !== undefined){
      return [map[complement],i];
    }
     map[nums[i]] = i;
    
  }
  return [];
 }

 const nums =[3,4,5,6,8];
target=7;  
 console.log(twoSum(nums,target));

 function isPalidrome(str){
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  cleanedStr === cleanedStr.split('').reverse().join('');
 }

 let str = '333';
 console.log(isPalidrome(str));

 function romanToInt(s){
  const romanMap = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  }
  let total = 0;
  for(let i = 0; i < s.length; i++){
     const current = romanMap[s[i]];
     const next = romanMap[s[i+1]];
     if(next> current){
     total += next - current;
      i++;
     }else{
  } total += current;
}
  return total;
 }
