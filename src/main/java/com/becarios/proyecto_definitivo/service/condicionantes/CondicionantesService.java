package com.becarios.proyecto_definitivo.service.condicionantes;

import java.util.List;

import com.becarios.proyecto_definitivo.model.condicionantes.Condicionantes;

public interface CondicionantesService {

    Condicionantes findById(int id);

    List<Condicionantes> findAllCondicionantes(int idProyecto);

    boolean addCondicionantes(Condicionantes Condicionante);

    void createCondicionantes(int id, boolean estimacion);

    void deleteCondiByCode(int id, int idProyecto);

    void editTable(int idProyecto, int id, String descripcion, boolean estimacion);
}
