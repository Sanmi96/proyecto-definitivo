package com.becarios.proyecto_definitivo.service.condicionantes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.becarios.proyecto_definitivo.dao.condicionantes.CondicionantesDao;
import com.becarios.proyecto_definitivo.model.condicionantes.Condicionantes;

@Service("condicionantesService")
@Transactional
public class CondicionantesServiceImpl implements CondicionantesService {

    @Autowired
    private CondicionantesDao dao;

    @Override
    public List<Condicionantes> findAllCondicionantes(int idProyecto) {
        return dao.findAllCondi(idProyecto);
    }

    @Override
    public boolean addCondicionantes(Condicionantes condicionante) {
        dao.saveCondi(condicionante);
        return true;
    }

    @Override
    public void deleteCondiByCode(int id, int idProyecto) {
        dao.deleteCondiByCode(id, idProyecto);
    }

    @Override
    public void createCondicionantes(int idProyecto, boolean estimacion) {
        Condicionantes c = new Condicionantes();
        c.setDescripcion("Descripcion");
        c.setEstimacion(estimacion);
        c.setIdProyecto(idProyecto);
        dao.saveCondi(c);
    }

    @Override
    public void editTable(int idProyecto, int id, String descripcion, boolean estimacion) {
        Condicionantes c = new Condicionantes();
        c.setIdProyecto(idProyecto);
        c.setId(id);
        c.setDescripcion(descripcion);
        c.setEstimacion(estimacion);
        dao.saveCondi(c);
    }

    @Override
    public Condicionantes findById(int id) {
        Condicionantes c = new Condicionantes();
        c = dao.findByCode(id);
        return c;
    }

}
