package com.becarios.proyecto_definitivo.dto.factores_ajuste;

public class ArquitecturaReferenciaDto {
    private int idProyecto;
    private String nombre;
    private boolean aplica;
    private boolean definido;
    private int gradoConocimento;
    private int impacto;
    private int riesgo;

    public ArquitecturaReferenciaDto() {
    }

    public ArquitecturaReferenciaDto(int idProyecto, String nombre, boolean aplica, boolean definido, int gradoConocimento,
            int impacto, int riesgo) {
        this.idProyecto = idProyecto;
        this.nombre = nombre;
        this.aplica = aplica;
        this.definido = definido;
        this.gradoConocimento = gradoConocimento;
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

    public boolean isDefinido() {
        return definido;
    }

    public void setDefinido(boolean definido) {
        this.definido = definido;
    }

    public int getGradoConocimento() {
        return gradoConocimento;
    }

    public void setGradoConocimento(int gradoConocimento) {
        this.gradoConocimento = gradoConocimento;
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
