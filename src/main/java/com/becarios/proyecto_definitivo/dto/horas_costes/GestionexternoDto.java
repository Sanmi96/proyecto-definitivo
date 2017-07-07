package com.becarios.proyecto_definitivo.dto.horas_costes;

public class GestionexternoDto {
    private int idProyecto;
    private String nombre;
    private int porcentaje;
    private int horas;
    private int coste;

    public GestionexternoDto() {
    }

    public GestionexternoDto(int idProyecto, String nombre, int porcentaje, int horas, int coste) {
            this.idProyecto = idProyecto;
            this.nombre = nombre;
            this.porcentaje = porcentaje;
            this.horas = horas;
            this.coste = coste;
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

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }

    public int getHoras() {
        return horas;
    }

    public void setHoras(int horas) {
        this.horas = horas;
    }

    public int getCoste() {
        return coste;
    }

    public void setCoste(int coste) {
        this.coste = coste;
    }
    
    
}
