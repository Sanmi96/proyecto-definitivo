package com.becarios.proyecto_definitivo.tablas;// default package

import javax.ejb.Stateless;

// Generated 21-jul-2017 9:21:12 by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class UsuarioHasProyecto.
 * 
 * @see .UsuarioHasProyecto
 * @author Hibernate Tools
 */
@Stateless
public class UsuarioHasProyectoHome {

    private static final Log log = LogFactory.getLog(UsuarioHasProyectoHome.class);

    @PersistenceContext
    private EntityManager entityManager;

    public void persist(UsuarioHasProyecto transientInstance) {
        log.debug("persisting UsuarioHasProyecto instance");
        try {
            entityManager.persist(transientInstance);
            log.debug("persist successful");
        } catch (RuntimeException re) {
            log.error("persist failed", re);
            throw re;
        }
    }

    public void remove(UsuarioHasProyecto persistentInstance) {
        log.debug("removing UsuarioHasProyecto instance");
        try {
            entityManager.remove(persistentInstance);
            log.debug("remove successful");
        } catch (RuntimeException re) {
            log.error("remove failed", re);
            throw re;
        }
    }

    public UsuarioHasProyecto merge(UsuarioHasProyecto detachedInstance) {
        log.debug("merging UsuarioHasProyecto instance");
        try {
            UsuarioHasProyecto result = entityManager.merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public UsuarioHasProyecto findById(UsuarioHasProyectoId id) {
        log.debug("getting UsuarioHasProyecto instance with id: " + id);
        try {
            UsuarioHasProyecto instance = entityManager.find(UsuarioHasProyecto.class, id);
            log.debug("get successful");
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
}
