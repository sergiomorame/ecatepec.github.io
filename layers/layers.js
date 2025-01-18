var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Ecatepec_1 = new ol.format.GeoJSON();
var features_Ecatepec_1 = format_Ecatepec_1.readFeatures(json_Ecatepec_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecatepec_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecatepec_1.addFeatures(features_Ecatepec_1);
var lyr_Ecatepec_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecatepec_1, 
                style: style_Ecatepec_1,
                popuplayertitle: 'Ecatepec',
                interactive: false,
                title: '<img src="styles/legend/Ecatepec_1.png" /> Ecatepec'
            });
var format_colonias_2 = new ol.format.GeoJSON();
var features_colonias_2 = format_colonias_2.readFeatures(json_colonias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_2.addFeatures(features_colonias_2);
var lyr_colonias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colonias_2, 
                style: style_colonias_2,
                popuplayertitle: 'colonias',
                interactive: true,
                title: '<img src="styles/legend/colonias_2.png" /> colonias'
            });

lyr_Positron_0.setVisible(true);lyr_Ecatepec_1.setVisible(true);lyr_colonias_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Ecatepec_1,lyr_colonias_2];
lyr_Ecatepec_1.set('fieldAliases', {'nom_mun': 'nom_mun', 'PobTotal': 'PobTotal', });
lyr_colonias_2.set('fieldAliases', {'cve_igecem': 'cve_igecem', 'nom_mun': 'nom_mun', 'nom_col': 'nom_col', });
lyr_Ecatepec_1.set('fieldImages', {'nom_mun': 'TextEdit', 'PobTotal': 'TextEdit', });
lyr_colonias_2.set('fieldImages', {'cve_igecem': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_col': 'TextEdit', });
lyr_Ecatepec_1.set('fieldLabels', {'nom_mun': 'hidden field', 'PobTotal': 'no label', });
lyr_colonias_2.set('fieldLabels', {'cve_igecem': 'hidden field', 'nom_mun': 'hidden field', 'nom_col': 'inline label - always visible', });
lyr_colonias_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});