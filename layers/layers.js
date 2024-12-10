var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gadm41_IDN1ADM_ADM_4_1 = new ol.format.GeoJSON();
var features_gadm41_IDN1ADM_ADM_4_1 = format_gadm41_IDN1ADM_ADM_4_1.readFeatures(json_gadm41_IDN1ADM_ADM_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN1ADM_ADM_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN1ADM_ADM_4_1.addFeatures(features_gadm41_IDN1ADM_ADM_4_1);
var lyr_gadm41_IDN1ADM_ADM_4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN1ADM_ADM_4_1, 
                style: style_gadm41_IDN1ADM_ADM_4_1,
                popuplayertitle: "gadm41_IDN (1) — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN1ADM_ADM_4_1.png" /> gadm41_IDN (1) — ADM_ADM_4'
            });
var format_desapur_2 = new ol.format.GeoJSON();
var features_desapur_2 = format_desapur_2.readFeatures(json_desapur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desapur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desapur_2.addFeatures(features_desapur_2);
var lyr_desapur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desapur_2, 
                style: style_desapur_2,
                popuplayertitle: "desapur",
                interactive: true,
                title: '<img src="styles/legend/desapur_2.png" /> desapur'
            });
var format_ladangpwd_3 = new ol.format.GeoJSON();
var features_ladangpwd_3 = format_ladangpwd_3.readFeatures(json_ladangpwd_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ladangpwd_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ladangpwd_3.addFeatures(features_ladangpwd_3);
var lyr_ladangpwd_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ladangpwd_3, 
                style: style_ladangpwd_3,
                popuplayertitle: "ladangpwd",
                interactive: true,
                title: '<img src="styles/legend/ladangpwd_3.png" /> ladangpwd'
            });
var format_kebunpwd_4 = new ol.format.GeoJSON();
var features_kebunpwd_4 = format_kebunpwd_4.readFeatures(json_kebunpwd_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kebunpwd_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebunpwd_4.addFeatures(features_kebunpwd_4);
var lyr_kebunpwd_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebunpwd_4, 
                style: style_kebunpwd_4,
                popuplayertitle: "kebunpwd",
                interactive: true,
                title: '<img src="styles/legend/kebunpwd_4.png" /> kebunpwd'
            });
var format_sawahpwd_5 = new ol.format.GeoJSON();
var features_sawahpwd_5 = format_sawahpwd_5.readFeatures(json_sawahpwd_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawahpwd_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawahpwd_5.addFeatures(features_sawahpwd_5);
var lyr_sawahpwd_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawahpwd_5, 
                style: style_sawahpwd_5,
                popuplayertitle: "sawahpwd",
                interactive: true,
                title: '<img src="styles/legend/sawahpwd_5.png" /> sawahpwd'
            });
var format_irigasipurwo_6 = new ol.format.GeoJSON();
var features_irigasipurwo_6 = format_irigasipurwo_6.readFeatures(json_irigasipurwo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_irigasipurwo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_irigasipurwo_6.addFeatures(features_irigasipurwo_6);
var lyr_irigasipurwo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_irigasipurwo_6, 
                style: style_irigasipurwo_6,
                popuplayertitle: "irigasipurwo",
                interactive: true,
                title: '<img src="styles/legend/irigasipurwo_6.png" /> irigasipurwo'
            });
var format_sungaipwd_7 = new ol.format.GeoJSON();
var features_sungaipwd_7 = format_sungaipwd_7.readFeatures(json_sungaipwd_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaipwd_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaipwd_7.addFeatures(features_sungaipwd_7);
var lyr_sungaipwd_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaipwd_7, 
                style: style_sungaipwd_7,
                popuplayertitle: "sungaipwd",
                interactive: true,
                title: '<img src="styles/legend/sungaipwd_7.png" /> sungaipwd'
            });
