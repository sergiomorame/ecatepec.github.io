var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Red_hidraulica_2 = new ol.format.GeoJSON();
var features_Red_hidraulica_2 = format_Red_hidraulica_2.readFeatures(json_Red_hidraulica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_hidraulica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_hidraulica_2.addFeatures(features_Red_hidraulica_2);
var lyr_Red_hidraulica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_hidraulica_2, 
                style: style_Red_hidraulica_2,
                popuplayertitle: 'Red_hidraulica',
                interactive: true,
    title: 'Red_hidraulica<br />\
    <img src="styles/legend/Red_hidraulica_2_0.png" /> 2<br />\
    <img src="styles/legend/Red_hidraulica_2_1.png" /> 4<br />\
    <img src="styles/legend/Red_hidraulica_2_2.png" /> 6<br />\
    <img src="styles/legend/Red_hidraulica_2_3.png" /> 8<br />\
    <img src="styles/legend/Red_hidraulica_2_4.png" /> 10<br />\
    <img src="styles/legend/Red_hidraulica_2_5.png" /> 12<br />\
    <img src="styles/legend/Red_hidraulica_2_6.png" /> 14<br />\
    <img src="styles/legend/Red_hidraulica_2_7.png" /> 16<br />\
    <img src="styles/legend/Red_hidraulica_2_8.png" /> 20<br />\
    <img src="styles/legend/Red_hidraulica_2_9.png" /> 24<br />\
    <img src="styles/legend/Red_hidraulica_2_10.png" /> 30<br />\
    <img src="styles/legend/Red_hidraulica_2_11.png" /> 36<br />\
    <img src="styles/legend/Red_hidraulica_2_12.png" /> 42<br />\
    <img src="styles/legend/Red_hidraulica_2_13.png" /> 48<br />\
    <img src="styles/legend/Red_hidraulica_2_14.png" /> 54<br />\
    <img src="styles/legend/Red_hidraulica_2_15.png" /> 60<br />\
    <img src="styles/legend/Red_hidraulica_2_16.png" /> 72<br />\
    <img src="styles/legend/Red_hidraulica_2_17.png" /> CONDUCCION<br />\
    <img src="styles/legend/Red_hidraulica_2_18.png" /> S/D<br />' });
var format_Ecatepec_3 = new ol.format.GeoJSON();
var features_Ecatepec_3 = format_Ecatepec_3.readFeatures(json_Ecatepec_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecatepec_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecatepec_3.addFeatures(features_Ecatepec_3);
var lyr_Ecatepec_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecatepec_3, 
                style: style_Ecatepec_3,
                popuplayertitle: 'Ecatepec',
                interactive: false,
                title: '<img src="styles/legend/Ecatepec_3.png" /> Ecatepec'
            });
var format_INDEPENDIENTES_4 = new ol.format.GeoJSON();
var features_INDEPENDIENTES_4 = format_INDEPENDIENTES_4.readFeatures(json_INDEPENDIENTES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDIENTES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEPENDIENTES_4.addFeatures(features_INDEPENDIENTES_4);
var lyr_INDEPENDIENTES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDEPENDIENTES_4, 
                style: style_INDEPENDIENTES_4,
                popuplayertitle: 'INDEPENDIENTES',
                interactive: true,
                title: '<img src="styles/legend/INDEPENDIENTES_4.png" /> INDEPENDIENTES'
            });
var format_SECTORES_5 = new ol.format.GeoJSON();
var features_SECTORES_5 = format_SECTORES_5.readFeatures(json_SECTORES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTORES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECTORES_5.addFeatures(features_SECTORES_5);
var lyr_SECTORES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECTORES_5, 
                style: style_SECTORES_5,
                popuplayertitle: 'SECTORES',
                interactive: true,
    title: 'SECTORES<br />\
    <img src="styles/legend/SECTORES_5_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/SECTORES_5_1.png" /> SECTOR 2<br />\
    <img src="styles/legend/SECTORES_5_2.png" /> SECTOR 3<br />\
    <img src="styles/legend/SECTORES_5_3.png" /> SECTOR 5<br />\
    <img src="styles/legend/SECTORES_5_4.png" /> ZONA 4<br />' });
var format_COLAPSOS_6 = new ol.format.GeoJSON();
var features_COLAPSOS_6 = format_COLAPSOS_6.readFeatures(json_COLAPSOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLAPSOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLAPSOS_6.addFeatures(features_COLAPSOS_6);
var lyr_COLAPSOS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLAPSOS_6, 
                style: style_COLAPSOS_6,
                popuplayertitle: 'COLAPSOS',
                interactive: true,
                title: '<img src="styles/legend/COLAPSOS_6.png" /> COLAPSOS'
            });
