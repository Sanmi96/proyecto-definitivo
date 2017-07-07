package com.becarios.proyecto_definitivo.web.controller.sub;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.becarios.proyecto_definitivo.model.condicionantes.Condicionantes;
import com.becarios.proyecto_definitivo.service.condicionantes.CondicionantesService;
import com.becarios.proyecto_definitivo.web.controller.ControladorPrincipal;

@Controller
public class ControladorCondicionantes {

    @Autowired
    CondicionantesService condicionantesService;

    @RequestMapping(value = "/condicionantes", method = RequestMethod.GET)
    public String index(ModelMap model) {
        List<Condicionantes> rows = condicionantesService.findAllCondicionantes(ControladorPrincipal.idProyecto);

        model.addAttribute("condicionantes", rows);
        return "forward:/index";
    }

    @RequestMapping(value = "/condicionantesAjax", method = RequestMethod.POST)
    public @ResponseBody List<Condicionantes> showTablesCondicionantes(ModelMap model) {
        return condicionantesService.findAllCondicionantes(ControladorPrincipal.idProyecto);
    }

    @RequestMapping(value = "/condicionantes/addRow/{estimacion}", method = RequestMethod.POST)
    public @ResponseBody List<Condicionantes> addRowAjaxCondicionantes(ModelMap model,
            @PathVariable("estimacion") int est) {
        boolean estimacion;
        if (est == 0) {
            estimacion = false;
        } else {
            estimacion = true;
        }
        condicionantesService.createCondicionantes(ControladorPrincipal.idProyecto, estimacion);

        return condicionantesService.findAllCondicionantes(ControladorPrincipal.idProyecto);
    }

    @RequestMapping(value = "/condicionantes/saveRow/{idToSave}", method = RequestMethod.POST)
    public @ResponseBody List<Condicionantes> saveRowAjaxCondicionantes(@PathVariable("idToSave") String id,
            @RequestBody Map<Integer, String> map) {
        id = id.substring(5);
        int idi = Integer.parseInt(id);
        boolean est;
        est = condicionantesService.findById(idi).isEstimacion();
        condicionantesService.editTable(ControladorPrincipal.idProyecto, idi, map.get(0), est);

        return condicionantesService.findAllCondicionantes(ControladorPrincipal.idProyecto);
    }

    @RequestMapping(value = "/condicionantes/delete/{idToDelete}", method = RequestMethod.DELETE)
    public @ResponseBody List<Condicionantes> deleteRowAjaxCondicionantes(ModelMap model,
            @PathVariable("idToDelete") int id) {
        condicionantesService.deleteCondiByCode(id, ControladorPrincipal.idProyecto);

        return condicionantesService.findAllCondicionantes(ControladorPrincipal.idProyecto);
    }

}