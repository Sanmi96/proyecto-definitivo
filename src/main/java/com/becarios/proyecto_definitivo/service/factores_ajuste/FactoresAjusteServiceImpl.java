package com.becarios.proyecto_definitivo.service.factores_ajuste;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.becarios.proyecto_definitivo.dao.factores_ajustes.FactorAjusteDao;
import com.becarios.proyecto_definitivo.model.factores_ajustes.ArquitecturaReferencia;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorAjuste;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadAmbiental;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadTecnica;

@Service("factoresAjusteService")
@Transactional
public class FactoresAjusteServiceImpl implements FactoresAjusteService {

    @Autowired
    private FactorAjusteDao factoresAjusteDao;

    @Override
    public List<FactorAjuste> findFactoresAjusteById(int idProyecto) {
        return factoresAjusteDao.findAllFacAjus(idProyecto);
    }

    @Override
    public List<FactorComplejidadAmbiental> findFactoresComplejidadAmbientalById(int idProyecto) {
        return factoresAjusteDao.findAllFactAmb(idProyecto);
    }

    @Override
    public List<FactorComplejidadTecnica> findFactoresComplejidadTecnicaById(int idProyecto) {
        return factoresAjusteDao.findAllFacTec(idProyecto);
    }

    @Override
    public List<ArquitecturaReferencia> findArquitecturaReferenciaById(int idProyecto) {
        return factoresAjusteDao.findAllArqRef(idProyecto);
    }

    @Override
    public boolean save(Object row) {
        if (row instanceof FactorAjuste) {
            // factoresAjusteDao.saveFactoresAjuste((FactorAjuste) row);

        } else if (row instanceof FactorComplejidadAmbiental) {
            factoresAjusteDao.saveFacAmb((FactorComplejidadAmbiental) row);

        } else if (row instanceof FactorComplejidadTecnica) {
            factoresAjusteDao.saveFacTec((FactorComplejidadTecnica) row);

        } else if (row instanceof ArquitecturaReferencia) {
            factoresAjusteDao.saveArqRef((ArquitecturaReferencia) row);
        }
        return false;
    }

    @Override
    public void saveFactorAjuste(FactorAjuste f) {
        factoresAjusteDao.saveFacAjus(f);
    }

}
