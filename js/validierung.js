//Funktion wenn Einsatz abschließen geklickt wird
$('#btnAbschließen').click(function() {
    //Variablen für die Mussfelder erstellen
    var san1 = $("#san1").val();
    var dat = $("#dat").val();
    var zeit = $("#zeit").val();
    var place = $("#place").val();
    var vorname = $("#vorname").val();
    var nachname = $("#nachname").val();
    var gbd = $("#gbd").val();
    var kla = $("#kla").val();
    var kll = $("#kll").val();
    var unfallherg = $("#unfallherg").val();
    var sachl = $("#sachl").val();
    var uhrzeit = $("#uhrzeit").val();
    var pers = $("#pers").val();

    //alert("test");
    var meldung = "<ul>";
    if (san1 == "") {
        meldung += "<li class=\"list-group-item\"> Bitte mindestens einen Sanitäter eingeben</li>";
    }
    if (dat == "") {
        meldung += "<li class=\"list-group-item\"> Bitte ein Datum eingeben</li>";
    }
    if (zeit == "") {
        meldung += "<li class=\"list-group-item\"> Bitte eine Uhrzeit eingeben</li>";
    }
    if (place == "") {
        meldung += "Bitte den Einsatzort eingeben";
    }
    if (vorname == "") {
        meldung += "Bitte Vorname des Patienten eingeben";
    }
    if (nachname == "") {
        meldung += "Bitte Nachname des Patienten eingeben";
    }
    meldung+="</ul>";

$(".modal-body").append(meldung);

    $('#abschließen').modal('show');

});