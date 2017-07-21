package com.becarios.proyecto_definitivo.tablas;

import javax.ejb.Stateless;

// Generated 21-jul-2017 9:21:12 by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class RolHasUsuario.
 * 
 * @see .RolHasUsuario
 * @author Hibernate Tools
 */
@Stateless
public class RolHasUsuarioHome {

    private static final Log log = LogFactory.getLog(RolHasUsuarioHome.class);

    @PersistenceContext
    private EntityManager entityManager;

    public void persist(RolHasUsuario transientInstance) {
        log.debug("persisting RolHasUsuario instance");
        try {
            entityManager.persist(transientInstance);
            log.debug("persist successful");
        } catch (RuntimeException re) {
            log.error("persist failed", re);
            throw re;
        }
    }

    public void remove(RolHasUsuario persistentInstance) {
        log.debug("removing RolHasUsuario instance");
        try {
            entityManager.remove(persistentInstance);
            log.debug("remove successful");
        } catch (RuntimeException re) {
            log.error("remove failed", re);
            throw re;
        }
    }

    public RolHasUsuario merge(RolHasUsuario detachedInstance) {
        log.debug("merging RolHasUsuario instance");
        try {
            RolHasUsuario result = entityManager.merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public RolHasUsuario findById(RolHasUsuarioId id) {
        log.debug("getting RolHasUsuario instance with id: " + id);
        try {
            RolHasUsuario instance = entityManager.find(RolHasUsuario.class, id);
            log.debug("get successful");
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
}
