//Werte von Blutdruck Feldern auslesen
$('#hinzu1').click(function() {
    var wert1 = $("#systRR").val(); //.val --> Wert des Feldes in Variable speichern
    var wert2 = $("#diastRR").val();
    var zeit = $("#uhrRR").val();

    //Ausgelesene Werte speichern
    // Variable feld1 erstellen, die die ausgelesenen Werte erhält
    var feld1 = "<li class=\"list-group-item\">" + wert1 + " / " + wert2 + " mmHg - " + zeit + " Uhr</li>";
    //Werte (feld1) in Liste einfügen
    $("#RRListe").append(feld1);
    //ausgelesene Felder wieder leeren
    $('#systRR').val(''); //Value auf leer setzen
    $('#diastRR').val('');
    $('#uhrRR').val('');
});
