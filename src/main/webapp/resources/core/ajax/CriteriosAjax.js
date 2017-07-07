function refreshTable(module) {
    var table = "";
    if (module.length == 0) {
        table = "<tr><td colspan='5'>No hay datos para mostrar</td></tr>";
        $("#showAtributos").hide();
        document.getElementById('totalNROCriterios').value = 0;
    } else {
        var totalNROCriterios = 0;
        for (i = 0; i < module.length; i++) {
            totalNROCriterios = totalNROCriterios + module[i].totalFila;
            document.getElementById('totalNROCriterios').value = totalNROCriterios;
        }
        for (i = 0; i < module.length; i++) {
            table += "<tr><td>" + module[i].nombre + "</td>";
            table += "<td>" + module[i].codigo + "</td>";
            table += "<td>" + module[i].modulo + "</td>";
            if (module[i].totalFila < 7.5) {
                module[i].totalFila = 5;
            } else if (module[i].totalFila < 12.5) {
                module[i].totalFila = 10;
            } else if (module[i].totalFila < 17.5) {
                module[i].totalFila = 15;
            } else if (module[i].totalFila < 22.5) {
                module[i].totalFila = 20;
            } else {
                module[i].totalFila = 25;
            }
            table += "<td>" + module[i].totalFila + "</td>";
            if (module[i].totalFila < 7.5) {
                table += "<td class='center info'>Muy Fácil";
            } else if (module[i].totalFila < 12.5) {
                table += "<td class='center success'>Fácil";
            } else if (module[i].totalFila < 17.5) {
                table += "<td class='center warning'>Normal";
            } else if (module[i].totalFila < 22.5) {
                table += "<td class='center danger'>Complicado";
            } else {
                table += "<td class='center danger2'>Muy Complicado";
            }
            table += "<div style='float:right'><button type='submit' class='button delete glyphicon glyphicon-trash' id='"
                    + module[i].id
                    + "' onClick='doAjaxDelete(id)'/></div><div style='float:right'><button type='submit' class='button edit glyphicon glyphicon-pencil' id='"
                    + module[i].id + "' onClick='doAjaxEdit(id)'/></div>";
            table += "</td></tr>";
        }
    }

    $("#moduleTable").html(table);
}

function editTable(module, tablas) {
    var table = "";
    var selected = "";
    if (module.length == 0) {
        table = "<tr><td colspan='5'>No hay datos para mostrar</td></tr>";
        $("#showAtributos").hide();
    } else {
        for (i = 0; i < module.length; i++) {
            if (tablas[i].casosdeUsosCodigo == module[i].id) {
                table += "<tr class='active'><td><input type='text' class='altura form-control' id='selected_name' value='"
                        + module[i].nombre + "' maxlength='25'></td>";
                table += "<td><input type='text' class='altura form-control' id='selected_code' value='"
                        + module[i].codigo + "' maxlength='10'></td>";
                table += "<td><input type='text' class='altura form-control' id='selected_caseOfUse' value='"
                        + module[i].modulo + "' maxlength='30'></td>";
                if (module[i].totalFila < 7.5) {
                    module[i].totalFila = 5;
                } else if (module[i].totalFila < 12.5) {
                    module[i].totalFila = 10;
                } else if (module[i].totalFila < 17.5) {
                    module[i].totalFila = 15;
                } else if (module[i].totalFila < 22.5) {
                    module[i].totalFila = 20;
                } else {
                    module[i].totalFila = 25;
                }
                table += "<td>" + module[i].totalFila + "</td>";
                if (module[i].totalFila < 7.5) {
                    table += "<td class='center info'>Muy Fácil";
                } else if (module[i].totalFila < 12.5) {
                    table += "<td class='center success'>Fácil";
                } else if (module[i].totalFila < 17.5) {
                    table += "<td class='center warning'>Normal";
                } else if (module[i].totalFila < 22.5) {
                    table += "<td class='center danger'>Complicado";
                } else {
                    table += "<td class='center danger2'>Muy Complicado";
                }
                table += "<div style='float:right'><div style='float:left'><button type='submit' class='button ok glyphicon glyphicon-ok' id='"
                        + module[i].id
                        + "' onClick='doAjaxSaveRow(id)'></button></div><div style='float:right'><button type='submit' class='button delete glyphicon glyphicon-remove' onClick='doAjaxEdit()'></button></div></div>";
                table += "</td></tr>";
                populateAtributos(tablas);
            } else {
                table += "<tr><td>" + module[i].nombre + "</td>";
                table += "<td>" + module[i].codigo + "</td>";
                table += "<td>" + module[i].modulo + "</td>";
                if (module[i].totalFila < 7.5) {
                    module[i].totalFila = 5;
                } else if (module[i].totalFila < 12.5) {
                    module[i].totalFila = 10;
                } else if (module[i].totalFila < 17.5) {
                    module[i].totalFila = 15;
                } else if (module[i].totalFila < 22.5) {
                    module[i].totalFila = 20;
                } else {
                    module[i].totalFila = 25;
                }
                table += "<td>" + module[i].totalFila + "</td>";
                if (module[i].totalFila < 7.5) {
                    table += "<td class='center info'>Muy Fácil";
                } else if (module[i].totalFila < 12.5) {
                    table += "<td class='center success'>Fácil";
                } else if (module[i].totalFila < 17.5) {
                    table += "<td class='center warning'>Normal";
                } else if (module[i].totalFila < 22.5) {
                    table += "<td class='center danger'>Complicado";
                } else {
                    table += "<td class='center danger2'>Muy Complicado";
                }
                table += "</td></tr>";
            }
        }
    }

    $("#moduleTable").html(table);
}