var format_jalanpurwodadi_8 = new ol.format.GeoJSON();
var features_jalanpurwodadi_8 = format_jalanpurwodadi_8.readFeatures(json_jalanpurwodadi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanpurwodadi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanpurwodadi_8.addFeatures(features_jalanpurwodadi_8);
var lyr_jalanpurwodadi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanpurwodadi_8,
maxResolution:28004.466152261964,
 
                style: style_jalanpurwodadi_8,
                popuplayertitle: "jalanpurwodadi",
                interactive: true,
    title: 'jalanpurwodadi<br />\
    <img src="styles/legend/jalanpurwodadi_8_0.png" /> 2<br />\
    <img src="styles/legend/jalanpurwodadi_8_1.png" /> 3<br />\
    <img src="styles/legend/jalanpurwodadi_8_2.png" /> 4<br />\
    <img src="styles/legend/jalanpurwodadi_8_3.png" /> 8<br />\
    <img src="styles/legend/jalanpurwodadi_8_4.png" /> <br />'
        });
var format_polygonpurwodadi_9 = new ol.format.GeoJSON();
var features_polygonpurwodadi_9 = format_polygonpurwodadi_9.readFeatures(json_polygonpurwodadi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonpurwodadi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonpurwodadi_9.addFeatures(features_polygonpurwodadi_9);
var lyr_polygonpurwodadi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonpurwodadi_9,
maxResolution:14.00223307613098,
 
                style: style_polygonpurwodadi_9,
                popuplayertitle: "polygonpurwodadi",
                interactive: true,
                title: '<img src="styles/legend/polygonpurwodadi_9.png" /> polygonpurwodadi'
            });
var format_pointpendpwd_10 = new ol.format.GeoJSON();
var features_pointpendpwd_10 = format_pointpendpwd_10.readFeatures(json_pointpendpwd_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointpendpwd_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointpendpwd_10.addFeatures(features_pointpendpwd_10);
var lyr_pointpendpwd_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointpendpwd_10,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointpendpwd_10,
                popuplayertitle: "pointpendpwd",
                interactive: true,
                title: '<img src="styles/legend/pointpendpwd_10.png" /> pointpendpwd'
            });
var format_pointkespwd_11 = new ol.format.GeoJSON();
var features_pointkespwd_11 = format_pointkespwd_11.readFeatures(json_pointkespwd_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointkespwd_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointkespwd_11.addFeatures(features_pointkespwd_11);
var lyr_pointkespwd_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointkespwd_11,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointkespwd_11,
                popuplayertitle: "pointkespwd",
                interactive: true,
                title: '<img src="styles/legend/pointkespwd_11.png" /> pointkespwd'
            });
var format_pointpompwd_12 = new ol.format.GeoJSON();
var features_pointpompwd_12 = format_pointpompwd_12.readFeatures(json_pointpompwd_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointpompwd_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointpompwd_12.addFeatures(features_pointpompwd_12);
var lyr_pointpompwd_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointpompwd_12,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointpompwd_12,
                popuplayertitle: "pointpompwd",
                interactive: true,
                title: '<img src="styles/legend/pointpompwd_12.png" /> pointpompwd'
            });
var format_musormaspwd_13 = new ol.format.GeoJSON();
var features_musormaspwd_13 = format_musormaspwd_13.readFeatures(json_musormaspwd_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_musormaspwd_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_musormaspwd_13.addFeatures(features_musormaspwd_13);
var lyr_musormaspwd_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_musormaspwd_13,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_musormaspwd_13,
                popuplayertitle: "musormaspwd",
                interactive: true,
                title: '<img src="styles/legend/musormaspwd_13.png" /> musormaspwd'
            });
var format_pointinstansipwd_14 = new ol.format.GeoJSON();
var features_pointinstansipwd_14 = format_pointinstansipwd_14.readFeatures(json_pointinstansipwd_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointinstansipwd_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointinstansipwd_14.addFeatures(features_pointinstansipwd_14);
var lyr_pointinstansipwd_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointinstansipwd_14,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_pointinstansipwd_14,
                popuplayertitle: "pointinstansipwd",
                interactive: true,
                title: '<img src="styles/legend/pointinstansipwd_14.png" /> pointinstansipwd'
            });
