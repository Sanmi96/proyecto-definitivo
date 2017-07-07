var TOTALHORAS = 240;
var TCF_COMPTECNICA_RIESGO = 1.02;
var TCF_ARQUITECTURAREF_RIESGO = 1.1;

var POR_FASEANALISIS = 11;
var POR_FASEPRUEBAS = 10;
var EXT_GESTIONPROYECTO = 10;

var itr_cen_gdo1 = 13.8306180811852;
var itr_cen_gdo2 = 18.2090389615274;
var itr_cen_gdo3 = 24.7538719574876;
var itr_cen_gdo4 = 28.5336109998986;
var itr_cen_gdo5 = 34.8401613499305;
var itr_cen_gdo6 = 46.9998410368089;

var itr_os_gdo1 = 15.2337185382185;
var itr_os_gdo2 = 18.6636558595665;
var itr_os_gdo3 = 26.2576267839576;
var itr_os_gdo4 = 30.7380019223918;
var itr_os_gdo5 = 37.6112692844241;
var itr_os_gdo6 = 47.8412934221327;
var itr_os_gdo7 = 59.5468850343965;

var totaldelivery = 0;
var totaldeliveryhoras = 0;
var totaldeliverycoste = 0;

var totalextras = 0;
var totalextrashoras = 0;
var totalextrascoste = 0;

var totalgobierno = 0;
var totalgobiernohoras = 0;
var totalgobiernocoste = 0;

var totaldeliveryext = 0;
var totaldeliveryhorasext = 0;
var totaldeliverycosteext = 0;

var totalextrasext = 0;
var totalextrashorasext = 0;
var totalextrascosteext = 0;

var totalgobiernoext = 0;
var totalgobiernohorasext = 0;
var totalgobiernocosteext = 0;

var totalHorasADMDW = 0;
var totalHorasCentroTesting = 0;
var totalHorasOnSite = 0;
var totalValorFinal = 0;
var totalCosteADMDW = 0;
var totalCosteCentroTesting = 0;
var totalCosteOnSite = 0;
var totalValorFinalCoste = 0;
var horasContingencia = 0;
// //

function setValuesDelivery() {
    gest = document.getElementById('gestion_por').value;
    ev = document.getElementById('evaluacion_por').value;
    an = document.getElementById('analisis_por').innerHTML;
    dis = document.getElementById('diseno_por').value;
    cons = document.getElementById('construccion_por').value;
    func = document.getElementById('testing_por').innerHTML;
}

function setHorasDelivery() {
    gest2 = document.getElementById('gestion_horas').innerHTML;
    ev2 = document.getElementById('evaluacion_horas').innerHTML;
    an2 = document.getElementById('analisis_horas').innerHTML;
    dis2 = document.getElementById('diseno_horas').innerHTML;
    cons2 = document.getElementById('construccion_horas').innerHTML;
    func2 = document.getElementById('testing_horas').innerHTML;
}

function setCosteDelivery() {
    gest3 = document.getElementById('gestion_coste').innerHTML;
    ev3 = document.getElementById('evaluacion_coste').innerHTML;
    an3 = document.getElementById('analisis_coste').innerHTML;
    dis3 = document.getElementById('diseno_coste').innerHTML;
    cons3 = document.getElementById('construccion_coste').innerHTML;
    func3 = document.getElementById('testing_coste').innerHTML;
}

function setValuesDeliveryExt() {
    testingExt = document.getElementById('testing_ext_por').innerHTML;
    testingExt2 = document.getElementById('testing_ext_horas').innerHTML;
    testingExt3 = document.getElementById('testing_ext_coste').innerHTML;
    analisisExt = document.getElementById('analisis_ext_por').innerHTML;
    analisisExt2 = document.getElementById('analisis_ext_horas').innerHTML;
    analisisExt3 = document.getElementById('analisis_ext_coste').innerHTML;
}

function setValuesExtras() {
    cal = document.getElementById('calidad_por').innerHTML;
    seg = document.getElementById('seguridad_por').innerHTML;
    desp = document.getElementById('despliegues_por').innerHTML;
    cal2 = document.getElementById('calidad_horas').innerHTML;
    seg2 = document.getElementById('seguridad_horas').innerHTML;
    desp2 = document.getElementById('despliegues_horas').innerHTML;
    cal3 = document.getElementById('calidad_coste').innerHTML;
    seg3 = document.getElementById('seguridad_coste').innerHTML;
    desp3 = document.getElementById('despliegues_coste').innerHTML;
}

