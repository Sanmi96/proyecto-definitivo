function refreshTable(module) {
    var table = "";
    for (i = 0; i < module.length; i++) {
        table += "<tr><td>" + module[i].name + "</td>";
        table += "<td>" + module[i].code + "</td>";
        table += "<td>" + module[i].caseOfUse + "</td>";
        table += "<td>" + module[i].total + "</td>";
        table += "<td>Muy Facil";// Falta if
        table += "<div style='float:right'><button type='submit' class='button delete glyphicon glyphicon-trash' id='"
                + module[i].code
                + "' onClick='doAjaxDelete(id)'/></div><div style='float:right'><button type='submit' class='button edit glyphicon glyphicon-pencil' id='"
                + module[i].code + "' onClick='doAjaxEdit(id)'/></div>";
        table += "</td></tr>";
    }
    $("#moduleTable").html(table);
}
function doAjaxPost() {
    $.ajax({
        type : "POST",
        url : "testing/addRow",
        success : function(module) {
            console.log(module);
            refreshTable(module);
        },
        error : function(e) {
            alert('Error: ' + e);
        }
    });

}
function doAjaxEdit() {
    $.ajax({
        type : "POST",
        url : "testing",
        success : function(module) {
            console.log(module);
            var table = "";

            $("#insert").html(table);
        },
        error : function(e) {
            alert('Error: ' + e);
        }
    });
}
function doAjaxDelete(id) {
    $.ajax({
        type : "DELETE",
        url : "testing/delete/" + id,
        success : function(module) {
            console.log(module);
            refreshTable(module);
            console.log("deleted");
        },
        error : function(e) {
            alert('Error: ' + e);
        }
    });
}