var format_pointusahapwd_15 = new ol.format.GeoJSON();
var features_pointusahapwd_15 = format_pointusahapwd_15.readFeatures(json_pointusahapwd_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointusahapwd_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointusahapwd_15.addFeatures(features_pointusahapwd_15);
var lyr_pointusahapwd_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointusahapwd_15,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointusahapwd_15,
                popuplayertitle: "pointusahapwd",
                interactive: true,
                title: '<img src="styles/legend/pointusahapwd_15.png" /> pointusahapwd'
            });
var format_pointRMpwd_16 = new ol.format.GeoJSON();
var features_pointRMpwd_16 = format_pointRMpwd_16.readFeatures(json_pointRMpwd_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointRMpwd_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointRMpwd_16.addFeatures(features_pointRMpwd_16);
var lyr_pointRMpwd_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointRMpwd_16,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointRMpwd_16,
                popuplayertitle: "pointRMpwd",
                interactive: true,
                title: '<img src="styles/legend/pointRMpwd_16.png" /> pointRMpwd'
            });
var format_pointmartpwd_17 = new ol.format.GeoJSON();
var features_pointmartpwd_17 = format_pointmartpwd_17.readFeatures(json_pointmartpwd_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointmartpwd_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointmartpwd_17.addFeatures(features_pointmartpwd_17);
var lyr_pointmartpwd_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointmartpwd_17,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointmartpwd_17,
                popuplayertitle: "pointmartpwd",
                interactive: true,
                title: '<img src="styles/legend/pointmartpwd_17.png" /> pointmartpwd'
            });
var format_gadm41_IDN1ADM_ADM_4_18 = new ol.format.GeoJSON();
var features_gadm41_IDN1ADM_ADM_4_18 = format_gadm41_IDN1ADM_ADM_4_18.readFeatures(json_gadm41_IDN1ADM_ADM_4_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN1ADM_ADM_4_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN1ADM_ADM_4_18.addFeatures(features_gadm41_IDN1ADM_ADM_4_18);
var lyr_gadm41_IDN1ADM_ADM_4_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN1ADM_ADM_4_18, 
                style: style_gadm41_IDN1ADM_ADM_4_18,
                popuplayertitle: "gadm41_IDN (1) — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN1ADM_ADM_4_18.png" /> gadm41_IDN (1) — ADM_ADM_4'
            });
var format_desapat_19 = new ol.format.GeoJSON();
var features_desapat_19 = format_desapat_19.readFeatures(json_desapat_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desapat_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desapat_19.addFeatures(features_desapat_19);
var lyr_desapat_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desapat_19, 
                style: style_desapat_19,
                popuplayertitle: "desapat",
                interactive: true,
    title: 'desapat<br />\
    <img src="styles/legend/desapat_19_0.png" /> RW 01<br />\
    <img src="styles/legend/desapat_19_1.png" /> RW 02<br />\
    <img src="styles/legend/desapat_19_2.png" /> RW 03<br />\
    <img src="styles/legend/desapat_19_3.png" /> RW 04<br />\
    <img src="styles/legend/desapat_19_4.png" /> RW 05<br />\
    <img src="styles/legend/desapat_19_5.png" /> RW 06<br />\
    <img src="styles/legend/desapat_19_6.png" /> RW 07<br />\
    <img src="styles/legend/desapat_19_7.png" /> RW 08<br />\
    <img src="styles/legend/desapat_19_8.png" /> RW 09<br />\
    <img src="styles/legend/desapat_19_9.png" /> RW 10<br />\
    <img src="styles/legend/desapat_19_10.png" /> RW 11<br />\
    <img src="styles/legend/desapat_19_11.png" /> RW 12<br />\
    <img src="styles/legend/desapat_19_12.png" /> RW 13<br />\
    <img src="styles/legend/desapat_19_13.png" /> RW 14<br />\
    <img src="styles/legend/desapat_19_14.png" /> <br />'
        });
var format_kebunptm_20 = new ol.format.GeoJSON();
var features_kebunptm_20 = format_kebunptm_20.readFeatures(json_kebunptm_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kebunptm_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebunptm_20.addFeatures(features_kebunptm_20);
var lyr_kebunptm_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebunptm_20, 
                style: style_kebunptm_20,
                popuplayertitle: "kebunptm",
                interactive: true,
                title: '<img src="styles/legend/kebunptm_20.png" /> kebunptm'
            });
