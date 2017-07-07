package com.becarios.proyecto_definitivo.service.piramide;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.becarios.proyecto_definitivo.dao.Piramide.PiramideDao;
import com.becarios.proyecto_definitivo.model.piramide.Piramide;

@Service("PiramideService")
@Transactional
public class PiramideServiceImpl implements PiramideService {

    @Autowired
    private PiramideDao dao;

    @Override
    public List<Piramide> findAllById(int idProyecto) {
        return dao.findAllPiramide(idProyecto);
    }

    @Override
    public boolean savePiramide(Piramide piramide) {
        dao.savePiramide(piramide);
        return true;
    }

    @Override
    public void deletePiramideById(int id) {
        dao.deletePiramide(id);
    }

}
