$(function() {
  var answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", 
  "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", 
  "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", 
  "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

  $("#shake").click(selector);
  $(".basic").click(function() {
    $(this).removeClass("basic")
    selector();
  })

  function selector() {
    var selection = Math.random();
    var index = parseInt(selection * answers.length);
    var yourAnswer = answers[index]
    replaceImage(yourAnswer);
    $('#shake').text("Ask Another Question");
    $("img").removeClass("basic");
  };

  function replaceImage(answer) {
    if (answer === "It is certain") {
      newPath = "img/it_is_certain.svg"
    }
    else if (answer === "It is decidedly so") {
      newPath = "img/decidedly_so.svg"
    }
    else if (answer === "Without a doubt") {
      newPath = "img/without_a_doubt.svg"
    }
    else if (answer === "Yes definitely") {
      newPath = "img/yes_definitely.svg"
    }
    else if (answer === "You may rely on it") {
      newPath = "img/rely_on_it.svg"
    }
    else if (answer ==="As I see it yes") {
      newPath = "img/as_i_see_it.svg"
    }
    else if (answer === "Most likely") {
      newPath = "img/most_likely.svg"
    }
    else if (answer === "Outlook good") {
      newPath = "img/outlook_good.svg"
    }
    else if (answer === "Yes") {
      newPath = "img/yes.svg"
    }
    else if (answer === "Signs point to yes") {
      newPath = "img/signs_point_to_yes.svg"
    }
    else if (answer === "Reply hazy try again") {
      newPath = "img/reply_hazy.svg"
    }
    else if (answer === "Ask again later") {
      newPath = "img/ask_again.svg"
    }
    else if (answer === "Better not tell you now") {
      newPath = "img/better_not_tell_you.svg"
    }
    else if (answer === "Cannot predict now") {
      newPath = "img/cannot_predict_now.svg"
    }
    else if (answer === "Concentrate and ask again") {
      newPath = "img/concentrate_ask_again.svg"
    }
    else if (answer === "Don't count on it") {
      newPath = "img/dont_count_on_it.svg"
    }
    else if (answer === "My reply is no") {
      newPath = "img/reply_is_no.svg"
    }
    else if (answer === "My sources say no") {
      newPath = "img/sources_say_no.svg"
    }
    else if (answer === "Outlook not so good") {
      newPath = "img/outlook_not_so_good.svg"
    }
    else if (answer === "Very doubtful") {
      newPath = "img/very_doubtful.svg"
    }
    else {
      newPath = "img/front_of_ball.svg"
    }
    $("#displayed").attr("src", newPath)
  };

  $("nav button").click(function(){
    var color = $(this).attr("id")
    $("body").removeClass();
    $("body").addClass(color);
  });

});