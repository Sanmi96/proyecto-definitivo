package com.becarios.proyecto_definitivo.dao.Piramide;

import java.util.List;

import com.becarios.proyecto_definitivo.model.piramide.Piramide;

public interface PiramideDao {

    Piramide findByCodePiramide(int id);

    void savePiramide(Piramide piramide);

    void deletePiramide(int id);

    List<Piramide> findAllPiramide(int idProyecto);
}
