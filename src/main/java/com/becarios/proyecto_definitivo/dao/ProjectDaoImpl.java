package com.becarios.proyecto_definitivo.dao;

import java.util.List;

import javax.persistence.criteria.CriteriaQuery;
import org.springframework.stereotype.Repository;

import com.becarios.proyecto_definitivo.model.Proyecto;

@Repository
public class ProjectDaoImpl extends AbstractDao<Integer, Proyecto> implements ProjectDao {

    @Override
    public Proyecto findByCode(int code) {
    	return getByKey(code);
    }

    @Override
    public void saveProject(Proyecto proyecto) {
        getSession().saveOrUpdate(proyecto);

    }

    @Override
    public void deleteProjectByCode(int id) {
        Proyecto proyecto;
        proyecto = (Proyecto) getSession().load(Proyecto.class, id);
        getSession().delete(proyecto);
        getSession().flush();
    }

    @Override
    public List<Proyecto> findAllProjects() {
        CriteriaQuery<Proyecto> cq = getSession().getCriteriaBuilder().createQuery(Proyecto.class);
        cq.from(Proyecto.class);
        List<Proyecto> listaProyecto = getSession().createQuery(cq).getResultList();
        return listaProyecto;
    }

}
