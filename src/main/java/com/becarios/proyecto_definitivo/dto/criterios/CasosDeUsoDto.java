package com.becarios.proyecto_definitivo.dto.criterios;

public class CasosDeUsoDto {
    private CasosDeUsoIdDto id;
    private String codigo;
    private double totalFila;
    private String nombre;
    private String modulo;

    public CasosDeUsoDto() {
    }

    public CasosDeUsoDto(CasosDeUsoIdDto id, String codigo, double totalFila, String nombre, String modulo) {
        this.id = id;
        this.codigo = codigo;
        this.totalFila = totalFila;
        this.nombre = nombre;
        this.modulo = modulo;
    }

    public CasosDeUsoIdDto getId() {
        return id;
    }

    public void setId(CasosDeUsoIdDto id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public double getTotalFila() {
        return totalFila;
    }

    public void setTotalFila(double totalFila) {
        this.totalFila = totalFila;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getModulo() {
        return modulo;
    }

    public void setModulo(String modulo) {
        this.modulo = modulo;
    }

}