function populateAtributos(tabla) {
    document.getElementById('sel_perf').value = tabla[0].complejidad;
    $("#mult_perf").value = tabla[0].nro;
    $("#out_perf").html(tabla[0].total);

    document.getElementById('sel_pv_boto').value = tabla[1].botones;
    document.getElementById('sel_pv_camp').value = tabla[1].campos;
    document.getElementById('sel_pv_comp').value = tabla[1].complejidad;
    document.getElementById('sel_pv_list').value = tabla[1].listados;
    $("#mult_pv").value = tabla[1].nro;
    $("#out_pv").html(tabla[1].total);

    document.getElementById('sel_neg').value = tabla[2].logica;
    $("#mult_neg").value = tabla[2].nro;
    $("#out_neg").html(tabla[2].total);

    document.getElementById('sel_pers').value = tabla[3].accesos;
    $("#mult_pers").value = tabla[3].nro;
    $("#out_pers").html(tabla[3].total);

    document.getElementById('sel_cu').value = tabla[4].complejidad;
    $("#out_cu").html(tabla[4].total);

    document.getElementById('sel_inte').value = tabla[5].complejidad;
    $("#mult_inte").value = tabla[5].nro;
    $("#out_inte").html(tabla[5].total);
}

function doAjaxAddRow() {
    $.ajax({
        type : "POST",
        url : "criterios/addRow",
        success : function(module) {
            $("#showAtributos").hide();
            console.log(module);
            refreshTable(module);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });

}

function doAjaxGetTablas(tablas) {
    $.ajax({
        type : "POST",
        url : "criteriosAjax",
        success : function(module) {
            editTable(module, tablas);
        }
    });
}

function doAjaxEdit(id) {
    if (id == undefined) {
        $.ajax({
            type : "POST",
            url : "criteriosAjax",
            success : function(module) {
                refreshTable(module);
                $("#showAtributos").hide();
            },
            error : function(e) {
                console.log('Error: ' + e);
            }
        });
    } else {
        $.ajax({
            type : "POST",
            url : "criterios/edit/" + id,
            success : function(tablas) {
                console.log(tablas);
                doAjaxGetTablas(tablas);
                $("#showAtributos").show();
            },
            error : function(e) {
                console.log('Error: ' + e);
            }
        });
    }
}

function doAjaxSaveRow(id) {
    auxid = parseInt(id);

    var casosUso = {};
    casosUso["id"] = auxid;
    casosUso["idProyecto"] = 1;
    casosUso["nombre"] = document.getElementById('selected_name').value;
    casosUso["codigo"] = document.getElementById('selected_code').value;
    casosUso["modulo"] = document.getElementById('selected_caseOfUse').value;

    var perfiles = {};
    perfiles["casosdeUsosCodigo"] = auxid;
    perfiles["complejidad"] = document.getElementById('sel_perf').value;
    perfiles["nro"] = document.getElementById('mult_perf').value;
    perfiles["total"] = parseInt(document.getElementById('out_perf').innerHTML);

    var vista = {};
    vista["casosdeUsosCodigo"] = auxid;
    vista["complejidad"] = document.getElementById('sel_pv_comp').value;
    vista["nro"] = document.getElementById('mult_pv').value;
    vista["botones"] = document.getElementById('sel_pv_boto').value;
    vista["campos"] = document.getElementById('sel_pv_camp').value;
    vista["listados"] = document.getElementById('sel_pv_list').value;
    vista["total"] = parseInt(document.getElementById('out_pv').innerHTML);

    var negocio = {};
    negocio["casosdeUsosCodigo"] = auxid;
    negocio["logica"] = document.getElementById('sel_neg').value;
    negocio["nro"] = document.getElementById('mult_neg').value;
    negocio["total"] = parseInt(document.getElementById('out_neg').innerHTML);

    var persistencia = {};
    persistencia["casosdeUsosCodigo"] = auxid;
    persistencia["accesos"] = document.getElementById('sel_pers').value;
    persistencia["nro"] = document.getElementById('mult_pers').value;
    persistencia["total"] = parseInt(document.getElementById('out_pers').innerHTML);

    var cuoriginal = {};
    cuoriginal["casosdeUsosCodigo"] = auxid;
    cuoriginal["complejidad"] = document.getElementById('sel_cu').value;
    cuoriginal["total"] = parseInt(document.getElementById('out_cu').innerHTML);

    var integracion = {};
    integracion["casosdeUsosCodigo"] = auxid;
    integracion["complejidad"] = document.getElementById('sel_inte').value;
    integracion["nro"] = document.getElementById('mult_inte').value;
    integracion["total"] = parseInt(document.getElementById('out_inte').innerHTML);

    var delta = 0;
    if (perfiles["total"] == 0) {
        delta = 1;
    } else if (vista["total"] == 0) {
        delta = 1;
    } else if (negocio["total"] == 0) {
        delta = 1;
    } else if (persistencia["total"] == 0) {
        delta = 1;
    } else if (integracion["total"] == 0) {
        delta = 1;
    } else {
        delta = 0;
    }
    deltatotal = 5 - delta;
    tipo_desarrollo = document.getElementById('tipo_desarrollo').value;
    if (tipo_desarrollo == 0) {
        var auxtotal = ((perfiles["total"] + vista["total"] + negocio["total"] + persistencia["total"]) / 7)
                + integracion["total"];
    } else {
        var auxtotal = (((perfiles["total"] + vista["total"] + negocio["total"] + persistencia["total"]) * 0.8) / 7)
                + cuoriginal["total"] * cuoriginal["total"] * 0.002 * deltatotal + integracion["total"];
    }
    casosUso["totalFila"] = auxtotal;

    var data = {};
    data["casosUso"] = casosUso;
    data["perfiles"] = perfiles;
    data["vista"] = vista;
    data["negocio"] = negocio;
    data["persistencia"] = persistencia;
    data["cuoriginal"] = cuoriginal;
    data["integracion"] = integracion;

    console.log(data); // pr
    $.ajax({
        type : "POST",
        url : "criterios/saveRow/" + id,
        dataType : "json",
        contentType : "application/json; charset=utf-8",
        data : JSON.stringify(data),
        success : function(module) {
            refreshTable(module);
            $("#showAtributos").hide();
        },
        error : function(e) {
            console.log('Error: ' + e);
        }

    });
}

function doAjaxDelete(id) {
    $.ajax({
        type : "DELETE",
        url : "criterios/delete/" + id,
        success : function(module) {
            console.log(module);
            refreshTable(module);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}