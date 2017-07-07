package com.becarios.proyecto_definitivo.dao;

import java.util.List;

import com.becarios.proyecto_definitivo.model.Proyecto;

public interface ProjectDao {

    Proyecto findByCode(int id);

    void saveProject(Proyecto proyecto);

    void deleteProjectByCode(int id);

    List<Proyecto> findAllProjects();

}
