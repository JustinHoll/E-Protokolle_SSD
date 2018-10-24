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
    $("#Fehlerliste").remove();
    $(".modal-body p").remove();
    var meldung = "<ul id=\"Fehlerliste\">";
    var fehlermeldung = false;

    if (san1 == "") {
        meldung += "<li class=\"list-group-item\"> Bitte mindestens einen Sanitäter eingeben</li>";
        var fehlermeldung = true;
    }
    if (dat == "") {
        meldung += "<li class=\"list-group-item\"> Bitte ein Datum eingeben</li>";
        var fehlermeldung = true;
    }
    if (zeit == "") {
        meldung += "<li class=\"list-group-item\"> Bitte eine Uhrzeit eingeben</li>";
        var fehlermeldung = true;
    }
    if (place == "") {
        meldung += "<li class=\"list-group-item\"> Bitte den Einsatzort eingeben</li>";
        var fehlermeldung = true;
    }
    if (vorname == "") {
        meldung += "<li class=\"list-group-item\"> Bitte Vorname des Patienten eingeben</li>";
        var fehlermeldung = true;
    }
    if (nachname == "") {
        meldung += "<li class=\"list-group-item\"> Bitte Nachname des Patienten eingeben</li>";
        var fehlermeldung = true;
    }
    if (gbd == "") {
        meldung += "<li class=\"list-group-item\"> Bitte Geburtsdatum des Patienten eingeben</li>";
        var fehlermeldung = true;
    }
    if (kla == "") {
        meldung += "<li class=\"list-group-item\"> Bitte Klasse des Patienten eingeben</li>";
        var fehlermeldung = true;
    }
    if (kll == "") {
        meldung += "<li class=\"list-group-item\"> Bitte einen KlassenlehrerIn eingeben</li>";
        var fehlermeldung = true;
    }
    if (unfallherg == "") {
        meldung += "<li class=\"list-group-item\"> Bitte etwas bei Unfallhergang eingeben</li>";
        var fehlermeldung = true;
    }
    if (sachl == "") {
        meldung += "<li class=\"list-group-item\"> Bitte etwas bei Sachlage eingeben</li>";
        var fehlermeldung = true;
    }
    if (uhrzeit == "") {
        meldung += "<li class=\"list-group-item\"> Bitte Uhrzeit bei Verbleib eingeben</li>";
        var fehlermeldung = true;
    }
    if (pers == "") {
        meldung += "<li class=\"list-group-item\"> Bitte übergebene Person bei Verbleib eingeben</li>";
        var fehlermeldung = true;
    }
    if (!$("input[name='zustand']:checked").val()){
        meldung += "<li class=\"list-group-item\"> Bitte einen Zustand bei Verbleib auswählen</li>";
        var fehlermeldung = true;
    }

    meldung += "</ul>"; // Meldung/en der Liste hinzufügen
    if (fehlermeldung == true) {
        $(".modal-body").append(meldung);
        $("#ausblenden").hide();
    }
    else{
        $(".modal-body").append("<p>Möchten Sie das Protokoll absenden?</p>");
        $("#ausblenden").show();
    }
    $('#abschließen').modal('show');

});
