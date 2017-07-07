package com.becarios.proyecto_definitivo.dto.factores_ajuste;

import com.becarios.proyecto_definitivo.model.factores_ajustes.ArquitecturaReferencia;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorAjuste;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadAmbiental;
import com.becarios.proyecto_definitivo.model.factores_ajustes.FactorComplejidadTecnica;

public class FactoresSaveDto {
    FactorAjuste factorAjuste;
    FactorComplejidadTecnica factorComplejidadTecnica1;
    FactorComplejidadTecnica factorComplejidadTecnica2;
    FactorComplejidadTecnica factorComplejidadTecnica3;
    FactorComplejidadTecnica factorComplejidadTecnica4;
    FactorComplejidadTecnica factorComplejidadTecnica5;
    ArquitecturaReferencia arquitecturaReferencia1;
    ArquitecturaReferencia arquitecturaReferencia2;
    ArquitecturaReferencia arquitecturaReferencia3;
    ArquitecturaReferencia arquitecturaReferencia4;
    FactorComplejidadAmbiental factorComplejidadAmbiental1;
    FactorComplejidadAmbiental factorComplejidadAmbiental2;
    FactorComplejidadAmbiental factorComplejidadAmbiental3;

    public FactoresSaveDto() {
        super();
    }

    public FactoresSaveDto(FactorAjuste factorAjuste, FactorComplejidadTecnica factorComplejidadTecnica1,
            FactorComplejidadTecnica factorComplejidadTecnica2, FactorComplejidadTecnica factorComplejidadTecnica3,
            FactorComplejidadTecnica factorComplejidadTecnica4, FactorComplejidadTecnica factorComplejidadTecnica5,
            ArquitecturaReferencia arquitecturaReferencia1, ArquitecturaReferencia arquitecturaReferencia2,
            ArquitecturaReferencia arquitecturaReferencia3, ArquitecturaReferencia arquitecturaReferencia4,
            FactorComplejidadAmbiental factorComplejidadAmbiental1,
            FactorComplejidadAmbiental factorComplejidadAmbiental2,
            FactorComplejidadAmbiental factorComplejidadAmbiental3) {
        super();
        this.factorAjuste = factorAjuste;
        this.factorComplejidadTecnica1 = factorComplejidadTecnica1;
        this.factorComplejidadTecnica2 = factorComplejidadTecnica2;
        this.factorComplejidadTecnica3 = factorComplejidadTecnica3;
        this.factorComplejidadTecnica4 = factorComplejidadTecnica4;
        this.factorComplejidadTecnica5 = factorComplejidadTecnica5;
        this.arquitecturaReferencia1 = arquitecturaReferencia1;
        this.arquitecturaReferencia2 = arquitecturaReferencia2;
        this.arquitecturaReferencia3 = arquitecturaReferencia3;
        this.arquitecturaReferencia4 = arquitecturaReferencia4;
        this.factorComplejidadAmbiental1 = factorComplejidadAmbiental1;
        this.factorComplejidadAmbiental2 = factorComplejidadAmbiental2;
        this.factorComplejidadAmbiental3 = factorComplejidadAmbiental3;
    }

    public FactorAjuste getFactorAjuste() {
        return factorAjuste;
    }

    public void setFactorAjuste(FactorAjuste factorAjuste) {
        this.factorAjuste = factorAjuste;
    }

    public FactorComplejidadTecnica getFactorComplejidadTecnica1() {
        return factorComplejidadTecnica1;
    }

    public void setFactorComplejidadTecnica1(FactorComplejidadTecnica factorComplejidadTecnica1) {
        this.factorComplejidadTecnica1 = factorComplejidadTecnica1;
    }

    public FactorComplejidadTecnica getFactorComplejidadTecnica2() {
        return factorComplejidadTecnica2;
    }

    public void setFactorComplejidadTecnica2(FactorComplejidadTecnica factorComplejidadTecnica2) {
        this.factorComplejidadTecnica2 = factorComplejidadTecnica2;
    }

    public FactorComplejidadTecnica getFactorComplejidadTecnica3() {
        return factorComplejidadTecnica3;
    }

    public void setFactorComplejidadTecnica3(FactorComplejidadTecnica factorComplejidadTecnica3) {
        this.factorComplejidadTecnica3 = factorComplejidadTecnica3;
    }

    public FactorComplejidadTecnica getFactorComplejidadTecnica4() {
        return factorComplejidadTecnica4;
    }

    public void setFactorComplejidadTecnica4(FactorComplejidadTecnica factorComplejidadTecnica4) {
        this.factorComplejidadTecnica4 = factorComplejidadTecnica4;
    }

    public FactorComplejidadTecnica getFactorComplejidadTecnica5() {
        return factorComplejidadTecnica5;
    }

    public void setFactorComplejidadTecnica5(FactorComplejidadTecnica factorComplejidadTecnica5) {
        this.factorComplejidadTecnica5 = factorComplejidadTecnica5;
    }

    public ArquitecturaReferencia getArquitecturaReferencia1() {
        return arquitecturaReferencia1;
    }

    public void setArquitecturaReferencia1(ArquitecturaReferencia arquitecturaReferencia1) {
        this.arquitecturaReferencia1 = arquitecturaReferencia1;
    }

    public ArquitecturaReferencia getArquitecturaReferencia2() {
        return arquitecturaReferencia2;
    }

    public void setArquitecturaReferencia2(ArquitecturaReferencia arquitecturaReferencia2) {
        this.arquitecturaReferencia2 = arquitecturaReferencia2;
    }

    public ArquitecturaReferencia getArquitecturaReferencia3() {
        return arquitecturaReferencia3;
    }

    public void setArquitecturaReferencia3(ArquitecturaReferencia arquitecturaReferencia3) {
        this.arquitecturaReferencia3 = arquitecturaReferencia3;
    }

    public ArquitecturaReferencia getArquitecturaReferencia4() {
        return arquitecturaReferencia4;
    }

    public void setArquitecturaReferencia4(ArquitecturaReferencia arquitecturaReferencia4) {
        this.arquitecturaReferencia4 = arquitecturaReferencia4;
    }

    public FactorComplejidadAmbiental getFactorComplejidadAmbiental1() {
        return factorComplejidadAmbiental1;
    }

    public void setFactorComplejidadAmbiental1(FactorComplejidadAmbiental factorComplejidadAmbiental1) {
        this.factorComplejidadAmbiental1 = factorComplejidadAmbiental1;
    }

    public FactorComplejidadAmbiental getFactorComplejidadAmbiental2() {
        return factorComplejidadAmbiental2;
    }

    public void setFactorComplejidadAmbiental2(FactorComplejidadAmbiental factorComplejidadAmbiental2) {
        this.factorComplejidadAmbiental2 = factorComplejidadAmbiental2;
    }

    public FactorComplejidadAmbiental getFactorComplejidadAmbiental3() {
        return factorComplejidadAmbiental3;
    }

    public void setFactorComplejidadAmbiental3(FactorComplejidadAmbiental factorComplejidadAmbiental3) {
        this.factorComplejidadAmbiental3 = factorComplejidadAmbiental3;
    }

}
