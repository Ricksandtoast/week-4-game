$(document).ready(function(){
  var score = Math.floor(Math.random()*120);
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var blue = Math.floor(Math.random()*12)+1;
  var red = Math.floor(Math.random()*12)+1;
  var purple = Math.floor(Math.random()*12)+1;
  var orange = Math.floor(Math.random()*12)+1;

  //score to aim for
  $(".score").append("<p></p>");
  $(".score p:nth-child(2)").append(score).css("font-size","24px");

  //player score
  $(".total-Score-Box").append("<p></p>");
  $(".total-Score-Box p:nth-child(2)").append(totalScore).css("font-size","24px");

  //click on crystals would like to clean this up
  $("#blue").click(function()
  {
    totalScore = totalScore + blue;
    $(".total-Score-Box p:nth-child(2)").html(totalScore).css("font-size","24px");
    win();    
  });

  //click for orange
  $("#orange").click(function()
  {
    totalScore = totalScore + orange;
    $(".total-Score-Box p:nth-child(2)").html(totalScore).css("font-size","24px");

    win();
  });

  
  $("#purple").click(function()
  {
    
    totalScore = totalScore + purple;
    $(".total-Score-Box p:nth-child(2)").html(totalScore).css("font-size","24px");
    win();
  });

  //
  $("#red").click(function()
  {
    
    totalScore = totalScore + red;
    $(".total-Score-Box p:nth-child(2)").html(totalScore).css("font-size","24px");
    win();
  });

  //win function why do I need to put it in a function
function win(){
  if(totalScore == score)
  {
    console.log(totalScore);
    alert("you win");
    totalScore = 0;
    score = Math.floor(Math.random()*120);
    $(".total-Score-Box p:nth-child(2)").html(totalScore).css("font-size","24px");
    $(".score p:nth-child(2)").html(score).css("font-size","24px");
    wins++;
    $(".wins-loses p:nth-child(1)").append(wins);
  }
  if(totalScore > score)
  {
    alert("you lose");
    totalScore = 0;
    score = Math.floor(Math.random()*120)+1;
    $(".score p:nth-child(2)").html(score).css("font-size","24px");
    $(".total-Score-Box p:nth-child(2)").html(totalScore).css("font-size","24px");
    losses++;
    $(".wins-loses p:nth-child(2)").append(losses);
  }
};

});
// var game = 
// {
//   randomScore: null,
//   blueCrystal: Math.floor((Math.random()*7)), 
// }

// //click blue to add to thing
// $(document).ready(function(){

//   $("#score").append("<p>some-text</p>");

//   $("#blue").click(function(){

//   });



// });