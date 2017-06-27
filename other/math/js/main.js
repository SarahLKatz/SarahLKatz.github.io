$(function(){

  $("#num-generator").click(establishNums);

  function establishNums(){
    // 1. get the values from the text fields
    var startVal = parseInt($("#start").val());
    var endVal = parseInt($("#end").val());

    // 2. Establish that Numbers Are Legit
    if (endVal <= startVal) {
      alert('Please choose a maximum value that is greater than your minimum value')
    }
    else if (!Boolean(startVal) || !Boolean(endVal)) {
      alert('Please enter valid minimum and maximum values')
    }
    else {
      generateRandom(startVal,endVal)
    }
  }

  function generateRandom(start, end){
    // 3. Get Your Boundaries
    var range = end - start

    // 4. Generate Random Num
    var randomNum = parseInt(Math.random() * range + start)
    $('#random-num').text('Your Random Number is: ' + randomNum);
  }

});