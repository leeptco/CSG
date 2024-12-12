
document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector(".logo__menu__hamburger");
    const offScreenMenu = document.querySelector(".logo__menu__off");
    const closeMenu = document.querySelector(".logo__menu__off__top__close");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");

        // Блокировка прокрутки
        if (offScreenMenu.classList.contains("active")) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    closeMenu.addEventListener("click", () => {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
        document.body.style.overflow = 'auto'; 
    });
});


var swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


let catalogSwiper = null;

function initSwiper() {
    const catalogElement = document.querySelector('.catalog .swiper');

    if (window.innerWidth <= 760) {
        // Инициализируем Swiper только если он еще не создан
        if (!catalogSwiper) {
            catalogSwiper = new Swiper(catalogElement, {
                navigation: {
                    nextEl: '.catalog .swiper-button-next',
                    prevEl: '.catalog .swiper-button-prev',
                },
                slidesPerView: 1, // Показывать по 1 слайду на мобильных
                spaceBetween: 16, // Отступы между слайдами
            });
        }
    } else {
        // Если ширина больше 760px, уничтожаем Swiper
        if (catalogSwiper) {
            catalogSwiper.destroy(true, true); // Полностью уничтожаем Swiper
            catalogSwiper = null; // Сбрасываем переменную
        }

        // Превращаем слайдер в flexbox
        const swiperWrapper = catalogElement.querySelector('.swiper-wrapper');
        swiperWrapper.style.display = 'flex';
        swiperWrapper.style.flexWrap = 'wrap';
        swiperWrapper.style.justifyContent = 'center';
        swiperWrapper.style.gap = '4rem';
        swiperWrapper.style.margin = '0 auto';
        

        swiperWrapper.querySelectorAll('.swiper-slide').forEach((slide) => {
            slide.style.maxWidth = '25%'; 
        });
    }
}

// Инициализируем на загрузке страницы и при изменении ширины
window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);



document.querySelectorAll('.favorite').forEach(star => {
    star.addEventListener('click', () => {
        const path = star.querySelector('.star-path');

        // Проверяем текущее состояние звездочки
        if (path.getAttribute('fill') === 'black') {
            path.setAttribute('stroke', 'currentColor'); 
            path.setAttribute('fill', 'none'); 
        } else {
            // Если звездочка полая, заполняем черным
            path.setAttribute('stroke', 'black'); 
            path.setAttribute('fill', 'black'); 
            alert('Вещь добавлена в раздел "Избранное"');
        }
    });
});
