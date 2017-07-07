package com.becarios.proyecto_definitivo.dao.horas_ajustes;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaQuery;

import org.springframework.stereotype.Repository;

import com.becarios.proyecto_definitivo.dao.AbstractDao;
import com.becarios.proyecto_definitivo.model.horas_costes.Delivery;
import com.becarios.proyecto_definitivo.model.horas_costes.Deliveryexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestion;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestionexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobierno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobiernoexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Riesgo;
import com.becarios.proyecto_definitivo.model.horas_costes.Valoracionfinal;

@Repository
public class HorasCostesDaoImpl extends AbstractDao<Integer, Object> implements HorasCostesDao {

    @Override
    public Deliveryexterno findByCodeDelivext(int id) {
        return (Deliveryexterno) getByKey(id);
    }

    @Override
    public void saveDelivext(Deliveryexterno factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteDelivextByCode(int id) {
        Deliveryexterno factor;
        factor = (Deliveryexterno) getSession().load(Deliveryexterno.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<Deliveryexterno> findAllDelivext(int idProyecto) {
        CriteriaQuery<Deliveryexterno> cq = getSession().getCriteriaBuilder().createQuery(Deliveryexterno.class);
        cq.from(Deliveryexterno.class);
        List<Deliveryexterno> listaDeliveryexterno = getSession().createQuery(cq).getResultList();
        return listaDeliveryexterno;
    }

    @Override
    public Delivery findByCodeDeliv(int id) {
        return (Delivery) getByKey(id);
    }

    @Override
    public void saveDeliv(Delivery factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteDelivByCode(int id) {
        Delivery factor;
        factor = (Delivery) getSession().load(Delivery.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<Delivery> findAllDeliv(int id) {
        TypedQuery<Delivery> tq = sessionFactory.createEntityManager()
                .createQuery("SELECT d FROM Delivery d WHERE d.id.idProyecto = :idProyecto", Delivery.class);
        tq.setParameter("idProyecto", id);
        List<Delivery> listaDelivery = tq.getResultList();
        return listaDelivery;
    }

    @Override
    public Gestion findByCodeGest(int id) {
        return (Gestion) getByKey(id);
    }

    @Override
    public void saveGest(Gestion factor) {
        getSession().saveOrUpdate(factor);
    }

    @Override
    public void deleteGestByCode(int id) {
        Gestion factor;
        factor = (Gestion) getSession().load(Gestion.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<Gestion> findAllGest(int id) {
        TypedQuery<Gestion> tq = sessionFactory.createEntityManager()
                .createQuery("SELECT g FROM Gestion g WHERE g.id.idProyecto = :idProyecto", Gestion.class);
        tq.setParameter("idProyecto", id);
        List<Gestion> listaGestion = tq.getResultList();
        return listaGestion;
    }

    @Override
    public Gestionexterno findByCodeGestext(int id) {
        return (Gestionexterno) getByKey(id);
    }

    @Override
    public void saveGestext(Gestionexterno factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteGestextByCode(int id) {
        Delivery factor;
        factor = (Delivery) getSession().load(Delivery.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<Gestionexterno> findAllGestext(int idProyecto) {
        CriteriaQuery<Gestionexterno> cq = getSession().getCriteriaBuilder().createQuery(Gestionexterno.class);
        cq.from(Gestionexterno.class);
        List<Gestionexterno> listaGestionexterno = getSession().createQuery(cq).getResultList();
        return listaGestionexterno;
    }

    @Override
    public Gobierno findByCodeGob(int id) {
        return (Gobierno) getByKey(id);
    }

    @Override
    public void saveGob(Gobierno factor) {
        getSession().saveOrUpdate(factor);
    }

    @Override
    public void deleteGobByCode(int id) {
        Gobierno factor;
        factor = (Gobierno) getSession().load(Gobierno.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<Gobierno> findAllGob(int id) {
        TypedQuery<Gobierno> tq = sessionFactory.createEntityManager()
                .createQuery("SELECT g FROM Gobierno g WHERE g.id.idProyecto = :idProyecto", Gobierno.class);
        tq.setParameter("idProyecto", id);
        List<Gobierno> listaGobierno = tq.getResultList();
        return listaGobierno;
    }

    @Override
    public Gobiernoexterno findByCodeGobext(int id) {
        return (Gobiernoexterno) getByKey(id);
    }

    @Override
    public void saveGobext(Gobiernoexterno factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteGobextByCode(int id) {
        Gobiernoexterno factor;
        factor = (Gobiernoexterno) getSession().load(Gobiernoexterno.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<Gobiernoexterno> findAllGobext(int idProyecto) {
        CriteriaQuery<Gobiernoexterno> cq = getSession().getCriteriaBuilder().createQuery(Gobiernoexterno.class);
        cq.from(Gobiernoexterno.class);
        List<Gobiernoexterno> listaGobiernoexterno = getSession().createQuery(cq).getResultList();
        return listaGobiernoexterno;
    }

    @Override
    public Riesgo findByCodeRiesg(int id) {
        return (Riesgo) getByKey(id);
    }

    @Override
    public void saveRiesg(Riesgo factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteRiesgByCode(int id) {

        Riesgo factor;
        factor = (Riesgo) getSession().load(Riesgo.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<Riesgo> findAllRiesg(int id) {
        TypedQuery<Riesgo> tq = sessionFactory.createEntityManager()
                .createQuery("SELECT r FROM Riesgo r WHERE r.idProyecto = :idProyecto", Riesgo.class);
        tq.setParameter("idProyecto", id);
        List<Riesgo> listaRiesgo = tq.getResultList();
        return listaRiesgo;
    }

    @Override
    public Valoracionfinal findByCodeValofin(int id) {
        return (Valoracionfinal) getByKey(id);
    }

    @Override
    public void saveValofin(Valoracionfinal factor) {
        getSession().saveOrUpdate(factor);

    }

    @Override
    public void deleteValofinByCode(int id) {
        Valoracionfinal factor;
        factor = (Valoracionfinal) getSession().load(Valoracionfinal.class, id);
        getSession().delete(factor);
        getSession().flush();
    }

    @Override
    public List<Valoracionfinal> findAllValofin(int id) {
        TypedQuery<Valoracionfinal> tq = sessionFactory.createEntityManager().createQuery(
                "SELECT v FROM Valoracionfinal v WHERE v.id.idProyecto = :idProyecto", Valoracionfinal.class);
        tq.setParameter("idProyecto", id);
        List<Valoracionfinal> listaValoracionfinal = tq.getResultList();
        return listaValoracionfinal;
    }

}
