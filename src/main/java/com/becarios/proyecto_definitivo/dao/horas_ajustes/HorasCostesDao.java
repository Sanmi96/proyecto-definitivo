package com.becarios.proyecto_definitivo.dao.horas_ajustes;

import java.util.List;

import com.becarios.proyecto_definitivo.model.horas_costes.Delivery;
import com.becarios.proyecto_definitivo.model.horas_costes.Deliveryexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestion;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestionexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobierno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobiernoexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Riesgo;
import com.becarios.proyecto_definitivo.model.horas_costes.Valoracionfinal;

public interface HorasCostesDao {

    // DeliveryExterno
    Deliveryexterno findByCodeDelivext(int id);

    void saveDelivext(Deliveryexterno factor);

    void deleteDelivextByCode(int id);

    List<Deliveryexterno> findAllDelivext(int idProyecto);

    // Delivery
    Delivery findByCodeDeliv(int ID);

    void saveDeliv(Delivery factor);

    void deleteDelivByCode(int id);

    List<Delivery> findAllDeliv(int idProyecto);

    // Gestion
    Gestion findByCodeGest(int ID);

    void saveGest(Gestion factor);

    void deleteGestByCode(int id);

    List<Gestion> findAllGest(int idProyecto);

    // GestionExterno
    Gestionexterno findByCodeGestext(int ID);

    void saveGestext(Gestionexterno factor);

    void deleteGestextByCode(int id);

    List<Gestionexterno> findAllGestext(int idProyecto);

    // Gobierno
    Gobierno findByCodeGob(int ID);

    void saveGob(Gobierno factor);

    void deleteGobByCode(int id);

    List<Gobierno> findAllGob(int idProyecto);

    // GobiernoExterno
    Gobiernoexterno findByCodeGobext(int ID);

    void saveGobext(Gobiernoexterno factor);

    void deleteGobextByCode(int id);

    List<Gobiernoexterno> findAllGobext(int idProyecto);

    // Riesgo
    Riesgo findByCodeRiesg(int ID);

    void saveRiesg(Riesgo factor);

    void deleteRiesgByCode(int id);

    List<Riesgo> findAllRiesg(int idProyecto);

    // ValoracionFinal
    Valoracionfinal findByCodeValofin(int ID);

    void saveValofin(Valoracionfinal factor);

    void deleteValofinByCode(int id);

    List<Valoracionfinal> findAllValofin(int idProyecto);

}
