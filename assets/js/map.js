var googleMap = function(selector) {
  var self = this;

  this.map = new google.maps.Map(document.getElementById(selector), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    scrollwheel: false,
    zoom: 8
  });

  this.markers = [];
  this.locations = [];
  this.bounds = new google.maps.LatLngBounds();

  this.addMarker = function(position) {
    var marker = new google.maps.Marker({
      map: self.map,
      position: position
    });
    self.markers.push(marker);
  };

  this.addLocation = function(coord1m, coord2) {
    var location = new google.maps.LatLng(coord1m, coord2);
    self.locations.push(location);
    self.addMarker(location);
    self.bounds.extend(location);
    self.adjustMap();
  };

  this.adjustMap = function()  {
    self.map.fitBounds(self.bounds);
  };
}