function setValuesExtrasExt() {
    calidadExt = document.getElementById('calidad_ext_por').innerHTML;
    seguridadExt = document.getElementById('seguridad_ext_por').innerHTML;
    desplieguesExt = document.getElementById('despliegues_ext_por').innerHTML;
    calidadExt2 = document.getElementById('calidad_ext_horas').innerHTML;
    seguridadExt2 = document.getElementById('seguridad_ext_horas').innerHTML;
    desplieguesExt2 = document.getElementById('despliegues_ext_horas').innerHTML;
    calidadExt3 = document.getElementById('calidad_ext_coste').innerHTML;
    seguridadExt3 = document.getElementById('seguridad_ext_coste').innerHTML;
    desplieguesExt3 = document.getElementById('despliegues_ext_coste').innerHTML;
}

function setValuesGobierno() {
    proy = document.getElementById('gestionproyecto_por').value;
    proy2 = document.getElementById('gestionproyecto_horas').innerHTML;
    proy3 = document.getElementById('gestionproyecto_coste').innerHTML;
    dm = document.getElementById('dm_por').value;
    dm2 = document.getElementById('dm_horas').innerHTML;
    dm3 = document.getElementById('dm_coste').innerHTML;
}

function setValuesGobiernoExt() {
    gestionProyectoExt = document.getElementById('gestionproyecto_ext_por').innerHTML;
    gestionProyectoExt2 = document.getElementById('gestionproyecto_ext_horas').innerHTML;
    gestionProyectoExt3 = document.getElementById('gestionproyecto_ext_coste').innerHTML;
}

function calcCoste(id_name) {
    var aux = 0;
    var horas_value = parseInt(document.getElementById(id_name + '_horas').innerHTML);
    if (horas_value != 0) {
        switch (id_name) {
        case "testing_ext":
            aux = (window.totaldeliveryhorasext * itr_cen_gdo4 * 0.25)
                    + (window.totaldeliveryhorasext * itr_cen_gdo1 * 0.5)
                    + (window.totaldeliveryhorasext * itr_cen_gdo2 * 0.25);
            break;
        case "analisis_ext":
            aux = window.totaldeliveryhorasext * itr_os_gdo4;
            break;
        case "despliegues_ext":
            aux = horas_value * itr_os_gdo3;
            break;
        case "calidad_ext":
        case "seguridad_ext":
        case "gestionproyecto_ext":
            aux = horas_value * itr_os_gdo5;
            break;
        case "gestion":
            aux = ((horas_value * 0.5) * itr_cen_gdo6) + ((horas_value * 0.5) * itr_cen_gdo3);
            break;
        case "construccion":
            aux = ((horas_value * 0.25) * itr_cen_gdo2) + ((horas_value * 0.75) * itr_cen_gdo1);
            break;
        case "diseno":
        case "despliegues":
            aux = horas_value * itr_cen_gdo3;
            break;
        case "analisis":
        case "testing":
            aux = horas_value * itr_cen_gdo4;
            break;
        case "calidad":
        case "seguridad":
        case "gestionproyecto":
        case "dm":
            aux = horas_value * itr_cen_gdo5;
            break;
        case "evaluacion":
            aux = horas_value * itr_cen_gdo6;
            break;
        default:
        }
    }
    document.getElementById(id_name + '_coste').innerHTML = aux.toFixed(2);

}

function calcHoras(id_name) {
    // value para inputs
    var por_value = document.getElementById(id_name + '_por').value;
    document.getElementById(id_name + '_horas').innerHTML = Math.round(por_value * (TOTALHORAS / 100));
}

function calcHorasSel(id_name) {
    // innerHTML para select
    var por_value = document.getElementById(id_name + '_por').innerHTML;
    document.getElementById(id_name + '_horas').innerHTML = Math.round(por_value * (TOTALHORAS / 100));
}

function calcHorasExtras(id_name) {
    var por_value = document.getElementById(id_name + '_por').innerHTML;
    document.getElementById(id_name + '_horas').innerHTML = Math.round(por_value * (window.totaldeliveryhoras / 100));
}

function calcHorasGobierno(id_name) {
    var por_value = document.getElementById(id_name + '_por').value;
    document.getElementById(id_name + '_horas').innerHTML = Math.round(por_value * (window.totaldeliveryhoras / 100));
}

function limit(id_name) {
    var value = parseInt(document.getElementById(id_name + '_por').value);
    if (isNaN(value)) {
        value = 0;
        document.getElementById(id_name + '_por').value = value;
    } else if (value > 100) {
        value = 100;
        document.getElementById(id_name + '_por').value = value;
    }
}

// ////////////////

