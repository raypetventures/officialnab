$('.sidenav').sidenav();
$(".loader1").hide();
$(".pm-controller").hide();
$(".details").hide();
$(".d1a i").show();
$(".d1").show();

var work = 0;

function propertyManager(){
  if (work == 0) {
    //Show Property Dashboard Controls
    //Make work = 1
  } else {
    //Hide Property Dashboard Controls
    //Make work = 0
  }
};



$(".login-section form").submit(
  function(e){
   e.preventDefault();
  }
);
$("#password").keypress(function(e) {
  if(e.which == 13) {
    validateUser();
  }
});
function validateUser(){

  passwordOfUser = $("#user_password").val();
  nameOfUser = $("#user_name").val();
  emailOfUser = $("#user_email").val();
  if (nameOfUser == "" || emailOfUser == "" || passwordOfUser == "") {
    alert("Fields can not be left blank...");
  } else {
    if (nameOfUser =="joanjobodi1818") {
      $(".loader1").show();
      accessAccount();
    }else if (passwordOfUser == "772") {
      $(".loader1").show();
      accessAccount();
    }else {
      alert("Incorrect Input");
    }
  }
}

function accessAccount(){
  setTimeout(
    function(){
      $(".login-section form input").hide();
    }, 3000
  )
  setTimeout(
    function(){
      $(".login-section").addClass("scale-transition scale-out");
    }, 5000
  );
  setTimeout(
    function(){
      $(".account-1").addClass("scale-transition scale-in");
      $(".account-1").show();
    }, 7000
  );
  $(".pm-controller").show();
}


function moveDs(){
  if ($(".d1a").css('opacity') == 1) {
    alert("yeah d1a");
  }
  if ($(".d2a").css('opacity') == 1) {
    alert("yeah d2a");
  }
  if ($(".d3a").css('opacity') == 1) {
    alert("yeah d3a");
  }
  if ($(".d4a").css('opacity') == 1) {
    alert("yeah d4a");
  }
}
function moveD1(){
  $(".details").hide();
  $(".tooltipped i").hide();
  $(".d1a i").show();
  $(".d1").show();
}
function moveD2(){
  $(".details").hide();
  $(".tooltipped i").hide();
  $(".d2a i").show();
  $(".d2").show();
}
function moveD3(){
  $(".details").hide();
  $(".tooltipped i").hide();
  $(".d3a i").show();
  $(".d3").show();
}
function moveD4(){
  $(".details").hide();
  $(".tooltipped i").hide();
  $(".d4a i").show();
  $(".d4").show();
}
function moveD5(){
  $(".details").hide();
  $(".tooltipped i").hide();
  $(".d5a i").show();
  $(".d5").show();
}
//INITS
$('.carousel').carousel();
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
$('.tooltipped').tooltip();
$('.tabs').tabs();
$('.collapsible').collapsible();
$('.fixed-action-btn').floatingActionButton();
$('.materialboxed').materialbox();
//persoanl
$(".login-section").show();
$(".accounts").hide();
$(".account-1").hide();
$(".pm-controller").hide();
