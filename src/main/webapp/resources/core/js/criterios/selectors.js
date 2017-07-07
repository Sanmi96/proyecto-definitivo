// Cambia el valor en función del selector (ej. fácil, normal, difícil)
function func_perf() {
    document.getElementById('out_perf').innerHTML = document.getElementById('sel_perf').value;
    func_perf2();
}

function func_pv() {
    document.getElementById('out_pv').innerHTML = parseInt(document.getElementById('sel_pv_camp').value)
            + parseInt(document.getElementById('sel_pv_comp').value)
            + parseInt(document.getElementById('sel_pv_list').value)
            + parseInt(document.getElementById('sel_pv_boto').value);
    func_pv2();
}

function func_neg() {
    document.getElementById('out_neg').innerHTML = document.getElementById('sel_neg').value;
    func_neg2();
}

function func_pers() {
    document.getElementById('out_pers').innerHTML = document.getElementById('sel_pers').value;
    func_pers2();
}

function func_cu() {
    var res = document.getElementById('sel_cu').value;
    document.getElementById('out_cu').innerHTML = res;
    var elem = document.getElementById('out_cu');
    var att = document.createAttribute("value");
    att.value = res;
    elem.setAttributeNode(att);
    document.getElementById('out_cu2').setAttribute('value', res)
}

function func_inte() {
    document.getElementById('out_inte').innerHTML = document.getElementById('sel_inte').value;
    func_inte2();
}

// Multiplica el resultado final dependiendo del valor NRO
function func_perf2() {
    nro = document.getElementById('mult_perf').value;
    var res = '';
    if (!(0 < nro && nro < 100)) {
        document.getElementById('mult_perf').value = '';
    }
    res = document.getElementById('mult_perf').value * document.getElementById('sel_perf').value;

    document.getElementById('out_perf').innerHTML = res;
    document.getElementById('out_perf2').setAttribute('value', res);
}

function func_pv2() {
    nro = document.getElementById('mult_pv').value;
    var res = '';
    if (!(0 < nro && nro < 100)) {
        document.getElementById('mult_pv').value = '';
    }
    res = (parseInt(document.getElementById('sel_pv_camp').value)
            + parseInt(document.getElementById('sel_pv_comp').value)
            + parseInt(document.getElementById('sel_pv_list').value) + parseInt(document.getElementById('sel_pv_boto').value))
            * document.getElementById('mult_pv').value;
    ;
    document.getElementById('out_pv').innerHTML = res;
    document.getElementById('out_pv2').setAttribute('value', res);
}

function func_neg2() {
    nro = document.getElementById('mult_neg').value;
    var res = '';
    if (!(0 < nro && nro < 100)) {
        document.getElementById('mult_neg').value = '';
    }
    res = document.getElementById('sel_neg').value * document.getElementById('mult_neg').value;
    document.getElementById('out_neg').innerHTML = res;

    document.getElementById('out_neg2').setAttribute('value', res);
}

function func_pers2() {
    nro = document.getElementById('mult_pers').value;
    var res = '';
    if (!(0 < nro && nro < 100)) {
        document.getElementById('mult_pers').value = '';
    }
    res = document.getElementById('sel_pers').value * document.getElementById('mult_pers').value;
    document.getElementById('out_pers').innerHTML = res;

    document.getElementById('out_pers2').setAttribute('value', res);
}

function func_inte2() {
    nro = document.getElementById('mult_inte').value;
    var res = '';
    if (!(0 < nro && nro < 100)) {
        document.getElementById('mult_inte').value = '';
    }
    res = document.getElementById('sel_inte').value * document.getElementById('mult_inte').value;
    document.getElementById('out_inte').innerHTML = "+" + res;

    document.getElementById('out_inte2').setAttribute('value', res);
}

function func_test(code) {
    // document.getElementById('out_perf').innerHTML = code;
    var redirect = function(url, method) {
        var form = document.createElement('form');
        form.method = method;
        form.action = url;
        form.submit();
    };
    var url = "saveRow";
    // redirect(url, 'post');
    url = code + "/edit";
    redirect(url, 'post');
}
