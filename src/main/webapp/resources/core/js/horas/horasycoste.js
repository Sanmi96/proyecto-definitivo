var totalhoras = 0;
var totalNROCriterios = 0;
var tcf_comptecnica_riesgo = 0;
var tcf_arquitecturaref_riesgo = 0;
var tcf_compTecnica_impacto = 0;
var ecf_factCompljAmbiental = 0;
var tcf_arquitecturaRef_impacto = 0;

var POR_FASEANALISIS = 11;
var POR_FASEPRUEBAS = 10;
var EXT_GESTIONPROYECTO = 10;

var POR_GESTION_NUEVODESARROLLO = 3;
var POR_EVALUACION_NUEVODESARROLLO = 5;
var POR_DISENO_NUEVODESARROLLO = 24;
var POR_GESTION_MODIFICACION = 1;
var POR_EVALUACION_MODIFICACION = 1;
var POR_DISENO_MODIFICACION = 18;

var POR_CALIDAD_NUEVODESARROLLO = 10;
var POR_SEGURIDAD_NUEVODESARROLLO = 11;
var POR_DESPLIEGUES_NUEVODESARROLLO = 12;
var POR_CALIDAD_MODIFICACION = 2;
var POR_SEGURIDAD_MODIFICACION = 2;
var POR_DESPLIEGUES_MODIFICACION = 5;

var POR_GESTIONPROYECTO_NUEVODESARROLLO = 10;
var POR_DM_NUEVODESARROLLO = 8;
var POR_GESTIONPROYECTO_MODIFICACION = 8;
var POR_DM_MODIFICACION = 4;

// Cambiar itrs por BD
/*var itr_cen_gdo1 = 13.8306180811852;
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
var itr_os_gdo7 = 59.5468850343965;*/

// Itr's de la base de datos
var itr_cen_gdo1 = document.getElementById('its_cenit_gdo1').value;
var itr_cen_gdo2 = document.getElementById('its_cenit_gdo2').value;
var itr_cen_gdo3 = document.getElementById('its_cenit_gdo3').value;
var itr_cen_gdo4 = document.getElementById('its_cenit_gdo4').value;
var itr_cen_gdo5 = document.getElementById('its_cenit_gdo5').value;
var itr_cen_gdo6 = document.getElementById('its_cenit_gdo6').value;
var itr_os_gdo1 = document.getElementById('its_onsite_gdo1').value;
var itr_os_gdo2 = document.getElementById('its_onsite_gdo2').value;
var itr_os_gdo3 = document.getElementById('its_onsite_gdo3').value;
var itr_os_gdo4 = document.getElementById('its_onsite_gdo4').value;
var itr_os_gdo5 = document.getElementById('its_onsite_gdo5').value;
var itr_os_gdo6 = document.getElementById('its_onsite_gdo6').value;
var itr_os_gdo7 = document.getElementById('its_onsite_gdo7').value;

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

function refreshHorasYCostes() {
    setTotalCriterios();
    setTCFRiesgo();
    recalcDelivery();
}

function setTotalCriterios() {
    totalNROCriterios = document.getElementById("totalNROCriterios").value;
}

function setTCFRiesgo() {
    tcf_comptecnica_riesgo = document.getElementById("tcf_riesgo").innerHTML;
    tcf_arquitecturaref_riesgo = document.getElementById("tcf_riesgo2").innerHTML;
}

function recalcDelivery() {
    sumaDelivery("gestion");
    sumaDelivery("evaluacion");
    selectDelivery("analisis");
    sumaDelivery("diseno");
    sumaDelivery("construccion");
    selectDelivery("testing");
}

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

function setValuesGobierno() {
    proy = document.getElementById('gestionproyecto_por').value;
    proy2 = document.getElementById('gestionproyecto_horas').innerHTML;
    proy3 = document.getElementById('gestionproyecto_coste').innerHTML;
    dm = document.getElementById('dm_por').innerHTML;
    dm2 = document.getElementById('dm_horas').innerHTML;
    dm3 = document.getElementById('dm_coste').innerHTML;
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
    var por_value = document.getElementById(id_name + '_por').innerHTML;
    document.getElementById(id_name + '_horas').innerHTML = Math.round(por_value * (totalhoras / 100));
}
function calcHora() {
    var por_value = document.getElementById('construccion_por').value;
    document.getElementById('construccion_horas').innerHTML = Math.round(por_value * (totalhoras / 100));
}

