import loadHome from "./home";
import loadMenu from "./menu";
import loadContactPage from "./contact";
const content = document.getElementById("content");

(function loadHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    content.appendChild(header);
    return header.innerHTML = `
    <div class="name">
    Guigino's
    </div>
    <div class="nav">
    <ul>
        <li class="home">Home</li>
        <li class="menu">Menu</li>
        <li class="contact">Contact</li>
    </ul>
    </div>`
})();

loadContactPage();

(function loadFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    content.appendChild(footer);

    return footer.innerHTML = `<p>Fresh Fish Served Daily</p>`;
})();