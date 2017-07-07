package com.becarios.proyecto_definitivo.dao.condicionantes;

import java.util.List;

import com.becarios.proyecto_definitivo.model.condicionantes.Condicionantes;

public interface CondicionantesDao {

    Condicionantes findByCode(int Id);

    void saveCondi(Condicionantes Condi);

    void deleteCondiByCode(int idCondi, int idProyecto);

    List<Condicionantes> findAllCondi(int id);
}
