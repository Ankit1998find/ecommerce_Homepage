$(document).ready(function () {
  $("#mobileMenu").hide(); 
  $("#openMenuBtn").click(function () {
    $("#mobileMenu").show().css("height", "400px");
    $("#mobileMenu").css("transform", "translateY(0)");
  });

  $(".closeBtn").click(function () {
    $("#mobileMenu").hide(); 
    $("#mobileMenu").css("transform", "translateY(100%)");
  });
});