var format_FUGAS_7 = new ol.format.GeoJSON();
var features_FUGAS_7 = format_FUGAS_7.readFeatures(json_FUGAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FUGAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FUGAS_7.addFeatures(features_FUGAS_7);
var lyr_FUGAS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FUGAS_7, 
                style: style_FUGAS_7,
                popuplayertitle: 'FUGAS',
                interactive: true,
                title: '<img src="styles/legend/FUGAS_7.png" /> FUGAS'
            });
var format_CARCAMOS2024_8 = new ol.format.GeoJSON();
var features_CARCAMOS2024_8 = format_CARCAMOS2024_8.readFeatures(json_CARCAMOS2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARCAMOS2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARCAMOS2024_8.addFeatures(features_CARCAMOS2024_8);
var lyr_CARCAMOS2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARCAMOS2024_8, 
                style: style_CARCAMOS2024_8,
                popuplayertitle: 'CARCAMOS 2024',
                interactive: true,
                title: '<img src="styles/legend/CARCAMOS2024_8.png" /> CARCAMOS 2024'
            });
var format_CISTERNAS2024_9 = new ol.format.GeoJSON();
var features_CISTERNAS2024_9 = format_CISTERNAS2024_9.readFeatures(json_CISTERNAS2024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CISTERNAS2024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CISTERNAS2024_9.addFeatures(features_CISTERNAS2024_9);
var lyr_CISTERNAS2024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CISTERNAS2024_9, 
                style: style_CISTERNAS2024_9,
                popuplayertitle: 'CISTERNAS 2024',
                interactive: true,
                title: '<img src="styles/legend/CISTERNAS2024_9.png" /> CISTERNAS 2024'
            });
var format_CISTERNAS_TANQUES2024_10 = new ol.format.GeoJSON();
var features_CISTERNAS_TANQUES2024_10 = format_CISTERNAS_TANQUES2024_10.readFeatures(json_CISTERNAS_TANQUES2024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CISTERNAS_TANQUES2024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CISTERNAS_TANQUES2024_10.addFeatures(features_CISTERNAS_TANQUES2024_10);
var lyr_CISTERNAS_TANQUES2024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CISTERNAS_TANQUES2024_10, 
                style: style_CISTERNAS_TANQUES2024_10,
                popuplayertitle: 'CISTERNAS_TANQUES 2024',
                interactive: true,
                title: '<img src="styles/legend/CISTERNAS_TANQUES2024_10.png" /> CISTERNAS_TANQUES 2024'
            });
var format_POZOS_CISTERNAS2024_11 = new ol.format.GeoJSON();
var features_POZOS_CISTERNAS2024_11 = format_POZOS_CISTERNAS2024_11.readFeatures(json_POZOS_CISTERNAS2024_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZOS_CISTERNAS2024_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZOS_CISTERNAS2024_11.addFeatures(features_POZOS_CISTERNAS2024_11);
var lyr_POZOS_CISTERNAS2024_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZOS_CISTERNAS2024_11, 
                style: style_POZOS_CISTERNAS2024_11,
                popuplayertitle: 'POZOS_CISTERNAS. 2024',
                interactive: true,
                title: '<img src="styles/legend/POZOS_CISTERNAS2024_11.png" /> POZOS_CISTERNAS. 2024'
            });
var format_POZOS_CISTERNAS_TANQUES2024_12 = new ol.format.GeoJSON();
var features_POZOS_CISTERNAS_TANQUES2024_12 = format_POZOS_CISTERNAS_TANQUES2024_12.readFeatures(json_POZOS_CISTERNAS_TANQUES2024_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZOS_CISTERNAS_TANQUES2024_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZOS_CISTERNAS_TANQUES2024_12.addFeatures(features_POZOS_CISTERNAS_TANQUES2024_12);
var lyr_POZOS_CISTERNAS_TANQUES2024_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZOS_CISTERNAS_TANQUES2024_12, 
                style: style_POZOS_CISTERNAS_TANQUES2024_12,
                popuplayertitle: 'POZOS_CISTERNAS_TANQUES 2024',
                interactive: true,
                title: '<img src="styles/legend/POZOS_CISTERNAS_TANQUES2024_12.png" /> POZOS_CISTERNAS_TANQUES 2024'
            });
var format_POZOS_13 = new ol.format.GeoJSON();
var features_POZOS_13 = format_POZOS_13.readFeatures(json_POZOS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZOS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZOS_13.addFeatures(features_POZOS_13);
var lyr_POZOS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZOS_13, 
                style: style_POZOS_13,
                popuplayertitle: 'POZOS',
                interactive: true,
                title: '<img src="styles/legend/POZOS_13.png" /> POZOS'
            });
