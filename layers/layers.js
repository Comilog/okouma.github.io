var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Limiteenvrionnementale_0 = new ol.format.GeoJSON();
var features_Limiteenvrionnementale_0 = format_Limiteenvrionnementale_0.readFeatures(json_Limiteenvrionnementale_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limiteenvrionnementale_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limiteenvrionnementale_0.addFeatures(features_Limiteenvrionnementale_0);var lyr_Limiteenvrionnementale_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limiteenvrionnementale_0, 
                style: style_Limiteenvrionnementale_0,
                title: '<img src="styles/legend/Limiteenvrionnementale_0.png" /> Limite envrionnementale'
            });var format_Amas_1 = new ol.format.GeoJSON();
var features_Amas_1 = format_Amas_1.readFeatures(json_Amas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amas_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Amas_1.addFeatures(features_Amas_1);var lyr_Amas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amas_1, 
                style: style_Amas_1,
                title: '<img src="styles/legend/Amas_1.png" /> Amas'
            });var format_Bornestopographiquesderfrence_2 = new ol.format.GeoJSON();
var features_Bornestopographiquesderfrence_2 = format_Bornestopographiquesderfrence_2.readFeatures(json_Bornestopographiquesderfrence_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bornestopographiquesderfrence_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bornestopographiquesderfrence_2.addFeatures(features_Bornestopographiquesderfrence_2);var lyr_Bornestopographiquesderfrence_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bornestopographiquesderfrence_2, 
                style: style_Bornestopographiquesderfrence_2,
                title: '<img src="styles/legend/Bornestopographiquesderfrence_2.png" /> Bornes topographiques de référence'
            });

lyr_Limiteenvrionnementale_0.setVisible(true);lyr_Amas_1.setVisible(true);lyr_Bornestopographiquesderfrence_2.setVisible(true);
var layersList = [baseLayer,lyr_Limiteenvrionnementale_0,lyr_Amas_1,lyr_Bornestopographiquesderfrence_2];
lyr_Limiteenvrionnementale_0.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEn': 'ExtendedEn', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Amas_1.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEn': 'ExtendedEn', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Bornestopographiquesderfrence_2.set('fieldAliases', {'Points': 'Points', 'X (m)': 'X (m)', 'Y (m)': 'Y (m)', 'Z (m)': 'Z (m)', });
lyr_Limiteenvrionnementale_0.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEn': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Amas_1.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEn': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Bornestopographiquesderfrence_2.set('fieldImages', {'Points': 'TextEdit', 'X (m)': 'TextEdit', 'Y (m)': 'TextEdit', 'Z (m)': 'TextEdit', });
lyr_Limiteenvrionnementale_0.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEn': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Amas_1.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEn': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Bornestopographiquesderfrence_2.set('fieldLabels', {'Points': 'no label', 'X (m)': 'header label', 'Y (m)': 'header label', 'Z (m)': 'header label', });
lyr_Bornestopographiquesderfrence_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});