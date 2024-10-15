document.addEventListener("DOMContentLoaded", function() {
    const pdfButton = document.getElementById('download-pdf');

    pdfButton.addEventListener('click', function(event) {
        event.preventDefault();

        const currentContent = document.body.cloneNode(true);

        fetch('about.html')
            .then(response => response.text())
            .then(data => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                currentContent.appendChild(tempDiv);

                html2pdf()
                    .from(currentContent)
                    .set({
                        margin: 1,
                        filename: 'Curriculum_Vitae.pdf',
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2 },
                        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                    })
                    .save();
            })
            .catch(error => console.error('Error al juntar los html.:', error));
    });
});
