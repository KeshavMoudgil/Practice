function longestCommonPrefix(strs){
  if(!strs.length) return "";
  let prefix = strs[0];
  for(let i=1;i<strs.length;i++){
    while(strs[i].indexOf(prefix) !== 0){
      prefix = prefix.slice(0,-1);
      if(prefix === "" )    return "";
    }
  
}
return prefix;
}

const strings = ["flower","flow","flight"];
console.log(longestCommonPrefix(strings));

function longestCommonPrefix(str){
  if(!str.length) return '';
  str.sort();
  let first = str[0];
  let last = str[str.length-1];
  let i = 0;
  while(i<str[0] && first[i] === last[i]){
    i++;
  }
  return first.substring(0,i);
}