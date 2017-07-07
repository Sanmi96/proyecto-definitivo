function calculate(fila) {
    var apl = 0;
    apl = document.getElementById(fila + "_aplica").value;

    if (apl == 0) {
        document.getElementById(fila + "_definicion").disabled = true;
        document.getElementById(fila + "_exigencia").disabled = true;

        document.getElementById(fila + "_definicion").value = 0;
        document.getElementById(fila + "_exigencia").value = 0;

        document.getElementById(fila + "_impacto_hidden").value = parseInt(0);
        document.getElementById(fila + "_impacto").innerHTML = parseInt(0);

        document.getElementById(fila + "_riesgo_hidden").value = parseInt(0);
        document.getElementById(fila + "_riesgo").innerHTML = parseInt(0);

    } else {

        document.getElementById(fila + "_definicion").disabled = false;
        document.getElementById(fila + "_exigencia").disabled = false;

        var definicion = 0;
        definicion = parseInt(document.getElementById(fila + "_definicion").value);
        document.getElementById(fila + "_riesgo_hidden").value = parseInt(15 - (definicion * 5));
        document.getElementById(fila + "_riesgo").innerHTML = parseInt(15 - (definicion * 5));

        var exigencia = 0;
        exigencia = parseInt(document.getElementById(fila + "_exigencia").value);
        document.getElementById(fila + "_impacto_hidden").value = parseInt(2 + (exigencia * 2));
        document.getElementById(fila + "_impacto").innerHTML = parseInt(2 + (exigencia * 2));

    }

    refresh();
}

function refresh() {
    var totalImpacto = 0;
    totalImpacto = parseInt(document.getElementById("rendimiento_impacto_hidden").value)
            + parseInt(document.getElementById("usabilidad_impacto_hidden").value)
            + parseInt(document.getElementById("portabilidad_impacto_hidden").value)
            + parseInt(document.getElementById("concurrencia_impacto_hidden").value)
            + parseInt(document.getElementById("seguridad_impacto_hidden").value);

    var totalRiesgo = 0;
    totalRiesgo = parseInt(document.getElementById("rendimiento_riesgo_hidden").value)
            + parseInt(document.getElementById("usabilidad_riesgo_hidden").value)
            + parseInt(document.getElementById("portabilidad_riesgo_hidden").value)
            + parseInt(document.getElementById("concurrencia_riesgo_hidden").value)
            + parseInt(document.getElementById("seguridad_riesgo_hidden").value);

    document.getElementById("total_impacto_hidden").value = totalImpacto;
    document.getElementById("total_impacto").innerHTML = totalImpacto;
    document.getElementById("total_riesgo_hidden").value = totalRiesgo;
    document.getElementById("total_riesgo").innerHTML = totalRiesgo;

    var res = 0;
    res = new Big(1 + ((0.2 / 50) * totalImpacto));
    document.getElementById("tcf_impacto_hidden").value = res.round(2, 1);
    document.getElementById("tcf_impacto").innerHTML = res.round(2, 1);
    res = new Big(1 + ((0.05 / 75) * totalRiesgo));
    document.getElementById("tcf_riesgo_hidden").value = res.round(2, 1);
    document.getElementById("tcf_riesgo").innerHTML = res.round(2, 1);
    refreshHorasYCostes();
}

function calculate2(fila) {

    var row = "solucion_aplica";
    var aplica = 0;
    aplica = document.getElementById(fila + "_aplica").value;

    if (aplica == 0) {
        document.getElementById(fila + "_definido").disabled = true;
        document.getElementById(fila + "_conocimiento").disabled = true;

        document.getElementById(fila + "_definido").value = 0;
        document.getElementById(fila + "_conocimiento").value = 0;

        document.getElementById(fila + "_impacto").innerHTML = 0;
        document.getElementById(fila + "_impacto_hidden").value = 0;
        document.getElementById(fila + "_riesgo").innerHTML = 0;
        document.getElementById(fila + "_riesgo_hidden").value = 0;

    } else {
        document.getElementById(fila + "_definido").disabled = false;

        var definido = false;
        definido = document.getElementById(fila + "_definido").value;
        if (definido == 0) {
            document.getElementById(fila + "_conocimiento").disabled = true;
            document.getElementById(fila + "_conocimiento").value = 0;
            document.getElementById(fila + "_impacto").innerHTML = 15;
            document.getElementById(fila + "_impacto_hidden").value = 15;
            document.getElementById(fila + "_riesgo").innerHTML = 0;
            document.getElementById(fila + "_riesgo_hidden").value = 0;

        } else {
            document.getElementById(fila + "_conocimiento").disabled = false;
            document.getElementById(fila + "_impacto").innerHTML = 0;
            document.getElementById(fila + "_impacto_hidden").value = 0;
            document.getElementById(fila + "_riesgo").innerHTML = (15 - (5 * document.getElementById(fila
                    + "_conocimiento").value));
            document.getElementById(fila + "_riesgo_hidden").value = (15 - (5 * document.getElementById(fila
                    + "_conocimiento").value));
        }
    }
    refresh2();
}

function refresh2() {
    var totalImpacto = 0;
    totalImpacto = parseInt(document.getElementById("solucion_impacto_hidden").value)
            + parseInt(document.getElementById("integracion_impacto_hidden").value)
            + parseInt(document.getElementById("logica_impacto_hidden").value)
            + parseInt(document.getElementById("despliegue_impacto_hidden").value);

    var totalRiesgo = 0;
    totalRiesgo = parseInt(document.getElementById("solucion_riesgo_hidden").value)
            + parseInt(document.getElementById("integracion_riesgo_hidden").value)
            + parseInt(document.getElementById("logica_riesgo_hidden").value)
            + parseInt(document.getElementById("despliegue_riesgo_hidden").value);

    document.getElementById("total_impacto2_hidden").value = totalImpacto;
    document.getElementById("total_impacto2").innerHTML = totalImpacto;
    document.getElementById("total_riesgo2_hidden").value = totalRiesgo;
    document.getElementById("total_riesgo2").innerHTML = totalRiesgo;

    var res = 0;

    res = new Big(((1 + (0.2 / 60) * parseInt(totalImpacto))));
    // res = 0.1+0.2;
    document.getElementById("tcf_impacto2_hidden").value = res.round(2, 1);
    document.getElementById("tcf_impacto2").innerHTML = res.round(2, 1);

    res = new Big(((1 + (0.1 / 60) * parseInt(totalRiesgo))));
    document.getElementById("tcf_riesgo2_hidden").value = res.round(2, 1);
    document.getElementById("tcf_riesgo2").innerHTML = res.round(2, 1);
    refreshHorasYCostes();
}

function calculate3(fila) {

    var res = 0;
    res = parseInt(document.getElementById(fila + "_valoracion").value);
    document.getElementById(fila + "_calculado").innerHTML = res;
    document.getElementById(fila + "_calculado_hidden").value = res;

    refresh3();
}

function refresh3() {

    var total = 0;
    total = parseInt(document.getElementById("experiencia_valoracion").value)
            + parseInt(document.getElementById("capacidades_valoracion").value)
            + parseInt(document.getElementById("calidad_valoracion").value);

    document.getElementById("total").innerHTML = total;
    document.getElementById("total_hidden").value = total;

    total = new Big(1 + ((0.1 / 40) * parseInt(total)));

    document.getElementById("ecf").innerHTML = total.round(2, 1);
    document.getElementById("ecf_hidden").innerHTML = total.round(2, 1);
    refreshHorasYCostes();
}