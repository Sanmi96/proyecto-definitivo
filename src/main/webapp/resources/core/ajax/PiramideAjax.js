// Piramide
function refreshPiramide(piramide) {
    if (piramide.length == 0) {
        document.getElementById('gestion_gdo1').value = 0;
        document.getElementById('gestion_gdo2').value = 0;
        document.getElementById('gestion_gdo3').value = 0;
        document.getElementById('gestion_gdo4').value = 0;
        document.getElementById('gestion_gdo5').value = 0;
        document.getElementById('gestion_gdo6').value = 0;
        document.getElementById('gestion_gdo7').value = 0;
        document.getElementById('gestion_checker').value = 0;
        document.getElementById('gestion_itrmedio').innerHTML = 0;
        checkGDO('gestion');
        document.getElementById('evaluacion_gdo1').value = 0;
        document.getElementById('evaluacion_gdo2').value = 0;
        document.getElementById('evaluacion_gdo3').value = 0;
        document.getElementById('evaluacion_gdo4').value = 0;
        document.getElementById('evaluacion_gdo5').value = 0;
        document.getElementById('evaluacion_gdo6').value = 0;
        document.getElementById('evaluacion_gdo7').value = 0;
        document.getElementById('evaluacion_checker').value = 0;
        document.getElementById('evaluacion_itrmedio').innerHTML = 0;
        checkGDO('evaluacion');
        document.getElementById('analisis_gdo1').value = 0;
        document.getElementById('analisis_gdo2').value = 0;
        document.getElementById('analisis_gdo3').value = 0;
        document.getElementById('analisis_gdo4').value = 0;
        document.getElementById('analisis_gdo5').value = 0;
        document.getElementById('analisis_gdo6').value = 0;
        document.getElementById('analisis_gdo7').value = 0;
        document.getElementById('analisis_checker').value = 0;
        document.getElementById('analisis_itrmedio').innerHTML = 0;
        checkGDO('analisis');
        document.getElementById('diseno_gdo1').value = 0;
        document.getElementById('diseno_gdo2').value = 0;
        document.getElementById('diseno_gdo3').value = 0;
        document.getElementById('diseno_gdo4').value = 0;
        document.getElementById('diseno_gdo5').value = 0;
        document.getElementById('diseno_gdo6').value = 0;
        document.getElementById('diseno_gdo7').value = 0;
        document.getElementById('diseno_checker').value = 0;
        document.getElementById('diseno_itrmedio').innerHTML = 0;
        checkGDO('diseno');
        document.getElementById('construccion_gdo1').value = 0;
        document.getElementById('construccion_gdo2').value = 0;
        document.getElementById('construccion_gdo3').value = 0;
        document.getElementById('construccion_gdo4').value = 0;
        document.getElementById('construccion_gdo5').value = 0;
        document.getElementById('construccion_gdo6').value = 0;
        document.getElementById('construccion_gdo7').value = 0;
        document.getElementById('construccion_checker').value = 0;
        document.getElementById('construccion_itrmedio').innerHTML = 0;
        checkGDO('construccion');
        document.getElementById('testing_gdo1').value = 0;
        document.getElementById('testing_gdo2').value = 0;
        document.getElementById('testing_gdo3').value = 0;
        document.getElementById('testing_gdo4').value = 0;
        document.getElementById('testing_gdo5').value = 0;
        document.getElementById('testing_gdo6').value = 0;
        document.getElementById('testing_gdo7').value = 0;
        document.getElementById('testing_checker').value = 0;
        document.getElementById('testing_itrmedio').innerHTML = 0;
        checkGDO('testing');
        document.getElementById('calidad_gdo1').value = 0;
        document.getElementById('calidad_gdo2').value = 0;
        document.getElementById('calidad_gdo3').value = 0;
        document.getElementById('calidad_gdo4').value = 0;
        document.getElementById('calidad_gdo5').value = 0;
        document.getElementById('calidad_gdo6').value = 0;
        document.getElementById('calidad_gdo7').value = 0;
        document.getElementById('calidad_checker').value = 0;
        document.getElementById('calidad_itrmedio').innerHTML = 0;
        checkGDO('calidad');
        document.getElementById('seguridad_gdo1').value = 0;
        document.getElementById('seguridad_gdo2').value = 0;
        document.getElementById('seguridad_gdo3').value = 0;
        document.getElementById('seguridad_gdo4').value = 0;
        document.getElementById('seguridad_gdo5').value = 0;
        document.getElementById('seguridad_gdo6').value = 0;
        document.getElementById('seguridad_gdo7').value = 0;
        document.getElementById('seguridad_checker').value = 0;
        document.getElementById('seguridad_itrmedio').innerHTML = 0;
        checkGDO('seguridad');
        document.getElementById('despliegues_gdo1').value = 0;
        document.getElementById('despliegues_gdo2').value = 0;
        document.getElementById('despliegues_gdo3').value = 0;
        document.getElementById('despliegues_gdo4').value = 0;
        document.getElementById('despliegues_gdo5').value = 0;
        document.getElementById('despliegues_gdo6').value = 0;
        document.getElementById('despliegues_gdo7').value = 0;
        document.getElementById('despliegues_checker').value = 0;
        document.getElementById('despliegues_itrmedio').innerHTML = 0;
        checkGDO('despliegues');
        document.getElementById('gestionproyecto_gdo1').value = 0;
        document.getElementById('gestionproyecto_gdo2').value = 0;
        document.getElementById('gestionproyecto_gdo3').value = 0;
        document.getElementById('gestionproyecto_gdo4').value = 0;
        document.getElementById('gestionproyecto_gdo5').value = 0;
        document.getElementById('gestionproyecto_gdo6').value = 0;
        document.getElementById('gestionproyecto_gdo7').value = 0;
        document.getElementById('gestionproyecto_checker').value = 0;
        document.getElementById('gestionproyecto_itrmedio').innerHTML = 0;
        checkGDO('gestionproyecto');
        document.getElementById('dm_gdo1').value = 0;
        document.getElementById('dm_gdo2').value = 0;
        document.getElementById('dm_gdo3').value = 0;
        document.getElementById('dm_gdo4').value = 0;
        document.getElementById('dm_gdo5').value = 0;
        document.getElementById('dm_gdo6').value = 0;
        document.getElementById('dm_gdo7').value = 0;
        document.getElementById('dm_checker').value = 0;
        document.getElementById('dm_itrmedio').innerHTML = 0;
        checkGDO('dm');
    } else {
        for (i = 0; i < piramide.length; i++) {
            document.getElementById(piramide[i]["id"]["nombre"] + '_gdo1').value = piramide[i].gdo1;
            document.getElementById(piramide[i]["id"]["nombre"] + '_gdo2').value = piramide[i].gdo2;
            document.getElementById(piramide[i]["id"]["nombre"] + '_gdo3').value = piramide[i].gdo3;
            document.getElementById(piramide[i]["id"]["nombre"] + '_gdo4').value = piramide[i].gdo4;
            document.getElementById(piramide[i]["id"]["nombre"] + '_gdo5').value = piramide[i].gdo5;
            document.getElementById(piramide[i]["id"]["nombre"] + '_gdo6').value = piramide[i].gdo6;
            document.getElementById(piramide[i]["id"]["nombre"] + '_gdo7').value = piramide[i].gdo7;
            if (piramide[i].validez == true) {
                document.getElementById(piramide[i]["id"]["nombre"] + '_checker').value = 1;
            }
            checkGDO(piramide[i]["id"]["nombre"]);
            document.getElementById(piramide[i]["id"]["nombre"] + '_itrmedio').innerHTML = "&euro;&nbsp;"
                    + piramide[i].itrmedio;
        }
    }
}

