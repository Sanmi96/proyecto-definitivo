package com.becarios.proyecto_definitivo.dao.itr;

import java.util.List;

import com.becarios.proyecto_definitivo.model.itr.Itr;

public interface ItrDao {

    Itr findByCodeItr(int ID);

    void saveItr(Itr itr);

    List<Itr> findAllItr(int idProyecto);

}
