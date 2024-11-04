// Smooth scroll for navigation links
$(document).ready(function() {
    $("nav a").on("click", function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 800);
    });
  
    // Contact Form Submission (mock)
    $("#contact-form").on("submit", function(event) {
      event.preventDefault();
      alert("Thank you for contacting us! We will get back to you soon.");
      $(this).trigger("reset");
    });
  });
  