// map options
    var options = {
      center: [33.83,-80.87333],
      zoom: 8,
      zoomControl: false
    }

    // create Leaflet map
    var map = L.map('map', options);

    // request some slippy map tiles
    var tiles = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 16,
      ext: 'png'
    });

    // add tiles to the map
    map.addLayer(tiles);