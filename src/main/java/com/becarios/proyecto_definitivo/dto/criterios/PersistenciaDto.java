package com.becarios.proyecto_definitivo.dto.criterios;

public class PersistenciaDto {
    private int casosdeUsosCodigo;
    private int nro;
    private int accesos;
    private int total;

    public PersistenciaDto() {
    }

    public PersistenciaDto(int casosdeUsosCodigo, int nro, int accesos, int total) {
        this.casosdeUsosCodigo = casosdeUsosCodigo;
        this.nro = nro;
        this.accesos = accesos;
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

    public int getAccesos() {
        return accesos;
    }

    public void setAccesos(int accesos) {
        this.accesos = accesos;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
        
        
}