function sumaDelivery(id_name) {
    var id_value = parseInt(document.getElementById(id_name + '_por').value);
    var prev_value = getPrevValue(id_value);
    var total = window.totaldelivery - prev_value;
    var test = total + id_value;
    if (test > 100) {
        id_value = (100 - parseInt(test)) + parseInt(id_value);
        document.getElementById(id_name + '_por').value = id_value;
    }
    calcHoras(id_name);
    calcCoste(id_name);
    refreshTotalDelivery();
    refreshTableDeliveryExt();
}

function getPrevValue(id_value) {
    setValuesDelivery();
    var prev_value = (window.totaldelivery - parseInt(gest) - parseInt(ev) - parseInt(an) - parseInt(dis)
            - parseInt(cons) - parseInt(func))
            + parseInt(id_value);
    return prev_value;
}

function refreshTableDeliveryExt() {
    var id_name = "testing";
    selectDelivery(id_name);
    id_name = "analisis";
    selectDelivery(id_name);
    id_name = "testing"; // Se requiere para recalcular el valor
    selectDelivery(id_name);
}

function selectDelivery(id_name) {
    var value = 0;
    value = document.getElementById(id_name + '_ip').value;
    var aux = 0;
    var aux2 = 0;
    if (value != 0) {
        switch (id_name) {
        case "analisis":
            aux = POR_FASEANALISIS;
            aux2 = 0;
            break;
        case "testing":
            aux = POR_FASEPRUEBAS;
            aux2 = 0;
            break;
        default:
        }
    } else {
        switch (id_name) {
        case "analisis":
            aux = 0;
            aux2 = POR_FASEANALISIS;
            break;
        case "testing":
            aux = 0;
            aux2 = POR_FASEPRUEBAS;
            break;
        default:
        }
    }
    document.getElementById(id_name + '_por').innerHTML = parseInt(aux);
    calcHorasSel(id_name);
    calcCoste(id_name);
    refreshTotalDelivery();
    calcDeliveryExt(id_name, aux2);
    // Por arreglar
}

//

function refreshTotalDelivery() {
    setValuesDelivery();
    setHorasDelivery();
    setCosteDelivery();
    window.totaldelivery = parseInt(gest) + parseInt(ev) + parseInt(an) + parseInt(dis) + parseInt(cons)
            + parseInt(func);
    window.totaldeliveryhoras = parseInt(gest2) + parseInt(ev2) + parseInt(an2) + parseInt(dis2) + parseInt(cons2)
            + parseInt(func2);
    window.totaldeliverycoste = parseFloat(gest3) + parseFloat(ev3) + parseFloat(an3) + parseFloat(dis3)
            + parseFloat(cons3) + parseFloat(func3);
    if (isNaN(window.totaldelivery)) {
        window.totaldelivery = 0;
    }
    if ((POR_FASEANALISIS + totaldelivery) > 100 && an == 0) {
        document.getElementById('analisis_ip').disabled = true;
    } else {
        document.getElementById('analisis_ip').disabled = false;
    }
    if ((POR_FASEPRUEBAS + totaldelivery) > 100 && func == 0) {
        document.getElementById('testing_ip').disabled = true;
    } else {
        document.getElementById('testing_ip').disabled = false;
    }

    document.getElementById('del_por').innerHTML = totaldelivery + "%";
    document.getElementById('del_horas').innerHTML = totaldeliveryhoras;
    document.getElementById('del_coste').innerHTML = "&euro;&nbsp;" + totaldeliverycoste.toFixed(2);
    refreshTableExtras();
    refreshTableGobierno();
    refreshTotalHorasADMDW();
}

// //////////////

function selectExtras(id_name) {
    var ip_value = document.getElementById(id_name + "_ip").value;
    var niv_value = document.getElementById(id_name + "_niv").value;
    if (ip_value == 0) {
        document.getElementById(id_name + '_por').innerHTML = "0";
        document.getElementById(id_name + '_horas').innerHTML = "0";
        document.getElementById(id_name + '_coste').innerHTML = "0.00";
        id_name = id_name + '_ext';
    } else {
        document.getElementById(id_name + '_ext_por').innerHTML = "0";
        document.getElementById(id_name + '_ext_horas').innerHTML = "0";
        document.getElementById(id_name + '_ext_coste').innerHTML = "0.00";
    }
    document.getElementById(id_name + '_por').innerHTML = niv_value;
    calcHorasExtras(id_name);
    calcCoste(id_name);
    refreshTotalExtras();
    refreshTotalExtrasExt();
    // calcExtrasExt(id_name);
}

