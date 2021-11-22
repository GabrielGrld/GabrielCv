// jshint esversion:6


$(function() {
  $('[data-toggle="popover"]').popover({
    html: true,
sanitize: false,
});
});

$(function(){
    // Enables popover
    $("[data-toggle=popover]").popover();
});

$("[data-toggle=popover]").popover();

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});



// FROM
gsap.from('.profile-description', {
  // ScrollTrigger: '.fe-images',
     x:+300,
    duration: 2,
    backgroundColor: '',
    opacity: 0

});

gsap.from('.welcome', {
  // ScrollTrigger: '.fe-images',
     x:-300,
    duration: 3,
    backgroundColor: '',
    opacity: 0

});


gsap.from('.be-images', {
  ScrollTrigger: '.be-images',
     x:+300,
    duration: 3,
    backgroundColor: '',
    opacity: 0

});
