// ===================================================
document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const navbar = document.getElementById("navbar");
  const topBtn = document.querySelector(".top_btn_1");

  if (scrollTop >= 590) {

    if (navbar) {
      navbar.classList.add("navfix");

      
    }
  } else {
    
    if (navbar) {
     

      navbar.classList.remove("navfix");
    }
  }
});

// ===================================================

// ===================== HEADER CODE START ======================
document.addEventListener("DOMContentLoaded", () => {

  document.body.classList.add("fade-in");
});

var header = document.getElementById("header");

if (header) {
  fetch("../header.html")
    .then((e) => e.text())
    .then((data) => {
      header.innerHTML = data;

      // ============= CODE FOR CHECK COLLPASE OF SHEDULE APPOINTMENT START ===============
setTimeout(() => {
const el = document.querySelector(".shedule_collapse");
if (el && el.offsetHeight > 0) {
  console.log("Collapse is OPEN (visible)");
} else {
  console.log("Collapse is CLOSED (hidden)");
}

}, 500);
// ============= CODE FOR CHECK COLLPASE OF SHEDULE APPOINTMENT END ===============



      initNavbarTabHover?.(); 


      document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');

        if (href && !href.startsWith('http') && !href.startsWith('#') && !link.hasAttribute('target')) {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            document.body.classList.remove("fade-in"); 
            document.body.style.opacity = 0;

            setTimeout(() => {
              window.location.href = href;
            }, 600); 
          });
        }
      });
    });
}

// ===================== HEADER CODE END ======================

// ===================== HEADER CODE START ======================
var footer=document.getElementById("footer");
if(footer){
// ===================== footer CODE START ======================
  fetch("../footer.html")
  .then(e=>e.text())
  .then((data)=>{
  footer.innerHTML=data})
}
// ===================== HEADER CODE END ======================

// ======================= NAVBAR TABS PANE CODE START ============================
function initNavbarTabHover() {
  const tabs = document.querySelectorAll('.hover-tab-nav .nav-link');
  const panes = document.querySelectorAll('.hover-tab-pane .tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('mouseenter', function () {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('show', 'active'));

      const target = this.getAttribute('data-bs-target');
      this.classList.add('active');
      document.querySelector(target).classList.add('show', 'active');
    });
  });
}
// ======================= NAVBAR TABS PANE CODE END ==============================




 

// =================== SWIPER OF BANNER SLIDER CODE START ======================
  const swiper = new Swiper('.clientSwiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 }
    }
  });
// =================== SWIPER OF BANNER SLIDER CODE END  ======================
