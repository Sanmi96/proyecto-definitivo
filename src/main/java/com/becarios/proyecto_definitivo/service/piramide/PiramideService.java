package com.becarios.proyecto_definitivo.service.piramide;

import java.util.List;

import com.becarios.proyecto_definitivo.model.piramide.Piramide;

public interface PiramideService {

    boolean savePiramide(Piramide piramide);

    List<Piramide> findAllById(int idProyecto);

    void deletePiramideById(int id);

}
