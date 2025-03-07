document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const flowersContainer = document.querySelector('.flowers-container');
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const bigFlower = document.querySelector('.big-flower');
    let isMusicPlaying = false;
    let isFlowerShown = false;
    
    // Функция для создания падающих цветов
    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = '🌸';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = (Math.random() * 3 + 2) + 's';
        flower.style.opacity = Math.random() * 0.5 + 0.3;
        
        flowersContainer.appendChild(flower);
        
        // Удаляем цветок после завершения анимации
        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    // Создаем новые цветы каждые 2 секунды
    setInterval(createFlower, 2000);

    // Обработчик клика по карточке
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        if (!isFlowerShown) {
            showBigFlower();
            isFlowerShown = true;
        }
    });

    // Функция для показа большого цветка
    function showBigFlower() {
        bigFlower.classList.add('show');
        
        // Скрываем цветок через 5 секунд
        setTimeout(() => {
            bigFlower.classList.remove('show');
            setTimeout(() => {
                isFlowerShown = false;
            }, 500);
        }, 5000);
    }

    // Добавляем эффект при наведении
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('flipped')) {
            card.style.transform = 'scale(1)';
        }
    });

    // Управление музыкой
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.textContent = '🎵';
        } else {
            backgroundMusic.play();
            musicToggle.textContent = '⏸';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Автоматическое воспроизведение музыки при первом клике
    document.addEventListener('click', () => {
        if (!isMusicPlaying) {
            backgroundMusic.play();
            musicToggle.textContent = '⏸';
            isMusicPlaying = true;
        }
    }, { once: true });

    // Создаем дополнительные падающие цветы
    const snowflakes = document.querySelector('.snowflakes');
    const flowers = ['🌸', '🌺', '🌹', '🌷', '💐'];
    
    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 3 + 8 + 's';
        snowflakes.appendChild(flower);
        
        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    // Создаем новые цветы каждые 3 секунды
    setInterval(createFlower, 3000);

    // Создаем несколько цветов при загрузке
    for (let i = 0; i < 10; i++) {
        setTimeout(createFlower, i * 300);
    }
}); 