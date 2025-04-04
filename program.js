// For smooth scroll
const lenis = new Lenis();

function raf(time){
   lenis.raf(time)
   requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



//Contact Btn Footer
document.getElementById("contact-btn").onclick = function(){
   window.location.href = "./pages/Contact.html";
};


//For Menu Button
const menu_btn = document.querySelector('.menu-btn');
const menu_list = document.getElementsByTagName("ul")[0];
const mb_l1 = document.querySelector('.mb_line-1');
const mb_l2 = document.querySelector('.mb_line-2');
const mb_l3 = document.querySelector('.mb_line-3');
menu_btn.addEventListener('click', ()=>{
   mb_l1.classList.toggle('rotate_bot');
   mb_l2.classList.toggle('slide_left');
   mb_l3.classList.toggle('rotate_top');
   menu_list.classList.toggle('show_nav');
});


//Home Page to Jobs Btn
document.querySelector('.goTo-job').addEventListener('click', ()=>{
   window.location.href = "./pages/Jobs.html";
});
