$(function(){

  //Random Number Generator
  $("#num-generator").click(establishNums);

  function establishNums(){
    // 1. get the values from the text fields
    var startVal = parseInt($(".random #start").val());
    var endVal = parseInt($(".random #end").val());

    // 2. Establish that Numbers Are Legit
    if (endVal <= startVal) {
      alert('Please choose a maximum value that is greater than your minimum value');
    }
    else if (!Boolean(startVal) || !Boolean(endVal)) {
      alert('Please enter valid minimum and maximum values');
    }
    else {
      generateRandom(startVal,endVal);
    }
  };

  function generateRandom(start, end){
    // 3. Get Your Boundaries
    var range = end - start;

    // 4. Generate Random Num
    var randomNum = parseInt(Math.random() * range + start);
    $('#random-num').text('Your Random Number is: ' + randomNum);
  };

  //Sum Between Two Numbers
  $("#num-sum").click(sumValues);

  function sumValues(){
    var firstVal = parseInt($(".sum-btwn #val1").val());
    var secondVal = parseInt($(".sum-btwn #val2").val());

    if (secondVal <= firstVal) {
      firstVal = secondVal;
      secondVal = parseInt($(".sum-btwn #val1").val());
      sumBetween(firstVal,secondVal);
    }
    else if (!Boolean(firstVal) || !Boolean(secondVal)) {
      alert('Please enter valid numbers');
    }
    else {
     sumBetween(firstVal,secondVal);
    }
  };

  function sumBetween(start,end) {
    if (end !== 0) {
      start += end;
      end--;
      sumBetween(start,end);
    }
    else {
      $('#sum-between').text('Your Sum is: ' + start);
    }
  };

  //Prime number above & below
  $("#prime-find").click(findPrimes);

  function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
  }

  function findPrimes() {
    var forPrime = parseInt($(".primes #prime1").val());
    highPrime(forPrime);
    lowPrime(forPrime);
  }

  function highPrime(num) {
    for (var x = num+1; x < num**2; x++) {
      if (isPrime(x)) {
        var higherPrime = x;
        $('#prime-high').text('The Prime Number Immediately Above Your Number is: ' + higherPrime);
        break;
      }
    }
  }

  function lowPrime(nums) {
    for (var y = nums-1; y > 0; y--) {
      if (isPrime(y)) {
        var lowerPrime = y;
        $('#prime-low').text('The Prime Number Immediately Below Your Number is: ' + lowerPrime);
        break;
      }
    }
  };

});