'use strict';

let articles = document.getElementById('articles');
content.appendChild(articles);

let progressBar = document.getElementById('progressBar');
content.insertBefore(progressBar, content.children[0]);

let el = document.querySelector("div.content-indicator");
function updateTransition() {
    let el = document.querySelector("div.content-indicator");
    if (el) {
        el.className = "content-indicator content-indicator--newIndicator";
    } else {
        el = document.querySelector("div.content-indicator content-indicator--newIndicator");
        el.className = "content-indicator";
    }
    return el;
}
let timerIdIndicator = setTimeout(updateTransition, 1000);

let promise = new Promise(function(resolve, reject) {
    el.addEventListener("transitionend", function() {
       resolve();
    });
    setTimeout(function() {
        reject();
    }, 6000);
});
promise
    .then(function() {
    let articleText = document.querySelectorAll('p.article-text');
    let length = articleText.length;
    let index = 0;
    setTimeout(function() {
        for (index; index < length; index++) {
            articleText[index].classList.add('change');
        }
    }, 1000);
    })
    .then(function() {
        let articleIcon = document.querySelectorAll('img.article-image');
        let length = articleIcon.length;
        let index = 0;
        setTimeout(function() {
            for (index; index < length; index++) {
                articleIcon[index].classList.add('change');
            }
        }, 2000);
    })
    .then(function() {
        let articleHeading = document.querySelectorAll('h2.article-heading');
        let length = articleHeading.length;
        let index = 0;
        setTimeout(function() {
            for (index; index < length; index++) {
                articleHeading[index].classList.add('change');
            }
        }, 3000);
    })
    .then(function() {
        let articleBlock = document.querySelectorAll('div.content-article');
        let length = articleBlock.length;
        let index = 0;
        setTimeout(function() {
            for (index; index < length; index++) {
                articleBlock[index].classList.add('change');
            }
        }, 4000);
    })
    .catch(function() {
        alert('Oooops! Something went wrong.');
    });
