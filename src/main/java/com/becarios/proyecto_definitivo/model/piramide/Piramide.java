package com.becarios.proyecto_definitivo.model.piramide;
// Generated 21-abr-2017 13:47:07 by Hibernate Tools 4.3.1.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Piramide generated by hbm2java
 */
@Entity
@Table(name = "piramide", catalog = "HE")
public class Piramide implements java.io.Serializable {

    private PiramideId id;
    private int gdo1;
    private int gdo2;
    private int gdo3;
    private int gdo4;
    private int gdo5;
    private int gdo6;
    private int gdo7;
    private boolean validez;
    private double itrmedio;

    public Piramide() {
    }

    public Piramide(PiramideId id, int gdo1, int gdo2, int gdo3, int gdo4, int gdo5, int gdo6, int gdo7,
            boolean validez, double itrmedio) {
        super();
        this.id = id;
        this.gdo1 = gdo1;
        this.gdo2 = gdo2;
        this.gdo3 = gdo3;
        this.gdo4 = gdo4;
        this.gdo5 = gdo5;
        this.gdo6 = gdo6;
        this.gdo7 = gdo7;
        this.validez = validez;
        this.itrmedio = itrmedio;
    }

    @EmbeddedId

    @AttributeOverrides({
            @AttributeOverride(name = "nombre", column = @Column(name = "Nombre", nullable = false, length = 45) ),
            @AttributeOverride(name = "idProyecto", column = @Column(name = "idProyecto", nullable = false) ) })
    public PiramideId getId() {
        return this.id;
    }

    public void setId(PiramideId id) {
        this.id = id;
    }

    @Column(name = "Gdo1", nullable = false)
    public int getGdo1() {
        return this.gdo1;
    }

    public void setGdo1(int gdo1) {
        this.gdo1 = gdo1;
    }

    @Column(name = "Gdo2", nullable = false)
    public int getGdo2() {
        return this.gdo2;
    }

    public void setGdo2(int gdo2) {
        this.gdo2 = gdo2;
    }

    @Column(name = "Gdo3", nullable = false)
    public int getGdo3() {
        return this.gdo3;
    }

    public void setGdo3(int gdo3) {
        this.gdo3 = gdo3;
    }

    @Column(name = "Gdo4", nullable = false)
    public int getGdo4() {
        return this.gdo4;
    }

    public void setGdo4(int gdo4) {
        this.gdo4 = gdo4;
    }

    @Column(name = "Gdo5", nullable = false)
    public int getGdo5() {
        return this.gdo5;
    }

    public void setGdo5(int gdo5) {
        this.gdo5 = gdo5;
    }

    @Column(name = "Gdo6", nullable = false)
    public int getGdo6() {
        return this.gdo6;
    }

    public void setGdo6(int gdo6) {
        this.gdo6 = gdo6;
    }

    @Column(name = "Gdo7", nullable = false)
    public int getGdo7() {
        return this.gdo7;
    }

    public void setGdo7(int gdo7) {
        this.gdo7 = gdo7;
    }

    @Column(name = "Validez", nullable = false)
    public boolean isValidez() {
        return this.validez;
    }

    public void setValidez(boolean validez) {
        this.validez = validez;
    }

    public double getItrmedio() {
        return itrmedio;
    }

    public void setItrmedio(double itrmedio) {
        this.itrmedio = itrmedio;
    }

}