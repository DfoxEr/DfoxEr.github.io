var sliders = document.querySelectorAll(".slider");

let index = 0;

sliders.forEach(slider => {
    var slides = slider.querySelectorAll(".slide");
    var dots = slider.querySelectorAll(".slider__dot");

    const setCurrentSlide = i => {
        slides.forEach((elem) => {
            if (elem.classList.contains("slide_active")) {
                elem.classList.remove("slide_active");
            }
        });

        slides[i].classList.add("slide_active");
    };

    const nextSlide = () => {
        if (index == slides.length-1) {
            index = 0;
        }
        else {
            index++;
        }

        showSlide(index);
    };

    const prevSlide = () => {
        if (index == 0) {
            index = slides.length-1;
        }
        else {
            index--;
        }

        showSlide(index);
    };

    const setDot = n => {
        dots.forEach((dot) => {
            if (dot.classList.contains("slider__dot_active")) {
                dot.classList.remove("slider__dot_active");
            }
        });

        dots[n].classList.add("slider__dot_active");
    };

    const showSlide = n => {
        setCurrentSlide(n);
        setDot(n);
    };


    const sliderUpdater = setInterval(nextSlide, 7000);

    dots.forEach((elem, i) => {
        elem.addEventListener("click", ()=>{
            clearInterval(sliderUpdater);
            showSlide(i);
        });
    });

});