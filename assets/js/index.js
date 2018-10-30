$(function() {
  $('#green').mouseover(function(){
    $('#text').css('color','green');
  });
  $('#green').mouseout(function(){
    $('#text').css("color", "black");
  });
  $('#red').mouseover(function(){
    $('#text').css('color','red');
  });
  $('#red').mouseout(function(){
    $('#text').css("color", "black");
  });
  $('#blue').mouseover(function(){
    $('#text').css('color','blue');
  });
  $('#blue').mouseout(function(){
    $('#text').css("color", "black");
  });
});

//$('.color').mouseover(function(){
//colorDiv=$(this.attr('id');
//$('#text').css('color', colorDiv);
//});
//$('.color').mouseout(function(){
//$('#text').css('color', 'black');
//})
