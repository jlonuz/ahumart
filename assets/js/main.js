$(document).ready(function(){
  $('.slider-home').slick({
    dots: false
  });
  $("[data-fancybox]").fancybox({
    // Options will go here
  });
});


function initMap() {
  var ahumart = {lat: -45.5721488, lng: -72.066253};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: ahumart
  });
  var marker = new google.maps.Marker({
    position: ahumart,
    map: map
  });
}