window.addEventListener("load", function() {
    const progresses = document.querySelectorAll('.progress');
        
    progresses.forEach(progress => {
        const targetWidth = progress.getAttribute('data-width');
        progress.style.width = '0'; 
            
        setTimeout(() => {
            progress.style.width = targetWidth;
        }, 100);
    });
});