
// Простая анимация появления карточек при загрузке
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // Начальное состояние
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Плавное появление с задержкой
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150); // Каждая следующая карточка появляется на 150мс позже
    });
});
