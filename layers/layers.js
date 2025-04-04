var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ecatepec_1 = new ol.format.GeoJSON();
var features_ecatepec_1 = format_ecatepec_1.readFeatures(json_ecatepec_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ecatepec_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ecatepec_1.addFeatures(features_ecatepec_1);
var lyr_ecatepec_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ecatepec_1, 
                style: style_ecatepec_1,
                popuplayertitle: 'ecatepec',
                interactive: false,
                title: '<img src="styles/legend/ecatepec_1.png" /> ecatepec'
            });
var format_SECTORES_2 = new ol.format.GeoJSON();
var features_SECTORES_2 = format_SECTORES_2.readFeatures(json_SECTORES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTORES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECTORES_2.addFeatures(features_SECTORES_2);
var lyr_SECTORES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECTORES_2, 
                style: style_SECTORES_2,
                popuplayertitle: 'SECTORES',
                interactive: false,
    title: 'SECTORES<br />\
    <img src="styles/legend/SECTORES_2_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/SECTORES_2_1.png" /> SECTOR 2<br />\
    <img src="styles/legend/SECTORES_2_2.png" /> SECTOR 3<br />\
    <img src="styles/legend/SECTORES_2_3.png" /> SECTOR 5<br />\
    <img src="styles/legend/SECTORES_2_4.png" /> ZONA 4<br />' });
var format_INDEPENDIENTES_3 = new ol.format.GeoJSON();
var features_INDEPENDIENTES_3 = format_INDEPENDIENTES_3.readFeatures(json_INDEPENDIENTES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDIENTES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEPENDIENTES_3.addFeatures(features_INDEPENDIENTES_3);
var lyr_INDEPENDIENTES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDEPENDIENTES_3, 
                style: style_INDEPENDIENTES_3,
                popuplayertitle: 'INDEPENDIENTES',
                interactive: false,
                title: '<img src="styles/legend/INDEPENDIENTES_3.png" /> INDEPENDIENTES'
            });
var format_COLAPSOS_4 = new ol.format.GeoJSON();
var features_COLAPSOS_4 = format_COLAPSOS_4.readFeatures(json_COLAPSOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLAPSOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLAPSOS_4.addFeatures(features_COLAPSOS_4);
var lyr_COLAPSOS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLAPSOS_4, 
                style: style_COLAPSOS_4,
                popuplayertitle: 'COLAPSOS',
                interactive: false,
                title: '<img src="styles/legend/COLAPSOS_4.png" /> COLAPSOS'
            });
var format_FUGAS_5 = new ol.format.GeoJSON();
var features_FUGAS_5 = format_FUGAS_5.readFeatures(json_FUGAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FUGAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FUGAS_5.addFeatures(features_FUGAS_5);
var lyr_FUGAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FUGAS_5, 
                style: style_FUGAS_5,
                popuplayertitle: 'FUGAS',
                interactive: false,
                title: '<img src="styles/legend/FUGAS_5.png" /> FUGAS'
            });
var format_CARCAMOS2024_6 = new ol.format.GeoJSON();
var features_CARCAMOS2024_6 = format_CARCAMOS2024_6.readFeatures(json_CARCAMOS2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARCAMOS2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARCAMOS2024_6.addFeatures(features_CARCAMOS2024_6);
var lyr_CARCAMOS2024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARCAMOS2024_6, 
                style: style_CARCAMOS2024_6,
                popuplayertitle: 'CARCAMOS 2024',
                interactive: false,
                title: '<img src="styles/legend/CARCAMOS2024_6.png" /> CARCAMOS 2024'
            });
var format_CISTERNAS2024_7 = new ol.format.GeoJSON();
var features_CISTERNAS2024_7 = format_CISTERNAS2024_7.readFeatures(json_CISTERNAS2024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CISTERNAS2024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CISTERNAS2024_7.addFeatures(features_CISTERNAS2024_7);
var lyr_CISTERNAS2024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CISTERNAS2024_7, 
                style: style_CISTERNAS2024_7,
                popuplayertitle: 'CISTERNAS 2024',
                interactive: false,
                title: '<img src="styles/legend/CISTERNAS2024_7.png" /> CISTERNAS 2024'
            });
var format_CISTERNASTANQUES2024_8 = new ol.format.GeoJSON();
var features_CISTERNASTANQUES2024_8 = format_CISTERNASTANQUES2024_8.readFeatures(json_CISTERNASTANQUES2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CISTERNASTANQUES2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CISTERNASTANQUES2024_8.addFeatures(features_CISTERNASTANQUES2024_8);
var lyr_CISTERNASTANQUES2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CISTERNASTANQUES2024_8, 
                style: style_CISTERNASTANQUES2024_8,
                popuplayertitle: 'CISTERNAS TANQUES 2024',
                interactive: false,
                title: '<img src="styles/legend/CISTERNASTANQUES2024_8.png" /> CISTERNAS TANQUES 2024'
            });
var format_POZOS_9 = new ol.format.GeoJSON();
var features_POZOS_9 = format_POZOS_9.readFeatures(json_POZOS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZOS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZOS_9.addFeatures(features_POZOS_9);
var lyr_POZOS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZOS_9, 
                style: style_POZOS_9,
                popuplayertitle: 'POZOS',
                interactive: false,
                title: '<img src="styles/legend/POZOS_9.png" /> POZOS'
            });
