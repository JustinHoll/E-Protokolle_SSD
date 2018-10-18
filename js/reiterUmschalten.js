$('.reiterBtn').click(function(event){
    $('.reiter').addClass("hidden");
    // ID von geklickten Button
    $('#'+event.target.id+'Div').removeClass("hidden");
    //Klassen von bisher aktivem Button removen
    $('.aktiverBtn').removeClass("aktiverBtn");
    //dem neu ausgewählten Button die Klasse hinzufügen
    $('#'+event.target.id).addClass("aktiverBtn");
});
