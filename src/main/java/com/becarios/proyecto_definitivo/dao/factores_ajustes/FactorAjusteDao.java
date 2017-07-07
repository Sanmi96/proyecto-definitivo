package com.becarios.proyecto_definitivo.dao.factores_ajustes;

import java.util.List;

import com.becarios.proyecto_definitivo.model.factores_ajustes.ArquitecturaReferencia;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorAjuste;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadAmbiental;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadTecnica;

public interface FactorAjusteDao {

    FactorAjuste findByCodeFacAjus(int ID);

    void saveFacAjus(FactorAjuste factor);

    void deleteFacAjusByCode(int id);

    List<FactorAjuste> findAllFacAjus(int idProyecto);

    ArquitecturaReferencia findByCodeArqRef(int ID);

    void saveArqRef(ArquitecturaReferencia factor);

    void deleteArqRefByCode(int id);

    List<ArquitecturaReferencia> findAllArqRef(int idProyecto);

    FactorComplejidadAmbiental findByCodeFacAmb(int ID);

    void saveFacAmb(FactorComplejidadAmbiental factor);

    void deleteFacAmbByCode(int id);

    List<FactorComplejidadAmbiental> findAllFactAmb(int idProyecto);

    FactorComplejidadTecnica findByCodeFacTec(int ID);

    void saveFacTec(FactorComplejidadTecnica factor);

    void deleteFacTecByCode(int id);

    List<FactorComplejidadTecnica> findAllFacTec(int idProyecto);

}