var format_TANQUES__10 = new ol.format.GeoJSON();
var features_TANQUES__10 = format_TANQUES__10.readFeatures(json_TANQUES__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANQUES__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANQUES__10.addFeatures(features_TANQUES__10);
var lyr_TANQUES__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANQUES__10, 
                style: style_TANQUES__10,
                popuplayertitle: 'TANQUES_',
                interactive: false,
                title: '<img src="styles/legend/TANQUES__10.png" /> TANQUES_'
            });
var format_Incidencias_11 = new ol.format.GeoJSON();
var features_Incidencias_11 = format_Incidencias_11.readFeatures(json_Incidencias_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incidencias_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incidencias_11.addFeatures(features_Incidencias_11);
var lyr_Incidencias_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incidencias_11, 
                style: style_Incidencias_11,
                popuplayertitle: 'Incidencias',
                interactive: true,
    title: 'Incidencias<br />\
    <img src="styles/legend/Incidencias_11_0.png" /> Drenaje tapado/Coladera tapada/Tuberia tapada<br />\
    <img src="styles/legend/Incidencias_11_1.png" /> Solicitud de pipa<br />' });

lyr_Positron_0.setVisible(true);lyr_ecatepec_1.setVisible(true);lyr_SECTORES_2.setVisible(true);lyr_INDEPENDIENTES_3.setVisible(true);lyr_COLAPSOS_4.setVisible(true);lyr_FUGAS_5.setVisible(true);lyr_CARCAMOS2024_6.setVisible(true);lyr_CISTERNAS2024_7.setVisible(true);lyr_CISTERNASTANQUES2024_8.setVisible(true);lyr_POZOS_9.setVisible(true);lyr_TANQUES__10.setVisible(true);lyr_Incidencias_11.setVisible(true);
var layersList = [lyr_Positron_0,lyr_ecatepec_1,lyr_SECTORES_2,lyr_INDEPENDIENTES_3,lyr_COLAPSOS_4,lyr_FUGAS_5,lyr_CARCAMOS2024_6,lyr_CISTERNAS2024_7,lyr_CISTERNASTANQUES2024_8,lyr_POZOS_9,lyr_TANQUES__10,lyr_Incidencias_11];
lyr_ecatepec_1.set('fieldAliases', {'delegacion': 'delegacion', 'cveigecem': 'cveigecem', 'municipi_2': 'municipi_2', });
lyr_SECTORES_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_INDEPENDIENTES_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_COLAPSOS_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FUGAS_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CARCAMOS2024_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', 'GPS': 'GPS', });
lyr_CISTERNAS2024_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', 'GPS': 'GPS', });
lyr_CISTERNASTANQUES2024_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', 'GPS': 'GPS', 'gx_media_l': 'gx_media_l', });
lyr_POZOS_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'TIPO': 'TIPO', 'NO_': 'NO_', 'NOMBRE': 'NOMBRE', 'GEOGRAFICA': 'GEOGRAFICA', 'UBICACI__N': 'UBICACI__N', 'GPS': 'GPS', 'UTM': 'UTM', 'gx_media_l': 'gx_media_l', 'layer': 'layer', 'path': 'path', });
lyr_TANQUES__10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', 'GPS': 'GPS', 'gx_media_l': 'gx_media_l', 'layer': 'layer', 'path': 'path', });
lyr_Incidencias_11.set('fieldAliases', {'id': 'id', 'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', });
lyr_ecatepec_1.set('fieldImages', {'delegacion': 'TextEdit', 'cveigecem': 'TextEdit', 'municipi_2': 'TextEdit', });
lyr_SECTORES_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_INDEPENDIENTES_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_COLAPSOS_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_FUGAS_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CARCAMOS2024_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', 'GPS': 'TextEdit', });
lyr_CISTERNAS2024_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', 'GPS': 'TextEdit', });
lyr_CISTERNASTANQUES2024_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', 'GPS': 'TextEdit', 'gx_media_l': 'TextEdit', });
lyr_POZOS_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'NOMBRE': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UBICACI__N': 'TextEdit', 'GPS': 'TextEdit', 'UTM': 'TextEdit', 'gx_media_l': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TANQUES__10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', 'GPS': 'TextEdit', 'gx_media_l': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Incidencias_11.set('fieldImages', {'id': 'TextEdit', 'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', });
lyr_ecatepec_1.set('fieldLabels', {'delegacion': 'no label', 'cveigecem': 'no label', 'municipi_2': 'no label', });
lyr_SECTORES_2.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_INDEPENDIENTES_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_COLAPSOS_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FUGAS_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CARCAMOS2024_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'TIPO': 'no label', 'NO_': 'no label', 'GEOGRAFICA': 'no label', 'UTM': 'no label', 'UBICACI__N': 'no label', 'GPS': 'no label', });
lyr_CISTERNAS2024_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'TIPO': 'no label', 'NO_': 'no label', 'GEOGRAFICA': 'no label', 'UTM': 'no label', 'UBICACI__N': 'no label', 'GPS': 'no label', });
lyr_CISTERNASTANQUES2024_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'TIPO': 'no label', 'NO_': 'no label', 'GEOGRAFICA': 'no label', 'UTM': 'no label', 'UBICACI__N': 'no label', 'GPS': 'no label', 'gx_media_l': 'no label', });
lyr_POZOS_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'NOMBRE': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UBICACI__N': 'hidden field', 'GPS': 'hidden field', 'UTM': 'hidden field', 'gx_media_l': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_TANQUES__10.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', 'GPS': 'hidden field', 'gx_media_l': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Incidencias_11.set('fieldLabels', {'id': 'hidden field', 'Marca temp': 'header label - always visible', 'Tipo de pr': 'header label - always visible', });
lyr_Incidencias_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});