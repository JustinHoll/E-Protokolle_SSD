//Wert aus erstem Hinzufügen Feld auslesen
$('#hinzu1').click(function() {
    var wert1 = $("#systRR").val();   //.val --> Wert des Feldes in Variable speichern
    var wert2 =$("#diastRR").val();

//Ausgelesene Werte speichern
// Variable feld1 erstellen, die die ausgelesenen Werte erhält
var feld1 ="<li class=\"list-group-item\">" + wert1 + " / " + wert2 + " mmHg - 16:35 Uhr</li>";
$( "#RRListe" ).append(feld1);
//Werte in Liste einfügen
    $("#hinzu1").val("Gesetzter Wert");
});
