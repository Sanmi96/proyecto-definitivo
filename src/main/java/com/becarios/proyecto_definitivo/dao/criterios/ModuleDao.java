package com.becarios.proyecto_definitivo.dao.criterios;

import java.util.ArrayList;
import java.util.List;

import com.becarios.proyecto_definitivo.model.criterios.CasosDeUso;
import com.becarios.proyecto_definitivo.model.criterios.Cuoriginal;
import com.becarios.proyecto_definitivo.model.criterios.Integracion;
import com.becarios.proyecto_definitivo.model.criterios.Negocio;
import com.becarios.proyecto_definitivo.model.criterios.Perfiles;
import com.becarios.proyecto_definitivo.model.criterios.Persistencia;
import com.becarios.proyecto_definitivo.model.criterios.Vista;

public interface ModuleDao {

    CasosDeUso findByCode(int Id);

    int saveModule(CasosDeUso modulo);

    void deleteModuleByCode(int idModulo, int idProyecto);

    List<CasosDeUso> findAllModules(int id);

    ArrayList<Object> findAllTablas(int idModulo);

    void saveAllTablas(Perfiles perfiles, Vista vista, Negocio negocio, Persistencia persistencia,
            Cuoriginal cuoriginal, Integracion integracion);
}
