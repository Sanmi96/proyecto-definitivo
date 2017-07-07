package com.becarios.proyecto_definitivo.dto.factores_ajuste;

public class FactorComplejidadTecnicaDto {
    private int idProyecto;
    private String nombre;
    private boolean aplica;
    private int gradoDefinicion;
    private int gradoExigencia;
    private int impacto;
    private int riesgo;

    public FactorComplejidadTecnicaDto() {
    }

    public FactorComplejidadTecnicaDto(int idProyecto, String nombre, boolean aplica, int gradoDefinicion,
                    int gradoExigencia, int impacto, int riesgo) {
            this.idProyecto = idProyecto;
            this.nombre = nombre;
            this.aplica = aplica;
            this.gradoDefinicion = gradoDefinicion;
            this.gradoExigencia = gradoExigencia;
            this.impacto = impacto;
            this.riesgo = riesgo;
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

    public boolean isAplica() {
        return aplica;
    }

    public void setAplica(boolean aplica) {
        this.aplica = aplica;
    }

    public int getGradoDefinicion() {
        return gradoDefinicion;
    }

    public void setGradoDefinicion(int gradoDefinicion) {
        this.gradoDefinicion = gradoDefinicion;
    }

    public int getGradoExigencia() {
        return gradoExigencia;
    }

    public void setGradoExigencia(int gradoExigencia) {
        this.gradoExigencia = gradoExigencia;
    }

    public int getImpacto() {
        return impacto;
    }

    public void setImpacto(int impacto) {
        this.impacto = impacto;
    }

    public int getRiesgo() {
        return riesgo;
    }

    public void setRiesgo(int riesgo) {
        this.riesgo = riesgo;
    }
    
    
}
