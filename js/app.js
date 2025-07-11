// ===================================================
document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

console.log(scrollTop);

  const navbar = document.getElementById("navbar");
  const topBtn = document.querySelector(".top_btn_1");

  if (scrollTop >= 590) {

    if (navbar) {
      navbar.classList.add("navfix");
      console.log("e");
      
    }
  } else {
    
    if (navbar) {
      console.log("if");

      navbar.classList.remove("navfix");
    }
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


  const toggleBtn = document.getElementById('toggleCollapseBtn');
  const collapseElement = document.getElementById('moreCards');

  // When collapse opens
  collapseElement.addEventListener('shown.bs.collapse', function () {
    toggleBtn.innerText = 'Show Less Solutions';
  });

  // When collapse hides
  collapseElement.addEventListener('hidden.bs.collapse', function () {
    toggleBtn.innerText = 'Show More Solutions';
  });