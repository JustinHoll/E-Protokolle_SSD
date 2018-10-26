var aktuelleReiterId = "einsatzinformationen";

$('.reiterBtn').click(function(event){
    $('.reiter').addClass("hidden");
    // ID von geklickten Button
    $('#'+event.target.id+'Div').removeClass("hidden");
    //Klassen von bisher aktivem Button removen
    $('.aktiverBtn').removeClass("aktiverBtn");
    //dem neu ausgewählten Button die Klasse hinzufügen
    $('#'+event.target.id).addClass("aktiverBtn");

    aktuelleReiterId = event.target.id;
});

//Tab Umschalten mit Pfeiltasten
$(document).on('keydown', function(e) {
    var tag = e.target.tagName.toLowerCase();
    if ( (e.which === 39 || e.which === 40) && tag != 'input' && tag != 'textarea'){
        var naechsterReiter = $("#"+aktuelleReiterId).next().attr("id");

        if(naechsterReiter == "btnAbschließen"){
            naechsterReiter = "einsatzinformationen";
        }

        $('.reiter').addClass("hidden");
        // ID von geklickten Button
        $('#'+naechsterReiter+'Div').removeClass("hidden");
        //Klassen von bisher aktivem Button removen
        $('.aktiverBtn').removeClass("aktiverBtn");
        //dem neu ausgewählten Button die Klasse hinzufügen
        $('#'+naechsterReiter).addClass("aktiverBtn");

        aktuelleReiterId = naechsterReiter;
    }else if((e.which === 37 || e.which === 38) && tag != 'input' && tag != 'textarea'){
        var naechsterReiter = $("#"+aktuelleReiterId).prev().attr("id");

        if(naechsterReiter === void(0)){
            naechsterReiter = "notizen";
        }

        $('.reiter').addClass("hidden");
        // ID von geklickten Button
        $('#'+naechsterReiter+'Div').removeClass("hidden");
        //Klassen von bisher aktivem Button removen
        $('.aktiverBtn').removeClass("aktiverBtn");
        //dem neu ausgewählten Button die Klasse hinzufügen
        $('#'+naechsterReiter).addClass("aktiverBtn");

        aktuelleReiterId = naechsterReiter;
    }


});