var format_ladangptm_21 = new ol.format.GeoJSON();
var features_ladangptm_21 = format_ladangptm_21.readFeatures(json_ladangptm_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ladangptm_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ladangptm_21.addFeatures(features_ladangptm_21);
var lyr_ladangptm_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ladangptm_21, 
                style: style_ladangptm_21,
                popuplayertitle: "ladangptm",
                interactive: true,
                title: '<img src="styles/legend/ladangptm_21.png" /> ladangptm'
            });
var format_sawahptm_22 = new ol.format.GeoJSON();
var features_sawahptm_22 = format_sawahptm_22.readFeatures(json_sawahptm_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawahptm_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawahptm_22.addFeatures(features_sawahptm_22);
var lyr_sawahptm_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawahptm_22, 
                style: style_sawahptm_22,
                popuplayertitle: "sawahptm",
                interactive: true,
                title: '<img src="styles/legend/sawahptm_22.png" /> sawahptm'
            });
var format_sungaiptm_23 = new ol.format.GeoJSON();
var features_sungaiptm_23 = format_sungaiptm_23.readFeatures(json_sungaiptm_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaiptm_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaiptm_23.addFeatures(features_sungaiptm_23);
var lyr_sungaiptm_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaiptm_23, 
                style: style_sungaiptm_23,
                popuplayertitle: "sungaiptm",
                interactive: true,
                title: '<img src="styles/legend/sungaiptm_23.png" /> sungaiptm'
            });
var format_irigasipat_24 = new ol.format.GeoJSON();
var features_irigasipat_24 = format_irigasipat_24.readFeatures(json_irigasipat_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_irigasipat_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_irigasipat_24.addFeatures(features_irigasipat_24);
var lyr_irigasipat_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_irigasipat_24, 
                style: style_irigasipat_24,
                popuplayertitle: "irigasipat",
                interactive: true,
                title: '<img src="styles/legend/irigasipat_24.png" /> irigasipat'
            });
var format_jalanpatimuan_25 = new ol.format.GeoJSON();
var features_jalanpatimuan_25 = format_jalanpatimuan_25.readFeatures(json_jalanpatimuan_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanpatimuan_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanpatimuan_25.addFeatures(features_jalanpatimuan_25);
var lyr_jalanpatimuan_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanpatimuan_25,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_jalanpatimuan_25,
                popuplayertitle: "jalanpatimuan",
                interactive: true,
    title: 'jalanpatimuan<br />\
    <img src="styles/legend/jalanpatimuan_25_0.png" /> 2<br />\
    <img src="styles/legend/jalanpatimuan_25_1.png" /> 3<br />\
    <img src="styles/legend/jalanpatimuan_25_2.png" /> 4<br />\
    <img src="styles/legend/jalanpatimuan_25_3.png" /> 8<br />\
    <img src="styles/legend/jalanpatimuan_25_4.png" /> <br />'
        });
var format_polygonpatimuan_26 = new ol.format.GeoJSON();
var features_polygonpatimuan_26 = format_polygonpatimuan_26.readFeatures(json_polygonpatimuan_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonpatimuan_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonpatimuan_26.addFeatures(features_polygonpatimuan_26);
var lyr_polygonpatimuan_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonpatimuan_26, 
                style: style_polygonpatimuan_26,
                popuplayertitle: "polygonpatimuan",
                interactive: true,
                title: '<img src="styles/legend/polygonpatimuan_26.png" /> polygonpatimuan'
            });
var format_pointbaldesptm_27 = new ol.format.GeoJSON();
var features_pointbaldesptm_27 = format_pointbaldesptm_27.readFeatures(json_pointbaldesptm_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointbaldesptm_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointbaldesptm_27.addFeatures(features_pointbaldesptm_27);
var lyr_pointbaldesptm_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointbaldesptm_27,
maxResolution:28.00446615226196,
 minResolution:0.14002233076130982,

                style: style_pointbaldesptm_27,
                popuplayertitle: "pointbaldesptm",
                interactive: true,
                title: '<img src="styles/legend/pointbaldesptm_27.png" /> pointbaldesptm'
            });
