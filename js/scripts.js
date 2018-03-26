$(document).ready(function() {
  $("#wordcounter").submit(function(){
    var input = ("#sentence").val();
    var splitInput = input.split(" ");

    wordArray.forEach(function(word) {
      if (word.length >=3) {
        $("#output").append("<li>" + word +"<li>")
      }
    });
    });

    // input.forEach(function(input){
    //   inputs = input.split();
    //   console.log(inputs);
    //
    //
    //
    //
    //
    //
    //
    //       console.log(arrayOfStrings);
    //       event.preventDefault();
    //

      //
      // splitString(arrayOfStrings, string);


      //
      // });
      //   });
      // });




  // function splitString(stringToSplit, separator) {
  //     var userInput = stringToSplit;
  //   var array = userInput.split(
  //     ",", 3)
    // var newInput = $("")

    // function splitString(stringToSplit, separator) {

    // var splitWords = wordSplit.split(",", 3);

    // function splitWords(presplit, aftersplit) {
    // console.log(splitWords);



      //   $("h2#output").append(wordsplit);
      //
      //
      // var res = str.split (" ", 3);
      // document.getElementById("output").innerHTML = res;
