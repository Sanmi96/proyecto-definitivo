package com.becarios.proyecto_definitivo.dto.criterios;

public class VistaDto {
    private int casosdeUsosCodigo;
    private int nro;
    private int complejidad;
    private int total;
    private int campos;
    private int listados;
    private int botones;

    public VistaDto() {
    }

    public VistaDto(int casosdeUsosCodigo, int nro, int complejidad, int total, int campos, int listados, int botones) {
        this.casosdeUsosCodigo = casosdeUsosCodigo;
        this.nro = nro;
        this.complejidad = complejidad;
        this.total = total;
        this.campos = campos;
        this.listados = listados;
        this.botones = botones;
    }

    public int getCasosdeUsosCodigo() {
        return casosdeUsosCodigo;
    }

    public void setCasosdeUsosCodigo(int casosdeUsosCodigo) {
        this.casosdeUsosCodigo = casosdeUsosCodigo;
    }

    public int getNro() {
        return nro;
    }

    public void setNro(int nro) {
        this.nro = nro;
    }

    public int getComplejidad() {
        return complejidad;
    }

    public void setComplejidad(int complejidad) {
        this.complejidad = complejidad;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getCampos() {
        return campos;
    }

    public void setCampos(int campos) {
        this.campos = campos;
    }

    public int getListados() {
        return listados;
    }

    public void setListados(int listados) {
        this.listados = listados;
    }

    public int getBotones() {
        return botones;
    }

    public void setBotones(int botones) {
        this.botones = botones;
    }
        
        
}
