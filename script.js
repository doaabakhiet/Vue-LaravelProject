
$(document).ready(function(){
$(".b a").hover(function(){
$(this).addClass("text-primary");
});



$("#d1").accordion({
collapsible:true,
icons: 
    { "header": "ui-icon-plus", 
    "activeHeader": "ui-icon-minus" }
});
$("#d2").accordion({
collapsible:true,
icons: 
    { "header": "ui-icon-plus", 
    "activeHeader": "ui-icon-minus" }
});
$("#d3").accordion({
collapsible:true,
icons: 
    { "header": "ui-icon-plus rotate1", 
    "activeHeader": "ui-icon-minus rotate2" }
});


$("#alllinks  a").each(function () {
          $(this).addClass(' footlink1');
  });

  var flag=0;
  $("#alllinks a").each(function () {
                $(this).hover(function (){
                  if(flag==0){ 
                $(this).removeClass('footlink1');
                $(this).addClass(' footlink2');
                flag=1;}
                else{
                $(this).removeClass('footlink2');
                $(this).addClass(' footlink1');
                flag=0;
                }


            });});

            
            $(".accordio h3").each(function(){
            $(this).addClass("text-right")
            });


            var flag=0;






  $(".rotate2").hide();
            $(".rotate1").click(function(){
              if(flag==0){
              $(".rotate1").addClass("down");
              flag=1;
        
       $v= setTimeout(function(){
      $(".rotate1").hide();
      $(".rotate2").show();
     
  },2000);

              }

            });
  if (flag==1)
  {
    $(".rotate1").removeClass("down");
    flag=0;
    
  }

  $(".rotate2").click(function(){
    if(flag==1){
    $(".rotate2").hide();
    $(".rotate1").show();
    $(".rotate1").addClass("down");
  flag=0;}
  });




              $( "#forclicbtn" ).hide();
$( "#clicbtn" ).click(function() {

$( "#forclicbtn" ).toggleClass( "slow", function() {

});
});

          
});

$(".acordlink").hover(function(){
$(".acordlink").each(function(){
            $(this).addClass("tp")
            });});



