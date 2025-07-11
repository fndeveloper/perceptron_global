// ===================================================
document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
    const scrollPercent = (scrollTop / docHeight) * 100;
  
    const topBtn = document.querySelector(".top_btn_1");
  
    if (scrollPercent >= 100) {
      topBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`; // Font Awesome icon
    } else {
      topBtn.innerHTML = `${scrollPercent.toFixed(0)}`;
    }
  });
  
// ===================================================

// ===================== HEADER CODE START ======================
var header=document.getElementById("header");
if(header){
// ===================== HEADER CODE START ======================
  fetch("../header.html")
  .then(e=>e.text())
  .then((data)=>{
  header.innerHTML=data;
  initNavbarTabHover();
})
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