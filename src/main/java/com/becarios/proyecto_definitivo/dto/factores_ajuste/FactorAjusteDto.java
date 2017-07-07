package com.becarios.proyecto_definitivo.dto.factores_ajuste;

public class FactorAjusteDto {
    private int idProyecto;
    private int factorProductividad;

    public FactorAjusteDto() {
    }

    public FactorAjusteDto(int idProyecto, int factorProductividad) {
            this.idProyecto = idProyecto;
            this.factorProductividad = factorProductividad;
    }

    public int getIdProyecto() {
        return idProyecto;
    }

    public void setIdProyecto(int idProyecto) {
        this.idProyecto = idProyecto;
    }

    public int getFactorProductividad() {
        return factorProductividad;
    }

    public void setFactorProductividad(int factorProductividad) {
        this.factorProductividad = factorProductividad;
    }
    
    
}
