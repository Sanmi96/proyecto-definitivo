package com.becarios.proyecto_definitivo.service.factores_ajuste;

import java.util.List;

import com.becarios.proyecto_definitivo.model.factores_ajustes.ArquitecturaReferencia;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorAjuste;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadAmbiental;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadTecnica;

public interface FactoresAjusteService {

    List<FactorAjuste> findFactoresAjusteById(int idProyecto);

    List<FactorComplejidadAmbiental> findFactoresComplejidadAmbientalById(int idProyecto);

    List<FactorComplejidadTecnica> findFactoresComplejidadTecnicaById(int idProyecto);

    List<ArquitecturaReferencia> findArquitecturaReferenciaById(int idProyecto);

    boolean save(Object row);

    void saveFactorAjuste(FactorAjuste f);
}
