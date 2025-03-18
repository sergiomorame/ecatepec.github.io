var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
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
var format_INDEPENDIENTES_2 = new ol.format.GeoJSON();
var features_INDEPENDIENTES_2 = format_INDEPENDIENTES_2.readFeatures(json_INDEPENDIENTES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDIENTES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEPENDIENTES_2.addFeatures(features_INDEPENDIENTES_2);
var lyr_INDEPENDIENTES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDEPENDIENTES_2, 
                style: style_INDEPENDIENTES_2,
                popuplayertitle: 'INDEPENDIENTES',
                interactive: true,
                title: '<img src="styles/legend/INDEPENDIENTES_2.png" /> INDEPENDIENTES'
            });
var format_SECTORES_3 = new ol.format.GeoJSON();
var features_SECTORES_3 = format_SECTORES_3.readFeatures(json_SECTORES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTORES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECTORES_3.addFeatures(features_SECTORES_3);
var lyr_SECTORES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECTORES_3, 
                style: style_SECTORES_3,
                popuplayertitle: 'SECTORES',
                interactive: true,
    title: 'SECTORES<br />\
    <img src="styles/legend/SECTORES_3_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/SECTORES_3_1.png" /> SECTOR 2<br />\
    <img src="styles/legend/SECTORES_3_2.png" /> SECTOR 3<br />\
    <img src="styles/legend/SECTORES_3_3.png" /> SECTOR 5<br />\
    <img src="styles/legend/SECTORES_3_4.png" /> ZONA 4<br />' });
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/CISTERNAS2024_7.png" /> CISTERNAS 2024'
            });
var format_CISTERNAS_TANQUES2024_8 = new ol.format.GeoJSON();
var features_CISTERNAS_TANQUES2024_8 = format_CISTERNAS_TANQUES2024_8.readFeatures(json_CISTERNAS_TANQUES2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CISTERNAS_TANQUES2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CISTERNAS_TANQUES2024_8.addFeatures(features_CISTERNAS_TANQUES2024_8);
var lyr_CISTERNAS_TANQUES2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CISTERNAS_TANQUES2024_8, 
                style: style_CISTERNAS_TANQUES2024_8,
                popuplayertitle: 'CISTERNAS_TANQUES 2024',
                interactive: true,
                title: '<img src="styles/legend/CISTERNAS_TANQUES2024_8.png" /> CISTERNAS_TANQUES 2024'
            });
var format_POZOS_CISTERNAS2024_9 = new ol.format.GeoJSON();
var features_POZOS_CISTERNAS2024_9 = format_POZOS_CISTERNAS2024_9.readFeatures(json_POZOS_CISTERNAS2024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZOS_CISTERNAS2024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZOS_CISTERNAS2024_9.addFeatures(features_POZOS_CISTERNAS2024_9);
var lyr_POZOS_CISTERNAS2024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZOS_CISTERNAS2024_9, 
                style: style_POZOS_CISTERNAS2024_9,
                popuplayertitle: 'POZOS_CISTERNAS. 2024',
                interactive: true,
                title: '<img src="styles/legend/POZOS_CISTERNAS2024_9.png" /> POZOS_CISTERNAS. 2024'
            });
var format_POZOS_CISTERNAS_TANQUES2024_10 = new ol.format.GeoJSON();
var features_POZOS_CISTERNAS_TANQUES2024_10 = format_POZOS_CISTERNAS_TANQUES2024_10.readFeatures(json_POZOS_CISTERNAS_TANQUES2024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZOS_CISTERNAS_TANQUES2024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZOS_CISTERNAS_TANQUES2024_10.addFeatures(features_POZOS_CISTERNAS_TANQUES2024_10);
var lyr_POZOS_CISTERNAS_TANQUES2024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZOS_CISTERNAS_TANQUES2024_10, 
                style: style_POZOS_CISTERNAS_TANQUES2024_10,
                popuplayertitle: 'POZOS_CISTERNAS_TANQUES 2024',
                interactive: true,
                title: '<img src="styles/legend/POZOS_CISTERNAS_TANQUES2024_10.png" /> POZOS_CISTERNAS_TANQUES 2024'
            });
var format_POZOS_11 = new ol.format.GeoJSON();
var features_POZOS_11 = format_POZOS_11.readFeatures(json_POZOS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZOS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZOS_11.addFeatures(features_POZOS_11);
var lyr_POZOS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZOS_11, 
                style: style_POZOS_11,
                popuplayertitle: 'POZOS',
                interactive: true,
                title: '<img src="styles/legend/POZOS_11.png" /> POZOS'
            });
var format_TANQUES_12 = new ol.format.GeoJSON();
var features_TANQUES_12 = format_TANQUES_12.readFeatures(json_TANQUES_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANQUES_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANQUES_12.addFeatures(features_TANQUES_12);
var lyr_TANQUES_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANQUES_12, 
                style: style_TANQUES_12,
                popuplayertitle: 'TANQUES',
                interactive: true,
                title: '<img src="styles/legend/TANQUES_12.png" /> TANQUES'
            });
