export default function loadMenu() {
    const main = document.querySelector(".main");
    main.innerHTML = "";

    const menu = document.createElement("div");
    menu.classList.add("menu");
    main.appendChild(menu);
    return menu.innerHTML = `
    <div class="menu-hero">
    <h1>Our Menu</h1>
    <p>Guigino's is most known for our fish that we serve fresh daily</p>
    </div>
    <div class="food">
        <div class="dish">
            <img class="pic" src="../src/pics/snapper.jpg" alt="">
            <div class="dish-info">
                <h1>Snapper fish</h1>
                <p>"Give me the snapper bozo" - Mac
                    "Snapper fish for the man!" - Charlie
                </p>class="dish"
            </div>
        </div>
        <div class="dish">
            <img class="pic" src="../src/pics/spaghetti.jpg" alt="">
            <div class="dish-info">
                <h1>Bowl of Spaghetti</h1>
                <p>"I'll have a piping hot bowl of spaghetti, nice and sloppy" - Dennis</p>
            </div>
        </div>
        <div class="dish">
            <img class="pic" class="steak" src="../src/pics/milk-steak.jpg" alt="">
            <div class="dish-info">
                <h1>Milk Steak</h1>
                <p>"I'm gonna want the milk steak boiled over hard" - Charlie</p>
            </div>
        </div>
        <div class="dish">
            <img class="pic" src="../src/pics/calamari.jpg" alt="">
            <div class="dish-info">
                <h1>Calamari</h1>
                <p>Our newest addition to the menu, pristine grilled calamari</p>
            </div>
        </div>
    </div>
    <div class="drinks">
        <div class="beverage">
            <img class="pic" src="../src/pics/white-wine.png" alt="">
            <div class="drink-info">
                <h1>Bottle of White Wine</h1>
                <p>Our most expensive bottle</p>
            </div>
        </div>
        <div class="beverage">
            <img class="pic" src="../src/pics/glass.jpg" alt="">
            <div class="drink-info">
                <h1>One Glass of Wine</h1>
                <p>A glass of our house red</p>
            </div>
        </div>
        <div class="beverage">
            <img class="pic" src="../src/pics/tap.webp" alt="">
            <div class="drink-info">
                <h1>Tap Water</h1>
                <p>Just the tap water then - Dee</p>
            </div>
        </div>
        <div class="beverage">
            <img class="pic" src="../src/pics/black-wine.jpg" alt="">
            <div class="drink-info">
                <h1>Bottle of Black Wine</h1>
                <p>*Never before seen in the show*</p>
            </div>
        </div>
    </div>`;
}