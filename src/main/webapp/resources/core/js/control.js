function check() {
    var tab = null;
    tab = document.getElementById("position").value;
    if (tab == "proyecto" || tab == "criterios" || tab == "factores-ajuste" || tab == "horas"
            || tab == "condicionantes") {
        document.getElementById(tab + "Li").className += " active";
        document.getElementById(tab).className += " active in";
    } else {
        document.getElementById("proyectoLi").disabled = true;
        document.getElementById("criteriosLi").disabled = true;
        document.getElementById("factores-ajusteLi").disabled = true;
        document.getElementById("horasLi").disabled = true;
        document.getElementById("condicionantesLi").disabled = true;
    }
}