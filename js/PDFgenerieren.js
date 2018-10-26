//Code zum konvertieren zu PDF
var element = document.getElementById('e-protokoll');

html2pdf(element, {
    margin: 0,
    filename: 'myfile.pdf',
    image: {type: 'jpeg', quality: 1},
    html2canvas: {scale: 2, logging: true},
    jsPDF: {unit: 'in', format: 'a4', orientation: 'p'}
});
