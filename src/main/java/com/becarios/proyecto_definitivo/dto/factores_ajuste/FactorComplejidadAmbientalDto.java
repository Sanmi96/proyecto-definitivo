package com.becarios.proyecto_definitivo.dto.factores_ajuste;

public class FactorComplejidadAmbientalDto {
    private int idProyecto;
    private String nombre;
    private int valoracion;
    private int factorCalculado;

    public FactorComplejidadAmbientalDto() {
    }

    public FactorComplejidadAmbientalDto(int idProyecto, String nombre, int valoracion, int factorCalculado) {
            this.idProyecto = idProyecto;
            this.nombre = nombre;
            this.valoracion = valoracion;
            this.factorCalculado = factorCalculado;
    }

    public int getIdProyecto() {
        return idProyecto;
    }

    public void setIdProyecto(int idProyecto) {
        this.idProyecto = idProyecto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getValoracion() {
        return valoracion;
    }

    public void setValoracion(int valoracion) {
        this.valoracion = valoracion;
    }

    public int getFactorCalculado() {
        return factorCalculado;
    }

    public void setFactorCalculado(int factorCalculado) {
        this.factorCalculado = factorCalculado;
    }
    
    
}
