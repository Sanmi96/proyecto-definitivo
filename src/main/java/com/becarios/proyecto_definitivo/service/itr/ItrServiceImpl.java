package com.becarios.proyecto_definitivo.service.itr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.becarios.proyecto_definitivo.dao.itr.ItrDao;
import com.becarios.proyecto_definitivo.model.itr.Itr;

@Service("ItrService")
@Transactional
public class ItrServiceImpl implements ItrService {

    @Autowired
    private ItrDao dao;

    @Override
    public List<Itr> findItrById(int idProyecto) {
        return dao.findAllItr(idProyecto);
    }

    @Override
    public void saveItr(Itr itr) {
        dao.saveItr(itr);
    }

}