function getAllPiramide() {
    $.ajax({
        type : "POST",
        url : "piramideAjax",
        success : function(piramide) {
            refreshPiramide(piramide);
            // console.log(piramide);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function doAjaxSavePiramide() {

    // Delivery
    var delivery_gestion = {};
    var idDeliveryGestion = {};
    idDeliveryGestion["nombre"] = "gestion";
    delivery_gestion["gdo1"] = parseInt(document.getElementById('gestion_gdo1').value);
    delivery_gestion["gdo2"] = parseInt(document.getElementById('gestion_gdo2').value);
    delivery_gestion["gdo3"] = parseInt(document.getElementById('gestion_gdo3').value);
    delivery_gestion["gdo4"] = parseInt(document.getElementById('gestion_gdo4').value);
    delivery_gestion["gdo5"] = parseInt(document.getElementById('gestion_gdo5').value);
    delivery_gestion["gdo6"] = parseInt(document.getElementById('gestion_gdo6').value);
    delivery_gestion["gdo7"] = parseInt(document.getElementById('gestion_gdo7').value);

    if (document.getElementById('gestion_checker').value == 0) {
        delivery_gestion["validez"] = false;
    } else {
        delivery_gestion["validez"] = true;
    }
    delivery_gestion["itrmedio"] = document.getElementById('gestion_itrmedio').value;
    if (delivery_gestion["itrmedio"] == undefined) {
        delivery_gestion["itrmedio"] = 0;
    }
    delivery_gestion["id"] = idDeliveryGestion;

    var delivery_evaluacion = {};
    var idDeliveryEvaluacion = {};
    idDeliveryEvaluacion["nombre"] = "evaluacion";
    delivery_evaluacion["gdo1"] = parseInt(document.getElementById('evaluacion_gdo1').value);
    delivery_evaluacion["gdo2"] = parseInt(document.getElementById('evaluacion_gdo2').value);
    delivery_evaluacion["gdo3"] = parseInt(document.getElementById('evaluacion_gdo3').value);
    delivery_evaluacion["gdo4"] = parseInt(document.getElementById('evaluacion_gdo4').value);
    delivery_evaluacion["gdo5"] = parseInt(document.getElementById('evaluacion_gdo5').value);
    delivery_evaluacion["gdo6"] = parseInt(document.getElementById('evaluacion_gdo6').value);
    delivery_evaluacion["gdo7"] = parseInt(document.getElementById('evaluacion_gdo7').value);

    if (document.getElementById('evaluacion_checker').value == 0) {
        delivery_evaluacion["validez"] = false;
    } else {
        delivery_evaluacion["validez"] = true;
    }

    delivery_evaluacion["itrmedio"] = document.getElementById('evaluacion_itrmedio').value;
    if (delivery_evaluacion["itrmedio"] == undefined) {
        delivery_evaluacion["itrmedio"] = 0;
    }
    delivery_evaluacion["id"] = idDeliveryEvaluacion;

    var delivery_analisis = {};
    var idDeliveryAnalisis = {};
    idDeliveryAnalisis["nombre"] = "analisis";
    delivery_analisis["gdo1"] = parseInt(document.getElementById('analisis_gdo1').value);
    delivery_analisis["gdo2"] = parseInt(document.getElementById('analisis_gdo2').value);
    delivery_analisis["gdo3"] = parseInt(document.getElementById('analisis_gdo3').value);
    delivery_analisis["gdo4"] = parseInt(document.getElementById('analisis_gdo4').value);
    delivery_analisis["gdo5"] = parseInt(document.getElementById('analisis_gdo5').value);
    delivery_analisis["gdo6"] = parseInt(document.getElementById('analisis_gdo6').value);
    delivery_analisis["gdo7"] = parseInt(document.getElementById('analisis_gdo7').value);

    if (document.getElementById('analisis_checker').value == 0) {
        delivery_analisis["validez"] = false;
    } else {
        delivery_analisis["validez"] = true;
    }

    delivery_analisis["itrmedio"] = document.getElementById('analisis_itrmedio').value;
    if (delivery_analisis["itrmedio"] == undefined) {
        delivery_analisis["itrmedio"] = 0;
    }
    delivery_analisis["id"] = idDeliveryAnalisis;

    var delivery_diseno = {};
    var idDeliveryDiseno = {};
    idDeliveryDiseno["nombre"] = "diseno";
    delivery_diseno["gdo1"] = parseInt(document.getElementById('diseno_gdo1').value);
    delivery_diseno["gdo2"] = parseInt(document.getElementById('diseno_gdo2').value);
    delivery_diseno["gdo3"] = parseInt(document.getElementById('diseno_gdo3').value);
    delivery_diseno["gdo4"] = parseInt(document.getElementById('diseno_gdo4').value);
    delivery_diseno["gdo5"] = parseInt(document.getElementById('diseno_gdo5').value);
    delivery_diseno["gdo6"] = parseInt(document.getElementById('diseno_gdo6').value);
    delivery_diseno["gdo7"] = parseInt(document.getElementById('diseno_gdo7').value);

    if (document.getElementById('diseno_checker').value == 0) {
        delivery_diseno["validez"] = false;
    } else {
        delivery_diseno["validez"] = true;
    }

    delivery_diseno["itrmedio"] = document.getElementById('diseno_itrmedio').value;
    if (delivery_diseno["itrmedio"] == undefined) {
        delivery_diseno["itrmedio"] = 0;
    }
    delivery_diseno["id"] = idDeliveryDiseno;

    var delivery_construccion = {};
    var idDeliveryConstruccion = {};
    idDeliveryConstruccion["nombre"] = "construccion";
    delivery_construccion["gdo1"] = parseInt(document.getElementById('construccion_gdo1').value);
    delivery_construccion["gdo2"] = parseInt(document.getElementById('construccion_gdo2').value);
    delivery_construccion["gdo3"] = parseInt(document.getElementById('construccion_gdo3').value);
    delivery_construccion["gdo4"] = parseInt(document.getElementById('construccion_gdo4').value);
    delivery_construccion["gdo5"] = parseInt(document.getElementById('construccion_gdo5').value);
    delivery_construccion["gdo6"] = parseInt(document.getElementById('construccion_gdo6').value);
    delivery_construccion["gdo7"] = parseInt(document.getElementById('construccion_gdo7').value);

    if (document.getElementById('construccion_checker').value == 0) {
        delivery_construccion["validez"] = false;
    } else {
        delivery_construccion["validez"] = true;
    }

    delivery_construccion["itrmedio"] = document.getElementById('construccion_itrmedio').value;
    if (delivery_construccion["itrmedio"] == undefined) {
        delivery_construccion["itrmedio"] = 0;
    }

    delivery_construccion["id"] = idDeliveryConstruccion;

    var delivery_testing = {};
    var idDeliveryTesting = {};
    idDeliveryTesting["nombre"] = "testing";
    delivery_testing["gdo1"] = parseInt(document.getElementById('testing_gdo1').value);
    delivery_testing["gdo2"] = parseInt(document.getElementById('testing_gdo2').value);
    delivery_testing["gdo3"] = parseInt(document.getElementById('testing_gdo3').value);
    delivery_testing["gdo4"] = parseInt(document.getElementById('testing_gdo4').value);
    delivery_testing["gdo5"] = parseInt(document.getElementById('testing_gdo5').value);
    delivery_testing["gdo6"] = parseInt(document.getElementById('testing_gdo6').value);
    delivery_testing["gdo7"] = parseInt(document.getElementById('testing_gdo7').value);

    if (document.getElementById('testing_checker').value == 0) {
        delivery_testing["validez"] = false;
    } else {
        delivery_testing["validez"] = true;
    }

    delivery_testing["itrmedio"] = document.getElementById('testing_itrmedio').value;
    if (delivery_testing["itrmedio"] == undefined) {
        delivery_testing["itrmedio"] = 0;
    }

    delivery_testing["id"] = idDeliveryTesting;

    // Gestion
    var gestion_calidad = {};
    var idGestionCalidad = {};
    idGestionCalidad["nombre"] = "calidad";
    gestion_calidad["gdo1"] = parseInt(document.getElementById('calidad_gdo1').value);
    gestion_calidad["gdo2"] = parseInt(document.getElementById('calidad_gdo2').value);
    gestion_calidad["gdo3"] = parseInt(document.getElementById('calidad_gdo3').value);
    gestion_calidad["gdo4"] = parseInt(document.getElementById('calidad_gdo4').value);
    gestion_calidad["gdo5"] = parseInt(document.getElementById('calidad_gdo5').value);
    gestion_calidad["gdo6"] = parseInt(document.getElementById('calidad_gdo6').value);
    gestion_calidad["gdo7"] = parseInt(document.getElementById('calidad_gdo7').value);

    if (document.getElementById('calidad_checker').value == 0) {
        gestion_calidad["validez"] = false;
    } else {
        gestion_calidad["validez"] = true;
    }

    gestion_calidad["itrmedio"] = document.getElementById('calidad_itrmedio').value;
    if (gestion_calidad["itrmedio"] == undefined) {
        gestion_calidad["itrmedio"] = 0;
    }
    gestion_calidad["id"] = idGestionCalidad;

    var gestion_seguridad = {};
    var idGestionSeguridad = {};
    idGestionSeguridad["nombre"] = "seguridad";
    gestion_seguridad["gdo1"] = parseInt(document.getElementById('seguridad_gdo1').value);
    gestion_seguridad["gdo2"] = parseInt(document.getElementById('seguridad_gdo2').value);
    gestion_seguridad["gdo3"] = parseInt(document.getElementById('seguridad_gdo3').value);
    gestion_seguridad["gdo4"] = parseInt(document.getElementById('seguridad_gdo4').value);
    gestion_seguridad["gdo5"] = parseInt(document.getElementById('seguridad_gdo5').value);
    gestion_seguridad["gdo6"] = parseInt(document.getElementById('seguridad_gdo6').value);
    gestion_seguridad["gdo7"] = parseInt(document.getElementById('seguridad_gdo7').value);

    if (document.getElementById('seguridad_checker').value == 0) {
        gestion_seguridad["validez"] = false;
    } else {
        gestion_seguridad["validez"] = true;
    }

    gestion_seguridad["itrmedio"] = document.getElementById('seguridad_itrmedio').value;
    if (gestion_seguridad["itrmedio"] == undefined) {
        gestion_seguridad["itrmedio"] = 0;
    }
    gestion_seguridad["id"] = idGestionSeguridad;

    var gestion_despliegues = {};
    var idGestionDespliegues = {};
    idGestionDespliegues["nombre"] = "despliegues";
    gestion_despliegues["gdo1"] = parseInt(document.getElementById('despliegues_gdo1').value);
    gestion_despliegues["gdo2"] = parseInt(document.getElementById('despliegues_gdo2').value);
    gestion_despliegues["gdo3"] = parseInt(document.getElementById('despliegues_gdo3').value);
    gestion_despliegues["gdo4"] = parseInt(document.getElementById('despliegues_gdo4').value);
    gestion_despliegues["gdo5"] = parseInt(document.getElementById('despliegues_gdo5').value);
    gestion_despliegues["gdo6"] = parseInt(document.getElementById('despliegues_gdo6').value);
    gestion_despliegues["gdo7"] = parseInt(document.getElementById('despliegues_gdo7').value);

    if (document.getElementById('despliegues_checker').value == 0) {
        gestion_despliegues["validez"] = false;
    } else {
        gestion_despliegues["validez"] = true;
    }

    gestion_despliegues["itrmedio"] = document.getElementById('despliegues_itrmedio').value;
    if (gestion_despliegues["itrmedio"] == undefined) {
        gestion_despliegues["itrmedio"] = 0;
    }
    gestion_despliegues["id"] = idGestionDespliegues;

    // Gobierno
    var gestion_proyecto = {};
    var idGestionProyecto = {};
    idGestionProyecto["nombre"] = "gestionproyecto";
    gestion_proyecto["gdo1"] = parseInt(document.getElementById('gestionproyecto_gdo1').value);
    gestion_proyecto["gdo2"] = parseInt(document.getElementById('gestionproyecto_gdo2').value);
    gestion_proyecto["gdo3"] = parseInt(document.getElementById('gestionproyecto_gdo3').value);
    gestion_proyecto["gdo4"] = parseInt(document.getElementById('gestionproyecto_gdo4').value);
    gestion_proyecto["gdo5"] = parseInt(document.getElementById('gestionproyecto_gdo5').value);
    gestion_proyecto["gdo6"] = parseInt(document.getElementById('gestionproyecto_gdo6').value);
    gestion_proyecto["gdo7"] = parseInt(document.getElementById('gestionproyecto_gdo7').value);

    if (document.getElementById('gestionproyecto_checker').value == 0) {
        gestion_proyecto["validez"] = false;
    } else {
        gestion_proyecto["validez"] = true;
    }

    gestion_proyecto["itrmedio"] = document.getElementById('gestionproyecto_itrmedio').value;
    if (gestion_proyecto["itrmedio"] == undefined) {
        gestion_proyecto["itrmedio"] = 0;
    }
    gestion_proyecto["id"] = idGestionProyecto;

    var gobierno_dm = {};
    var idGobiernoDM = {};
    idGobiernoDM["nombre"] = "dm";
    gobierno_dm["gdo1"] = parseInt(document.getElementById('dm_gdo1').value);
    gobierno_dm["gdo2"] = parseInt(document.getElementById('dm_gdo2').value);
    gobierno_dm["gdo3"] = parseInt(document.getElementById('dm_gdo3').value);
    gobierno_dm["gdo4"] = parseInt(document.getElementById('dm_gdo4').value);
    gobierno_dm["gdo5"] = parseInt(document.getElementById('dm_gdo5').value);
    gobierno_dm["gdo6"] = parseInt(document.getElementById('dm_gdo6').value);
    gobierno_dm["gdo7"] = parseInt(document.getElementById('dm_gdo7').value);

    if (document.getElementById('dm_checker').value == 0) {
        gobierno_dm["validez"] = false;
    } else {
        gobierno_dm["validez"] = true;
    }

    gobierno_dm["itrmedio"] = document.getElementById('dm_itrmedio').value;
    if (gobierno_dm["itrmedio"] == undefined) {
        gobierno_dm["itrmedio"] = 0;
    }
    gobierno_dm["id"] = idGobiernoDM;

    var data = {};
    data["delivery_gestion"] = delivery_gestion;
    data["delivery_evaluacion"] = delivery_evaluacion;
    data["delivery_analisis"] = delivery_analisis;
    data["delivery_diseno"] = delivery_diseno;
    data["delivery_construccion"] = delivery_construccion;
    data["delivery_testing"] = delivery_testing;
    data["gestion_calidad"] = gestion_calidad;
    data["gestion_seguridad"] = gestion_seguridad;
    data["gestion_despliegues"] = gestion_despliegues;
    data["gestion_proyecto"] = gestion_proyecto;
    data["gobierno_dm"] = gobierno_dm;

    console.log(data);
    $.ajax({
        type : "POST",
        url : "piramide/save",
        dataType : "json",
        contentType : "application/json; charset=utf-8",
        data : JSON.stringify(data),
        success : function() {

        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}