var format_point_28 = new ol.format.GeoJSON();
var features_point_28 = format_point_28.readFeatures(json_point_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_28.addFeatures(features_point_28);
var lyr_point_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_28,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_point_28,
                popuplayertitle: "point",
                interactive: true,
    title: 'point<br />\
    <img src="styles/legend/point_28_0.png" /> bengkel<br />\
    <img src="styles/legend/point_28_1.png" /> cafe<br />\
    <img src="styles/legend/point_28_2.png" /> gereja<br />\
    <img src="styles/legend/point_28_3.png" /> instansi<br />\
    <img src="styles/legend/point_28_4.png" /> kepemilikan<br />\
    <img src="styles/legend/point_28_5.png" /> kesehatan<br />\
    <img src="styles/legend/point_28_6.png" /> mart<br />\
    <img src="styles/legend/point_28_7.png" /> mushola/masjid<br />\
    <img src="styles/legend/point_28_8.png" /> pendidikan<br />\
    <img src="styles/legend/point_28_9.png" /> pom<br />\
    <img src="styles/legend/point_28_10.png" /> RM<br />\
    <img src="styles/legend/point_28_11.png" /> Tb<br />\
    <img src="styles/legend/point_28_12.png" /> wirausaha<br />\
    <img src="styles/legend/point_28_13.png" /> <br />'
        });
var group_PATIMUAN = new ol.layer.Group({
                                layers: [lyr_gadm41_IDN1ADM_ADM_4_18,lyr_desapat_19,lyr_kebunptm_20,lyr_ladangptm_21,lyr_sawahptm_22,lyr_sungaiptm_23,lyr_irigasipat_24,lyr_jalanpatimuan_25,lyr_polygonpatimuan_26,lyr_pointbaldesptm_27,lyr_point_28,],
                                fold: "open",
                                title: "PATIMUAN"});
var group_Point = new ol.layer.Group({
                                layers: [lyr_pointpendpwd_10,lyr_pointkespwd_11,lyr_pointpompwd_12,lyr_musormaspwd_13,lyr_pointinstansipwd_14,lyr_pointusahapwd_15,lyr_pointRMpwd_16,lyr_pointmartpwd_17,],
                                fold: "open",
                                title: "Point"});
var group_PURWODADI = new ol.layer.Group({
                                layers: [lyr_gadm41_IDN1ADM_ADM_4_1,lyr_desapur_2,lyr_ladangpwd_3,lyr_kebunpwd_4,lyr_sawahpwd_5,lyr_irigasipurwo_6,lyr_sungaipwd_7,lyr_jalanpurwodadi_8,lyr_polygonpurwodadi_9,],
                                fold: "open",
                                title: "PURWODADI"});

