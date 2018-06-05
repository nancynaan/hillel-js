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
        let length = document.getElementById('articles').children.length;

        function makeSetTimeout(index) {
            setTimeout(function() {
                setTimeout(function() {
                    let currentArticle = document.getElementById('articles').children[index];
                    let articleText = currentArticle.querySelector('p.article-text');
                    articleText.classList.add('change');
                }, 1000);
                setTimeout(function() {
                    let currentArticle = document.getElementById('articles').children[index];
                    let articleImage = currentArticle.querySelector('img.article-image');
                    articleImage.classList.add('change');
                }, 2000);
                setTimeout(function() {
                    let currentArticle = document.getElementById('articles').children[index];
                    let articleHeading = currentArticle.querySelector('h2.article-heading');
                    articleHeading.classList.add('change');
                }, 3000);
                setTimeout(function() {
                    let currentArticle = document.getElementById('articles').children[index];
                    currentArticle.classList.add('change');
                }, 4000);
            }, 4500*(length-(index+1)));
        }
        for (let index = length - 1; index < length && index >=0; index--) {
            makeSetTimeout(index);
        }
    })
    .catch(function() {
    alert('Oooops! Something went wrong.');
});
