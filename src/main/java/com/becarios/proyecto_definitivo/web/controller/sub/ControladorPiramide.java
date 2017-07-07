package com.becarios.proyecto_definitivo.web.controller.sub;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.becarios.proyecto_definitivo.dto.piramide.PiramideSaveDto;
import com.becarios.proyecto_definitivo.model.piramide.Piramide;
import com.becarios.proyecto_definitivo.service.piramide.PiramideService;
import com.becarios.proyecto_definitivo.web.controller.ControladorPrincipal;

@Controller
public class ControladorPiramide {

    // Servicio de Piramide
    @Autowired
    private PiramideService service;

    @RequestMapping(value = "/piramide", method = RequestMethod.GET)
    public String index(ModelMap model) {

        model.addAttribute("id", 600);

        return "forward:/condicionantes";

    }

    @RequestMapping(value = "/piramideAjax", method = RequestMethod.POST)
    public @ResponseBody List<Piramide> showpiramide(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findAllById(idProyecto);
    }

    @RequestMapping(value = "/piramide/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody boolean save(@RequestBody PiramideSaveDto data) {
        int idProyecto = ControladorPrincipal.idProyecto;

        // Delivery
        data.getDelivery_gestion().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getDelivery_gestion());

        data.getDelivery_evaluacion().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getDelivery_evaluacion());

        data.getDelivery_analisis().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getDelivery_analisis());

        data.getDelivery_diseno().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getDelivery_diseno());

        data.getDelivery_construccion().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getDelivery_construccion());

        data.getDelivery_testing().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getDelivery_testing());

        // Gestion
        data.getGestion_calidad().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getGestion_calidad());

        data.getGestion_seguridad().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getGestion_seguridad());

        data.getGestion_despliegues().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getGestion_despliegues());

        // Gobierno //
        data.getGestion_proyecto().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getGestion_proyecto());

        data.getGobierno_dm().getId().setIdProyecto(idProyecto);
        service.savePiramide(data.getGobierno_dm());

        return true;
    }

}
