$('#absendenBtn').click(function() {
    //alle Daten in Variablen speichern
    var san1 = $("#san1").val();
    alert("San1: " + san1); // diese Zeile ist nur zum Testen, ob Sanitäter 1 erfolgreich rausgezogen wurde
    var sachl = $("#sachl").val();
    alert("Sachlage: " + sachl);
    var text = $("#text").val();
    alert("Besonderheiten: " + text);

    // Felder Einsatzinformationen auslesen und in Variablen speichern
    var san1 = $("#san1").val();
    var san2 = $("#san2").val();
    var san3 = $("#san3").val();

    var dat = $("#dat").val();
    var zeit = $("#zeit").val();
    var place =$("#place").val();

    // Patientendaten Felder auslesen und in Variablen speichern
    var name = $("#vorname").val() + " " + $("#nachname").val();
    var gbd = $("#gbd").val();
    var klasse = $("#kla").val();
    alert("TEST: " + name);
    var kll = $("#kll").val();
    //Feld von Unfallhergang auslesen, in variable speichern
    var unfallherg = $("#unfallherg").val();


    var eProtokoll = ;

    html2pdf(eProtokoll);
});
