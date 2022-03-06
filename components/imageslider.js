function slide(parent, imArr) {
    let ul = document.createElement("ul");
    ul.setAttribute("id", "slideWrap");
    imArr.map((el) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = el.img;
        li.append(img);
        ul.append(li)
    })
    let pre = document.createElement("a");
    pre.setAttribute("id", "prev");
    pre.href = "#";
    pre.className="fas fa-chevron-left" //arrow icon

    let next = document.createElement("a");
    next.setAttribute("id", "next");
    next.href = "#";
    next.className="fas fa-chevron-right" //arrow icon
    parent.append(ul, pre, next)

}



let responsiveSlider = function () {

    let slider = document.getElementById("slider");
    let sliderWidth = slider.offsetWidth;
    
    let slideList = document.getElementById("slideWrap");
    let count = 1;
    let items = slideList.querySelectorAll("li").length;
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
    });

    let prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        } else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    let nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        } else if (count = items) {
            // slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 5000);

};

window.onload = function () {
    responsiveSlider();
}



export {slide,responsiveSlider}