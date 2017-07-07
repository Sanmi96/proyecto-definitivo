function checkGDO(row_name) {
    gdo1 = document.getElementById(row_name + "_gdo1").value;
    gdo2 = document.getElementById(row_name + "_gdo2").value;
    gdo3 = document.getElementById(row_name + "_gdo3").value;
    gdo4 = document.getElementById(row_name + "_gdo4").value;
    gdo5 = document.getElementById(row_name + "_gdo5").value;
    gdo6 = document.getElementById(row_name + "_gdo6").value;
    gdo7 = document.getElementById(row_name + "_gdo7").value;
    var totalvar = parseInt(gdo1) + parseInt(gdo2) + parseInt(gdo3) + parseInt(gdo4) + parseInt(gdo5) + parseInt(gdo6)
            + parseInt(gdo7);
    document.getElementById(row_name + "_checker").className = document.getElementById(row_name + "_checker").className
            .replace(/(?:^|\s)glyphicon-remove(?!\S)/g, '');
    document.getElementById(row_name + "_checker").className = document.getElementById(row_name + "_checker").className
            .replace(/(?:^|\s)glyphicon-ok(?!\S)/g, '');
    document.getElementById(row_name + "_checker").className = document.getElementById(row_name + "_checker").className
            .replace(/(?:^|\s)chred(?!\S)/g, '');
    document.getElementById(row_name + "_checker").className = document.getElementById(row_name + "_checker").className
            .replace(/(?:^|\s)chgreen(?!\S)/g, '');
    if (totalvar == 100) {
        document.getElementById(row_name + "_checker").className += "glyphicon-ok chgreen ";
        document.getElementById(row_name + "_checker").value = 1;
    } else {
        document.getElementById(row_name + "_checker").className += "glyphicon-remove chred ";
        document.getElementById(row_name + "_checker").value = 0;
    }
    calcularITRMedio(row_name);
    calcCoste(row_name);
}

function calcularITRMedio(row_name) {
    var itrmedio = (gdo1 / 100) * itr_cen_gdo1 + (gdo2 / 100) * itr_cen_gdo2 + (gdo3 / 100) * itr_cen_gdo3
            + (gdo4 / 100) * itr_cen_gdo4 + (gdo5 / 100) * itr_cen_gdo5 + (gdo6 / 100) * itr_cen_gdo6 + (gdo7 / 100)
            * itr_cen_gdo7;
    document.getElementById(row_name + "_itrmedio").innerHTML = "&euro;&nbsp;" + parseFloat(itrmedio.toFixed(2));
    document.getElementById(row_name + "_itrmedio").value = parseFloat(itrmedio.toFixed(2));
}