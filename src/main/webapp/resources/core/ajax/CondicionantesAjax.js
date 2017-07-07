// Condicionantes estimacion
function refreshTableCondicionantes(cond) {
    var cond_table = "";
    var cond_table2 = "";
    var c1 = 0;
    var c2 = 0;
    if (cond.length == 0) {
        cond_table += "<tr><td colspan='5'>No hay ninguna descripci&oacute;n</td></tr>";
        cond_table2 += "<tr><td colspan='5'>No hay ninguna descripci&oacute;n</td></tr>";
    } else {
        for (i = 0; i < cond.length; i++) {
            if (cond[i].estimacion == 1) {
                c1++;
                cond_table += "<tr><td>"
                        + c1
                        + "<div style='float:right'><button type='submit' class='button delete glyphicon glyphicon-trash' id='"
                        + cond[i].id + "' onClick='deleteCondicionantes(id)'/></div></td>";
                cond_table += "<td><div class='form-group textarea-fix'><textarea maxlength='800' class='form-control noresize' id='"
                        + "cond_"
                        + cond[i].id
                        + "' onfocusout='condicionanteSave(id)'>"
                        + cond[i].descripcion
                        + "</textarea></div></td>";
                cond_table += "</td></tr>";
            } else {
                c2++;
                cond_table2 += "<tr><td>"
                        + c2
                        + "<div style='float:right'><button type='submit' class='button delete glyphicon glyphicon-trash' id='"
                        + cond[i].id + "' onClick='deleteCondicionantes(id)'/></div></td>";
                cond_table2 += "<td><div class='form-group textarea-fix'><textarea maxlength='800' class='form-control noresize' id='"
                        + "cond_"
                        + cond[i].id
                        + "' onfocusout='condicionanteSave(id)'>"
                        + cond[i].descripcion
                        + "</textarea></div></td>";
                cond_table2 += "</td></tr>";
            }
        }
    }
    $("#condTableEstimacion").html(cond_table);
    $("#condTable").html(cond_table2);
    $('textarea').each(function() {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
        if (this.scrollHeight < 40) {
            this.setAttribute('style', 'height:40px;overflow-y:hidden;');
        }
    }).on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
}

function condicionantesAddRow(estimacionbool) {
    $.ajax({
        type : "POST",
        url : "condicionantes/addRow/" + estimacionbool,
        success : function(cond) {
            // console.log(cond);
            refreshTableCondicionantes(cond);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function condicionanteSave(id) {
    var dataRow = {};
    dataRow[0] = document.getElementById(id).value;
    $.ajax({
        type : "POST",
        url : "condicionantes/saveRow/" + id,
        dataType : "json",
        contentType : "application/json; charset=utf-8",
        data : JSON.stringify(dataRow),
        success : function(cond) {
            console.log(cond);
            refreshTableCondicionantes(cond);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });

}

function getAllCondicionantes() {
    $.ajax({
        type : "POST",
        url : "condicionantesAjax",
        success : function(cond) {
            refreshTableCondicionantes(cond);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function deleteCondicionantes(id) {
    $.ajax({
        type : "DELETE",
        url : "condicionantes/delete/" + id,
        success : function(cond) {
            console.log(cond);
            refreshTableCondicionantes(cond);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}
