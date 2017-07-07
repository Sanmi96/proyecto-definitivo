package com.becarios.proyecto_definitivo.model.horas_costes;
// Generated 21-abr-2017 13:47:07 by Hibernate Tools 4.3.1.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * GobiernoId generated by hbm2java
 */
@Embeddable
public class GobiernoId implements java.io.Serializable {

    private int idProyecto;
    private String nombre;

    public GobiernoId() {
    }

    public GobiernoId(int idProyecto, String nombre) {
        this.idProyecto = idProyecto;
        this.nombre = nombre;
    }

    @Column(name = "idProyecto", nullable = false)
    public int getIdProyecto() {
        return this.idProyecto;
    }

    public void setIdProyecto(int idProyecto) {
        this.idProyecto = idProyecto;
    }

    @Column(name = "Nombre", nullable = false, length = 45)
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean equals(Object other) {
        if ((this == other))
            return true;
        if ((other == null))
            return false;
        if (!(other instanceof GobiernoId))
            return false;
        GobiernoId castOther = (GobiernoId) other;

        return (this.getIdProyecto() == castOther.getIdProyecto())
                && ((this.getNombre() == castOther.getNombre()) || (this.getNombre() != null
                        && castOther.getNombre() != null && this.getNombre().equals(castOther.getNombre())));
    }

    public int hashCode() {
        int result = 17;

        result = 37 * result + this.getIdProyecto();
        result = 37 * result + (getNombre() == null ? 0 : this.getNombre().hashCode());
        return result;
    }

}
