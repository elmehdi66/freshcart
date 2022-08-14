$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 6,
    margin: 10,
    nav: true,
    rewind: true,
    responsiveClass:true,
    responsive: {
      0: {
        items: 1.5,
      },
    },
  });
});
