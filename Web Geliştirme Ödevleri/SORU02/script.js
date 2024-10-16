// Sabit kullanıcı adı ve parolayı belirleme
const correctUsername = 'admin';
const correctPassword = '1234';

// Modal elemanları
const modal = document.getElementById('loginModal');
const btn = document.getElementById('loginBtn');
const span = document.getElementsByClassName('close')[0];
const form = document.getElementById('loginForm');
const message = document.getElementById('message');

// Butona tıklandığında modalı göster
btn.onclick = function() {
    modal.style.display = 'block';
}

// Modalı kapat
span.onclick = function() {
    modal.style.display = 'none';
}

// Kullanıcı formunu kontrol et
form.onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        message.innerText = ''; 
        modal.style.display = 'none'; 
        document.body.innerHTML = '<h1>HOŞ GELDİNİZ</h1>';
    } else {
        message.innerText = 'Başarısız İşlem'; 
    }
}

// Modal dışında bir yere tıklandığında modalı kapat
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
