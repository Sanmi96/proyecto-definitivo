package com.becarios.proyecto_definitivo.dto.criterios;

import com.becarios.proyecto_definitivo.model.criterios.CasosDeUso;
import com.becarios.proyecto_definitivo.model.criterios.Cuoriginal;
import com.becarios.proyecto_definitivo.model.criterios.Integracion;
import com.becarios.proyecto_definitivo.model.criterios.Negocio;
import com.becarios.proyecto_definitivo.model.criterios.Perfiles;
import com.becarios.proyecto_definitivo.model.criterios.Persistencia;
import com.becarios.proyecto_definitivo.model.criterios.Vista;

public class TablasEditDto {
    CasosDeUso casosUso;
    Perfiles perfiles;
    Vista vista;
    Negocio negocio;
    Persistencia persistencia;
    Cuoriginal cuoriginal;
    Integracion integracion;

    public CasosDeUso getCasosUso() {
        return casosUso;
    }

    public void setCasosUso(CasosDeUso casosUso) {
        this.casosUso = casosUso;
    }

    public Perfiles getPerfiles() {
        return perfiles;
    }

    public void setPerfiles(Perfiles perfiles) {
        this.perfiles = perfiles;
    }

    public Vista getVista() {
        return vista;
    }

    public void setVista(Vista vista) {
        this.vista = vista;
    }

    public Negocio getNegocio() {
        return negocio;
    }

    public void setNegocio(Negocio negocio) {
        this.negocio = negocio;
    }

    public Persistencia getPersistencia() {
        return persistencia;
    }

    public void setPersistencia(Persistencia persistencia) {
        this.persistencia = persistencia;
    }

    public Cuoriginal getCuoriginal() {
        return cuoriginal;
    }

    public void setCuoriginal(Cuoriginal cuoriginal) {
        this.cuoriginal = cuoriginal;
    }

    public Integracion getIntegracion() {
        return integracion;
    }

    public void setIntegracion(Integracion integracion) {
        this.integracion = integracion;
    }

}
