package com.becarios.proyecto_definitivo.dao.criterios;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.becarios.proyecto_definitivo.dao.AbstractDao;
import com.becarios.proyecto_definitivo.model.criterios.CasosDeUso;
import com.becarios.proyecto_definitivo.model.criterios.Cuoriginal;
import com.becarios.proyecto_definitivo.model.criterios.Integracion;
import com.becarios.proyecto_definitivo.model.criterios.Negocio;
import com.becarios.proyecto_definitivo.model.criterios.Perfiles;
import com.becarios.proyecto_definitivo.model.criterios.Persistencia;
import com.becarios.proyecto_definitivo.model.criterios.Vista;

@Repository
public class ModuleDaoImpl extends AbstractDao<Integer, CasosDeUso> implements ModuleDao {

    @Override
    public CasosDeUso findByCode(int idModulo) {
        return getByKey(idModulo);
    }

    @Override
    public int saveModule(CasosDeUso modulo) {
        getSession().saveOrUpdate(modulo);
        getSession().flush();
        int lastId = ((BigInteger) getSession().createNativeQuery("SELECT LAST_INSERT_ID()").getSingleResult())
                .intValue();
        return lastId;
    }

    @Override
    public void deleteModuleByCode(int idModulo, int idProyecto) {
        CasosDeUso m = new CasosDeUso();
        m.setIdProyecto(idProyecto);
        m.setId(idModulo);
        m = (CasosDeUso) getSession().load(CasosDeUso.class, idModulo);
        getSession().delete(m);
        getSession().flush();
    }

    @Override
    public List<CasosDeUso> findAllModules(int id) {

        TypedQuery<CasosDeUso> tq = sessionFactory.createEntityManager()
                .createQuery("SELECT c FROM CasosDeUso c WHERE c.idProyecto = :idProyecto", CasosDeUso.class);
        tq.setParameter("idProyecto", id);
        List<CasosDeUso> listaModelo = tq.getResultList();
        return listaModelo;
    }

    @Override
    public ArrayList<Object> findAllTablas(int idModulo) {
        ArrayList<Object> lista = new ArrayList<Object>();

        lista.add(getSession().get(Perfiles.class, idModulo));
        lista.add(getSession().get(Vista.class, idModulo));
        lista.add(getSession().get(Negocio.class, idModulo));
        lista.add(getSession().get(Persistencia.class, idModulo));
        lista.add(getSession().get(Cuoriginal.class, idModulo));
        lista.add(getSession().get(Integracion.class, idModulo));

        return lista;
    }

    @Override
    public void saveAllTablas(Perfiles perfiles, Vista vista, Negocio negocio, Persistencia persistencia,
            Cuoriginal cuoriginal, Integracion integracion) {
        getSession().saveOrUpdate(perfiles);
        getSession().saveOrUpdate(vista);
        getSession().saveOrUpdate(negocio);
        getSession().saveOrUpdate(persistencia);
        getSession().saveOrUpdate(cuoriginal);
        getSession().saveOrUpdate(integracion);
    }

}
