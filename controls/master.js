//$("#contact-btn").attr("disabled", true);
//$("#contact-btn").css("cursor","not-allowed");

$("#contact-btn").hide();

  $("#iamrobot").click(
    function(){
      $(".indicator").css("background","#fff");
      $("#robot").css("background","#000");
      showError();
    }
  );
  $("#iamhuman").click(
    function(){
      $(".indicator").css("background","#fff");
      $("#human").css("background","#000");
      $("#error-ctc").hide();
      //$("#contact-btn").attr("disabled", false);
      $("#contact-btn").show();
      $("#contact-btn").css("cursor","pointer");
    }
  );
  $("#iamalien").click(
    function(){
      $(".indicator").css("background","#fff");
      $("#alien").css("background","#000");
      showError();
    }
  );

  function showError(){
    $("#error-ctc").show();
    // WARNING: $("#contact-btn").css("cursor","not-allowed");
    $("#contact-btn").hide();
    setTimeout(
      function(){
        $("#error-ctc").hide();
      }, 3000
    );
  }