function calcHorasSel(id_name) {
    var por_value = document.getElementById(id_name + '_por').value;
    document.getElementById(id_name + '_horas').value = Math.round(por_value * (totalhoras / 100));
    var por_value2 = document.getElementById(id_name + '_por').innerHTML;
    document.getElementById(id_name + '_horas').innerHTML = Math.round(por_value2 * (totalhoras / 100));
}

function calcHorasExtras(id_name) {
    var por_value = document.getElementById(id_name + '_por').innerHTML;
    document.getElementById(id_name + '_horas').innerHTML = Math.round(por_value * (window.totaldeliveryhoras / 100));
}

function calcHorasGobierno(id_name) {
    var por_value = document.getElementById(id_name + '_por').innerHTML;
    document.getElementById(id_name + '_horas').innerHTML = Math.round(por_value * (window.totaldeliveryhoras / 100));
}

function limit(id_name) {
    var value = document.getElementById(id_name + '_por').value;
    if (isNaN(value)) {
        value = 0;
        document.getElementById(id_name + '_por').value = value;
    } else if (value > 100) {
        value = 100;
        document.getElementById(id_name + '_por').value = value;
    }
}

function sumaDelivery(id_name) {
    tipo_desarrollo = document.getElementById('tipo_desarrollo').value;
    if (tipo_desarrollo == 0) {
        document.getElementById('gestion_por').innerHTML = POR_GESTION_NUEVODESARROLLO;
        document.getElementById('evaluacion_por').innerHTML = POR_EVALUACION_NUEVODESARROLLO;
        document.getElementById('diseno_por').innerHTML = POR_DISENO_NUEVODESARROLLO;
    } else {
        document.getElementById('gestion_por').innerHTML = POR_GESTION_MODIFICACION;
        document.getElementById('evaluacion_por').innerHTML = POR_EVALUACION_MODIFICACION;
        document.getElementById('diseno_por').innerHTML = POR_DISENO_MODIFICACION;
    }
    var id_value = parseInt(document.getElementById(id_name + '_por').innerHTML);
    var prev_value = getPrevValue(id_value);
    var total = window.totaldelivery - prev_value;
    var test = total + id_value;
    if (test > 100) {
        id_value = (100 - parseInt(test)) + parseInt(id_value);
        document.getElementById(id_name + '_por').innerHTML = id_value;
    }

    calcHoras(id_name);
    calcHora();
    calcCoste(id_name);
    calcTotalHoras();
    refreshTotalDelivery();
}

function getPrevValue(id_value) {
    setValuesDelivery();
    var prev_value = (window.totaldelivery - parseInt(gest) - parseInt(ev) - parseInt(an) - parseInt(dis)
            - parseInt(cons) - parseInt(func))
            + parseInt(id_value);
    return prev_value;
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
}

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

