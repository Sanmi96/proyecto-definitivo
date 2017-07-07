package com.becarios.proyecto_definitivo.model.horas_costes;
// Generated 21-abr-2017 13:47:07 by Hibernate Tools 4.3.1.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Gobierno generated by hbm2java
 */
@Entity
@Table(name = "gobierno", catalog = "HE")
public class Gobierno implements java.io.Serializable {

    private GobiernoId id;
    private int porcentaje;
    private boolean internaPractica;
    private int horas;
    private double coste;

    public Gobierno() {
    }

    public Gobierno(GobiernoId id, int porcentaje, boolean internaPractica, int horas, double coste) {
        this.id = id;
        this.porcentaje = porcentaje;
        this.internaPractica = internaPractica;
        this.horas = horas;
        this.coste = coste;
    }

    @EmbeddedId

    @AttributeOverrides({
            @AttributeOverride(name = "idProyecto", column = @Column(name = "idProyecto", nullable = false) ),
            @AttributeOverride(name = "nombre", column = @Column(name = "Nombre", nullable = false, length = 45) ) })
    public GobiernoId getId() {
        return this.id;
    }

    public void setId(GobiernoId id) {
        this.id = id;
    }

    @Column(name = "Porcentaje", nullable = false)
    public int getPorcentaje() {
        return this.porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }

    @Column(name = "internaPractica", nullable = false)
    public boolean isInternaPractica() {
        return this.internaPractica;
    }

    public void setInternaPractica(boolean internaPractica) {
        this.internaPractica = internaPractica;
    }

    @Column(name = "Horas", nullable = false)
    public int getHoras() {
        return this.horas;
    }

    public void setHoras(int horas) {
        this.horas = horas;
    }

    @Column(name = "Coste", nullable = false)
    public double getCoste() {
        return coste;
    }

    public void setCoste(double coste) {
        this.coste = coste;
    }

}