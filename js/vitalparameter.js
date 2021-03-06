var nummer = 0; // Nummer für Reihe der Liste
//Werte von Blutdruck Feldern auslesen
$('#hinzu1').click(function() {
    var wert1 = $("#systRR").val(); //.val --> Wert des Feldes in Variable speichern
    var wert2 = $("#diastRR").val();
    var zeit = $("#uhrRR").val();

    //Ausgelesene Werte speichern
    // Variable feld1 erstellen, die die ausgelesenen Werte erhält
    var feld1 = "<li class=\"list-group-item\" id=\"hf" +(++nummer)+ "\">" + wert1 + " / " + wert2 + " mmHg - " + zeit + " Uhr</li>";
    //Werte (feld1) in Liste einfügen
    if (wert1 != "" && wert2 != "" && zeit != "") { //Mussbedingung, dass alle 3 Felder ausgefüllt sein müssen vor einfügen
        $("#RRListe").append(feld1);
    }
    //ausgelesene Felder wieder leeren
    $('#systRR').val(''); //Value auf leer setzen
    $('#diastRR').val('');
    $('#uhrRR').val('');
});
    var nr = 0; //Nummer für Reihe in der Liste
//Werte für Puls Felder auslesen
$('#hinzu2').click(function() {
    var wert1 = $("#hf").val(); //.val --> Wert des Feldes in Variable speichern
    var wert2 = $("#uhrHF").val();
    //Ausgelesene Werte speichern
    // Variable feld2 erstellen, die die ausgelesenen Werte erhält
    var feld2 = "<li class=\"list-group-item\" id=\"puls" +(++nr)+ "\">" + wert1 + " / min - " + wert2 + " Uhr</li>";
    //Werte (feld2) in Liste einfügen
    if (wert1 != "" && wert2 != "") {
        $("#HFListe").append(feld2);
    }
    //ausgelesene Felder wieder leeren
    $('#hf').val(''); //Value auf leer setzen
    $('#uhrHF').val('');
});
