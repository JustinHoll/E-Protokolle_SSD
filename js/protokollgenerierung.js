$('#absendenBtn').click(function() {
    //alle Daten in Variablen speichern
    var san1 = $("#san1").val();
    //alert("San1: " + san1); // diese Zeile ist nur zum Testen, ob Sanitäter 1 erfolgreich rausgezogen wurde
    var sachl = $("#sachl").val();
    //alert("Sachlage: " + sachl);
    var text = $("#text").val();
    //alert("Besonderheiten: " + text);

    // Felder Einsatzinformationen auslesen und in Variablen speichern
    var san1 = $("#san1").val();
    var san2 = $("#san2").val();
    var san3 = $("#san3").val();

    var dat = $("#dat").val();
    alert("Datum: " + dat);
    var zeit = $("#zeit").val();
    var place = $("#place").val();

    // Patientendaten Felder auslesen und in Variablen speichern
    var name = $("#vorname").val() + " " + $("#nachname").val();
    var gbd = $("#gbd").val();
    alert("Geburtsdatum: " + gbd);
    var klasse = $("#kla").val();
    //alert("TEST: " + name);
    var kll = $("#kll").val();
    //Feld von Unfallhergang auslesen, in variable speichern
    var unfallherg = $("#unfallherg").val();
    var sachl = $("#sachl").val();
    var anamnese = $("#text").val();
    var masnahmen = $("#masnahmen").val();
    var notizen = $("#notizenfeld").val();
    var uhrzeit = $("#uhrzeit").val();
    var pers = $("#pers").val();

    var checkMassnPsych = "";
    if ($("#checkMassnPsych").prop("checked") == true) {
        var checkMassnPsych = " checked ";
    }

    var checkMassnstabSeit = "";
    if ($("#checkMassnstabSeit").prop("checked") == true) {
        var checkMassnstabSeit = " checked ";
    }

    var checkMassnFlach = "";
    if ($("#checkMassnFlach").prop("checked") == true) {
        var checkMassnFlach = " checked ";
    }

    var checkMassnOberkoer = "";
    if ($("#checkMassnOberkoer").prop("checked") == true) {
        var checkMassnOberkoer = " checked ";
    }

    var checkMassnSchock = "";
    if ($("#checkMassnSchock").prop("checked") == true) {
        var checkMassnSchock = " checked ";
    }

    var checkMassnHWS = "";
    if ($("#checkMassnHWS").prop("checked") == true) {
        var checkMassnHWS = " checked ";
    }

    var checkMassnWund = "";
    if ($("#checkMassnWund").prop("checked") == true) {
        var checkMassnWund = " checked ";
    }

    var checkMassnKuhl = "";
    if ($("#checkMassnKuhl").prop("checked") == true) {
        var checkMassnKuhl = " checked ";
    }

    var checkMassnWarm = "";
    if ($("#checkMassnWarm").prop("checked") == true) {
        var checkMassnWarm = " checked ";
    }

    var checkMassnFrak = "";
    if ($("#checkMassnFrak").prop("checked") == true) {
        var checkMassnFrak = " checked ";
    }

    //Radio Buttons bei Unfallhergang auf checked prüfen
    //Bewusstseinslage
    var orientiert = ""; //Variablen erstellen
    if ($("#orientiert").prop("checked") == true) { //wenn orientiert ausgewählt,
        var orientiert = " checked "; //dann die Variable auf ausgewählt setzen
    }
    var getrübt = "";
    if ($("#getrübt").prop("checked") == true) {
        var getrübt = " checked ";
    }
    var bewusstlos = "";
    if ($("#bewusstlos").prop("checked") == true) {
        var bewusstlos = " checked ";
    }
    //Kreislauf
    var schock = "";
    if ($("#schock").prop("checked") == true) {
        var schock = " checked ";
    }
    var kreislaufstillstand = "";
    if ($("#kreislaufstillstand").prop("checked") == true) {
        var kreislaufstillstand = " checked ";
    }
    var pulsRegelmäßig = "";
    if ($("#pulsRegelmäßig").prop("checked") == true) {
        var pulsRegelmäßig = " checked ";
    }
    var pulsUnregelmäßig = "";
    if ($("#pulsUnregelmäßig").prop("checked") == true) {
        var pulsUnregelmäßig = " checked ";
    }
    //Atmung
    var spontanFrei = "";
    if ($("#spontanFrei").prop("checked") == true) {
        var spontanFrei = " checked ";
    }
    var atemnot = "";
    if ($("#atemnot").prop("checked") == true) {
        var atemnot = " checked ";
    }
    var hyperventilation = "";
    if ($("#hyperventilation").prop("checked") == true) {
        var hyperventilation = " checked ";
    }

    //Schmerzen
    var keine = "";
    if ($("#keine").prop("checked") == true) {
        var keine = " checked ";
    }
    var geringe = "";
    if ($("#geringe").prop("checked") == true) {
        var geringe = " checked ";
    }
    var mittelstarke = "";
    if ($("#mittelstarke").prop("checked") == true) {
        var mittelstarke = " checked ";
    }
    var starke = "";
    if ($("#starke").prop("checked") == true) {
        var starke = " checked ";
    }

    //Lichtreaktion links und rechts
    var englinks = "";
    if ($("#englinks").prop("checked") == true) {
        var englinks = " checked ";
    }
    var engrechts = "";
    if ($("#engrechts").prop("checked") == true) {
        var engrechts = " checked ";
    }
    var mittellinks = "";
    if ($("#mittellinks").prop("checked") == true) {
        var mittellinks = " checked ";
    }
    var mittelrechts = "";
    if ($("#mittelrechts").prop("checked") == true) {
        var mittelrechts = " checked ";
    }
    var weitlinks = "";
    if ($("#weitlinks").prop("checked") == true) {
        var weitlinks = " checked ";
    }
    var weitrechts = "";
    if ($("#weitrechts").prop("checked") == true) {
        var weitrechts = " checked ";
    }
    var entrundetlinks = "";
    if ($("#entrundetlinks").prop("checked") == true) {
        var entrundetlinks = " checked ";
    }
    var entrundetrechts = "";
    if ($("#entrundetrechts").prop("checked") == true) {
        var entrundetrechts = " checked ";
    }
    var lichtreaktionlinks = "";
    if ($("#lichtreaktionlinks").prop("checked") == true) {
        var lichtreaktionlinks = " checked ";
    }
    var lichtreaktionrechts = "";
    if ($("#lichtreaktionrechts").prop("checked") == true) {
        var lichtreaktionrechts = " checked ";
    }
    //Vitalparameter Liste
    //RR
    var blut1 = $("#hf1").text();
    var blut2 = $("#hf2").text();
    var blut3 = $("#hf3").text();
    var blut4 = $("#hf4").text();
    var blut5 = $("#hf5").text();
    //HF
    var puls1 = $("#puls1").text();
    var puls2 = $("#puls2").text();
    var puls3 = $("#puls3").text();
    var puls4 = $("#puls4").text();
    var puls5 = $("#puls5").text();








    var eProtokoll = "<div id=\"e-protokoll\"> <!-- Zeile 1: Sanitäter, Datum, Einsatzohrt, Uhrzeit --> <div class=\"row\" id=\"reihe1\"> <div class=\"col-xs-4 borderBlack\" id=\"logoDiv\"> <img id=\"logoMalteser\" src=\"img/malteserLogo.png\" /> <!-- crossorigin=\"anonymous\" --> </div> <div class=\"col-xs-4 borderBlack\" id=\"sanitaeter\"> <p><span class=\"dick\"> Sanitäter: </span></p> <div class=\"sanitaeterInput\"> <p> " + san1 + "</p> </div> <div class=\"sanitaeterInput\"> <p> " + san2 + " </p> </div> <div class=\"sanitaeterInput\"> <p> " + san3 + " </p> </div> </div> <div class=\"col-xs-4 borderBlack\" id=\"uhrzeitDatumDiv\"> <div class=\"row\"> <div class=\"col-xs-6\"> <p><span class=\"dick\"> Datum: </span></p> <p> " + dat + " </p> </div> <div class=\"col-xs-6\"> <p><span class=\"dick\"> Uhrzeit: </span></p> <p> " + zeit + " </p> </div> </div> <p> &nbsp;<span class=\"dick\">Einsatzort: </span> " + place + "</p> </div> </div> <div class=\"row\" id=\"reihe2\"> <div class=\"col-xs-6 borderBlack\" id=\"patientennameUndCo\"> <div class=\"row\"> <div class=\"col-xs-8\"> <p><span class=\"dick\"> Name: </span>" + name + " </p> <p><span class=\"dick\"> Geburtsdatum: </span>" + gbd + " </p> <p><span class=\"dick\"> Klassenlehrer/in: </span>" + kll + " </p> </div> <div class=\"col-xs-4\"> <p><span class=\"dick\"> Klasse: </span>" + klasse + " </p> </div> </div> </div> <div class=\"col-xs-6 borderBlack\" id=\"unfallhergang\"> <span class=\"dick\">Unfallhergang: </span>" + unfallherg + " </div> </div> <div class=\"row\" id=\"reihe3\"> <div class=\"col-xs-6 borderBlack\"><span class=\"dick\"> Sachlage: </span>" + sachl + "</div> <div class=\"col-xs-6 borderBlack\" id=\"tabelleVital\"> <table id=\"tablleVitalparameter\"> <tr> <th>RR:</th>  <th>HF:</th>  </tr> <tr>  <td>" + blut1 + "</td> <td> " + puls1 + "</td> </tr> <tr> <td> " + blut2 + "</td> <td>" + puls2 + "</td> </tr> <tr>  <td>" + blut3 + "</td> <td>" + puls3 + "</td> </tr> <tr>  <td>" + blut4 + "</td> <td>" + puls4 + "</td> </tr> <tr>  <td>" + blut5 + "</td> <td>" + puls5 + "</td> </tr> </table> </div> </div> <div class=\"row\" id=\"reihe4\"> <div class=\"col-xs-12 borderBlack\"><span class=\"dick\"> Besonderheiten/Allergien/Medikamente/Erkrankungen: </span>" + anamnese + " </div> </div> <div class=\"row borderBlack\" id=\"reihe5\"> <div class=\"col-xs-12\"> <p id=\"erstbefundHeading\"><span class=\"dick\">Erstbefund:</span></p> <div class=\"row\"> <div class=\"col-md-2\"> <div class=\"form-group radioGrp\"> <p class=\"radioUeber\">Bewusstseinslage</p> <p class=\"radioAuswahl\"> <input type=\"radio\" id=\"orientiert\" name=\"bewusstseinslage\" value=\"orientiert\" " + orientiert + "> <label style=\"font-weight:normal\" for=\"orientiert\"> orientiert</label></br> <input type=\"radio\" id=\"getrübt\" name=\"bewusstseinslage\" value=\"getrübt\"" + getrübt + "> <label style=\"font-weight:normal\" for=\"getrübt\"> getrübt</label></br> <input type=\"radio\" id=\"bewusstlos\" name=\"bewusstseinslage\" value=\"bewusstlos\" " + bewusstlos + "> <label style=\"font-weight:normal\" for=\"bewusstlos\"> bewusstlos</label></br></p> </div> </div> <div class=\"col-md-3\"> <div class=\"form-group radioGrp\"> <p class=\"radioUeber\">Kreislauf</p> <p class=\"radioAuswahl\"> <input type=\"radio\" id=\"schock\" name=\"kreislauf\" value=\"schock\" " + schock + "> <label style=\"font-weight:normal\" for=\"schock\"> Schock</label></br> <input type=\"radio\" id=\"kreislaufstillstand\" name=\"kreislauf\" value=\"kreislaufstillstand\" " + kreislaufstillstand + "> <label style=\"font-weight:normal\" for=\"kreislaufstillstand\"> Kreislaufstillstand</label></br> <input type=\"radio\" id=\"pulsRegelmäßig\" name=\"kreislauf\" value=\"pulsRegelmäßig\" " + pulsRegelmäßig + "> <label style=\"font-weight:normal\" for=\"pulsRegelmäßig\"> Puls regelmäßig</label></br> <input type=\"radio\" id=\"pulsUnregelmäßig\" name=\"kreislauf\" value=\"pulsUnregelmäßig\" " + pulsUnregelmäßig + "> <label style=\"font-weight:normal\" for=\"pulsUnregelmäßig\"> Puls unregelmäßig</label></br></p> </div> </div> <div class=\"col-md-2\"> <div class=\"form-group radioGrp\"> <p class=\"radioUeber\">Atmung</p> <p class=\"radioAuswahl\"> <input type=\"radio\" id=\"spontanFrei\" name=\"atmung\" value=\"spontanFrei\" " + spontanFrei + "> <label style=\"font-weight:normal\" for=\"spontanFrei\"> spontan/frei</label></br> <input type=\"radio\" id=\"atemnot\" name=\"atmung\" value=\"atemnot\" " + atemnot + "> <label style=\"font-weight:normal\" for=\"atemnot\"> Atemnot</label></br> <input type=\"radio\" id=\"hyperventilation\" name=\"atmung\" value=\"hyperventilation\" " + hyperventilation + "> <label style=\"font-weight:normal\" for=\"hyperventilation\"> Hyperventilation</label></br> </p> </div> </div> <div class=\"col-md-2\"> <div class=\"form-group radioGrp\"> <p class=\"radioUeber\">Schmerzen</p> <p class=\"radioAuswahl\"> <input type=\"radio\" id=\"keine\" name=\"schmerzen\" value=\"keine\" " + keine + "> <label style=\"font-weight:normal\" for=\"keine\"> keine</label></br> <input type=\"radio\" id=\"geringe\" name=\"schmerzen\" value=\"geringe\" " + geringe + "> <label style=\"font-weight:normal\" for=\"geringe\"> geringe</label></br> <input type=\"radio\" id=\"mittelstarke\" name=\"schmerzen\" value=\"mittelstarke\" " + mittelstarke + "> <label style=\"font-weight:normal\" for=\"mittelstarke\"> mittelstarke</label></br> <input type=\"radio\" id=\"starke\" name=\"schmerzen\" value=\"starke\" " + starke + "> <label style=\"font-weight:normal\" for=\"starke\"> starke</label></br></p> </div> </div> <div class=\"col-md-3\"> <p class=\"radioUeber\">Lichtreaktion</p> <div class=\"form-group\"> <p class=\"radioUeber\" style=\"font-weight:bold\">links - rechts</p> <p class=\"radioAuswahl\"> <input type=\"radio\" id=\"eng\" name=\"links\" value=\"eng\" " + englinks + "> - <input type=\"radio\" id=\"eng\" name=\"rechts\" value=\"eng\" " + engrechts + "> <label style=\"font-weight:normal\"> eng</label></br> <input type=\"radio\" id=\"mittel\" name=\"links\" value=\"mittel\" " + mittellinks + "> - <input type=\"radio\" id=\"mittel\" name=\"rechts\" value=\"mittel\" " + mittelrechts + "> <label style=\"font-weight:normal\"> mittel</label></br> <input type=\"radio\" id=\"weit\" name=\"links\" value=\"weit\" " + weitlinks + "> - <input type=\"radio\" id=\"weit\" name=\"rechts\" value=\"weit\" " + weitrechts + "> <label style=\"font-weight:normal\"> weit</label></br> <input type=\"radio\" id=\"entrundet\" name=\"links\" value=\"entrundet\" " + entrundetlinks + "> - <input type=\"radio\" id=\"entrundet\" name=\"rechts\" value=\"entrundet\" " + entrundetrechts + "> <label style=\"font-weight:normal\"> entrundet</label></br> <input type=\"radio\" id=\"lichtreaktion\" name=\"links\" value=\"lichtreaktion\" " + lichtreaktionlinks + "> - <input type=\"radio\" id=\"lichtreaktion\" name=\"rechts\" value=\"lichtreaktion\" " + lichtreaktionrechts + "> <label style=\"font-weight:normal\"> Lichtreaktion</label></br></p> </div> </div> </div> </div> </div> <div class=\"row borderBlack\" id=\"reihe6\"> <div class=\"col-xs-8\"> <div class=\"row\"> <p id=\"ueberMassnahmen\"><span class=\"dick\"> Maßnahmen: </span></p> <div class=\"col-xs-6\"> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnPsych + ">psychologische Betreuung</label> </div> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnstabSeit + ">stabile Seitenlage</label> </div> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnFlach + ">Flachlagerung</label> </div> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnOberkoer + ">Oberkörperhochlagerung</label> </div> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnSchock + ">Schocklage</label> </div> </div> <div class=\"col-xs-6\"> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnHWS + ">HWS-Immobilisation</label> </div> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnWund + ">Wundversorgung</label> </div> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnKuhl + ">Kühlung</label> </div> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnWarm + ">Wärmeerhaltung</label> </div> <div class=\"checkbox\"> <label><input type=\"checkbox\" name=\"optradio\" " + checkMassnFrak + ">Fraktur-Immobilisation</label> </div> </div> </div> </div> <div class=\"col-md-4 borderBlack\" id=\"divSonstMassnahmen\"> <p><span class=\"dick\"> Sonstige Maßnahmen: </span>" + masnahmen + "</p> </div> </div> <div class=\"row\" id=\"reihe8\"> <div class=\"col-xs-3 borderBlack\"> <p><span class=\"dick\"> Ergebnis: </span></p> </div> <div class=\"col-xs-3 borderBlack\"> <p><span class=\"dick\"> Übergeben an: </span>" + pers + " </p> </div> <div class=\"col-xs-3 borderBlack\"><span class=\"dick\"> Uhrzeit: </span>" + uhrzeit + " </div> <div class=\"col-xs-3 borderBlack\"> <p><span class=\"dick\"> Notizen: </span>" + notizen + " </p> </div> </div> </div>";


    html2pdf(eProtokoll, {
        margin: 0,
        filename: 'myfile.pdf',
        image: {
            type: 'jpeg',
            quality: 1
        },
        html2canvas: {
            scale: 2,
            logging: true
        },
        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'p'
        }
    });
});
