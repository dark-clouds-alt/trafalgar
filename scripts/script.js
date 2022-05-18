$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".expand-btn").html("Меньше");
    } else {
      $(".expand-btn").html("Больше");
    }
  });
  $(".play-button").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").remove();
  });
});
