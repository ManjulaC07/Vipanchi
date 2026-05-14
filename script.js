
const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('active');

    if(heart.classList.contains('active')){
      heart.classList.remove('fa-regular');
      heart.classList.add('fa-solid');
    } else {
      heart.classList.remove('fa-solid');
      heart.classList.add('fa-regular');
    }
  });
});


document.addEventListener("DOMContentLoaded", function(){

  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("keyup", function() {
    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {
      let text = card.innerText.toLowerCase();

      if(text.includes(value)){
        card.style.display = "";   
      } else {
        card.style.display = "none";
      }
    });
  });

});


let index = 0;
const slides = document.querySelector('.slides');
const total = slides.children.length;

document.querySelector('.next').onclick = () => {
  index = (index + 1) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + total) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
};

document.addEventListener("DOMContentLoaded", function(){


document.addEventListener("DOMContentLoaded", function(){

  const hearts = document.querySelectorAll('.heart');
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


  hearts.forEach(heart => {
    const card = heart.closest(".card");
    const html = card.outerHTML;

    if(wishlist.includes(html)){
      heart.classList.add("active");
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid");
    }
  });



});

});