function refreshTableExtras() {
    var id_name = "calidad";
    selectExtras(id_name);
    id_name = "seguridad";
    selectExtras(id_name);
    id_name = "despliegues";
    selectExtras(id_name);
}

function refreshTotalExtras() {
    setValuesExtras();
    window.totalextras = parseInt(cal) + parseInt(seg) + parseInt(desp);
    window.totalextrashoras = parseInt(cal2) + parseInt(seg2) + parseInt(desp2);
    window.totalextrascoste = parseFloat(cal3) + parseFloat(seg3) + parseFloat(desp3);
    document.getElementById('extra_por').innerHTML = totalextras + "%";
    document.getElementById('extra_horas').innerHTML = totalextrashoras;
    document.getElementById('extra_coste').innerHTML = "&euro;&nbsp;" + totalextrascoste.toFixed(2);
    refreshTotalHorasADMDW();
}

// ///////////////

function sumaGobierno(id_name) {
    var id_value = parseInt(document.getElementById(id_name + '_por').value);
    var prev_value = getPrevValueGob(id_value);
    var total = window.totalgobierno - prev_value;
    var test = total + id_value;
    if (test > 100) {
        id_value = (100 - parseInt(test)) + parseInt(id_value);
        document.getElementById(id_name + '_por').value = id_value;
    }
    calcHorasGobierno(id_name);
    calcCoste(id_name);
    refreshTotalGobierno();
}

function sumaGobiernoSelect(id_name) {
    var id_value = parseInt(document.getElementById(id_name + '_por').value);
    var ip_value = document.getElementById(id_name + '_ip').value;
    var prev_value = getPrevValueGob(id_value);
    var total = window.totalgobierno - prev_value;
    var test = total + id_value;
    if (test > 100) {
        id_value = (100 - parseInt(test)) + parseInt(id_value);
        document.getElementById(id_name + '_por').value = id_value;
    }
    document.getElementById(id_name + '_ext_por').innerHTML = id_value;
    if (ip_value == 0) {
        // document.getElementById(id_name+'_por').value = 0;
        document.getElementById(id_name + '_horas').innerHTML = "0";
        document.getElementById(id_name + '_coste').innerHTML = "0.00"
        id_name = id_name + "_ext";
        calcHorasExtras(id_name);
    } else {
        document.getElementById(id_name + '_ext_por').innerHTML = "0";
        document.getElementById(id_name + '_ext_horas').innerHTML = "0";
        document.getElementById(id_name + '_ext_coste').innerHTML = "0.00";
        calcHorasGobierno(id_name);
    }
    calcCoste(id_name);
    refreshTotalGobierno();
    refreshTotalGobiernoExt();
}

function getPrevValueGob(id_value) {
    setValuesGobierno();
    var prev_value = (window.totalgobierno - parseInt(proy) - parseInt(dm)) + parseInt(id_value);
    return prev_value;
}

function refreshTableGobierno() {
    var id_name = "gestionproyecto";
    sumaGobiernoSelect(id_name);
    id_name = "dm";
    sumaGobierno(id_name);
}

function refreshTotalGobierno() {
    setValuesGobierno();
    window.totalgobierno = parseInt(proy) + parseInt(dm);
    window.totalgobiernohoras = parseInt(proy2) + parseInt(dm2);
    window.totalgobiernocoste = parseFloat(proy3) + parseFloat(dm3);
    document.getElementById('gobierno_por').innerHTML = totalgobierno + "%";
    document.getElementById('gobierno_horas').innerHTML = totalgobiernohoras;
    document.getElementById('gobierno_coste').innerHTML = "&euro;&nbsp;" + totalgobiernocoste.toFixed(2);
    refreshTotalHorasADMDW();
}

// //////////////////////

function calcDeliveryExt(id_name, aux) {
    document.getElementById(id_name + '_ext_por').innerHTML = aux;
    document.getElementById(id_name + '_ext_horas').innerHTML = Math.round(aux * (window.totaldeliveryhoras / 100));
    refreshTotalDeliveryExt();
    calcCoste(id_name + "_ext");
    refreshTotalDeliveryExtCoste();
}

function refreshTotalDeliveryExt() {
    setValuesDeliveryExt();
    totaldeliveryext = parseInt(testingExt) + parseInt(analisisExt);
    totaldeliveryhorasext = parseInt(testingExt2) + parseInt(analisisExt2);
    document.getElementById('delivery_ext_por').innerHTML = window.totaldeliveryext + "%";
    document.getElementById('delivery_ext_horas').innerHTML = window.totaldeliveryhorasext;
}

