package com.becarios.proyecto_definitivo.service.horas_costes;

import java.util.List;

import com.becarios.proyecto_definitivo.model.horas_costes.Delivery;
import com.becarios.proyecto_definitivo.model.horas_costes.Deliveryexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestion;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestionexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobierno;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobiernoexterno;
import com.becarios.proyecto_definitivo.model.horas_costes.Riesgo;
import com.becarios.proyecto_definitivo.model.horas_costes.Valoracionfinal;

public interface HorasCostesService {

    List<Delivery> findDeliveryById(int idProyecto);

    List<Deliveryexterno> findDeliveryExternoById(int id);

    List<Gestion> findGestionById(int idProyecto);

    List<Gestionexterno> findGestionExternoById(int id);

    List<Gobierno> findGobiernoById(int idProyecto);

    List<Gobiernoexterno> findGobiernoExternoById(int id);

    List<Riesgo> findRiesgoById(int idProyecto);

    List<Valoracionfinal> findValoracionFinalById(int idProyecto);

    boolean save(Object row);

    void saveRiesgo(Riesgo r);

    void saveValoracionFinal(Valoracionfinal vf);

}
