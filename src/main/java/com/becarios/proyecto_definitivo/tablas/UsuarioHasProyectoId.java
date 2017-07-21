package com.becarios.proyecto_definitivo.tablas;// default package

// Generated 21-jul-2017 9:21:12 by Hibernate Tools 4.3.1.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * UsuarioHasProyectoId generated by hbm2java
 */
@Embeddable
public class UsuarioHasProyectoId implements java.io.Serializable {

    private int proyectoId;
    private int usuarioId;

    public UsuarioHasProyectoId() {
    }

    public UsuarioHasProyectoId(int proyectoId, int usuarioId) {
        this.proyectoId = proyectoId;
        this.usuarioId = usuarioId;
    }

    @Column(name = "proyecto_id", nullable = false)
    public int getProyectoId() {
        return this.proyectoId;
    }

    public void setProyectoId(int proyectoId) {
        this.proyectoId = proyectoId;
    }

    @Column(name = "usuario_id", nullable = false)
    public int getUsuarioId() {
        return this.usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public boolean equals(Object other) {
        if ((this == other))
            return true;
        if ((other == null))
            return false;
        if (!(other instanceof UsuarioHasProyectoId))
            return false;
        UsuarioHasProyectoId castOther = (UsuarioHasProyectoId) other;

        return (this.getProyectoId() == castOther.getProyectoId()) && (this.getUsuarioId() == castOther.getUsuarioId());
    }

    public int hashCode() {
        int result = 17;

        result = 37 * result + this.getProyectoId();
        result = 37 * result + this.getUsuarioId();
        return result;
    }

}