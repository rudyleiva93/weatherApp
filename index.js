$(document).ready(function() {
  $("#currentLocation").click(function() {
    if($(this).prop("checked") == true) {
      $("#cityInput").attr("disabled", "disabled");
      $("#cityInput").addClass("greyed-out");
    }
    else if($(this).prop("checked") == false) {
      $("#cityInput").removeAttr("disabled");
      $("#cityInput").removeClass("greyed-out");
    }
  });
});
