/*
This question is asked by Google. Given a string, reverse all of its characters and return the resulting string.

Ex: Given the following strings...

“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”

*/
let data = "Karan Singh Sodhi"
let finalString="";
for(let i=data.length-1;i>=0;i--){
    finalString+=data[i]
}
console.log(finalString)
//this above code has time complexity of O(n) and space O(n)
//cuz strings are immutable so modifying a string creates a new string
//we use StringBuffer

StringBuffer s = new StringBuffer();
for(let i=data.length-1;i>=0;i--){
    finalString+=data[i]
}
console.log(finalString)