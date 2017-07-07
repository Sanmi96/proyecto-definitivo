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

import com.becarios.proyecto_definitivo.dto.horas_costes.HorasCostesSaveDTO;
import com.becarios.proyecto_definitivo.model.horas_costes.Delivery;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestion;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobierno;
import com.becarios.proyecto_definitivo.model.horas_costes.Riesgo;
import com.becarios.proyecto_definitivo.model.horas_costes.Valoracionfinal;
import com.becarios.proyecto_definitivo.service.horas_costes.HorasCostesService;
import com.becarios.proyecto_definitivo.web.controller.ControladorPrincipal;

@Controller
public class ControladorHorasCostes {

    // Servicio de HorasCoste
    @Autowired
    private HorasCostesService service;

    @RequestMapping(value = "/horas-costes", method = RequestMethod.GET)
    public String index(ModelMap model) {

        model.addAttribute("id", 600);

        return "forward:/piramide";

    }

    @RequestMapping(value = "/valoracionFinalAjax", method = RequestMethod.POST)
    public @ResponseBody List<Valoracionfinal> showvaloracionfinal(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findValoracionFinalById(idProyecto);
    }

    @RequestMapping(value = "/riesgoAjax", method = RequestMethod.POST)
    public @ResponseBody List<Riesgo> showriesgo(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findRiesgoById(idProyecto);
    }

    @RequestMapping(value = "/deliveryAjax", method = RequestMethod.POST)
    public @ResponseBody List<Delivery> showdelivery(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findDeliveryById(idProyecto);
    }

    @RequestMapping(value = "/gestionAjax", method = RequestMethod.POST)
    public @ResponseBody List<Gestion> showgestion(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findGestionById(idProyecto);
    }

    @RequestMapping(value = "/gobiernoAjax", method = RequestMethod.POST)
    public @ResponseBody List<Gobierno> showgobierno(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findGobiernoById(idProyecto);
    }

    @RequestMapping(value = "/costes/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody boolean saveHorasCostes(@RequestBody HorasCostesSaveDTO data) {
        int idProyecto = ControladorPrincipal.idProyecto;

        // Valoración
        data.getValoracionFinal().getId().setIdProyecto(idProyecto);
        service.saveValoracionFinal(data.getValoracionFinal());

        // Riesgo
        data.getRiesgo().setIdProyecto(idProyecto);
        service.saveRiesgo(data.getRiesgo());

        // Delivery
        data.getDelivery1().getId().setIdProyecto(idProyecto);
        service.save(data.getDelivery1());

        data.getDelivery2().getId().setIdProyecto(idProyecto);
        service.save(data.getDelivery2());

        data.getDelivery3().getId().setIdProyecto(idProyecto);
        service.save(data.getDelivery3());

        data.getDelivery4().getId().setIdProyecto(idProyecto);
        service.save(data.getDelivery4());

        data.getDelivery5().getId().setIdProyecto(idProyecto);
        service.save(data.getDelivery5());

        data.getDelivery6().getId().setIdProyecto(idProyecto);
        service.save(data.getDelivery6());

        // Gestion
        data.getGestion1().getId().setIdProyecto(idProyecto);
        service.save(data.getGestion1());

        data.getGestion2().getId().setIdProyecto(idProyecto);
        service.save(data.getGestion2());

        data.getGestion3().getId().setIdProyecto(idProyecto);
        service.save(data.getGestion3());

        // Gobierno
        data.getGobierno1().getId().setIdProyecto(idProyecto);
        service.save(data.getGobierno1());

        data.getGobierno2().getId().setIdProyecto(idProyecto);
        service.save(data.getGobierno2());

        return true;

    }

}
