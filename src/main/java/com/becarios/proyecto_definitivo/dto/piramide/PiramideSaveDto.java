package com.becarios.proyecto_definitivo.dto.piramide;

import com.becarios.proyecto_definitivo.model.piramide.Piramide;

public class PiramideSaveDto {
    Piramide delivery_gestion;
    Piramide delivery_evaluacion;
    Piramide delivery_analisis;
    Piramide delivery_diseno;
    Piramide delivery_construccion;
    Piramide delivery_testing;
    Piramide gestion_calidad;
    Piramide gestion_seguridad;
    Piramide gestion_despliegues;
    Piramide gestion_proyecto;
    Piramide gobierno_dm;

    public PiramideSaveDto() {
        super();
    }

    public PiramideSaveDto(Piramide delivery_gestion, Piramide delivery_evaluacion, Piramide delivery_analisis,
            Piramide delivery_diseno, Piramide delivery_construccion, Piramide delivery_testing,
            Piramide gestion_calidad, Piramide gestion_seguridad, Piramide gestion_despliegues,
            Piramide gestion_proyecto, Piramide gobierno_dm) {
        super();
        this.delivery_gestion = delivery_gestion;
        this.delivery_evaluacion = delivery_evaluacion;
        this.delivery_analisis = delivery_analisis;
        this.delivery_diseno = delivery_diseno;
        this.delivery_construccion = delivery_construccion;
        this.delivery_testing = delivery_testing;
        this.gestion_calidad = gestion_calidad;
        this.gestion_seguridad = gestion_seguridad;
        this.gestion_despliegues = gestion_despliegues;
        this.gestion_proyecto = gestion_proyecto;
        this.gobierno_dm = gobierno_dm;
    }

    public Piramide getDelivery_gestion() {
        return delivery_gestion;
    }

    public void setDelivery_gestion(Piramide delivery_gestion) {
        this.delivery_gestion = delivery_gestion;
    }

    public Piramide getDelivery_evaluacion() {
        return delivery_evaluacion;
    }

    public void setDelivery_evaluacion(Piramide delivery_evaluacion) {
        this.delivery_evaluacion = delivery_evaluacion;
    }

    public Piramide getDelivery_analisis() {
        return delivery_analisis;
    }

    public void setDelivery_analisis(Piramide delivery_analisis) {
        this.delivery_analisis = delivery_analisis;
    }

    public Piramide getDelivery_diseno() {
        return delivery_diseno;
    }

    public void setDelivery_diseno(Piramide delivery_diseno) {
        this.delivery_diseno = delivery_diseno;
    }

    public Piramide getDelivery_construccion() {
        return delivery_construccion;
    }

    public void setDelivery_construccion(Piramide delivery_construccion) {
        this.delivery_construccion = delivery_construccion;
    }

    public Piramide getDelivery_testing() {
        return delivery_testing;
    }

    public void setDelivery_testing(Piramide delivery_testing) {
        this.delivery_testing = delivery_testing;
    }

    public Piramide getGestion_calidad() {
        return gestion_calidad;
    }

    public void setGestion_calidad(Piramide gestion_calidad) {
        this.gestion_calidad = gestion_calidad;
    }

    public Piramide getGestion_seguridad() {
        return gestion_seguridad;
    }

    public void setGestion_seguridad(Piramide gestion_seguridad) {
        this.gestion_seguridad = gestion_seguridad;
    }

    public Piramide getGestion_despliegues() {
        return gestion_despliegues;
    }

    public void setGestion_despliegues(Piramide gestion_despliegues) {
        this.gestion_despliegues = gestion_despliegues;
    }

    public Piramide getGestion_proyecto() {
        return gestion_proyecto;
    }

    public void setGestion_proyecto(Piramide gestion_proyecto) {
        this.gestion_proyecto = gestion_proyecto;
    }

    public Piramide getGobierno_dm() {
        return gobierno_dm;
    }

    public void setGobierno_dm(Piramide gobierno_dm) {
        this.gobierno_dm = gobierno_dm;
    }

}
