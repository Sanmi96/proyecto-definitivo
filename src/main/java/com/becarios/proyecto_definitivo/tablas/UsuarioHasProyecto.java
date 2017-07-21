package com.becarios.proyecto_definitivo.tablas;// default package

// Generated 21-jul-2017 9:21:12 by Hibernate Tools 4.3.1.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * UsuarioHasProyecto generated by hbm2java
 */
@Entity
@Table(name = "usuario_has_proyecto", catalog = "he")
public class UsuarioHasProyecto implements java.io.Serializable {

    private UsuarioHasProyectoId id;
    private Usuario usuario;

    public UsuarioHasProyecto() {
    }

    public UsuarioHasProyecto(UsuarioHasProyectoId id, Usuario usuario) {
        this.id = id;
        this.usuario = usuario;
    }

    @EmbeddedId

    @AttributeOverrides({
            @AttributeOverride(name = "proyectoId", column = @Column(name = "proyecto_id", nullable = false) ),
            @AttributeOverride(name = "usuarioId", column = @Column(name = "usuario_id", nullable = false) ) })
    public UsuarioHasProyectoId getId() {
        return this.id;
    }

    public void setId(UsuarioHasProyectoId id) {
        this.id = id;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false, insertable = false, updatable = false)
    public Usuario getUsuario() {
        return this.usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

}
