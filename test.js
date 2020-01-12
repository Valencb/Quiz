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
//angrams(['Ac','zsc','bca', 'cab','aab','ac']);

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
function permutation(str) {
  if (str.length > 50){
    console.log("The given string exceeds the 50 character lenght limit")
  }
  else
  {
	  let letters = str.split(''), result = [[letters.shift()]] 
	    while (letters.length) {
		    const currentLetter = letters.shift()
		    let tmpresult = []
		      result.forEach(result => {
			    let rIdx = 0
			      while (rIdx <= result.length) {
				      const tmp = [...result]
				      tmp.splice(rIdx, 0, currentLetter)
			      	tmpresult.push(tmp)
				      rIdx++
			      }
		      })
		    result = tmpresult
	    }
	    console.log("Permutations: " + result.length);
      const outcome = result.map(letterArray => letterArray.join('')).filter((el, idx, self) => (self.indexOf(el) === idx)).sort();
      console.log(outcome)
  }
}
//permutation('blanca');



//Given a number between 0 and 1 (e.g. 0.15), print its binary representation. If the number cannot be
//represented accurately in binary with at most 32 characters, just print "Error".

function convertToBin(decimal, fractionBits=8){
  if (decimal >= 0 && decimal <= 1){
  let integer = "", fraction = "";
  decimal = decimal.toString().trim();
  if (!/^(?:0|[1-9][0-9]*)(\.[0-9]+)?$/.test(decimal)){
      return console.log("Not a decimal number");
  } else {
      if (decimal!==""){
          if (!decimal.includes(".")) decimal += ".0";
          let pos = decimal.indexOf(".");
          let intSide = decimal.substr(0, pos);
          let num = Number(intSide);
          while (num>0){
              integer = (num%2).toString() + integer;
              num = Math.floor(num/2);
          }
          if (integer==="") integer = "0";
          num = Number("." + decimal.substr(pos+1));
          while (fraction.length<fractionBits){
              let n = 2*num;
              if (n<1){
                  fraction += "0";
                  num = n;
              } else {
                  fraction += "1";
                  num =  n-1;
              }
          }
          if (fraction==="") fraction = "0";
      }
      result = integer + "." + fraction;
        if (result.length > 32) {
          console.log("ERROR");
      }
        else {
          console.log(result);
      }
  }
} else {
  console.log("Not a number between 0 and 1")
}
}

//convertToBin(0.0013303);
//Write a function that can accept any number and return the number of circles inside the number, e.g.
//24690 as 3 circles, one for 6, another for 9 and another for 0, 7431 doesn't have any circlesinside.
function circles(number){
  var counter=0;
  var splitNumber=number.toString().split('').map(Number);
  //console.log(splitNumber)
  var circles=[-6,-8,-9,0,6,8,9];
  
  let numberWithCircle = splitNumber.filter(n => circles.includes(n));
  counter=numberWithCircle.length;
  console.log(counter)
}
circles(88);