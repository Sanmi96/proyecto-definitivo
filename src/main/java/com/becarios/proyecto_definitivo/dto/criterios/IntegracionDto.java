package com.becarios.proyecto_definitivo.dto.criterios;

public class IntegracionDto {
    private int casosdeUsosCodigo;
    private int nro;
    private int complejidad;
    private int total;

    public IntegracionDto() {
    }

    public IntegracionDto(int casosdeUsosCodigo, int nro, int complejidad, int total) {
        this.casosdeUsosCodigo = casosdeUsosCodigo;
        this.nro = nro;
        this.complejidad = complejidad;
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
        
        
}
