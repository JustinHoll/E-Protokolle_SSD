$('.reiterBtn').click(function(event){
    $('.reiter').addClass("hidden");
    $('#'+event.target.id+'Div').removeClass("hidden");
    $('.aktiverBtn').removeClass("aktiverBtn");
    $('#'+event.target.id).addClass("aktiverBtn");
});
