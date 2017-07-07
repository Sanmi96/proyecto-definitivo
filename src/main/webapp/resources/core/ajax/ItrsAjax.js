function refreshItrs(itr) {
    if (itr.length == 0) {
        document.getElementById('gbs_cenit_gdo1').value = 0;
        document.getElementById('gbs_cenit_gdo2').value = 0;
        document.getElementById('gbs_cenit_gdo3').value = 0;
        document.getElementById('gbs_cenit_gdo4').value = 0;
        document.getElementById('gbs_cenit_gdo5').value = 0;
        document.getElementById('gbs_cenit_gdo6').value = 0;
        document.getElementById('gbs_cenit_gdo7').value = 0;
        document.getElementById('gbs_sap_gdo1').value = 0;
        document.getElementById('gbs_sap_gdo2').value = 0;
        document.getElementById('gbs_sap_gdo3').value = 0;
        document.getElementById('gbs_sap_gdo4').value = 0;
        document.getElementById('gbs_sap_gdo5').value = 0;
        document.getElementById('gbs_sap_gdo6').value = 0;
        document.getElementById('gbs_sap_gdo7').value = 0;
        document.getElementById('gbs_onsite_gdo1').value = 0;
        document.getElementById('gbs_onsite_gdo2').value = 0;
        document.getElementById('gbs_onsite_gdo3').value = 0;
        document.getElementById('gbs_onsite_gdo4').value = 0;
        document.getElementById('gbs_onsite_gdo5').value = 0;
        document.getElementById('gbs_onsite_gdo6').value = 0;
        document.getElementById('gbs_onsite_gdo7').value = 0;
        document.getElementById('onsite_dir').value = 0;
        document.getElementById('its_cenit_gdo1').value = 0;
        document.getElementById('its_cenit_gdo2').value = 0;
        document.getElementById('its_cenit_gdo3').value = 0;
        document.getElementById('its_cenit_gdo4').value = 0;
        document.getElementById('its_cenit_gdo5').value = 0;
        document.getElementById('its_cenit_gdo6').value = 0;
        document.getElementById('its_onsite_gdo1').value = 0;
        document.getElementById('its_onsite_gdo2').value = 0;
        document.getElementById('its_onsite_gdo3').value = 0;
        document.getElementById('its_onsite_gdo4').value = 0;
        document.getElementById('its_onsite_gdo5').value = 0;
        document.getElementById('its_onsite_gdo6').value = 0;
        document.getElementById('its_onsite_gdo7').value = 0;
    } else {
        for (i = 0; i < itr.length; i++) {
            document.getElementById('gbs_cenit_gdo1').value = itr[i].gbsCenitGdo1;
            document.getElementById('gbs_cenit_gdo2').value = itr[i].gbsCenitGdo2;
            document.getElementById('gbs_cenit_gdo3').value = itr[i].gbsCenitGdo3;
            document.getElementById('gbs_cenit_gdo4').value = itr[i].gbsCenitGdo4;
            document.getElementById('gbs_cenit_gdo5').value = itr[i].gbsCenitGdo5;
            document.getElementById('gbs_cenit_gdo6').value = itr[i].gbsCenitGdo6;
            document.getElementById('gbs_cenit_gdo7').value = itr[i].gbsCenitGdo7;
            document.getElementById('gbs_sap_gdo1').value = itr[i].gbsSapGdo1;
            document.getElementById('gbs_sap_gdo2').value = itr[i].gbsSapGdo2;
            document.getElementById('gbs_sap_gdo3').value = itr[i].gbsSapGdo3;
            document.getElementById('gbs_sap_gdo4').value = itr[i].gbsSapGdo4;
            document.getElementById('gbs_sap_gdo5').value = itr[i].gbsSapGdo5;
            document.getElementById('gbs_sap_gdo6').value = itr[i].gbsSapGdo6;
            document.getElementById('gbs_sap_gdo7').value = itr[i].gbsSapGdo7;
            document.getElementById('gbs_onsite_gdo1').value = itr[i].gbsOnsiteGdo1;
            document.getElementById('gbs_onsite_gdo2').value = itr[i].gbsOnsiteGdo2;
            document.getElementById('gbs_onsite_gdo3').value = itr[i].gbsOnsiteGdo3;
            document.getElementById('gbs_onsite_gdo4').value = itr[i].gbsOnsiteGdo4;
            document.getElementById('gbs_onsite_gdo5').value = itr[i].gbsOnsiteGdo5;
            document.getElementById('gbs_onsite_gdo6').value = itr[i].gbsOnsiteGdo6;
            document.getElementById('gbs_onsite_gdo7').value = itr[i].gbsOnsiteGdo7;
            document.getElementById('onsite_dir').value = itr[i].dir;
            document.getElementById('its_cenit_gdo1').value = itr[i].itsCenitGdo1;
            document.getElementById('its_cenit_gdo2').value = itr[i].itsCenitGdo2;
            document.getElementById('its_cenit_gdo3').value = itr[i].itsCenitGdo3;
            document.getElementById('its_cenit_gdo4').value = itr[i].itsCenitGdo4;
            document.getElementById('its_cenit_gdo5').value = itr[i].itsCenitGdo5;
            document.getElementById('its_cenit_gdo6').value = itr[i].itsCenitGdo6;
            document.getElementById('its_onsite_gdo1').value = itr[i].itsOnsiteGdo1;
            document.getElementById('its_onsite_gdo2').value = itr[i].itsOnsiteGdo2;
            document.getElementById('its_onsite_gdo3').value = itr[i].itsOnsiteGdo3;
            document.getElementById('its_onsite_gdo4').value = itr[i].itsOnsiteGdo4;
            document.getElementById('its_onsite_gdo5').value = itr[i].itsOnsiteGdo5;
            document.getElementById('its_onsite_gdo6').value = itr[i].itsOnsiteGdo6;
            document.getElementById('its_onsite_gdo7').value = itr[i].itsOnsiteGdo7;
        }
    }
}

