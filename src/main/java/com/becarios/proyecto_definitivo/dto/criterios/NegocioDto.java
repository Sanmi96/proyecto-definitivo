package com.becarios.proyecto_definitivo.dto.criterios;

public class NegocioDto {
    private int casosdeUsosCodigo;
    private int nro;
    private int logica;
    private int total;

    public NegocioDto() {
    }

    public NegocioDto(int casosdeUsosCodigo, int nro, int logica, int total) {
        this.casosdeUsosCodigo = casosdeUsosCodigo;
        this.nro = nro;
        this.logica = logica;
        this.total = total;
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

    public int getLogica() {
        return logica;
    }

    public void setLogica(int logica) {
        this.logica = logica;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
    
    
}
