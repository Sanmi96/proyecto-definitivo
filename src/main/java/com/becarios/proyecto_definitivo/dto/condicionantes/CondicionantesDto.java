package com.becarios.proyecto_definitivo.dto.condicionantes;

public class CondicionantesDto {
    private CondicionantesIdDto id;
    private String descripcion;
    private boolean estimacion;

    public CondicionantesDto() {
    }

    public CondicionantesDto(CondicionantesIdDto id, String descripcion, boolean estimacion) {
        this.id = id;
        this.descripcion = descripcion;
        this.estimacion = estimacion;
    }

    public CondicionantesIdDto getId() {
        return id;
    }

    public void setId(CondicionantesIdDto id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public boolean isEstimacion() {
        return estimacion;
    }

    public void setEstimacion(boolean estimacion) {
        this.estimacion = estimacion;
    }
}
