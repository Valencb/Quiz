//Write a function that receives two numeric parameters (positive integers), adds them and prints the result
//in the console. You should not use + or any arithmetic operators.
function sum(n) {
    if(n >= 0){
       var s = 0;
        for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
        }
        return console.log(s) 
    }else{
      console.log('Please at positive numero');
      return false;
    }
    
}


//3. Write a method to sort an array of strings so that all theanagrams are next to eachother.

//Anagrams
function angrams(n){
const group={};
var word=n.map(n => n.toLowerCase().split('').sort());
//console.log(Object.keys(word))

word.forEach(function (word, index){
  group[word]=group[word] ||[];
  group[word].push(n[index]);
});

Object.keys(group).forEach(function(word, index){
  var combinate= group[word];
    if(combinate.length>1){ 
      console.log(index + " " + combinate.join(' '));
      
    }
});
   
//console.log(group);
};
angrams(['Ac','zsc','bca', 'cab','aab','ac']);

//Order all the  Anagramas next to each other
function orderAngrams(n){
  var newArray=[];
  newArray= n.sort();
  console.log(newArray);
}
//orderAngrams(['cat', 'dog', 'tac', 'god', 'act']);


//Write a function that receives a matrix and returns its transposed one.
function matrix(n) {
 const newMatrix=n.reduce((prev, next) => next.map((item, i) =>
    (prev[i] || []).concat(next[i])
  ), []);
  return console.log(newMatrix);
}

/*matrix([
    [1,2,3],
    [1,2,3],
    [1,2,3],
]);*/
//Write a function to print all permutations of as tring. Max string length can be 50 characters.
//Burble sort



//Given a number between 0 and 1 (e.g. 0.15), print its binary representation. If the number cannot be
//represented accurately in binary with at most 32 characters, just print "Error".