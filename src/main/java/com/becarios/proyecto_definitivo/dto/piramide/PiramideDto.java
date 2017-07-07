package com.becarios.proyecto_definitivo.dto.piramide;

public class PiramideDto {
    private PiramideIdDto id;
    private int gdo1;
    private int gdo2;
    private int gdo3;
    private int gdo4;
    private int gdo5;
    private int gdo6;
    private int gdo7;
    private boolean validez;
    private double itrmedio;

    public PiramideDto() {
    }

    public PiramideDto(PiramideIdDto id, int gdo1, int gdo2, int gdo3, int gdo4, int gdo5, int gdo6, int gdo7,
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

    public PiramideIdDto getId() {
        return id;
    }

    public void setId(PiramideIdDto id) {
        this.id = id;
    }

    public int getGdo1() {
        return gdo1;
    }

    public void setGdo1(int gdo1) {
        this.gdo1 = gdo1;
    }

    public int getGdo2() {
        return gdo2;
    }

    public void setGdo2(int gdo2) {
        this.gdo2 = gdo2;
    }

    public int getGdo3() {
        return gdo3;
    }

    public void setGdo3(int gdo3) {
        this.gdo3 = gdo3;
    }

    public int getGdo4() {
        return gdo4;
    }

    public void setGdo4(int gdo4) {
        this.gdo4 = gdo4;
    }

    public int getGdo5() {
        return gdo5;
    }

    public void setGdo5(int gdo5) {
        this.gdo5 = gdo5;
    }

    public int getGdo6() {
        return gdo6;
    }

    public void setGdo6(int gdo6) {
        this.gdo6 = gdo6;
    }

    public int getGdo7() {
        return gdo7;
    }

    public void setGdo7(int gdo7) {
        this.gdo7 = gdo7;
    }

    public boolean isValidez() {
        return validez;
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
