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

import com.becarios.proyecto_definitivo.model.itr.Itr;
import com.becarios.proyecto_definitivo.service.itr.ItrService;
import com.becarios.proyecto_definitivo.web.controller.ControladorPrincipal;

@Controller
public class ControladorItr {

    @Autowired
    ItrService serviceItr;

    @RequestMapping(value = "/itrAjax", method = RequestMethod.POST)
    public @ResponseBody List<Itr> showItrs(ModelMap model) {
        int idProyecto = ControladorPrincipal.idProyecto;

        return serviceItr.findItrById(idProyecto);
    }

    @RequestMapping(value = "/itr/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody boolean save(@RequestBody Itr data) {
        int idProyecto = ControladorPrincipal.idProyecto;
        data.setIdProyecto(idProyecto);
        serviceItr.saveItr(data);
        return true;
    }
}
