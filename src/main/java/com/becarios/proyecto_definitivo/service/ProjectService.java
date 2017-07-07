package com.becarios.proyecto_definitivo.service;

import java.util.List;

import com.becarios.proyecto_definitivo.dto.ProyectoDto;
import com.becarios.proyecto_definitivo.model.Proyecto;

public interface ProjectService {

    Proyecto findByCode(int id);

    void saveProject(Proyecto proyecto);

    void updateProject(int idProyecto, ProyectoDto proyecto);

    void deleteProjectByCode(int id);

    List<Proyecto> findAllProjects();

    boolean isProjectCodeUnique(int id);

    boolean AddProject(String nombre, String codigo, String descripcion, boolean editado);

}