var format_TANQUES_14 = new ol.format.GeoJSON();
var features_TANQUES_14 = format_TANQUES_14.readFeatures(json_TANQUES_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANQUES_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANQUES_14.addFeatures(features_TANQUES_14);
var lyr_TANQUES_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANQUES_14, 
                style: style_TANQUES_14,
                popuplayertitle: 'TANQUES',
                interactive: true,
                title: '<img src="styles/legend/TANQUES_14.png" /> TANQUES'
            });
var group_PROPUESTA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'PROPUESTA'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_Red_hidraulica_2.setVisible(true);lyr_Ecatepec_3.setVisible(true);lyr_INDEPENDIENTES_4.setVisible(true);lyr_SECTORES_5.setVisible(true);lyr_COLAPSOS_6.setVisible(true);lyr_FUGAS_7.setVisible(true);lyr_CARCAMOS2024_8.setVisible(true);lyr_CISTERNAS2024_9.setVisible(true);lyr_CISTERNAS_TANQUES2024_10.setVisible(true);lyr_POZOS_CISTERNAS2024_11.setVisible(true);lyr_POZOS_CISTERNAS_TANQUES2024_12.setVisible(true);lyr_POZOS_13.setVisible(true);lyr_TANQUES_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positron_1,lyr_Red_hidraulica_2,lyr_Ecatepec_3,lyr_INDEPENDIENTES_4,lyr_SECTORES_5,lyr_COLAPSOS_6,lyr_FUGAS_7,lyr_CARCAMOS2024_8,lyr_CISTERNAS2024_9,lyr_CISTERNAS_TANQUES2024_10,lyr_POZOS_CISTERNAS2024_11,lyr_POZOS_CISTERNAS_TANQUES2024_12,lyr_POZOS_13,lyr_TANQUES_14];
lyr_Red_hidraulica_2.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name_1': 'name_1', 'diametro_1': 'diametro_1', 'red': 'red', });
lyr_Ecatepec_3.set('fieldAliases', {'nom_mun': 'nom_mun', 'PobTotal': 'PobTotal', });
lyr_INDEPENDIENTES_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_SECTORES_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_COLAPSOS_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_FUGAS_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_CARCAMOS2024_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', });
lyr_CISTERNAS2024_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UBICACI__N': 'UBICACI__N', });
lyr_CISTERNAS_TANQUES2024_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', });
lyr_POZOS_CISTERNAS2024_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', });
lyr_POZOS_CISTERNAS_TANQUES2024_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', });
lyr_POZOS_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'NOMBRE': 'NOMBRE', 'GEOGRAFICA': 'GEOGRAFICA', 'UBICACI__N': 'UBICACI__N', 'UTM': 'UTM', 'layer': 'layer', 'path': 'path', });
lyr_TANQUES_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UBICACI__N': 'UBICACI__N', 'layer': 'layer', 'path': 'path', });
lyr_Red_hidraulica_2.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'name_1': 'TextEdit', 'diametro_1': 'TextEdit', 'red': 'TextEdit', });
lyr_Ecatepec_3.set('fieldImages', {'nom_mun': 'TextEdit', 'PobTotal': 'TextEdit', });
lyr_INDEPENDIENTES_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_SECTORES_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_COLAPSOS_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_FUGAS_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_CARCAMOS2024_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_CISTERNAS2024_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_CISTERNAS_TANQUES2024_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_POZOS_CISTERNAS2024_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_POZOS_CISTERNAS_TANQUES2024_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_POZOS_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'NOMBRE': '', 'GEOGRAFICA': 'TextEdit', 'UBICACI__N': 'TextEdit', 'UTM': '', 'layer': '', 'path': '', });
lyr_TANQUES_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UBICACI__N': 'TextEdit', 'layer': '', 'path': '', });
lyr_Red_hidraulica_2.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'name_1': 'hidden field', 'diametro_1': 'hidden field', 'red': 'hidden field', });
lyr_Ecatepec_3.set('fieldLabels', {'nom_mun': 'hidden field', 'PobTotal': 'no label', });
lyr_INDEPENDIENTES_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', });
lyr_SECTORES_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', });
lyr_COLAPSOS_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', });
lyr_FUGAS_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', });
lyr_CARCAMOS2024_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_CISTERNAS2024_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_CISTERNAS_TANQUES2024_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_POZOS_CISTERNAS2024_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_POZOS_CISTERNAS_TANQUES2024_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_POZOS_13.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'NOMBRE': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UBICACI__N': 'hidden field', 'UTM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_TANQUES_14.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UBICACI__N': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_TANQUES_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});