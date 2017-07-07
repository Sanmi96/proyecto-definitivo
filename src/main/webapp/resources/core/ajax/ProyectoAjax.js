function doAjaxSaveAll() {
    doAjaxSaveFactores();
    doAjaxSaveHorasCoste();
    doAjaxSavePiramide();
}

function refreshTableProject(projectList) {
    var table = "";
    if (projectList.length == 0) {
        table = "";
    } else {
        for (i = 0; i < projectList.length; i++) {
            table += "<li><a id='" + projectList[i].id + "' onclick='doAjaxChangeProject(" + projectList[i].id + ")'>"
                    + projectList[i].nombre + " (" + projectList[i].codigoProyecto + ")" + "</a></li>";

            $("#projectList").html(table);
        }
    }
}

function refreshProjectInfo(project) {
    if (project == undefined) {
        table = "<tr><td colspan='3'>No hay datos para mostrar</td></tr>";
    } else {
        var table = "";
        table += "<tr><td>" + project.nombre + "</td>";
        table += "<td>" + project.codigoProyecto + "</td>";
        table += "<td>" + project.descripcion;
        table += "<div style='float:right'><button type='submit' class='button delete glyphicon glyphicon-trash' id='"
                + project.id
                + "' onClick='doAjaxDeleteProject(id)'/></div><div style='float:right'><button type='submit' class='button edit glyphicon glyphicon-pencil' id='"
                + project.id + "' onClick='doAjaxEditProject(id)'/></div>";
        table += "</td></tr>";

    }
    $("#projectTable").html(table);
}

function refreshEditado(project) {
    var table = "";

    if (project == undefined) {
        table += "<option value='0' " + "selected='selected'" + ">No</option>";
        table += "<option value='1' " + ">Si</option>"
    } else {
        if (project.isEditado) {
            table += "<option value='0' " + ">No</option>";
            table += "<option value='1' " + "selected='selected'" + ">Si</option>"

        } else {
            table += "<option value='0' " + "selected='selected'" + ">No</option>";
            table += "<option value='1' " + ">Si</option>"

        }
    }
    $("#editado").html(table);
}

function editProject(project) {
    var table = "";

    table += "<tr style='background-color: #efefef;'>";
    table += "<td><input type='text' class='altura form-control' id='project_name' value='" + project.nombre
            + "' maxlength='20'></td>";
    table += "<td><input type='text' class='altura form-control' id='project_code' value='" + project.codigoProyecto
            + "' maxlength='10'></td>";
    table += "<td><div style='float:left' class='col-lg-8'><input type='text' class='altura form-control' id='project_description' value='"
            + project.descripcion + "' maxlength='60'></div><div style='float:right' class='col-lg-6'>";
    table += "<div style='float:right'><button type='submit' class='button delete glyphicon glyphicon-remove' id='"
            + project.id
            + "' onClick='doAjaxChangeProject(id)'/></div><div style='float:right'><button type='submit' class='button ok glyphicon glyphicon-ok' id='"
            + project.id + "' onClick='doAjaxSaveEditedProject(id)'/></div>";
    table += "</div></td></tr>";

    $("#projectTable").html(table);
}

function doAjaxChangeProject(id) {
    // document.getElementById(id).setAttribute("class", "active");
    $.ajax({
        type : "POST",
        url : "project/edit/" + id,
        success : function(project) {
            console.log(project);
            doAjaxEdit();
            refreshProjectInfo(project);
            refreshEditado(project);
            getAllFactoresdeAjuste();
            getAllHorasCoste();
            getAllPiramide();
            getAllCondicionantes(project);
            getAllItrs();
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function doAjaxEditProject(id) {
    // document.getElementById(id).setAttribute("class", "active");
    $.ajax({
        type : "POST",
        url : "project/edit/" + id,
        success : function(project) {
            console.log(project);
            editProject(project);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function doAjaxSaveEditedProject(id) {
    var data = {};
    data["nombre"] = document.getElementById("project_name").value;
    data["codigoProyecto"] = document.getElementById("project_code").value;
    data["descripcion"] = document.getElementById("project_description").value;

    if (document.getElementById("editado").value == 0) {
        data["isEditado"] = false;
    } else if (document.getElementById("editado").value == 1) {
        data["isEditado"] = true;
    }

    $.ajax({
        type : "POST",
        url : "project/save/" + id,
        dataType : "json",
        contentType : "application/json; charset=utf-8",
        data : JSON.stringify(data),
        success : function(project) {
            console.log(project);
            refreshProjectInfo(project);
            doAjaxLoadProjectTables();
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function doAjaxDeleteProject(id) {
    $.ajax({
        type : "DELETE",
        url : "projecte/delete/" + id,
        success : function(project) {
            console.log(project);
            refreshTableProject(project);
            refreshProjectInfo();
            refreshEditado();
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}

function doAjaxLoadProjectTables() {
    $.ajax({
        type : "POST",
        url : "projectAjax",
        success : function(project) {
            console.log(project);
            refreshTableProject(project);
        },
        error : function(e) {
            console.log('Error: ' + e);
        }
    });
}