lyr_OpenStreetMap_0.setVisible(true);lyr_gadm41_IDN1ADM_ADM_4_1.setVisible(true);lyr_desapur_2.setVisible(true);lyr_ladangpwd_3.setVisible(true);lyr_kebunpwd_4.setVisible(true);lyr_sawahpwd_5.setVisible(true);lyr_irigasipurwo_6.setVisible(true);lyr_sungaipwd_7.setVisible(true);lyr_jalanpurwodadi_8.setVisible(true);lyr_polygonpurwodadi_9.setVisible(true);lyr_pointpendpwd_10.setVisible(true);lyr_pointkespwd_11.setVisible(true);lyr_pointpompwd_12.setVisible(true);lyr_musormaspwd_13.setVisible(true);lyr_pointinstansipwd_14.setVisible(true);lyr_pointusahapwd_15.setVisible(true);lyr_pointRMpwd_16.setVisible(true);lyr_pointmartpwd_17.setVisible(true);lyr_gadm41_IDN1ADM_ADM_4_18.setVisible(true);lyr_desapat_19.setVisible(true);lyr_kebunptm_20.setVisible(true);lyr_ladangptm_21.setVisible(true);lyr_sawahptm_22.setVisible(true);lyr_sungaiptm_23.setVisible(true);lyr_irigasipat_24.setVisible(true);lyr_jalanpatimuan_25.setVisible(true);lyr_polygonpatimuan_26.setVisible(true);lyr_pointbaldesptm_27.setVisible(true);lyr_point_28.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_PURWODADI,group_Point,group_PATIMUAN];
lyr_gadm41_IDN1ADM_ADM_4_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'desa_search': 'desa_search', });
lyr_desapur_2.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', });
lyr_ladangpwd_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_kebunpwd_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sawahpwd_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_irigasipurwo_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sungaipwd_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalanpurwodadi_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'width': 'width', 'diameter': 'diameter', 'blockage': 'blockage', 'bridge': 'bridge', 'landuse': 'landuse', 'water': 'water', 'smoothness': 'smoothness', 'highway': 'highway', 'parking': 'parking', 'name': 'name', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'oneway': 'oneway', 'building': 'building', 'man_made': 'man_made', 'tunnel': 'tunnel', 'operator': 'operator', 'waterway': 'waterway', 'aeroway': 'aeroway', 'railway': 'railway', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'capacity': 'capacity', 'lbr': 'lbr', 'Nama': 'Nama', });
lyr_polygonpurwodadi_9.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'health_fac': 'health_fac', 'width': 'width', 'staff_coun': 'staff_coun', 'diameter': 'diameter', 'access_roo': 'access_roo', 'government': 'government', 'blockage': 'blockage', 'bridge': 'bridge', 'healthcare': 'healthcare', 'health_f_1': 'health_f_1', 'operator_t': 'operator_t', 'landuse': 'landuse', 'emergency': 'emergency', 'water': 'water', 'smoothness': 'smoothness', 'office': 'office', 'isced_leve': 'isced_leve', 'highway': 'highway', 'name': 'name', 'parking': 'parking', 'toilets_di': 'toilets_di', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'health_f_2': 'health_f_2', 'staff_co_1': 'staff_co_1', 'addr_stree': 'addr_stree', 'oneway': 'oneway', 'building': 'building', 'opening_ho': 'opening_ho', 'addr_house': 'addr_house', 'man_made': 'man_made', 'building_m': 'building_m', 'operator': 'operator', 'access': 'access', 'shop': 'shop', 'tunnel': 'tunnel', 'waterway': 'waterway', 'aeroway': 'aeroway', 'military': 'military', 'toilets_ha': 'toilets_ha', 'railway': 'railway', 'roof_mater': 'roof_mater', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'medical_sy': 'medical_sy', 'capacity': 'capacity', 'status': 'status', });
lyr_pointpendpwd_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointkespwd_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointpompwd_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_musormaspwd_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointinstansipwd_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointusahapwd_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointRMpwd_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointmartpwd_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_gadm41_IDN1ADM_ADM_4_18.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'desa_search': 'desa_search', });
lyr_desapat_19.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', });
lyr_kebunptm_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ladangptm_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sawahptm_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sungaiptm_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_irigasipat_24.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalanpatimuan_25.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'width': 'width', 'diameter': 'diameter', 'blockage': 'blockage', 'bridge': 'bridge', 'landuse': 'landuse', 'water': 'water', 'smoothness': 'smoothness', 'highway': 'highway', 'parking': 'parking', 'name': 'name', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'oneway': 'oneway', 'building': 'building', 'man_made': 'man_made', 'tunnel': 'tunnel', 'operator': 'operator', 'waterway': 'waterway', 'aeroway': 'aeroway', 'railway': 'railway', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'capacity': 'capacity', 'lbr': 'lbr', 'Nama': 'Nama', });
lyr_polygonpatimuan_26.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'health_fac': 'health_fac', 'width': 'width', 'staff_coun': 'staff_coun', 'diameter': 'diameter', 'access_roo': 'access_roo', 'government': 'government', 'blockage': 'blockage', 'bridge': 'bridge', 'healthcare': 'healthcare', 'health_f_1': 'health_f_1', 'operator_t': 'operator_t', 'landuse': 'landuse', 'emergency': 'emergency', 'water': 'water', 'smoothness': 'smoothness', 'office': 'office', 'isced_leve': 'isced_leve', 'highway': 'highway', 'name': 'name', 'parking': 'parking', 'toilets_di': 'toilets_di', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'health_f_2': 'health_f_2', 'staff_co_1': 'staff_co_1', 'addr_stree': 'addr_stree', 'oneway': 'oneway', 'building': 'building', 'opening_ho': 'opening_ho', 'addr_house': 'addr_house', 'man_made': 'man_made', 'building_m': 'building_m', 'operator': 'operator', 'access': 'access', 'shop': 'shop', 'tunnel': 'tunnel', 'waterway': 'waterway', 'aeroway': 'aeroway', 'military': 'military', 'toilets_ha': 'toilets_ha', 'railway': 'railway', 'roof_mater': 'roof_mater', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'medical_sy': 'medical_sy', 'capacity': 'capacity', 'status': 'status', });
lyr_pointbaldesptm_27.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_point_28.set('fieldAliases', {'id': 'id', 'Kelompok': 'Kelompok', 'Nama': 'Nama', });
lyr_gadm41_IDN1ADM_ADM_4_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'desa_search': 'TextEdit', });
lyr_desapur_2.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_ladangpwd_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JNSLDG': 'TextEdit', 'TNMLDG': 'TextEdit', 'TIPLDG': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_kebunpwd_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sawahpwd_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_irigasipurwo_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_sungaipwd_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalanpurwodadi_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'width': 'TextEdit', 'diameter': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'landuse': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'highway': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'man_made': 'TextEdit', 'tunnel': 'TextEdit', 'operator': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'capacity': 'TextEdit', 'lbr': 'TextEdit', 'Nama': 'TextEdit', });
lyr_polygonpurwodadi_9.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'health_fac': 'TextEdit', 'width': 'TextEdit', 'staff_coun': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'government': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'healthcare': 'TextEdit', 'health_f_1': 'TextEdit', 'operator_t': 'TextEdit', 'landuse': 'TextEdit', 'emergency': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'office': 'TextEdit', 'isced_leve': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'parking': 'TextEdit', 'toilets_di': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'health_f_2': 'TextEdit', 'staff_co_1': 'TextEdit', 'addr_stree': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_house': 'TextEdit', 'man_made': 'TextEdit', 'building_m': 'TextEdit', 'operator': 'TextEdit', 'access': 'TextEdit', 'shop': 'TextEdit', 'tunnel': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'military': 'TextEdit', 'toilets_ha': 'TextEdit', 'railway': 'TextEdit', 'roof_mater': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'medical_sy': 'TextEdit', 'capacity': 'TextEdit', 'status': 'TextEdit', });
lyr_pointpendpwd_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointkespwd_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointpompwd_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_musormaspwd_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointinstansipwd_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointusahapwd_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointRMpwd_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointmartpwd_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_gadm41_IDN1ADM_ADM_4_18.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'desa_search': 'TextEdit', });
lyr_desapat_19.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_kebunptm_20.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ladangptm_21.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JNSLDG': 'TextEdit', 'TNMLDG': 'TextEdit', 'TIPLDG': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sawahptm_22.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sungaiptm_23.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_irigasipat_24.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalanpatimuan_25.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'width': 'TextEdit', 'diameter': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'landuse': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'highway': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'man_made': 'TextEdit', 'tunnel': 'TextEdit', 'operator': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'capacity': 'TextEdit', 'lbr': 'TextEdit', 'Nama': 'TextEdit', });
lyr_polygonpatimuan_26.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'health_fac': 'TextEdit', 'width': 'TextEdit', 'staff_coun': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'government': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'healthcare': 'TextEdit', 'health_f_1': 'TextEdit', 'operator_t': 'TextEdit', 'landuse': 'TextEdit', 'emergency': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'office': 'TextEdit', 'isced_leve': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'parking': 'TextEdit', 'toilets_di': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'health_f_2': 'TextEdit', 'staff_co_1': 'TextEdit', 'addr_stree': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_house': 'TextEdit', 'man_made': 'TextEdit', 'building_m': 'TextEdit', 'operator': 'TextEdit', 'access': 'TextEdit', 'shop': 'TextEdit', 'tunnel': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'military': 'TextEdit', 'toilets_ha': 'TextEdit', 'railway': 'TextEdit', 'roof_mater': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'medical_sy': 'TextEdit', 'capacity': 'TextEdit', 'status': 'TextEdit', });
lyr_pointbaldesptm_27.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_point_28.set('fieldImages', {'id': 'TextEdit', 'Kelompok': 'TextEdit', 'Nama': 'TextEdit', });
lyr_gadm41_IDN1ADM_ADM_4_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'desa_search': 'no label', });
lyr_desapur_2.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_ladangpwd_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_kebunpwd_4.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sawahpwd_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_irigasipurwo_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_sungaipwd_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalanpurwodadi_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'width': 'no label', 'diameter': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'landuse': 'no label', 'water': 'no label', 'smoothness': 'no label', 'highway': 'no label', 'parking': 'no label', 'name': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'oneway': 'no label', 'building': 'no label', 'man_made': 'no label', 'tunnel': 'no label', 'operator': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'railway': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'capacity': 'no label', 'lbr': 'no label', 'Nama': 'no label', });
lyr_polygonpurwodadi_9.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'health_fac': 'no label', 'width': 'no label', 'staff_coun': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'government': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'healthcare': 'no label', 'health_f_1': 'no label', 'operator_t': 'no label', 'landuse': 'no label', 'emergency': 'no label', 'water': 'no label', 'smoothness': 'no label', 'office': 'no label', 'isced_leve': 'no label', 'highway': 'no label', 'name': 'no label', 'parking': 'no label', 'toilets_di': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'health_f_2': 'no label', 'staff_co_1': 'no label', 'addr_stree': 'no label', 'oneway': 'no label', 'building': 'no label', 'opening_ho': 'no label', 'addr_house': 'no label', 'man_made': 'no label', 'building_m': 'no label', 'operator': 'no label', 'access': 'no label', 'shop': 'no label', 'tunnel': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'military': 'no label', 'toilets_ha': 'no label', 'railway': 'no label', 'roof_mater': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'medical_sy': 'no label', 'capacity': 'no label', 'status': 'no label', });
lyr_pointpendpwd_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointkespwd_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointpompwd_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_musormaspwd_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointinstansipwd_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointusahapwd_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointRMpwd_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointmartpwd_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_gadm41_IDN1ADM_ADM_4_18.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'desa_search': 'no label', });
lyr_desapat_19.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_kebunptm_20.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ladangptm_21.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sawahptm_22.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sungaiptm_23.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_irigasipat_24.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalanpatimuan_25.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'width': 'no label', 'diameter': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'landuse': 'no label', 'water': 'no label', 'smoothness': 'no label', 'highway': 'no label', 'parking': 'no label', 'name': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'oneway': 'no label', 'building': 'no label', 'man_made': 'no label', 'tunnel': 'no label', 'operator': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'railway': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'capacity': 'no label', 'lbr': 'no label', 'Nama': 'no label', });
lyr_polygonpatimuan_26.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'health_fac': 'no label', 'width': 'no label', 'staff_coun': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'government': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'healthcare': 'no label', 'health_f_1': 'no label', 'operator_t': 'no label', 'landuse': 'no label', 'emergency': 'no label', 'water': 'no label', 'smoothness': 'no label', 'office': 'no label', 'isced_leve': 'no label', 'highway': 'no label', 'name': 'no label', 'parking': 'no label', 'toilets_di': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'health_f_2': 'no label', 'staff_co_1': 'no label', 'addr_stree': 'no label', 'oneway': 'no label', 'building': 'no label', 'opening_ho': 'no label', 'addr_house': 'no label', 'man_made': 'no label', 'building_m': 'no label', 'operator': 'no label', 'access': 'no label', 'shop': 'no label', 'tunnel': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'military': 'no label', 'toilets_ha': 'no label', 'railway': 'no label', 'roof_mater': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'medical_sy': 'no label', 'capacity': 'no label', 'status': 'no label', });
lyr_pointbaldesptm_27.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_point_28.set('fieldLabels', {'id': 'no label', 'Kelompok': 'no label', 'Nama': 'no label', });
lyr_point_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});