export default function loadContactPage() {
    const main = document.querySelector(".main");
    main.innerHTML = "";

    const contact = document.createElement("div");
    contact.classList.add("contact");
    main.appendChild(contact);
    return contact.innerHTML = `
    <p class="phone"> <span class="material-symbols-outlined">call</span> 123 456 789</p> 
    <p class="address"> <span class="material-symbols-outlined">
    home
    </span> 1111 South Broadway, Los Angeles, USA </p>
    <img src="pics/map.png" alt="">
    `
}

/* <div class="phone">
<span class="material-symbols-outlined">
call
</span>
<p>123 456 789</p>
</div>
<div class="address">
<span class="material-symbols-outlined">
home
</span>
<p class="address">1111 South Broadway, Los Angeles, USA</p>
</div> */