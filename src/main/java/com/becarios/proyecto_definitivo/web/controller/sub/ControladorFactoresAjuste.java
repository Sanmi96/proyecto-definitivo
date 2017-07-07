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

import com.becarios.proyecto_definitivo.dto.factores_ajuste.FactoresSaveDto;
import com.becarios.proyecto_definitivo.model.factores_ajustes.ArquitecturaReferencia;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorAjuste;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadAmbiental;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadTecnica;
import com.becarios.proyecto_definitivo.service.factores_ajuste.FactoresAjusteService;
import com.becarios.proyecto_definitivo.web.controller.ControladorPrincipal;

@Controller
public class ControladorFactoresAjuste {

    // Servicio de FactoresAjuste
    @Autowired
    private FactoresAjusteService service;

    @RequestMapping(value = "/factores-ajuste", method = RequestMethod.GET)
    public String index(ModelMap model) {

        model.addAttribute("id", 600);

        return "forward:/horas-costes";

    }

    @RequestMapping(value = "/factoresAjusteAjax", method = RequestMethod.POST)
    public @ResponseBody List<FactorAjuste> showfactorajuste(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findFactoresAjusteById(idProyecto);
    }

    @RequestMapping(value = "/factorTecnicaAjax", method = RequestMethod.POST)
    public @ResponseBody List<FactorComplejidadTecnica> showTecnica(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findFactoresComplejidadTecnicaById(idProyecto);
    }

    @RequestMapping(value = "/arquitecturaReferencialAjax", method = RequestMethod.POST)
    public @ResponseBody List<ArquitecturaReferencia> showArquitectura(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findArquitecturaReferenciaById(idProyecto);
    }

    @RequestMapping(value = "/factorAmbientalAjax", method = RequestMethod.POST)
    public @ResponseBody List<FactorComplejidadAmbiental> showAmbiental(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return service.findFactoresComplejidadAmbientalById(idProyecto);
    }

    @RequestMapping(value = "/factores/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody boolean save(@RequestBody FactoresSaveDto data) {
        int idProyecto = ControladorPrincipal.idProyecto;

        // FactorAjuste
        data.getFactorAjuste().setIdProyecto(idProyecto);
        service.saveFactorAjuste(data.getFactorAjuste());

        // ComplejidadTecnica
        data.getFactorComplejidadTecnica1().getId().setIdProyecto(idProyecto);
        service.save(data.getFactorComplejidadTecnica1());

        data.getFactorComplejidadTecnica2().getId().setIdProyecto(idProyecto);
        service.save(data.getFactorComplejidadTecnica2());

        data.getFactorComplejidadTecnica3().getId().setIdProyecto(idProyecto);
        service.save(data.getFactorComplejidadTecnica3());

        data.getFactorComplejidadTecnica4().getId().setIdProyecto(idProyecto);
        service.save(data.getFactorComplejidadTecnica4());

        data.getFactorComplejidadTecnica5().getId().setIdProyecto(idProyecto);
        service.save(data.getFactorComplejidadTecnica5());

        // ArquitecturaReferencia
        data.getArquitecturaReferencia1().getId().setIdProyecto(idProyecto);
        service.save(data.getArquitecturaReferencia1());

        data.getArquitecturaReferencia2().getId().setIdProyecto(idProyecto);
        service.save(data.getArquitecturaReferencia2());

        data.getArquitecturaReferencia3().getId().setIdProyecto(idProyecto);
        service.save(data.getArquitecturaReferencia3());

        data.getArquitecturaReferencia4().getId().setIdProyecto(idProyecto);
        service.save(data.getArquitecturaReferencia4());

        // ComplejidadAmbiental
        data.getFactorComplejidadAmbiental1().getId().setIdProyecto(idProyecto);
        service.save(data.getFactorComplejidadAmbiental1());

        data.getFactorComplejidadAmbiental2().getId().setIdProyecto(idProyecto);
        service.save(data.getFactorComplejidadAmbiental2());

        data.getFactorComplejidadAmbiental3().getId().setIdProyecto(idProyecto);
        service.save(data.getFactorComplejidadAmbiental3());

        return true;
    }

    /*
     * @RequestMapping(value = "/factores/save", method = RequestMethod.POST,
     * produces = MediaType.APPLICATION_JSON_VALUE) public @ResponseBody
     * FactoresSaveDto save() { int idProyecto =
     * ControladorPrincipal.idProyecto;
     * 
     * FactorAjuste fa = new FactorAjuste(); FactorComplejidadTecnica fct = new
     * FactorComplejidadTecnica(); ArquitecturaReferencia ar = new
     * ArquitecturaReferencia(); FactorComplejidadAmbiental fca = new
     * FactorComplejidadAmbiental(); FactoresSaveDto data = new
     * FactoresSaveDto(fa, fct, fct, fct, fct, fct, ar, ar, ar, ar, fca, fca,
     * fca); return data; }
     */

    /*
     * @RequestMapping(value = "/factores-ajuste/{id}/save", method =
     * RequestMethod.GET) public String save(@PathVariable("id") int id) { //
     * Clase FactoresAjuste FactorComplejidadTecnica rendimiento = new
     * FactorComplejidadTecnica(); rendimiento.setIdProyecto(1);
     * rendimiento.setNombre("rendimiento"); rendimiento.setAplica(true);
     * rendimiento.setGradoDefinicion(1); rendimiento.setGradoExigencia(1);
     * rendimiento.setImpacto(1); rendimiento.setRiesgo(1);
     * service.save(rendimiento);
     * 
     * 
     * ArquitecturaReferencia solucion = new ArquitecturaReferencia();
     * solucion.setIdProyecto(1); solucion.setNombre("solucion");
     * solucion.setAplica(true); solucion.setDefinido(true);
     * solucion.setGradoConocimento(1); solucion.setImpacto(1);
     * solucion.setRiesgo(1); service.save(solucion);
     * 
     * FactorComplejidadAmbiental experiencia = new
     * FactorComplejidadAmbiental(); experiencia.setIdProyecto(1);
     * experiencia.setNombre("experiencia"); experiencia.setValoracion(1);
     * experiencia.setFactorCalculado(1); service.save(experiencia);
     * 
     * return "redirect:/"; }
     */
}
