$(".nameeingabe").blur(function() {
    $("#name").text($("#vorname").val() + " " + $("#nachname").val());
});


//bei Klick auf den Patientennamen kommt man zum Feld um den Vornamen einzutragen
$("#name").click(function(){
    $('.reiter').addClass("hidden");
    $('#patientendatenDiv').removeClass("hidden");
    $('.aktiverBtn').removeClass("aktiverBtn");
    $('#patientendaten').addClass("aktiverBtn");
    $('#vorname').focus();
});
