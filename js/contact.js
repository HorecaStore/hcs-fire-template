  google.maps.event.addDomListener(window, 'load', init);

  var map;

  function init() {
    var mapOptions = {
      center: new google.maps.LatLng(59.951811,30.215228),
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL,
      },
      disableDoubleClickZoom: true,
      mapTypeControl: true,
      mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      },
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: false,
      draggable : true,
      overviewMapControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",stylers:[{visibility:"simplified"}]},{featureType:"water",
      stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},{stylers:[{saturation:-77}]},{featureType:"road"}],
    }

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
      [59.951876,30.215965]
    ];

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        icon: '',
        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        map: map
      });
    }
  }

