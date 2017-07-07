package com.becarios.proyecto_definitivo.dto.horas_costes;

public class RiesgoDto {
    private int idProyecto;
    private String nombre;
    private double num;

    public RiesgoDto() {
    }

    public RiesgoDto(int idProyecto, String nombre, double num) {
        this.idProyecto = idProyecto;
        this.nombre = nombre;
        this.num = num;
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

    public double getNum() {
        return num;
    }

    public void setNum(double num) {
        this.num = num;
    }

}
