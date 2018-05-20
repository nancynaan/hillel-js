'use strict';

let slider = document.getElementById('carousel-container');
content.appendChild(slider);

function Slider(element) {
    this.index = 0;
    this.amount = 0;
    this.currTransl = [];
    this.transitionComplete = true;
    this.moveOffset = 0;

    element = this;
    this.transitionCompleted = function () {
        element.transitionComplete = true;
    };
    this.global(element);
    this.autoSlide(element);
    //this.setDot();
}

Slider.prototype.global = function(el) {
    el = this;
    document.addEventListener("DOMContentLoaded", function() {
        let carousel = document.getElementById('carousel');
        el.amount = document.getElementsByClassName("slide").length;
        // get the width of the container
        el.moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
        // calculate the width of the carousel
        carousel.style.width = (el.amount * el.moveOffset) + 'px';
        // prevent multiple click when transition
        for(let i = 0; i < el.amount; i++) {
            el.currTransl[i] = -el.moveOffset;
            document.getElementsByClassName("slide")[i].addEventListener("transitionend", el.transitionCompleted, true);
            document.getElementsByClassName("slide")[i].addEventListener("webkitTransitionEnd", el.transitionCompleted, true);
            document.getElementsByClassName("slide")[i].addEventListener("oTransitionEnd", el.transitionCompleted, true);
            document.getElementsByClassName("slide")[i].addEventListener("MSTransitionEnd", el.transitionCompleted, true);
        }
        // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
        carousel.insertBefore(carousel.children[4], carousel.children[0]);
        // add click events to control arrows
        let prevSlide = Slider.prototype.prev.bind(el);
        let nextSlide = Slider.prototype.next.bind(el);
        document.getElementById('prev').addEventListener('click', prevSlide, true);
        document.getElementById('next').addEventListener('click', nextSlide, true);
    });
};

Slider.prototype.prev = function(el) {
    el = this;
    if(el.transitionComplete === true)
    {
        el.transitionComplete = false;
        el.index--;
        if(el.index === -1)
        {
            el.index = el.amount-1;
        }
        let outerIndex = (el.index) % el.amount;
        for(let i = 0; i < el.amount; i++)
        {
            let slide = document.getElementsByClassName("slide")[i];
            slide.style.opacity = '1';
            slide.style.transform = 'translateX('+(el.currTransl[i]+el.moveOffset)+'px)';
            el.currTransl[i] = el.currTransl[i]+el.moveOffset;

        }
        let outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(el.currTransl[outerIndex]-(el.moveOffset*el.amount))+'px)';
        outerSlide.style.opacity = '0';
        el.currTransl[outerIndex] = el.currTransl[outerIndex]-el.moveOffset*(el.amount);
    }
};

Slider.prototype.next = function(el) {
    el = this;
    if(el.transitionComplete === true)
    {
        el.transitionComplete = false;
        let outerIndex = (el.index) % el.amount;
        el.index++;
        for(let i = 0; i < el.amount; i++)
        {
            let slide = document.getElementsByClassName("slide")[i];
            slide.style.opacity = '1';
            slide.style.transform = 'translateX('+(el.currTransl[i]-el.moveOffset)+'px)';
            el.currTransl[i] = el.currTransl[i]-el.moveOffset;
        }
        let outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(el.currTransl[outerIndex]+(el.moveOffset*el.amount))+'px)';
        outerSlide.style.opacity = '0';
        el.currTransl[outerIndex] = el.currTransl[outerIndex]+el.moveOffset*(el.amount);
    }
};

Slider.prototype.autoSlide = function(el) {
    el = this;
    let timerId = setInterval(function() {
        el.next.call(el);
    }, 2000);
};


let slideshow = new Slider(slider);

