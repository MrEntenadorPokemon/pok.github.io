document.addEventListener("DOMContentLoaded", function() {
    const pdfButton = document.getElementById('download-pdf');
    
    pdfButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const { jsPDF } = window.jspdf;
        
        const doc = new jsPDF();

        const content = document.body.innerHTML;

        doc.html(content, {
            callback: function (doc) {
                doc.save('Andre Siqueiros Perez CV pdf');
            },
            x: 10,
            y: 10
        });
    });
});