var format_Incidencias_13 = new ol.format.GeoJSON();
var features_Incidencias_13 = format_Incidencias_13.readFeatures(json_Incidencias_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incidencias_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incidencias_13.addFeatures(features_Incidencias_13);
var lyr_Incidencias_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incidencias_13, 
                style: style_Incidencias_13,
                popuplayertitle: 'Incidencias',
                interactive: true,
    title: 'Incidencias<br />\
    <img src="styles/legend/Incidencias_13_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/Incidencias_13_1.png" /> Coladera sin tapa<br />\
    <img src="styles/legend/Incidencias_13_2.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/Incidencias_13_3.png" /> Falta de agua<br />\
    <img src="styles/legend/Incidencias_13_4.png" /> Fuga de agua<br />\
    <img src="styles/legend/Incidencias_13_5.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/Incidencias_13_6.png" /> Solicitud de pipa<br />\
    <img src="styles/legend/Incidencias_13_7.png" /> Inundacion / Encharcamiento<br />\
    <img src="styles/legend/Incidencias_13_8.png" /> Falta tapa en caja de valvula<br />' });
var group_PROPUESTA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'PROPUESTA'});

lyr_Positron_0.setVisible(true);lyr_Ecatepec_1.setVisible(true);lyr_INDEPENDIENTES_2.setVisible(true);lyr_SECTORES_3.setVisible(true);lyr_COLAPSOS_4.setVisible(true);lyr_FUGAS_5.setVisible(true);lyr_CARCAMOS2024_6.setVisible(true);lyr_CISTERNAS2024_7.setVisible(true);lyr_CISTERNAS_TANQUES2024_8.setVisible(true);lyr_POZOS_CISTERNAS2024_9.setVisible(true);lyr_POZOS_CISTERNAS_TANQUES2024_10.setVisible(true);lyr_POZOS_11.setVisible(true);lyr_TANQUES_12.setVisible(true);lyr_Incidencias_13.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Ecatepec_1,lyr_INDEPENDIENTES_2,lyr_SECTORES_3,lyr_COLAPSOS_4,lyr_FUGAS_5,lyr_CARCAMOS2024_6,lyr_CISTERNAS2024_7,lyr_CISTERNAS_TANQUES2024_8,lyr_POZOS_CISTERNAS2024_9,lyr_POZOS_CISTERNAS_TANQUES2024_10,lyr_POZOS_11,lyr_TANQUES_12,lyr_Incidencias_13];
lyr_Ecatepec_1.set('fieldAliases', {'nom_mun': 'nom_mun', 'PobTotal': 'PobTotal', });
lyr_INDEPENDIENTES_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_SECTORES_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_COLAPSOS_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_FUGAS_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_CARCAMOS2024_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', });
lyr_CISTERNAS2024_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UBICACI__N': 'UBICACI__N', });
lyr_CISTERNAS_TANQUES2024_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', });
lyr_POZOS_CISTERNAS2024_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', });
lyr_POZOS_CISTERNAS_TANQUES2024_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UTM': 'UTM', 'UBICACI__N': 'UBICACI__N', });
lyr_POZOS_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'NOMBRE': 'NOMBRE', 'GEOGRAFICA': 'GEOGRAFICA', 'UBICACI__N': 'UBICACI__N', 'UTM': 'UTM', 'layer': 'layer', 'path': 'path', });
lyr_TANQUES_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'TIPO': 'TIPO', 'NO_': 'NO_', 'GEOGRAFICA': 'GEOGRAFICA', 'UBICACI__N': 'UBICACI__N', 'layer': 'layer', 'path': 'path', });
lyr_Incidencias_13.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Manzana/Lo': 'Manzana/Lo', 'Lugar de r': 'Lugar de r', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Ecatepec_1.set('fieldImages', {'nom_mun': 'TextEdit', 'PobTotal': 'TextEdit', });
lyr_INDEPENDIENTES_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_SECTORES_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_COLAPSOS_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_FUGAS_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_CARCAMOS2024_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_CISTERNAS2024_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_CISTERNAS_TANQUES2024_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_POZOS_CISTERNAS2024_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_POZOS_CISTERNAS_TANQUES2024_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UTM': 'TextEdit', 'UBICACI__N': 'TextEdit', });
lyr_POZOS_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'NOMBRE': '', 'GEOGRAFICA': 'TextEdit', 'UBICACI__N': 'TextEdit', 'UTM': '', 'layer': '', 'path': '', });
lyr_TANQUES_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'TIPO': 'TextEdit', 'NO_': 'TextEdit', 'GEOGRAFICA': 'TextEdit', 'UBICACI__N': 'TextEdit', 'layer': '', 'path': '', });
lyr_Incidencias_13.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Manzana/Lo': 'TextEdit', 'Lugar de r': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Ecatepec_1.set('fieldLabels', {'nom_mun': 'hidden field', 'PobTotal': 'no label', });
lyr_INDEPENDIENTES_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', });
lyr_SECTORES_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', });
lyr_COLAPSOS_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', });
lyr_FUGAS_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', });
lyr_CARCAMOS2024_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_CISTERNAS2024_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_CISTERNAS_TANQUES2024_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_POZOS_CISTERNAS2024_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_POZOS_CISTERNAS_TANQUES2024_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UTM': 'hidden field', 'UBICACI__N': 'hidden field', });
lyr_POZOS_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'NOMBRE': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UBICACI__N': 'hidden field', 'UTM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_TANQUES_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'TIPO': 'hidden field', 'NO_': 'hidden field', 'GEOGRAFICA': 'hidden field', 'UBICACI__N': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Incidencias_13.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Manzana/Lo': 'hidden field', 'Lugar de r': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', });
lyr_Incidencias_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});