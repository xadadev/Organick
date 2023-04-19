
/* ----------------- Load more products ----------------- */
document.addEventListener("DOMContentLoaded", function() {
  $(".content").slice(0, 4).show();
  $("#loadMore").on("click", function(e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No more products").addClass("noContent");
    }
  });
});

/* ---------------- Cart Quantity Js --------------- */
 // get the input element
 const input = document.querySelector('.product-qty');

 // get the add and minus buttons
 const minusBtn = document.querySelector('.qty-count--minus');
 const addBtn = document.querySelector('.qty-count--add');

 // add event listeners to buttons
 minusBtn.addEventListener('click', () => {
   // decrease quantity value if it's not already at the minimum
   if (input.value > input.min) {
     input.value--;
   }
 });

 addBtn.addEventListener('click', () => {
   // increase quantity value if it's not already at the maximum
   if (parseInt(input.value) < parseInt(input.max)) {
     input.value++;
   }
 });

 /* ------------------- Tabs ------------------ */
 const tabLinks = document.querySelectorAll(".tab-link");
 const tabContents = document.querySelectorAll(".tab-content");
 
 tabLinks.forEach((tabLink) => {
   tabLink.addEventListener("click", () => {
     const tabId = tabLink.dataset.tab;
 
     tabLinks.forEach((link) => {
       if (link.dataset.tab !== tabId) {
         link.classList.remove("active");
       } else {
         link.classList.add("active");
       }
     });
 
     tabContents.forEach((content) => {
       if (content.dataset.tab !== tabId) {
         content.classList.remove("active");
       } else {
         content.classList.add("active");
       }
     });
   });
 });
 