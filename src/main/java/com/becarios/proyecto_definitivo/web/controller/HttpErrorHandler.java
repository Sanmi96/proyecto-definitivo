package com.becarios.proyecto_definitivo.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HttpErrorHandler extends Exception {
    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    // Displays the error message if the code it's not unique
    String path = "/error";

    @RequestMapping(value = "/405")
    public String error404() {
        // DO stuff here
        return path + "/405";
    }

}
