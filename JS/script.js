var  acc = document.getElementsByClassName("accord");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// const slider = document.querySelector('.image-slider');
// const slides = slider.querySelectorAll('img');
// const dotContainer = document.querySelector('.slider-dots'); // Optional dots


// let currentSlide = 0;
// let slideInterval;


// // Function to handle slide transition
// function showSlide(n) {
//   slides.forEach(slide => slide.classList.remove('active'));
//   slides[n].classList.add('active');
  
//   // Update active dot (optional)
//   if (dotContainer) {
//     const dots = dotContainer.querySelectorAll('.slider-dot');
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[n].classList.add('active');
//   }
// }

// // Function to start automatic transition
// function startSlider() {
//   slideInterval = setInterval(() => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
//   }, 3000); // Adjust interval (in milliseconds)
// }


// // Function to stop automatic transition (optional)
// function stopSlider() {
//   clearInterval(slideInterval);
// }


// // Event listener for hover (optional)
// slider.addEventListener('mouseover', stopSlider);
// slider.addEventListener('mouseout', startSlider);


// // Start the slider
// showSlide(currentSlide);
// startSlider();