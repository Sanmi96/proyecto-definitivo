package com.becarios.proyecto_definitivo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.becarios.proyecto_definitivo.dao.ProjectDao;
import com.becarios.proyecto_definitivo.dto.ProyectoDto;
import com.becarios.proyecto_definitivo.model.Proyecto;

@Service("projectService")
@Transactional
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectDao dao;

    @Override
    public Proyecto findByCode(int id) {
        return dao.findByCode(id);
    }

    @Override
    public void saveProject(Proyecto proyecto) {
        dao.saveProject(proyecto);

    }

    @Override
    public void updateProject(int idProyecto, ProyectoDto proyecto) {
        Proyecto entity = dao.findByCode(idProyecto);
        if (entity != null) {
            entity.setNombre(proyecto.getNombre());
            entity.setCodigoProyecto(proyecto.getCodigoProyecto());
            entity.setDescripcion(proyecto.getDescripcion());
            entity.setIsEditado(proyecto.isEditado());
        }

        dao.saveProject(entity);

    }

    @Override
    public void deleteProjectByCode(int id) {
        dao.deleteProjectByCode(id);

    }

    @Override
    public List<Proyecto> findAllProjects() {
        return dao.findAllProjects();
    }

    @Override
    public boolean isProjectCodeUnique(int id) {
        Proyecto proyecto = findByCode(id);
        return (proyecto == null || ((proyecto.getId() == id)));
    }

    @Override
    public boolean AddProject(String nombre, String codigoProyecto, String descripcion, boolean editado) {
        Proyecto proyecto = new Proyecto();
        proyecto.setCodigoProyecto(codigoProyecto);
        proyecto.setNombre(nombre);
        proyecto.setDescripcion(descripcion);
        proyecto.setIsEditado(editado);
        dao.saveProject(proyecto);
        return true;
    }

}
