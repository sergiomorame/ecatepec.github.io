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
var format_Incidenciasagua_3 = new ol.format.GeoJSON();
var features_Incidenciasagua_3 = format_Incidenciasagua_3.readFeatures(json_Incidenciasagua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incidenciasagua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incidenciasagua_3.addFeatures(features_Incidenciasagua_3);
var lyr_Incidenciasagua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incidenciasagua_3, 
                style: style_Incidenciasagua_3,
                popuplayertitle: 'Incidencias agua',
                interactive: true,
    title: 'Incidencias agua<br />\
    <img src="styles/legend/Incidenciasagua_3_0.png" /> Solicitud de pipa<br />'
        });

lyr_Positron_0.setVisible(true);lyr_Ecatepec_1.setVisible(true);lyr_colonias_2.setVisible(true);lyr_Incidenciasagua_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Ecatepec_1,lyr_colonias_2,lyr_Incidenciasagua_3];
lyr_Ecatepec_1.set('fieldAliases', {'nom_mun': 'nom_mun', 'PobTotal': 'PobTotal', });
lyr_colonias_2.set('fieldAliases', {'cve_igecem': 'cve_igecem', 'nom_mun': 'nom_mun', 'nom_col': 'nom_col', });
lyr_Incidenciasagua_3.set('fieldAliases', {'Fecha': 'Fecha', 'hora': 'hora', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'N�mero e': 'N�mero e', 'N�mero I': 'N�mero I', 'C�digo P': 'C�digo P', 'Manzana/Lo': 'Manzana/Lo', 'Lugar de r': 'Lugar de r', 'Tel�fono': 'Tel�fono', 'Lon': 'Lon', 'Lat': 'Lat', });
lyr_Ecatepec_1.set('fieldImages', {'nom_mun': 'TextEdit', 'PobTotal': 'TextEdit', });
lyr_colonias_2.set('fieldImages', {'cve_igecem': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_col': 'TextEdit', });
lyr_Incidenciasagua_3.set('fieldImages', {'Fecha': 'TextEdit', 'hora': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'N�mero e': 'TextEdit', 'N�mero I': 'TextEdit', 'C�digo P': 'TextEdit', 'Manzana/Lo': 'TextEdit', 'Lugar de r': 'TextEdit', 'Tel�fono': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', });
lyr_Ecatepec_1.set('fieldLabels', {'nom_mun': 'hidden field', 'PobTotal': 'no label', });
lyr_colonias_2.set('fieldLabels', {'cve_igecem': 'hidden field', 'nom_mun': 'hidden field', 'nom_col': 'inline label - always visible', });
lyr_Incidenciasagua_3.set('fieldLabels', {'Fecha': 'inline label - always visible', 'hora': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'N�mero e': 'hidden field', 'N�mero I': 'hidden field', 'C�digo P': 'hidden field', 'Manzana/Lo': 'hidden field', 'Lugar de r': 'hidden field', 'Tel�fono': 'hidden field', 'Lon': 'hidden field', 'Lat': 'hidden field', });
lyr_Incidenciasagua_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});