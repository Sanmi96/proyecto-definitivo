// Factores Ajuste
function refreshFactorAjuste(factor) {
    if (factor.length == 0) {
        document.getElementById('factorProductividad').value = 1;
    } else {
        for (i = 0; i < factor.length; i++) {
            document.getElementById('factorProductividad').value = factor[i].factorProductividad;
        }
    }
}

function getAllFactorAjuste() {
    $.ajax({
        type : "POST",
        url : "factoresAjusteAjax",
        success : function(factor) {
            // console.log(factor);
            refreshFactorAjuste(factor);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

// Factores Complejidad Tecnica
function refreshFactorComplejidadTecnica(factorTec) {
    if (factorTec.length == 0) {
        document.getElementById('rendimiento_aplica').value = 0;
        document.getElementById('rendimiento_definicion').disabled = true;
        document.getElementById('rendimiento_definicion').value = 0;
        document.getElementById('rendimiento_exigencia').disabled = true;
        document.getElementById('rendimiento_exigencia').value = 0;
        document.getElementById('rendimiento_impacto').innerHTML = 0;
        document.getElementById('rendimiento_riesgo').innerHTML = 0;
        document.getElementById('usabilidad_aplica').value = 0;
        document.getElementById('usabilidad_definicion').disabled = true;
        document.getElementById('usabilidad_definicion').value = 0;
        document.getElementById('usabilidad_exigencia').disabled = true;
        document.getElementById('usabilidad_exigencia').value = 0;
        document.getElementById('usabilidad_impacto').innerHTML = 0;
        document.getElementById('usabilidad_riesgo').innerHTML = 0;
        document.getElementById('portabilidad_aplica').value = 0;
        document.getElementById('portabilidad_definicion').disabled = true;
        document.getElementById('portabilidad_definicion').value = 0;
        document.getElementById('portabilidad_exigencia').disabled = true;
        document.getElementById('portabilidad_exigencia').value = 0;
        document.getElementById('portabilidad_impacto').innerHTML = 0;
        document.getElementById('portabilidad_riesgo').innerHTML = 0;
        document.getElementById('concurrencia_aplica').value = 0;
        document.getElementById('concurrencia_definicion').disabled = true;
        document.getElementById('concurrencia_definicion').value = 0;
        document.getElementById('concurrencia_exigencia').disabled = true;
        document.getElementById('concurrencia_exigencia').value = 0;
        document.getElementById('concurrencia_impacto').innerHTML = 0;
        document.getElementById('concurrencia_riesgo').innerHTML = 0;
        document.getElementById('seguridad_aplica').value = 0;
        document.getElementById('seguridad_definicion').disabled = true;
        document.getElementById('seguridad_definicion').value = 0;
        document.getElementById('seguridad_exigencia').disabled = true;
        document.getElementById('seguridad_exigencia').value = 0;
        document.getElementById('seguridad_impacto').innerHTML = 0;
        document.getElementById('seguridad_riesgo').innerHTML = 0;
        document.getElementById('total_impacto').innerHTML = 0;
        document.getElementById('total_riesgo').innerHTML = 0;
        document.getElementById('tcf_impacto').innerHTML = 1;
        document.getElementById('tcf_riesgo').innerHTML = 1;
    } else {
        for (i = 0; i < factorTec.length; i++) {
            if (factorTec[i].aplica == true) {
                document.getElementById(factorTec[i]["id"]["nombre"] + '_aplica').value = 1;
                document.getElementById(factorTec[i]["id"]["nombre"] + '_definicion').disabled = false;
                if (document.getElementById(factorTec[i]["id"]["nombre"] + '_definicion').disabled == false) {
                    document.getElementById(factorTec[i]["id"]["nombre"] + '_exigencia').disabled = false;
                }
            } else {
                document.getElementById(factorTec[i]["id"]["nombre"] + '_aplica').value = 0;
            }
            document.getElementById(factorTec[i]["id"]["nombre"] + '_definicion').value = factorTec[i].gradoDefinicion;
            document.getElementById(factorTec[i]["id"]["nombre"] + '_exigencia').value = factorTec[i].gradoExigencia;
            document.getElementById(factorTec[i]["id"]["nombre"] + '_impacto').innerHTML = factorTec[i].impacto;
            document.getElementById(factorTec[i]["id"]["nombre"] + '_riesgo').innerHTML = factorTec[i].riesgo;
            calculate(factorTec[i]["id"]["nombre"]);
        }
    }
}

function getAllFactoresComplejidadTecnica() {
    $.ajax({
        type : "POST",
        url : "factorTecnicaAjax",
        success : function(factor) {
            // console.log(factor);
            refreshFactorComplejidadTecnica(factor);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

// Arquitecturas de Referencia
function refreshArquitecturaReferencial(arqRef) {
    if (arqRef.length == 0) {
        document.getElementById('solucion_aplica').value = 0;
        document.getElementById('solucion_definido').value = 0;
        document.getElementById('solucion_definido').disabled = true;
        document.getElementById('solucion_conocimiento').value = 0;
        document.getElementById('solucion_conocimiento').disabled = true;
        document.getElementById('solucion_impacto').innerHTML = 0;
        document.getElementById('solucion_riesgo').innerHTML = 0;
        document.getElementById('integracion_aplica').value = 0;
        document.getElementById('integracion_definido').value = 0;
        document.getElementById('integracion_definido').disabled = true;
        document.getElementById('integracion_conocimiento').value = 0;
        document.getElementById('integracion_conocimiento').disabled = true;
        document.getElementById('integracion_impacto').innerHTML = 0;
        document.getElementById('integracion_riesgo').innerHTML = 0;
        document.getElementById('logica_aplica').value = 0;
        document.getElementById('logica_definido').value = 0;
        document.getElementById('logica_definido').disabled = true;
        document.getElementById('logica_conocimiento').value = 0;
        document.getElementById('logica_conocimiento').disabled = true;
        document.getElementById('logica_impacto').innerHTML = 0;
        document.getElementById('logica_riesgo').innerHTML = 0;
        document.getElementById('despliegue_aplica').value = 0;
        document.getElementById('despliegue_definido').value = 0;
        document.getElementById('despliegue_definido').disabled = true;
        document.getElementById('despliegue_conocimiento').value = 0;
        document.getElementById('despliegue_conocimiento').disabled = true;
        document.getElementById('despliegue_impacto').innerHTML = 0;
        document.getElementById('despliegue_riesgo').innerHTML = 0;
        document.getElementById('total_impacto2').innerHTML = 0;
        document.getElementById('total_riesgo2').innerHTML = 0;
        document.getElementById('tcf_impacto2').innerHTML = 1;
        document.getElementById('tcf_riesgo2').innerHTML = 1;
    } else {
        for (i = 0; i < arqRef.length; i++) {
            if (arqRef[i].aplica == true) {
                document.getElementById(arqRef[i]["id"]["nombre"] + '_aplica').value = 1;
                document.getElementById(arqRef[i]["id"]["nombre"] + '_definido').disabled = false;
            } else {
                document.getElementById(arqRef[i]["id"]["nombre"] + '_aplica').value = 0;
            }
            if (arqRef[i].definido == true) {
                document.getElementById(arqRef[i]["id"]["nombre"] + '_definido').value = 1;
                if (document.getElementById(arqRef[i]["id"]["nombre"] + '_definido').disabled == false) {
                    document.getElementById(arqRef[i]["id"]["nombre"] + '_conocimiento').value = arqRef[i].gradoConocimento;
                    document.getElementById(arqRef[i]["id"]["nombre"] + '_conocimiento').disabled = false;
                } else {
                    document.getElementById(arqRef[i]["id"]["nombre"] + '_conocimiento').disabled = true;
                }
            } else {
                document.getElementById(arqRef[i]["id"]["nombre"] + '_definido').value = 0;
            }
            document.getElementById(arqRef[i]["id"]["nombre"] + '_impacto').innerHTML = arqRef[i].impacto;
            document.getElementById(arqRef[i]["id"]["nombre"] + '_riesgo').innerHTML = arqRef[i].riesgo;
            calculate2(arqRef[i]["id"]["nombre"]);
        }
    }
}

function getAllArquitecturaReferencial() {
    $.ajax({
        type : "POST",
        url : "arquitecturaReferencialAjax",
        success : function(factor) {
            // console.log(factor);
            refreshArquitecturaReferencial(factor);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

// Factores Complejidad Ambiental
function refreshFactorComplejidadAmbiental(factorAmb) {
    if (factorAmb.length == 0) {
        document.getElementById('experiencia_valoracion').value = 10;
        document.getElementById('experiencia_calculado').innerHTML = 10;
        document.getElementById('capacidades_valoracion').value = 10;
        document.getElementById('capacidades_calculado').innerHTML = 10;
        document.getElementById('calidad_valoracion').value = 20;
        document.getElementById('calidad_calculado').innerHTML = 20;
        document.getElementById('total').innerHTML = 40;
        document.getElementById('ecf').innerHTML = 1.1;
    } else {
        for (i = 0; i < factorAmb.length; i++) {
            document.getElementById(factorAmb[i]["id"]["nombre"] + '_valoracion').value = factorAmb[i].valoracion;
            document.getElementById(factorAmb[i]["id"]["nombre"] + '_calculado').innerHTML = factorAmb[i].factorCalculado;
            calculate3(factorAmb[i]["id"]["nombre"]);
        }
    }
}

function getAllFactoresComplejidadAmbiental() {
    $.ajax({
        type : "POST",
        url : "factorAmbientalAjax",
        success : function(factor) {
            // console.log(factor);
            refreshFactorComplejidadAmbiental(factor);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function getAllFactoresdeAjuste() {
    getAllFactoresComplejidadTecnica();
    getAllFactorAjuste();
    getAllArquitecturaReferencial();
    getAllFactoresComplejidadAmbiental();
}

function doAjaxSaveFactores() {
    // Factores Ajuste
    var factoresAjuste = {};
    factoresAjuste["factorProductividad"] = document.getElementById('factorProductividad').value;

    var aux1;
    var aux2;
    var boolean;
    var aux11;
    // Factores Complejidad Tecnica
    var factoresComplejidadTecnica1 = {};
    var idTecnica1 = {};
    idTecnica1["nombre"] = "rendimiento";
    if (document.getElementById('rendimiento_aplica').value == 0) {
        boolean = false;
    } else {
        boolean = true;
    }
    factoresComplejidadTecnica1["aplica"] = boolean;
    if (!document.getElementById('rendimiento_definicion').disabled) {
        aux1 = document.getElementById('rendimiento_definicion').value;
        aux2 = document.getElementById('rendimiento_exigencia').value;
    } else {
        aux1 = 0;
        aux2 = 0;
    }
    factoresComplejidadTecnica1["gradoDefinicion"] = aux1;
    factoresComplejidadTecnica1["gradoExigencia"] = aux2;
    factoresComplejidadTecnica1["impacto"] = parseInt(document.getElementById('rendimiento_impacto').innerHTML);
    factoresComplejidadTecnica1["riesgo"] = parseInt(document.getElementById('rendimiento_riesgo').innerHTML);
    factoresComplejidadTecnica1["id"] = idTecnica1;

    var factoresComplejidadTecnica2 = {};
    var idTecnica2 = {};
    idTecnica2["nombre"] = "usabilidad";
    if (document.getElementById('usabilidad_aplica').value == 0) {
        boolean = false;
    } else {
        boolean = true;
    }
    factoresComplejidadTecnica2["aplica"] = boolean;
    if (!document.getElementById('usabilidad_definicion').disabled) {
        aux1 = document.getElementById('usabilidad_definicion').value;
        aux2 = document.getElementById('usabilidad_exigencia').value;
    } else {
        aux1 = 0;
        aux2 = 0;
    }
    factoresComplejidadTecnica2["gradoDefinicion"] = aux1;
    factoresComplejidadTecnica2["gradoExigencia"] = aux2;
    factoresComplejidadTecnica2["impacto"] = parseInt(document.getElementById('usabilidad_impacto').innerHTML);
    factoresComplejidadTecnica2["riesgo"] = parseInt(document.getElementById('usabilidad_riesgo').innerHTML);
    factoresComplejidadTecnica2["id"] = idTecnica2;

    var factoresComplejidadTecnica3 = {};
    var idTecnica3 = {};
    idTecnica3["nombre"] = "portabilidad";
    if (document.getElementById('portabilidad_aplica').value == 0) {
        boolean = false;
    } else {
        boolean = true;
    }
    factoresComplejidadTecnica3["aplica"] = boolean;
    if (!document.getElementById('portabilidad_definicion').disabled) {
        aux1 = document.getElementById('portabilidad_definicion').value;
        aux2 = document.getElementById('portabilidad_exigencia').value;
    } else {
        aux1 = 0;
        aux2 = 0;
    }
    factoresComplejidadTecnica3["gradoDefinicion"] = aux1;
    factoresComplejidadTecnica3["gradoExigencia"] = aux2;
    factoresComplejidadTecnica3["impacto"] = parseInt(document.getElementById('portabilidad_impacto').innerHTML);
    factoresComplejidadTecnica3["riesgo"] = parseInt(document.getElementById('portabilidad_riesgo').innerHTML);
    factoresComplejidadTecnica3["id"] = idTecnica3;

    var factoresComplejidadTecnica4 = {};
    var idTecnica4 = {};
    idTecnica4["nombre"] = "concurrencia";
    if (document.getElementById('concurrencia_aplica').value == 0) {
        boolean = false;
    } else {
        boolean = true;
    }
    factoresComplejidadTecnica4["aplica"] = boolean;
    if (!document.getElementById('concurrencia_definicion').disabled) {
        aux1 = document.getElementById('concurrencia_definicion').value;
        aux2 = document.getElementById('concurrencia_exigencia').value;
    } else {
        aux1 = 0;
        aux2 = 0;
    }
    factoresComplejidadTecnica4["gradoDefinicion"] = aux1;
    factoresComplejidadTecnica4["gradoExigencia"] = aux2;
    factoresComplejidadTecnica4["impacto"] = parseInt(document.getElementById('concurrencia_impacto').innerHTML);
    factoresComplejidadTecnica4["riesgo"] = parseInt(document.getElementById('concurrencia_riesgo').innerHTML);
    factoresComplejidadTecnica4["id"] = idTecnica4;

    var factoresComplejidadTecnica5 = {};
    var idTecnica5 = {};
    idTecnica5["nombre"] = "seguridad";
    if (document.getElementById('seguridad_aplica').value == 0) {
        boolean = false;
    } else {
        boolean = true;
    }
    factoresComplejidadTecnica5["aplica"] = boolean;
    if (!document.getElementById('seguridad_definicion').disabled) {
        aux1 = document.getElementById('seguridad_definicion').value;
        aux2 = document.getElementById('seguridad_exigencia').value;
    } else {
        aux1 = 0;
        aux2 = 0;
    }
    factoresComplejidadTecnica5["gradoDefinicion"] = aux1;
    factoresComplejidadTecnica5["gradoExigencia"] = aux2;
    factoresComplejidadTecnica5["impacto"] = parseInt(document.getElementById('seguridad_impacto').innerHTML);
    factoresComplejidadTecnica5["riesgo"] = parseInt(document.getElementById('seguridad_riesgo').innerHTML);
    factoresComplejidadTecnica5["id"] = idTecnica5;

    // Arquitecturas de Referencia

    var arquitecturaReferencia1 = {};
    var idArquitectura1 = {};
    idArquitectura1["nombre"] = "solucion";
    if (document.getElementById('solucion_aplica').value == 0) {
        arquitecturaReferencia1["aplica"] = false;
    } else {
        arquitecturaReferencia1["aplica"] = true;
    }
    if (!document.getElementById('solucion_definido').disabled) {
        if (document.getElementById('solucion_definido').value == 0) {
            arquitecturaReferencia1["definido"] = false;
        } else {
            arquitecturaReferencia1["definido"] = true
        }
        if (!document.getElementById('solucion_conocimiento').disabled) {
            arquitecturaReferencia1["gradoConocimento"] = document.getElementById('solucion_conocimiento').value;
        } else {
            arquitecturaReferencia1["gradoConocimento"] = false;
        }
    } else {
        arquitecturaReferencia1["definido"] = false;
    }
    arquitecturaReferencia1["impacto"] = parseInt(document.getElementById('solucion_impacto').innerHTML);
    arquitecturaReferencia1["riesgo"] = parseInt(document.getElementById('solucion_riesgo').innerHTML);
    arquitecturaReferencia1["id"] = idArquitectura1;

    var arquitecturaReferencia2 = {};
    var idArquitectura2 = {};
    idArquitectura2["nombre"] = "integracion";
    if (document.getElementById('integracion_aplica').value == 0) {
        arquitecturaReferencia2["aplica"] = false;
    } else {
        arquitecturaReferencia2["aplica"] = true;
    }
    if (!document.getElementById('integracion_definido').disabled) {
        if (document.getElementById('integracion_definido').value == 0) {
            arquitecturaReferencia2["definido"] = false;
        } else {
            arquitecturaReferencia2["definido"] = true
        }
        if (!document.getElementById('integracion_conocimiento').disabled) {
            arquitecturaReferencia2["gradoConocimento"] = document.getElementById('integracion_conocimiento').value;
        } else {
            arquitecturaReferencia2["gradoConocimento"] = 0;
        }
    } else {
        arquitecturaReferencia2["definido"] = false;
    }
    arquitecturaReferencia2["impacto"] = parseInt(document.getElementById('integracion_impacto').innerHTML);
    arquitecturaReferencia2["riesgo"] = parseInt(document.getElementById('integracion_riesgo').innerHTML);
    arquitecturaReferencia2["id"] = idArquitectura2;

    var arquitecturaReferencia3 = {};
    var idArquitectura3 = {};
    idArquitectura3["nombre"] = "logica";
    if (document.getElementById('logica_aplica').value == 0) {
        arquitecturaReferencia3["aplica"] = false;
    } else {
        arquitecturaReferencia3["aplica"] = true;
    }
    if (!document.getElementById('logica_definido').disabled) {
        if (document.getElementById('logica_definido').value == 0) {
            arquitecturaReferencia3["definido"] = false;
        } else {
            arquitecturaReferencia3["definido"] = true
        }
        if (!document.getElementById('logica_conocimiento').disabled) {
            arquitecturaReferencia3["gradoConocimento"] = document.getElementById('logica_conocimiento').value;
        } else {
            arquitecturaReferencia3["gradoConocimento"] = 0;
        }
    } else {
        arquitecturaReferencia3["definido"] = false;
    }
    arquitecturaReferencia3["impacto"] = parseInt(document.getElementById('logica_impacto').innerHTML);
    arquitecturaReferencia3["riesgo"] = parseInt(document.getElementById('logica_riesgo').innerHTML);
    arquitecturaReferencia3["id"] = idArquitectura3;

    var arquitecturaReferencia4 = {};
    var idArquitectura4 = {};
    idArquitectura4["nombre"] = "despliegue";
    if (document.getElementById('despliegue_aplica').value == 0) {
        arquitecturaReferencia4["aplica"] = false;
    } else {
        arquitecturaReferencia4["aplica"] = true;
    }
    if (!document.getElementById('despliegue_definido').disabled) {
        if (document.getElementById('despliegue_definido').value == 0) {
            arquitecturaReferencia4["definido"] = false;
        } else {
            arquitecturaReferencia4["definido"] = true
        }
        if (!document.getElementById('despliegue_conocimiento').disabled) {
            arquitecturaReferencia4["gradoConocimento"] = document.getElementById('despliegue_conocimiento').value;
        } else {
            arquitecturaReferencia4["gradoConocimento"] = 0;
        }
    } else {
        arquitecturaReferencia4["definido"] = false;
    }
    arquitecturaReferencia4["impacto"] = parseInt(document.getElementById('despliegue_impacto').innerHTML);
    arquitecturaReferencia4["riesgo"] = parseInt(document.getElementById('despliegue_riesgo').innerHTML);
    arquitecturaReferencia4["id"] = idArquitectura4;

    // Factores Complejidad Ambiental

    var factoresComplejidadAmbiental1 = {};
    var idAmbiental1 = {};
    idAmbiental1["nombre"] = "experiencia";
    factoresComplejidadAmbiental1["valoracion"] = document.getElementById('experiencia_valoracion').value;
    factoresComplejidadAmbiental1["factorCalculado"] = parseInt(document.getElementById('experiencia_calculado').innerHTML);
    factoresComplejidadAmbiental1["id"] = idAmbiental1;

    var factoresComplejidadAmbiental2 = {};
    var idAmbiental2 = {};
    idAmbiental2["nombre"] = "capacidades";
    factoresComplejidadAmbiental2["valoracion"] = document.getElementById('capacidades_valoracion').value;
    factoresComplejidadAmbiental2["factorCalculado"] = parseInt(document.getElementById('capacidades_calculado').innerHTML);
    factoresComplejidadAmbiental2["id"] = idAmbiental2;

    var factoresComplejidadAmbiental3 = {};
    var idAmbiental3 = {};
    idAmbiental3["nombre"] = "calidad";
    factoresComplejidadAmbiental3["valoracion"] = document.getElementById('calidad_valoracion').value;
    factoresComplejidadAmbiental3["factorCalculado"] = parseInt(document.getElementById('calidad_calculado').innerHTML);
    factoresComplejidadAmbiental3["id"] = idAmbiental3;

    var data = {};
    data["factorAjuste"] = factoresAjuste;
    data["factorComplejidadTecnica1"] = factoresComplejidadTecnica1;
    data["factorComplejidadTecnica2"] = factoresComplejidadTecnica2;
    data["factorComplejidadTecnica3"] = factoresComplejidadTecnica3;
    data["factorComplejidadTecnica4"] = factoresComplejidadTecnica4;
    data["factorComplejidadTecnica5"] = factoresComplejidadTecnica5;
    data["arquitecturaReferencia1"] = arquitecturaReferencia1;
    data["arquitecturaReferencia2"] = arquitecturaReferencia2;
    data["arquitecturaReferencia3"] = arquitecturaReferencia3;
    data["arquitecturaReferencia4"] = arquitecturaReferencia4;
    data["factorComplejidadAmbiental1"] = factoresComplejidadAmbiental1;
    data["factorComplejidadAmbiental2"] = factoresComplejidadAmbiental2;
    data["factorComplejidadAmbiental3"] = factoresComplejidadAmbiental3;

    console.log(data);
    $.ajax({
        type : "POST",
        url : "factores/save",
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