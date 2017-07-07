package com.becarios.proyecto_definitivo.dao.condicionantes;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.becarios.proyecto_definitivo.dao.AbstractDao;
import com.becarios.proyecto_definitivo.model.condicionantes.Condicionantes;

@Repository
public class CondicionantesDaoImpl extends AbstractDao<Integer, Condicionantes> implements CondicionantesDao {

    @Override
    public Condicionantes findByCode(int idCondi) {
        return getByKey(idCondi);
    }

    @Override
    public void saveCondi(Condicionantes condi) {
        /*
         * TypedQuery<Condicionantes> tq = sessionFactory.createEntityManager()
         * .createQuery(
         * "SELECT c FROM Condicionantes c WHERE c.estimacion = :estimacion",
         * Condicionantes.class); List<Condicionantes> listaModelo =
         * tq.getResultList();
         * condi.setEstimacion(listaModelo.get(0).isEstimacion());
         */
        getSession().saveOrUpdate(condi);
    }

    @Override
    public void deleteCondiByCode(int idCondi, int idProyecto) {
        Condicionantes c = new Condicionantes();
        c.setIdProyecto(idProyecto);
        c.setId(idCondi);
        c = (Condicionantes) getSession().load(Condicionantes.class, idCondi);
        getSession().delete(c);
        getSession().flush();
    }

    @Override
    public List<Condicionantes> findAllCondi(int id) {
        /*
         * CriteriaQuery<Condicionantes> cq =
         * getSession().getCriteriaBuilder().createQuery(Condicionantes.class);
         * cq.from(Condicionantes.class); List<Condicionantes> listaCondi =
         * getSession().createQuery(cq).getResultList(); return listaCondi;
         */

        TypedQuery<Condicionantes> tq = sessionFactory.createEntityManager()
                .createQuery("SELECT c FROM Condicionantes c WHERE c.idProyecto = :idProyecto", Condicionantes.class);
        tq.setParameter("idProyecto", id);
        List<Condicionantes> listaModelo = tq.getResultList();
        return listaModelo;
    }

}
