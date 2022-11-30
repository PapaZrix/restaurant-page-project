export default function loadMain() {
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);
    main.innerHTML = "";

    const home = document.createElement("div");
    home.classList.add("home");
    main.appendChild(home);
    return home.innerHTML = `<p>Welcome to Guigino's Italian Restaurant</p>
    <p>The best fancy restaurant in Philly</p>
    <img src="../src/pics/waiter.jpg" alt="">
    <p>Our one and only staff member - The Waiter</p>`
}