package com.becarios.proyecto_definitivo.dao.factores_ajustes;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.becarios.proyecto_definitivo.dao.AbstractDao;
import com.becarios.proyecto_definitivo.model.factores_ajustes.ArquitecturaReferencia;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorAjuste;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadAmbiental;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadTecnica;

@Repository
public class FactorAjusteDaoImpl extends AbstractDao<Integer, Object> implements FactorAjusteDao {

    @Override
    public FactorAjuste findByCodeFacAjus(int id) {
        return (FactorAjuste) getByKey(id);
    }

    @Override
    public void saveFacAjus(FactorAjuste factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteFacAjusByCode(int id) {
        FactorAjuste factor;
        factor = (FactorAjuste) getSession().load(FactorAjuste.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<FactorAjuste> findAllFacAjus(int id) {
        TypedQuery<FactorAjuste> tq = sessionFactory.createEntityManager()
                .createQuery("SELECT f FROM FactorAjuste f WHERE f.idProyecto = :idProyecto", FactorAjuste.class);
        tq.setParameter("idProyecto", id);
        List<FactorAjuste> listaFactorAjuste = tq.getResultList();
        return listaFactorAjuste;
    }

    @Override
    public ArquitecturaReferencia findByCodeArqRef(int id) {
        return (ArquitecturaReferencia) getByKey(id);
    }

    @Override
    public void saveArqRef(ArquitecturaReferencia factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteArqRefByCode(int id) {
        ArquitecturaReferencia factor;
        factor = (ArquitecturaReferencia) getSession().load(ArquitecturaReferencia.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<ArquitecturaReferencia> findAllArqRef(int id) {
        TypedQuery<ArquitecturaReferencia> tq = sessionFactory.createEntityManager().createQuery(
                "SELECT a FROM ArquitecturaReferencia a WHERE a.id.idProyecto = :id", ArquitecturaReferencia.class);
        tq.setParameter("id", id);
        List<ArquitecturaReferencia> listaArquitecturaReferencia = tq.getResultList();
        return listaArquitecturaReferencia;

    }

    @Override
    public FactorComplejidadAmbiental findByCodeFacAmb(int id) {
        return (FactorComplejidadAmbiental) getByKey(id);
    }

    @Override
    public void saveFacAmb(FactorComplejidadAmbiental factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteFacAmbByCode(int id) {
        FactorComplejidadAmbiental factor;
        factor = (FactorComplejidadAmbiental) getSession().load(FactorComplejidadAmbiental.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<FactorComplejidadAmbiental> findAllFactAmb(int id) {
        TypedQuery<FactorComplejidadAmbiental> tq = sessionFactory.createEntityManager().createQuery(
                "SELECT c FROM FactorComplejidadAmbiental c WHERE c.id.idProyecto = :id",
                FactorComplejidadAmbiental.class);
        tq.setParameter("id", id);
        List<FactorComplejidadAmbiental> listaComplejidadAmbiental = tq.getResultList();
        return listaComplejidadAmbiental;
    }

    @Override
    public FactorComplejidadTecnica findByCodeFacTec(int id) {
        return (FactorComplejidadTecnica) getByKey(id);
    }

    @Override
    public void saveFacTec(FactorComplejidadTecnica factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteFacTecByCode(int id) {
        FactorAjusteDaoImpl factor;
        factor = (FactorAjusteDaoImpl) getSession().load(FactorAjusteDaoImpl.class, id);
        getSession().delete(factor);
        getSession().flush();

    }

    @Override
    public List<FactorComplejidadTecnica> findAllFacTec(int id) {
        TypedQuery<FactorComplejidadTecnica> tq = sessionFactory.createEntityManager().createQuery(
                "SELECT t FROM FactorComplejidadTecnica t WHERE t.id.idProyecto = :id", FactorComplejidadTecnica.class);
        tq.setParameter("id", id);
        List<FactorComplejidadTecnica> listaFactorComplejidadTecnica = tq.getResultList();
        return listaFactorComplejidadTecnica;
    }

}
