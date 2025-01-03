//--- Toggle ---//
// Without Jquery Class
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.nav');
    const toggleCollapse = document.querySelector('.toggle-collapse');

    // Click event on toggle menu
    toggleCollapse.addEventListener('click', function() {
        nav.classList.toggle('collapse'); // Toggle the 'collapse' class
    });
 });


//--- Card Swiper Slide ---//  
// const swiper = new Swiper(".swiper-container", {
//     slidesPerView: 4,
//     spaceBetween: 20,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },

//       468: {
//         slidesPerView: 2,
//       },

//       768: {
//         slidesPerView: 3,
//       },
//       1200: {
//         slidesPerView: 4,
//       },
//     },
//   });

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      468: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

//--- Gallery Popup ---//
function showPopup (imageSrc,title,description) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");
    const popupDesc = document.getElementById("popup-desc");

    popupImg.src = imageSrc;
    popupTitle.textContent = title;
    popupDesc.textContent = description;
    
    popup.style.display = "flex";
}

function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

