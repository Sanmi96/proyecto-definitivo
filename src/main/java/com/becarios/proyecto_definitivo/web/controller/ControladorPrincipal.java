package com.becarios.proyecto_definitivo.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.becarios.proyecto_definitivo.dto.ProyectoDto;
import com.becarios.proyecto_definitivo.model.Proyecto;
import com.becarios.proyecto_definitivo.service.ProjectService;

@Controller
public class ControladorPrincipal {

    @Autowired
    ProjectService project;

    private String control = "";

    public static int idProyecto = 0;

    @Autowired
    private static ProyectoDto proyectoActual;

    // Redirect to main page

    @RequestMapping(value = "/projectAjax", method = RequestMethod.POST)
    public @ResponseBody List<Proyecto> loadTabla() {

        return project.findAllProjects();
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String redirect(ModelMap model) {

        model.addAttribute("projectes", project.findAllProjects());

        model.addAttribute("control", control);

        return "forward:/criterios";
    }

    @RequestMapping(value = "/project/edit/{idToEdit}", method = RequestMethod.POST)
    @ResponseBody
    public Proyecto editRowAjaxProject(@PathVariable("idToEdit") int id) {
        idProyecto = id;
        Proyecto p = project.findByCode(id);
        control = "proyecto";
        return p;
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {

        return "/index";

    }

    @RequestMapping(value = "/projecte/delete/{idToDelete}", method = RequestMethod.DELETE)
    public @ResponseBody List<Proyecto> deleteProjectAjax(ModelMap model, @PathVariable("idToDelete") int id) {
        project.deleteProjectByCode(id);

        return project.findAllProjects();
    }

    @RequestMapping(value = "/addProject", method = RequestMethod.GET)
    public String addRow(ModelMap model) {

        project.AddProject("Nombre", "Codigo", "Descripcion", false);

        control = "proyecto";
        return "redirect:/";

    }

    @RequestMapping(value = "/project/save/{idToSave}", method = RequestMethod.POST)
    public @ResponseBody Proyecto saveRowAjax(@RequestBody ProyectoDto data) {

        project.updateProject(idProyecto, data);
        return project.findByCode(idProyecto);

    }

    @RequestMapping(value = "/load", method = RequestMethod.GET)
    public String load() {
        return "redirect:/index";
    }

    @RequestMapping(value = "/goto/{page}/{operation}", method = RequestMethod.POST)
    public String operate(@PathVariable("page") String page, @PathVariable("operation") String operation) {
        control = page;
        return "forward:/" + page + "/" + operation + "/";
    }

    @RequestMapping(value = "/config", method = RequestMethod.GET)
    public String config(ModelMap model) {
        control = "config";
        return "forward:/";
    }

    @RequestMapping(value = "/return", method = RequestMethod.POST)
    public String volver(ModelMap model) {
        control = "proyecto";
        return "redirect:/";
    }
}
