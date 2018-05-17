'use strict';

var page = document.getElementById('wrapper');

var header = document.createElement('header');
header.id = 'header';
header.className = 'header';
page.appendChild(header);

var aside = document.createElement('aside');
aside.id = 'aside';
aside.className = 'sidebar';
page.appendChild(aside);

var content = document.createElement('content');
content.id = 'content';
page.appendChild(content);

var footer = document.createElement('footer');
footer.id = 'footer';
page.appendChild(footer);

header.innerHTML = `<div class="header-menu"><div class="header-image">
                    <img class="header-logo" src="./images/logo.png"/></div><ul class="header-list">
                    <li class="header-element"><a class="header-link" href="#">Main</a></li>
                    <li class="header-element"><a class="header-link" href="#">One</a></li>
                    <li class="header-element"><a class="header-link" href="#">Two</a></li></ul></div>`;
aside.innerHTML = `<div class="sidebar-links"><ul class="sidebar-list">
                    <li class="sidebar-element"><a class="sidebar-link" href="#">Main</a></li>
                    <li class="sidebar-element"><a class="sidebar-link" href="#">One</a></li></ul></div>`;
content.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet erat cursus tortor fringilla pellentesque. 
                        Maecenas sit amet nulla mauris. Praesent consectetur nec urna et pharetra. 
                        Aenean lectus tellus, congue at viverra pharetra, molestie sit amet dui. 
                        In libero mi, condimentum in vulputate quis, iaculis sit amet velit. Nam sit amet massa luctus, rhoncus nisl non, lobortis metus. 
                        Morbi ornare porttitor est, quis scelerisque odio pellentesque sed. Cras condimentum, quam nec 
                        pretium auctor, enim dolor egestas enim, nec finibus tellus orci a elit. Sed gravida mi et eros ultrices blandit. 
                        Suspendisse dui sapien, sollicitudin id orci nec, eleifend mollis odio. Morbi vitae sem in massa porta mollis. 
                        Duis accumsan leo vitae ultrices pharetra. Maecenas porttitor, augue id blandit sagittis, ex est posuere tellus, 
                        sit amet scelerisque risus sem non tellus.</p>
                       <p>Aenean id dapibus ante. Vivamus quis velit dapibus, aliquam sem vitae, varius ante. 
                       Mauris et scelerisque nisl. Donec sed pharetra sem, quis posuere neque. Sed viverra nulla ac nisl lacinia malesuada. 
                       Integer ullamcorper hendrerit libero eget rhoncus. Nulla facilisis ultricies sapien sit amet dapibus. 
                       Etiam tortor sem, lacinia nec orci a, vehicula blandit lectus.</p>`;
footer.innerHTML = `<div class="footer-links"><ul class="footer-list">
                    <li class="footer-element"><span>powered by NancyNan</span></li>
                    <li class="footer-element"><a class="footer-link" target="_blank" href="https://github.com/nancynaan/hillel-js">Github</a></li></ul></div>`;
