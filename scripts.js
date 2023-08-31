function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.330095246461298, lng: 78.03257461938264 },
    zoom: 18,
    mapId: 'e126a1966ab0cc52'
});

new google.maps.Marker({
    position: {lat: 30.333095565059402 , lng: 78.01077361876008 },
    map,
    title: "DEHRADUN",
  });
    
}


