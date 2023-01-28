function myOnClickFn() {
    document.location.href="form.html";
}

function showMap(position) {
    var latlong = position.coords.latutude + "," + position.coords.longitude;
    var mapLink = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlong+"%zoom=35%size=500x300&outpute=embed";
    document.getElementById("mapa").innerHTML = "<img alt='Map Holder' src='"+ mapLink  + "'>";
}

function onClickPosition() {
    navigator.geolocation.getCurrentPosition(showMap);
}