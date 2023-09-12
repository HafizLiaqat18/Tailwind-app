const hamburger = document.querySelector("#hamburger");
console.log(hamburger)
 const menu = document.querySelector("#menu");
 const h_links = document.querySelectorAll("#h-link");
 const fa_solid = document.querySelector(".fa-solid");
 hamburger.addEventListener("click", () => {
   menu.classList.toggle("hidden");
   fa_solid.classList.toggle("fa-xmark");
 });
 h_links.forEach((link) => {
   link.addEventListener("click", () => {
     menu.classList.toggle("hidden");
     fa_solid.classList.toggle("fa-xmark");
   });
 });

 console.log("Hello")