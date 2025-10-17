// Модальне вікно для галереї
function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Закриття модального вікна при кліку поза зображенням
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Закриття модального вікна клавішею ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Плавна прокрутка для навігації
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анімація при скролі
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Застосування анімацій до елементів
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .dev-card, .gallery-item, .download-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Статистика завантажень (імітація)
let downloadCount = 1247;
function updateDownloadCount() {
    downloadCount += Math.floor(Math.random() * 3);
    // Можна відображати десь на сторінці
    const countElement = document.getElementById('download-count');
    if (countElement) {
        countElement.textContent = downloadCount.toLocaleString();
    }
}

// Оновлюємо кожні 30 секунд
setInterval(updateDownloadCount, 30000);