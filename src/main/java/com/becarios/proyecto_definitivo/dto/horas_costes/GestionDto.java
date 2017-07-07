package com.becarios.proyecto_definitivo.dto.horas_costes;

public class GestionDto {
    private int idProyecto;
    private String nombre;
    private int porcentaje;
    private boolean internaPractica;
    private int horas;
    private double coste;

    public GestionDto() {
    }

    public GestionDto(int idProyecto, String nombre, int porcentaje, boolean internaPractica, int horas, double coste) {
        this.idProyecto = idProyecto;
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.internaPractica = internaPractica;
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

    public boolean isInternaPractica() {
        return internaPractica;
    }

    public void setInternaPractica(boolean internaPractica) {
        this.internaPractica = internaPractica;
    }

    public int getHoras() {
        return horas;
    }

    public void setHoras(int horas) {
        this.horas = horas;
    }

    public double getCoste() {
        return coste;
    }

    public void setCoste(double coste) {
        this.coste = coste;
    }

}
