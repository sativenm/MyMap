var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Generic_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/MyPostGis/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Linea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Generic",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Generic_1, 1]);

lyr_OSMStandard_0.setVisible(true);lyr_Generic_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Generic_1];
