$(".nameeingabe").blur(function() {
    $("#name").text($("#vorname").val() + " " + $("#nachname").val());

    //wenn die vorname und nachname-felder leer sind, soll Patientenname als Füller erscheinen
    if ($("#name").text() == " ") {
        //alert('Leerer Vorname + Nachname');
        $("#name").text("Patientenname");
    }
});


//bei Klick auf den Patientennamen kommt man zum Feld um den Vornamen einzutragen
$("#name").click(function() {
    $('.reiter').addClass("hidden");
    $('#patientendatenDiv').removeClass("hidden");
    $('.aktiverBtn').removeClass("aktiverBtn");
    $('#patientendaten').addClass("aktiverBtn");
    $('#vorname').focus();
});