function selectExtras(id_name) {
    var value = 0;
    value = document.getElementById(id_name + "_ip").value;
    var aux = 0;
    tipo_desarrollo = document.getElementById('tipo_desarrollo').value;
    if (value != 0) {
        if (tipo_desarrollo == 0) {
            switch (id_name) {
            case "calidad":
                aux = POR_CALIDAD_NUEVODESARROLLO;
                break;
            case "seguridad":
                aux = POR_SEGURIDAD_NUEVODESARROLLO;
                break;
            case "despliegues":
                aux = POR_DESPLIEGUES_NUEVODESARROLLO;
                break;
            default:
            }
        } else {
            switch (id_name) {
            case "calidad":
                aux = POR_CALIDAD_MODIFICACION;
                break;
            case "seguridad":
                aux = POR_SEGURIDAD_MODIFICACION;
                break;
            case "despliegues":
                aux = POR_DESPLIEGUES_MODIFICACION;
                break;
            default:
            }
        }
    } else {
        switch (id_name) {
        case "calidad":
            aux = 0;
            break;
        case "seguridad":
            aux = 0;
            break;
        case "despliegues":
            aux = 0;
            break;
        default:
        }
        document.getElementById(id_name + '_horas').innerHTML = "0";
        document.getElementById(id_name + '_coste').innerHTML = "0.00";
    }
    document.getElementById(id_name + '_por').innerHTML = parseInt(aux);
    calcHorasExtras(id_name);
    calcHorasSel(id_name);
    calcCoste(id_name);
    refreshTotalExtras();
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

function sumaGobierno(id_name) {
    var id_value = parseInt(document.getElementById(id_name + '_por').value);
    var prev_value = getPrevValueGob(id_value);
    var total = window.totalgobierno - prev_value;
    var test = total + id_value;
    if (test > 100) {
        id_value = (100 - parseInt(test)) + parseInt(id_value);
        document.getElementById(id_name + '_por').value = id_value;
    }

    tipo_desarrollo = document.getElementById('tipo_desarrollo').value;
    if (tipo_desarrollo == 0) {
        document.getElementById('dm_por').innerHTML = POR_DM_NUEVODESARROLLO;
    } else {
        document.getElementById('dm_por').innerHTML = POR_DM_MODIFICACION;
    }
    calcHorasGobierno(id_name);
    calcCoste(id_name);
    refreshTotalGobierno();
    calcTotalHoras();
}

function sumaGobiernoSelect(id_name) {
    var value = 0;
    value = document.getElementById(id_name + "_ip").value;
    var aux = 0;
    tipo_desarrollo = document.getElementById('tipo_desarrollo').value;
    if (value != 0) {
        if (tipo_desarrollo == 0) {
            switch (id_name) {
            case "gestionproyecto":
                aux = POR_GESTIONPROYECTO_NUEVODESARROLLO;
                break;
            default:
            }
        } else {
            switch (id_name) {
            case "gestionproyecto":
                aux = POR_GESTIONPROYECTO_MODIFICACION;
                break;
            default:
            }
        }
    } else {
        switch (id_name) {
        case "gestionproyecto":
            aux = 0;
            break;
        default:
        }
        document.getElementById(id_name + '_horas').innerHTML = "0";
        document.getElementById(id_name + '_coste').innerHTML = "0.00";
    }
    document.getElementById(id_name + '_por').innerHTML = parseInt(aux);
    document.getElementById(id_name + '_por').value = parseInt(aux);
    calcHorasGobierno(id_name);
    calcHorasSel(id_name);
    calcCoste(id_name);
    refreshTotalGobierno();
    calcTotalHoras();
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

function refreshTotalHorasADMDW() {
    totalHorasADMDW = parseInt(totaldeliveryhoras) + parseInt(totalextrashoras) + parseInt(totalgobiernohoras);
    totalCosteADMDW = parseFloat(totaldeliverycoste) + parseFloat(totalextrascoste) + parseFloat(totalgobiernocoste);
    document.getElementById('totalhoras_admdw').innerHTML = totalHorasADMDW;
    document.getElementById('totalcoste_admdw').innerHTML = totalCosteADMDW.toFixed(2);
    calcHorasContingencia();
}

function calcHorasContingencia() {
    horasContingencia = (totalhoras * tcf_comptecnica_riesgo * tcf_arquitecturaref_riesgo) - totalhoras;
    document.getElementById('horascontingencia').innerHTML = horasContingencia.toFixed(2);
}

function calcTotalHoras() {
    totalNROCriterios = document.getElementById("totalNROCriterios").value;
    var factorProductividad = document.getElementById("factorProductividad").value;
    tcf_compTecnica_impacto = document.getElementById("tcf_impacto").innerHTML;
    ecf_factCompljAmbiental = document.getElementById("ecf").innerHTML;
    tcf_arquitecturaRef_impacto = document.getElementById("tcf_impacto2").innerHTML;
    totalhoras = totalNROCriterios * factorProductividad * tcf_compTecnica_impacto * ecf_factCompljAmbiental
            * tcf_arquitecturaRef_impacto;
}

function recalcTodo() {
    selectExtras('calidad');
    selectExtras('seguridad');
    selectExtras('despliegues');
    sumaDelivery('gestion');
    sumaDelivery('evaluacion');
    selectDelivery('analisis');
    sumaDelivery('diseno');
    sumaDelivery('construccion');
    selectDelivery('testing');
    sumaGobiernoSelect('gestionproyecto');
    sumaGobierno('dm');
}