package com.becarios.proyecto_definitivo.dto.condicionantes;

public class CondicionantesIdDto {
    private int id;
    private int idProyecto;

    public CondicionantesIdDto() {
    }

    public CondicionantesIdDto(int id, int idProyecto) {
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
