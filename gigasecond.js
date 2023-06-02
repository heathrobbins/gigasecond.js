//solution to gigasecond.js in javascript on exercism.io

function countSeconds(name){
      var count = 0; 
      do {
      count += 1;
      console.log(name + " has lived for " + count + " seconds");
      } while (count<1000000000);
}
countSeconds("Heath");
