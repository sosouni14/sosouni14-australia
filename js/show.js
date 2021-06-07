window.onload = function () {
    document.getElementById("sydneyshowpage").style.display = "block";
    document.getElementById("cairnsshowpage").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("map2").style.display = "none";
    document.getElementById("map3").style.display = "none";
    document.getElementById("map4").style.display = "none";
    document.getElementById("map5").style.display = "none";
    document.getElementById("map6").style.display = "none";
    document.getElementById("map7").style.display = "none";
    document.getElementById("map8").style.display = "none";
    document.getElementById("map9").style.display = "none";
}


function showsydney() {
    document.getElementById("sydneyshowpage").style.display = "block";
    document.getElementById("cairnsshowpage").style.display = "none";
}
function showcairns() {
    document.getElementById("sydneyshowpage").style.display = "none";
    document.getElementById("cairnsshowpage").style.display = "block";
}

function dbogi() {
    document.getElementById("alpa").classList.remove("card-lineover");
    document.getElementById("alpa2").classList.remove("card-lineover");
    document.getElementById("alpa3").classList.remove("card-lineover");
    document.getElementById("alpa4").classList.remove("card-lineover");
    document.getElementById("alpa5").classList.remove("card-lineover");
    document.getElementById("alpa6").classList.remove("card-lineover");
    document.getElementById("alpa7").classList.remove("card-lineover");
    document.getElementById("alpa8").classList.remove("card-lineover");
    document.getElementById("alpa9").classList.remove("card-lineover");
}

let map;

function initMap() {
    var uluru = { lat: -33.857198, lng: 151.215123 };
    var uluru2 = { lat: -33.855769, lng: 151.209207 };
    var uluru3 = { lat: -33.892313, lng: 151.275314 };
    var uluru4 = { lat: -33.539669, lng: -209.578054 };
    var uluru5 = { lat: -35.038483, lng: -209.327761 };
    var uluru6 = { lat: -32.783306, lng: -207.924302 };
    var uluru7 = { lat: -16.922165, lng: -214.219106 };
    var uluru8 = { lat: -16.820398, lng: -214.366118 };
    var uluru9 = { lat: -16.919784, lng: -214.222026 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });


    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 14,
        center: uluru2
    });
    var marker2 = new google.maps.Marker({
        position: uluru2,
        map: map2
    });

    var map3 = new google.maps.Map(document.getElementById('map3'), {
        zoom: 14,
        center: uluru3
    });
    var marker3 = new google.maps.Marker({
        position: uluru3,
        map: map3
    });

    var map4 = new google.maps.Map(document.getElementById('map4'), {
        zoom: 14,
        center: uluru4
    });
    var marker4 = new google.maps.Marker({
        position: uluru4,
        map: map4
    });

    var map5 = new google.maps.Map(document.getElementById('map5'), {
        zoom: 14,
        center: uluru5
    });
    var marker5 = new google.maps.Marker({
        position: uluru5,
        map: map5
    });

    var map6 = new google.maps.Map(document.getElementById('map6'), {
        zoom: 14,
        center: uluru6
    });
    var marker6 = new google.maps.Marker({
        position: uluru6,
        map: map6
    });

    var map7 = new google.maps.Map(document.getElementById('map7'), {
        zoom: 14,
        center: uluru7
    });
    var marker7 = new google.maps.Marker({
        position: uluru7,
        map: map7
    });

    var map8 = new google.maps.Map(document.getElementById('map8'), {
        zoom: 14,
        center: uluru8
    });
    var marker8 = new google.maps.Marker({
        position: uluru8,
        map: map8
    });

    var map9 = new google.maps.Map(document.getElementById('map9'), {
        zoom: 14,
        center: uluru9
    });
    var marker9 = new google.maps.Marker({
        position: uluru9,
        map: map9
    });

    google.maps.event.addDomListener(window, "load", initMap);
}
function showmap(mapid) {
    var thismapid = mapid;
    document.getElementById(thismapid).style.display = "block";
}

function dbogi(alpaclick, plusclick) {
    var thisalpaclick = alpaclick;
    var thisplustclick = plusclick;
    document.getElementById(thisalpaclick).classList.remove("card-lineover");
    document.getElementById(thisplustclick).innerText = "";
}


