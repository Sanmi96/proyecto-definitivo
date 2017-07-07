package com.becarios.proyecto_definitivo.service.horas_costes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.becarios.proyecto_definitivo.dao.horas_ajustes.HorasCostesDao;
import com.becarios.proyecto_definitivo.model.horas_costes.Delivery;
import com.becarios.proyecto_definitivo.model.horas_costes.Deliveryexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestion;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestionexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobierno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobiernoexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Riesgo;
import com.becarios.proyecto_definitivo.model.horas_costes.Valoracionfinal;

@Service("HorasCostesService")
@Transactional
public class HorasCostesServiceImpl implements HorasCostesService {

    @Autowired
    HorasCostesDao dao;

    @Override
    public List<Delivery> findDeliveryById(int idProyecto) {
        return dao.findAllDeliv(idProyecto);

    }

    @Override
    public List<Deliveryexterno> findDeliveryExternoById(int id) {
        return dao.findAllDelivext(id);

    }

    @Override
    public List<Gestion> findGestionById(int idProyecto) {
        return dao.findAllGest(idProyecto);

    }

    @Override
    public List<Gestionexterno> findGestionExternoById(int id) {
        return dao.findAllGestext(id);

    }

    @Override
    public List<Gobierno> findGobiernoById(int idProyecto) {
        return dao.findAllGob(idProyecto);

    }

    @Override
    public List<Gobiernoexterno> findGobiernoExternoById(int id) {
        return dao.findAllGobext(id);
    }

    @Override
    public List<Riesgo> findRiesgoById(int idProyecto) {
        return dao.findAllRiesg(idProyecto);

    }

    @Override
    public List<Valoracionfinal> findValoracionFinalById(int idProyecto) {
        return dao.findAllValofin(idProyecto);
    }

    @Override
    public boolean save(Object row) {
        if (row instanceof Delivery) {
            dao.saveDeliv((Delivery) row);
        } else if (row instanceof Deliveryexterno) {
            dao.saveDelivext((Deliveryexterno) row);
        } else if (row instanceof Gestion) {
            dao.saveGest((Gestion) row);
        } else if (row instanceof Gestionexterno) {
            dao.saveGestext((Gestionexterno) row);
        } else if (row instanceof Gobierno) {
            dao.saveGob((Gobierno) row);
        } else if (row instanceof Gobiernoexterno) {
            dao.saveGobext((Gobiernoexterno) row);
        } else if (row instanceof Riesgo) {
            dao.saveRiesg((Riesgo) row);
        } else if (row instanceof Valoracionfinal) {
            dao.saveValofin((Valoracionfinal) row);
        }
        return false;
    }

    @Override
    public void saveRiesgo(Riesgo r) {
        dao.saveRiesg(r);
    }

    @Override
    public void saveValoracionFinal(Valoracionfinal vf) {
        dao.saveValofin(vf);
    }

}
