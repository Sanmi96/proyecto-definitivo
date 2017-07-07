package com.becarios.proyecto_definitivo.dto.criterios;

public class CuoriginalDto {
    private int casosdeUsosCodigo;
    private int complejidad;
    private int total;

    public CuoriginalDto() {
    }

    public CuoriginalDto(int casosdeUsosCodigo, int complejidad, int total) {
        this.casosdeUsosCodigo = casosdeUsosCodigo;
        this.complejidad = complejidad;
        this.total = total;
    }

    public int getCasosdeUsosCodigo() {
        return casosdeUsosCodigo;
    }

    public void setCasosdeUsosCodigo(int casosdeUsosCodigo) {
        this.casosdeUsosCodigo = casosdeUsosCodigo;
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
