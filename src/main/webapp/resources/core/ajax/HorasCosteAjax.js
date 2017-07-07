// Valoracion Final
function refreshValoracionFinal(valFin) {
    if (valFin.length == 0) {
        document.getElementById('totalhoras_admdw').innerHTML = 0;
        document.getElementById('totalcoste_admdw').innerHTML = 0;
    } else {
        for (i = 0; i < valFin.length; i++) {
            document.getElementById('totalhoras_admdw').innerHTML = valFin[i].horas;
            document.getElementById('totalcoste_admdw').innerHTML = valFin[i].coste;
        }
    }
}

function getAllValoracionFinal() {
    $.ajax({
        type : "POST",
        url : "valoracionFinalAjax",
        success : function(coste) {
            refreshValoracionFinal(coste);
            // console.log(coste);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

// Riesgo
function refreshRiesgo(riesgo) {
    if (riesgo.length == 0) {
        document.getElementById('horascontingencia').innerHTML = 0;
    } else {
        for (i = 0; i < riesgo.length; i++) {
            document.getElementById('horascontingencia').innerHTML = riesgo[i].num;
        }
    }
}

function getAllRiesgo() {
    $.ajax({
        type : "POST",
        url : "riesgoAjax",
        success : function(riesgo) {
            refreshRiesgo(riesgo);
            // console.log(riesgo);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

// Delivery
function refreshDelivery(delivery) {
    if (delivery.length == 0) {
        document.getElementById('gestion_por').innerHTML = 0;
        document.getElementById('gestion_horas').innerHTML = 0;
        document.getElementById('gestion_coste').innerHTML = 0;
        document.getElementById('evaluacion_por').innerHTML = 0;
        document.getElementById('evaluacion_horas').innerHTML = 0;
        document.getElementById('evaluacion_coste').innerHTML = 0;
        document.getElementById('analisis_por').innerHTML = 0;
        document.getElementById('analisis_horas').innerHTML = 0;
        document.getElementById('analisis_coste').innerHTML = 0;
        document.getElementById('analisis_ip').value = 0;
        document.getElementById('diseno_por').innerHTML = 0;
        document.getElementById('diseno_horas').innerHTML = 0;
        document.getElementById('diseno_coste').innerHTML = 0;
        document.getElementById('construccion_por').value = 0;
        document.getElementById('construccion_horas').innerHTML = 0;
        document.getElementById('construccion_coste').innerHTML = 0;
        document.getElementById('testing_por').innerHTML = 0;
        document.getElementById('testing_horas').innerHTML = 0;
        document.getElementById('testing_coste').innerHTML = 0;
        document.getElementById('testing_ip').value = 0;
        document.getElementById('analisis_ip').disabled = false;
        document.getElementById('testing_ip').disabled = false;
        document.getElementById('del_por').innerHTML = 0;
        document.getElementById('del_horas').innerHTML = 0;
        document.getElementById('del_coste').innerHTML = 0;

    } else {
        for (i = 0; i < delivery.length; i++) {
            document.getElementById(delivery[i]["id"]["nombre"] + '_por').value = delivery[i].porcentaje;
            document.getElementById(delivery[i]["id"]["nombre"] + '_por').innerHTML = delivery[i].porcentaje;
            if (delivery[i].internaPractica == true) {
                document.getElementById(delivery[i]["id"]["nombre"] + '_ip').value = 1;
            }
            var por1 = parseInt(document.getElementById('gestion_por').value);
            var por2 = parseInt(document.getElementById('evaluacion_por').value);
            var por3 = parseInt(document.getElementById('diseno_por').value);
            var por4 = parseInt(document.getElementById('construccion_por').value);
            var porcentajes = por1 + por2 + por3 + por4;
            if (porcentajes == 100) {
                document.getElementById('analisis_ip').disabled = true;
                document.getElementById('testing_ip').disabled = true;
            }
            document.getElementById(delivery[i]["id"]["nombre"] + '_horas').innerHTML = delivery[i].horas;
            document.getElementById(delivery[i]["id"]["nombre"] + '_coste').innerHTML = delivery[i].coste;
        }
        refreshTotalDelivery();
    }
}

function getAllDelivery() {
    $.ajax({
        type : "POST",
        url : "deliveryAjax",
        success : function(delivery) {
            // console.log(delivery);
            refreshDelivery(delivery);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

// Gestion
function refreshGestion(gestion) {
    if (gestion.length == 0) {
        document.getElementById('calidad_por').innerHTML = 0;
        document.getElementById('calidad_ip').value = 0;
        document.getElementById('calidad_horas').innerHTML = 0;
        document.getElementById('calidad_coste').innerHTML = 0;
        document.getElementById('seguridad_por').innerHTML = 0;
        document.getElementById('seguridad_ip').value = 0;
        document.getElementById('seguridad_horas').innerHTML = 0;
        document.getElementById('seguridad_coste').innerHTML = 0;
        document.getElementById('despliegues_por').innerHTML = 0;
        document.getElementById('despliegues_ip').value = 0;
        document.getElementById('despliegues_horas').innerHTML = 0;
        document.getElementById('despliegues_coste').innerHTML = 0;
        document.getElementById('extra_por').innerHTML = 0;
        document.getElementById('extra_horas').innerHTML = 0;
        document.getElementById('extra_coste').innerHTML = 0;
    } else {
        for (i = 0; i < gestion.length; i++) {
            document.getElementById(gestion[i]["id"]["nombre"] + '_por').innerHTML = gestion[i].porcentaje;
            if (gestion[i].internaPractica == true) {
                document.getElementById(gestion[i]["id"]["nombre"] + '_ip').value = 1;
            } else {
                document.getElementById(gestion[i]["id"]["nombre"] + '_ip').value = 0;
            }
            document.getElementById(gestion[i]["id"]["nombre"] + '_horas').innerHTML = gestion[i].horas;
            document.getElementById(gestion[i]["id"]["nombre"] + '_coste').innerHTML = gestion[i].coste;
        }
        refreshTotalExtras();
    }
}

function getAllGestion() {
    $.ajax({
        type : "POST",
        url : "gestionAjax",
        success : function(gestion) {
            // console.log(gestion);
            refreshGestion(gestion);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

// Gobierno
function refreshGobierno(gobierno) {
    if (gobierno.length == 0) {
        document.getElementById('gestionproyecto_por').innerHTML = 0;
        document.getElementById('gestionproyecto_ip').value = 0;
        document.getElementById('gestionproyecto_horas').innerHTML = 0;
        document.getElementById('gestionproyecto_coste').innerHTML = 0;
        document.getElementById('dm_por').innerHTML = 0;
        document.getElementById('dm_horas').innerHTML = 0;
        document.getElementById('dm_coste').innerHTML = 0;
        document.getElementById('gobierno_por').innerHTML = 0;
        document.getElementById('gobierno_horas').innerHTML = 0;
        document.getElementById('gobierno_coste').innerHTML = 0;
    } else {
        for (i = 0; i < gobierno.length; i++) {
            document.getElementById(gobierno[i]["id"]["nombre"] + '_por').innerHTML = gobierno[i].porcentaje;
            if (gobierno[i].internaPractica == true) {
                document.getElementById('gestionproyecto_ip').value = 1;
            } else {
                document.getElementById('gestionproyecto_ip').value = 0;
            }
            document.getElementById(gobierno[i]["id"]["nombre"] + '_horas').innerHTML = gobierno[i].horas;
            document.getElementById(gobierno[i]["id"]["nombre"] + '_coste').innerHTML = gobierno[i].coste;
        }
        refreshTotalGobierno();
    }
}

function getAllGobierno() {
    $.ajax({
        type : "POST",
        url : "gobiernoAjax",
        success : function(gobierno) {
            // console.log(gobierno);
            refreshGobierno(gobierno);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function getAllHorasCoste() {
    getAllValoracionFinal();
    getAllRiesgo();
    getAllDelivery();
    getAllGestion();
    getAllGobierno();
}

function doAjaxSaveHorasCoste() {

    // Valoracion Final
    var valoracionFinal = {};
    var idValoracion = {};
    idValoracion["nombre"] = "totalADMDW";
    valoracionFinal["horas"] = parseInt(document.getElementById('totalhoras_admdw').innerHTML);
    valoracionFinal["coste"] = parseFloat(document.getElementById('totalcoste_admdw').innerHTML);
    valoracionFinal["id"] = idValoracion;

    // Riesgo
    var riesgo = {};
    riesgo["nombre"] = "horascontingencia";
    riesgo["num"] = parseFloat(document.getElementById('horascontingencia').innerHTML);

    // Delivery
    var delivery1 = {};
    var idDelivery1 = {};
    idDelivery1["nombre"] = "gestion";
    delivery1["porcentaje"] = parseInt(document.getElementById('gestion_por').innerHTML);
    delivery1["internaPractica"] = false;
    delivery1["horas"] = parseInt(document.getElementById('gestion_horas').innerHTML);
    delivery1["coste"] = parseFloat(document.getElementById('gestion_coste').innerHTML);
    delivery1["id"] = idDelivery1;

    var delivery2 = {};
    var idDelivery2 = {};
    idDelivery2["nombre"] = "evaluacion";
    delivery2["porcentaje"] = parseInt(document.getElementById('evaluacion_por').innerHTML);
    delivery2["internaPractica"] = false;
    delivery2["horas"] = parseInt(document.getElementById('evaluacion_horas').innerHTML);
    delivery2["coste"] = parseFloat(document.getElementById('evaluacion_coste').innerHTML);
    delivery2["id"] = idDelivery2;

    var delivery3 = {};
    var idDelivery3 = {};
    idDelivery3["nombre"] = "analisis";
    delivery3["porcentaje"] = parseInt(document.getElementById('analisis_por').innerHTML);
    if (delivery3["porcentaje"] == undefined) {
        delivery3["porcentaje"] = 0;
    }
    if (document.getElementById('analisis_ip').value == 0) {
        delivery3["internaPractica"] = false;
    } else {
        delivery3["internaPractica"] = true;

    }
    delivery3["horas"] = parseInt(document.getElementById('analisis_horas').innerHTML);
    delivery3["coste"] = parseFloat(document.getElementById('analisis_coste').innerHTML);
    delivery3["id"] = idDelivery3;

    var delivery4 = {};
    var idDelivery4 = {};
    idDelivery4["nombre"] = "diseno";
    delivery4["porcentaje"] = parseInt(document.getElementById('diseno_por').innerHTML);
    delivery4["internaPractica"] = false;
    delivery4["horas"] = parseInt(document.getElementById('diseno_horas').innerHTML);
    delivery4["coste"] = parseFloat(document.getElementById('diseno_coste').innerHTML);
    delivery4["id"] = idDelivery4;

    var delivery5 = {};
    var idDelivery5 = {};
    idDelivery5["nombre"] = "construccion";
    delivery5["porcentaje"] = parseInt(document.getElementById('construccion_por').value);
    delivery5["internaPractica"] = false;
    delivery5["horas"] = parseInt(document.getElementById('construccion_horas').innerHTML);
    delivery5["coste"] = parseFloat(document.getElementById('construccion_coste').innerHTML);
    delivery5["id"] = idDelivery5;

    var delivery6 = {};
    var idDelivery6 = {};
    idDelivery6["nombre"] = "testing";
    delivery6["porcentaje"] = parseInt(document.getElementById('testing_por').innerHTML);
    if (delivery6["porcentaje"] == undefined) {
        delivery6["porcentaje"] = 0;
    }
    if (document.getElementById('testing_ip').value == 0) {
        delivery6["internaPractica"] = false;
    } else {
        delivery6["internaPractica"] = true;
    }
    delivery6["horas"] = parseInt(document.getElementById('testing_horas').innerHTML);
    delivery6["coste"] = parseFloat(document.getElementById('testing_coste').innerHTML);
    delivery6["id"] = idDelivery6;

    // Gestion
    var gestion1 = {};
    var idGestion1 = {};
    idGestion1["nombre"] = "calidad";
    gestion1["porcentaje"] = parseInt(document.getElementById('calidad_por').innerHTML);
    if (document.getElementById('calidad_ip').value == 0) {
        gestion1["internaPractica"] = false;
    } else {
        gestion1["internaPractica"] = true;
    }
    gestion1["horas"] = parseInt(document.getElementById('calidad_horas').innerHTML);
    gestion1["coste"] = parseFloat(document.getElementById('calidad_coste').innerHTML);
    gestion1["id"] = idGestion1;

    var gestion2 = {};
    var idGestion2 = {};
    idGestion2["nombre"] = "seguridad";
    gestion2["porcentaje"] = parseInt(document.getElementById('seguridad_por').innerHTML);
    if (document.getElementById('seguridad_ip').value == 0) {
        gestion2["internaPractica"] = false;
    } else {
        gestion2["internaPractica"] = true;
    }
    gestion2["horas"] = parseInt(document.getElementById('seguridad_horas').innerHTML);
    gestion2["coste"] = parseFloat(document.getElementById('seguridad_coste').innerHTML);
    gestion2["id"] = idGestion2;

    var gestion3 = {};
    var idGestion3 = {};
    idGestion3["nombre"] = "despliegues";
    gestion3["porcentaje"] = parseInt(document.getElementById('despliegues_por').innerHTML);
    if (document.getElementById('despliegues_ip').value == 0) {
        gestion3["internaPractica"] = false;
    } else {
        gestion3["internaPractica"] = true;
    }
    gestion3["horas"] = parseInt(document.getElementById('despliegues_horas').innerHTML);
    gestion3["coste"] = parseFloat(document.getElementById('despliegues_coste').innerHTML);
    gestion3["id"] = idGestion3;

    // Gobierno
    var gobierno1 = {};
    idGobierno1 = {};
    idGobierno1["nombre"] = "gestionproyecto";
    gobierno1["porcentaje"] = parseInt(document.getElementById('gestionproyecto_por').value);
    if (document.getElementById('gestionproyecto_ip').value == 0) {
        gobierno1["internaPractica"] = false;
    } else {
        gobierno1["internaPractica"] = true;
    }
    gobierno1["horas"] = parseInt(document.getElementById('gestionproyecto_horas').innerHTML);
    gobierno1["coste"] = parseFloat(document.getElementById('gestionproyecto_coste').innerHTML);
    gobierno1["id"] = idGobierno1;

    var gobierno2 = {};
    idGobierno2 = {};
    idGobierno2["nombre"] = "dm";
    gobierno2["porcentaje"] = parseInt(document.getElementById('dm_por').innerHTML);
    delivery1["internaPractica"] = false;
    gobierno2["horas"] = parseInt(document.getElementById('dm_horas').innerHTML);
    gobierno2["coste"] = parseFloat(document.getElementById('dm_coste').innerHTML);
    gobierno2["id"] = idGobierno2;

    var data = {};
    data["delivery1"] = delivery1;
    data["delivery2"] = delivery2;
    data["delivery3"] = delivery3;
    data["delivery4"] = delivery4;
    data["delivery5"] = delivery5;
    data["delivery6"] = delivery6;
    data["gestion1"] = gestion1;
    data["gestion2"] = gestion2;
    data["gestion3"] = gestion3;
    data["gobierno1"] = gobierno1;
    data["gobierno2"] = gobierno2;
    data["riesgo"] = riesgo;
    data["valoracionFinal"] = valoracionFinal;

    console.log(data);
    $.ajax({
        type : "POST",
        url : "costes/save",
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