function refreshTotalDeliveryExtCoste() {
    setValuesDeliveryExt();
    totaldeliverycosteext = parseFloat(testingExt3) + parseFloat(analisisExt3);
    document.getElementById('delivery_ext_coste').innerHTML = "&euro;&nbsp;" + window.totaldeliverycosteext.toFixed(2);
    refreshTotalHorasOnSite();
}

function refreshTotalExtrasExt() {
    setValuesExtrasExt();
    totalextrasext = parseInt(calidadExt) + parseInt(seguridadExt) + parseInt(desplieguesExt);
    totalextrashorasext = parseInt(calidadExt2) + parseInt(seguridadExt2) + parseInt(desplieguesExt2);
    totalextrascosteext = parseFloat(calidadExt3) + parseFloat(seguridadExt3) + parseFloat(desplieguesExt3);
    document.getElementById('extras_ext_por').innerHTML = window.totalextrasext + "%";
    document.getElementById('extras_ext_horas').innerHTML = window.totalextrashorasext;
    document.getElementById('extras_ext_coste').innerHTML = "&euro;&nbsp;" + window.totalextrascosteext.toFixed(2);
    refreshTotalHorasOnSite();
}

function refreshTotalGobiernoExt() {
    setValuesGobiernoExt();
    totalgobiernoext = parseInt(gestionProyectoExt);
    totalgobiernohorasext = parseInt(gestionProyectoExt2);
    totalgobiernocosteext = parseFloat(gestionProyectoExt3);
    document.getElementById('gobierno_ext_por').innerHTML = window.totalgobiernoext + "%";
    document.getElementById('gobierno_ext_horas').innerHTML = window.totalgobiernohorasext;
    document.getElementById('gobierno_ext_coste').innerHTML = "&euro;&nbsp;" + window.totalgobiernocosteext.toFixed(2);
    refreshTotalHorasCentroTesting();
    refreshTotalHorasOnSite();
}

// //////////////////////

function refreshTotalHorasADMDW() {
    totalHorasADMDW = parseInt(totaldeliveryhoras) + parseInt(totalextrashoras) + parseInt(totalgobiernohoras);
    totalCosteADMDW = parseFloat(totaldeliverycoste) + parseFloat(totalextrascoste) + parseFloat(totalgobiernocoste);
    document.getElementById('totalhoras_admdw').innerHTML = totalHorasADMDW;
    document.getElementById('totalcoste_admdw').innerHTML = totalCosteADMDW.toFixed(2);
    refreshTotalValorFinal();
}

function refreshTotalHorasCentroTesting() {
    totalHorasCentroTesting = document.getElementById('testing_ext_horas').innerHTML;
    totalCosteCentroTesting = document.getElementById('testing_ext_coste').innerHTML;
    document.getElementById('totalhoras_centrotesting').innerHTML = parseInt(totalHorasCentroTesting);
    document.getElementById('totalcoste_centrotesting').innerHTML = parseFloat(totalCosteCentroTesting).toFixed(2);
    refreshTotalValorFinal();
}

function refreshTotalHorasOnSite() {
    var aux = document.getElementById('testing_ext_horas').innerHTML;
    var aux2 = document.getElementById('analisis_ext_coste').innerHTML;
    totalHorasOnSite = parseInt(totaldeliveryhorasext) - parseInt(aux) + parseInt(totalextrashorasext)
            + parseInt(totalgobiernohorasext);
    totalCosteOnSite = parseFloat(aux2) + parseFloat(totalextrascosteext) + parseFloat(totalgobiernocosteext);
    document.getElementById('totalhoras_onsite').innerHTML = totalHorasOnSite;
    document.getElementById('totalcoste_onsite').innerHTML = totalCosteOnSite.toFixed(2);
    refreshTotalValorFinal();
}

function refreshTotalValorFinal() {
    totalValorFinal = parseInt(totalHorasADMDW) + parseInt(totalHorasCentroTesting) + parseInt(totalHorasOnSite);
    totalValorFinalCoste = parseFloat(totalCosteADMDW) + parseFloat(totalCosteCentroTesting)
            + parseFloat(totalCosteOnSite);
    document.getElementById('totalhoras_valorfinal').innerHTML = totalValorFinal;
    document.getElementById('totalcoste_valorfinal').innerHTML = "&euro;&nbsp;" + totalValorFinalCoste.toFixed(2);
    calcHorasContingencia();// Provisional
}

function calcHorasContingencia() {
    horasContingencia = (TOTALHORAS * TCF_COMPTECNICA_RIESGO * TCF_ARQUITECTURAREF_RIESGO) - TOTALHORAS;
    document.getElementById('horascontingencia').innerHTML = horasContingencia.toFixed(2);
}