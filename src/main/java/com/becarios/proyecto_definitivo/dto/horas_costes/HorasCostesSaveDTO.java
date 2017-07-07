package com.becarios.proyecto_definitivo.dto.horas_costes;

import com.becarios.proyecto_definitivo.model.horas_costes.Delivery;
import com.becarios.proyecto_definitivo.model.horas_costes.Gestion;
import com.becarios.proyecto_definitivo.model.horas_costes.Gobierno;
import com.becarios.proyecto_definitivo.model.horas_costes.Riesgo;
import com.becarios.proyecto_definitivo.model.horas_costes.Valoracionfinal;

public class HorasCostesSaveDTO {
    Delivery delivery1;
    Delivery delivery2;
    Delivery delivery3;
    Delivery delivery4;
    Delivery delivery5;
    Delivery delivery6;
    Gestion gestion1;
    Gestion gestion2;
    Gestion gestion3;
    Gobierno gobierno1;
    Gobierno gobierno2;
    Riesgo riesgo;
    Valoracionfinal valoracionFinal;

    public HorasCostesSaveDTO() {
        super();
    }

    public HorasCostesSaveDTO(Delivery delivery1, Delivery delivery2, Delivery delivery3, Delivery delivery4,
            Delivery delivery5, Delivery delivery6, Gestion gestion1, Gestion gestion2, Gestion gestion3,
            Gobierno gobierno1, Gobierno gobierno2, Riesgo riesgo, Valoracionfinal valoracionFinal) {
        super();
        this.delivery1 = delivery1;
        this.delivery2 = delivery2;
        this.delivery3 = delivery3;
        this.delivery4 = delivery4;
        this.delivery5 = delivery5;
        this.delivery6 = delivery6;
        this.gestion1 = gestion1;
        this.gestion2 = gestion2;
        this.gestion3 = gestion3;
        this.gobierno1 = gobierno1;
        this.gobierno2 = gobierno2;
        this.riesgo = riesgo;
        this.valoracionFinal = valoracionFinal;
    }

    public Delivery getDelivery1() {
        return delivery1;
    }

    public void setDelivery1(Delivery delivery1) {
        this.delivery1 = delivery1;
    }

    public Delivery getDelivery2() {
        return delivery2;
    }

    public void setDelivery2(Delivery delivery2) {
        this.delivery2 = delivery2;
    }

    public Delivery getDelivery3() {
        return delivery3;
    }

    public void setDelivery3(Delivery delivery3) {
        this.delivery3 = delivery3;
    }

    public Delivery getDelivery4() {
        return delivery4;
    }

    public void setDelivery4(Delivery delivery4) {
        this.delivery4 = delivery4;
    }

    public Delivery getDelivery5() {
        return delivery5;
    }

    public void setDelivery5(Delivery delivery5) {
        this.delivery5 = delivery5;
    }

    public Delivery getDelivery6() {
        return delivery6;
    }

    public void setDelivery6(Delivery delivery6) {
        this.delivery6 = delivery6;
    }

    public Gestion getGestion1() {
        return gestion1;
    }

    public void setGestion1(Gestion gestion1) {
        this.gestion1 = gestion1;
    }

    public Gestion getGestion2() {
        return gestion2;
    }

    public void setGestion2(Gestion gestion2) {
        this.gestion2 = gestion2;
    }

    public Gestion getGestion3() {
        return gestion3;
    }

    public void setGestion3(Gestion gestion3) {
        this.gestion3 = gestion3;
    }

    public Gobierno getGobierno1() {
        return gobierno1;
    }

    public void setGobierno1(Gobierno gobierno1) {
        this.gobierno1 = gobierno1;
    }

    public Gobierno getGobierno2() {
        return gobierno2;
    }

    public void setGobierno2(Gobierno gobierno2) {
        this.gobierno2 = gobierno2;
    }

    public Riesgo getRiesgo() {
        return riesgo;
    }

    public void setRiesgo(Riesgo riesgo) {
        this.riesgo = riesgo;
    }

    public Valoracionfinal getValoracionFinal() {
        return valoracionFinal;
    }

    public void setValoracionFinal(Valoracionfinal valoracionFinal) {
        this.valoracionFinal = valoracionFinal;
    }
}
