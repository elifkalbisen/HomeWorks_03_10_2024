// Saat güncelleme
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Doğum günü sayacı
function updateCountdown() {
    const birthday = new Date("1998-04-20");
    const now = new Date();
    const difference = birthday - now;

// Eğer doğum günü geçmişse, bu yılki doğum günü tarihini güncelleme
    if (difference < 0) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById('countdown').innerText = 
        `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
}

// Mesaj gösterme
document.getElementById('button').onclick = function() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
};

// Sayfa açıldığında yönlendirme
setTimeout(() => {
    window.location.href = "https://www.acunmedyaakademi.com";
}, 5000);

// Her saniyede saati ve geri sayımı güncelle
setInterval(() => {
    updateClock();
    updateCountdown();
}, 1000);


