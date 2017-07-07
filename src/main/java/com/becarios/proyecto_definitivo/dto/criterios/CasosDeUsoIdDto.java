package com.becarios.proyecto_definitivo.dto.criterios;

public class CasosDeUsoIdDto {

    private int id;
    private int idProyecto;

    public CasosDeUsoIdDto() {
    }

    public CasosDeUsoIdDto(int id, int idProyecto) {
        this.id = id;
        this.idProyecto = idProyecto;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdProyecto() {
        return idProyecto;
    }

    public void setIdProyecto(int idProyecto) {
        this.idProyecto = idProyecto;
    }

}
