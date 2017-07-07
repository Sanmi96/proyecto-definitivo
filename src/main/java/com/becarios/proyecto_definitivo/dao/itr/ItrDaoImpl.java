package com.becarios.proyecto_definitivo.dao.itr;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.becarios.proyecto_definitivo.dao.AbstractDao;
import com.becarios.proyecto_definitivo.model.itr.Itr;

@Repository
public class ItrDaoImpl extends AbstractDao<Integer, Itr> implements ItrDao {

    @Override
    public Itr findByCodeItr(int id) {
        return getByKey(id);
    }

    @Override
    public void saveItr(Itr itr) {
        getSession().saveOrUpdate(itr);
    }

    @Override
    public List<Itr> findAllItr(int id) {
        TypedQuery<Itr> tq = sessionFactory.createEntityManager()
                .createQuery("SELECT i FROM Itr i WHERE i.idProyecto = :idProyecto", Itr.class);
        tq.setParameter("idProyecto", id);
        List<Itr> listaItr = tq.getResultList();
        return listaItr;
    }
}
