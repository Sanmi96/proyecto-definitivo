package com.becarios.proyecto_definitivo.model.piramide;
// Generated 21-abr-2017 13:47:07 by Hibernate Tools 4.3.1.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * PiramideId generated by hbm2java
 */
@Embeddable
public class PiramideId implements java.io.Serializable {

    private String nombre;
    private int idProyecto;

    public PiramideId() {
    }

    public PiramideId(String nombre, int idProyecto) {
        this.nombre = nombre;
        this.idProyecto = idProyecto;
    }

    @Column(name = "Nombre", nullable = false, length = 45)
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Column(name = "idProyecto", nullable = false)
    public int getIdProyecto() {
        return this.idProyecto;
    }

    public void setIdProyecto(int idProyecto) {
        this.idProyecto = idProyecto;
    }

    public boolean equals(Object other) {
        if ((this == other))
            return true;
        if ((other == null))
            return false;
        if (!(other instanceof PiramideId))
            return false;
        PiramideId castOther = (PiramideId) other;

        return ((this.getNombre() == castOther.getNombre()) || (this.getNombre() != null
                && castOther.getNombre() != null && this.getNombre().equals(castOther.getNombre())))
                && (this.getIdProyecto() == castOther.getIdProyecto());
    }

    public int hashCode() {
        int result = 17;

        result = 37 * result + (getNombre() == null ? 0 : this.getNombre().hashCode());
        result = 37 * result + this.getIdProyecto();
        return result;
    }

}
