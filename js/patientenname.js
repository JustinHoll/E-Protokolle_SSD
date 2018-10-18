$(".nameeingabe").blur(function() {
    $("#name").text($("#vorname").val() + " " + $("#nachname").val());
});