function getAllItrs() {
    $.ajax({
        type : "POST",
        url : "itrAjax",
        success : function(itr) {
            console.log(itr);
            refreshItrs(itr)
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function doAjaxSaveItrs() {

    var data = {};
    data["gbsCenitGdo1"] = parseFloat(document.getElementById('gbs_cenit_gdo1').value);
    data["gbsCenitGdo2"] = parseFloat(document.getElementById('gbs_cenit_gdo2').value);
    data["gbsCenitGdo3"] = parseFloat(document.getElementById('gbs_cenit_gdo3').value);
    data["gbsCenitGdo4"] = parseFloat(document.getElementById('gbs_cenit_gdo4').value);
    data["gbsCenitGdo5"] = parseFloat(document.getElementById('gbs_cenit_gdo5').value);
    data["gbsCenitGdo6"] = parseFloat(document.getElementById('gbs_cenit_gdo6').value);
    data["gbsCenitGdo7"] = parseFloat(document.getElementById('gbs_cenit_gdo7').value);
    data["gbsSapGdo1"] = parseFloat(document.getElementById('gbs_sap_gdo1').value);
    data["gbsSapGdo2"] = parseFloat(document.getElementById('gbs_sap_gdo2').value);
    data["gbsSapGdo3"] = parseFloat(document.getElementById('gbs_sap_gdo3').value);
    data["gbsSapGdo4"] = parseFloat(document.getElementById('gbs_sap_gdo4').value);
    data["gbsSapGdo5"] = parseFloat(document.getElementById('gbs_sap_gdo5').value);
    data["gbsSapGdo6"] = parseFloat(document.getElementById('gbs_sap_gdo6').value);
    data["gbsSapGdo7"] = parseFloat(document.getElementById('gbs_sap_gdo7').value);
    data["gbsOnsiteGdo1"] = parseFloat(document.getElementById('gbs_onsite_gdo1').value);
    data["gbsOnsiteGdo2"] = parseFloat(document.getElementById('gbs_onsite_gdo2').value);
    data["gbsOnsiteGdo3"] = parseFloat(document.getElementById('gbs_onsite_gdo3').value);
    data["gbsOnsiteGdo4"] = parseFloat(document.getElementById('gbs_onsite_gdo4').value);
    data["gbsOnsiteGdo5"] = parseFloat(document.getElementById('gbs_onsite_gdo5').value);
    data["gbsOnsiteGdo6"] = parseFloat(document.getElementById('gbs_onsite_gdo6').value);
    data["gbsOnsiteGdo7"] = parseFloat(document.getElementById('gbs_onsite_gdo7').value);
    data["dir"] = parseFloat(document.getElementById('onsite_dir').value);
    data["itsCenitGdo1"] = parseFloat(document.getElementById('its_cenit_gdo1').value);
    data["itsCenitGdo2"] = parseFloat(document.getElementById('its_cenit_gdo2').value);
    data["itsCenitGdo3"] = parseFloat(document.getElementById('its_cenit_gdo3').value);
    data["itsCenitGdo4"] = parseFloat(document.getElementById('its_cenit_gdo4').value);
    data["itsCenitGdo5"] = parseFloat(document.getElementById('its_cenit_gdo5').value);
    data["itsCenitGdo6"] = parseFloat(document.getElementById('its_cenit_gdo6').value);
    data["itsOnsiteGdo1"] = parseFloat(document.getElementById('its_onsite_gdo1').value);
    data["itsOnsiteGdo2"] = parseFloat(document.getElementById('its_onsite_gdo2').value);
    data["itsOnsiteGdo3"] = parseFloat(document.getElementById('its_onsite_gdo3').value);
    data["itsOnsiteGdo4"] = parseFloat(document.getElementById('its_onsite_gdo4').value);
    data["itsOnsiteGdo5"] = parseFloat(document.getElementById('its_onsite_gdo5').value);
    data["itsOnsiteGdo6"] = parseFloat(document.getElementById('its_onsite_gdo6').value);
    data["itsOnsiteGdo7"] = parseFloat(document.getElementById('its_onsite_gdo7').value);

    console.log(data);
    $.ajax({
        type : "POST",
        url : "itr/save",
        dataType : "json",
        contentType : "application/json; charset=utf-8",
        data : JSON.stringify(data),
        success : function(itr) {
            refreshItrs(itr);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}