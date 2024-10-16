document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    alert('Mesajınız gönderildi! Teşekkürler, ' + document.getElementById('name').value);
});
