package com.becarios.proyecto_definitivo.dto.horas_costes;

public class ValoracionfinalDto {
    private int idProyecto;
    private String nombre;
    private int horas;
    private int coste;

    public ValoracionfinalDto() {
    }

    public ValoracionfinalDto(int idProyecto, String nombre, int horas, int coste) {
            this.idProyecto = idProyecto;
            this.nombre = nombre;
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
