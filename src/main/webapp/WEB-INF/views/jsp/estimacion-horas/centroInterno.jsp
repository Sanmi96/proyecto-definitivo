<%@ page session="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

  <div class="col-lg-12 width-fix1 width-fix2">
         	 <div class="panel panel-default">
	         	<div class="panel-heading">
	         	 	Centro ADM-DW
	         	</div>	
	         	<div class="panel-body">
	         		<table width="100%" class="table  table-striped table-bordered tableForm">
	         			<thead>
	         				<tr>
	         					<th class="col-xs-8 v-align-center">Delivery</th>
	         					<th class="col-xs-1">Dist. (%)</th>
	         					<th class="col-xs-1">Interna Práctica</th>
	         					<th class="col-xs-1">Horas</th>
	         					<th class="col-xs-1 text-right">Coste</th>
	         				</tr>
	         			</thead>
	         			<tbody>
	         				<tr> 
	         					<td>Gestión de la Configuración, Entornos locales y desarrollo</td>
	         					<td id="gestion_por" class="center col-xs-1 text-right align-fix">0</td>
	         					<!-- <td class="center col-xs-1"><input type="text" value="0" class="form-control form-custom text-right" id="gestion_por" oninput="limit('gestion')" onfocusout="sumaDelivery('gestion')" onClick="this.select();" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td> -->
	         					<td></td>
	         					<td id="gestion_horas" class="text-right">0</td>
	         					<td id="gestion_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Fase de Evaluación y Diseño de la Arquitectura</td>
	         					<td id="evaluacion_por" class="center col-xs-1 text-right align-fix">0</td>
	         					<!-- <td class="center col-xs-1"><input type="text" value="0" class="form-control form-custom text-right" id="evaluacion_por" oninput="limit('evaluacion')" onfocusout="sumaDelivery('evaluacion')" onClick="this.select();" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>  -->
	         					<td></td>
	         					<td id="evaluacion_horas" class="text-right">0</td>
	         					<td id="evaluacion_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Fase de Análisis</td>
	         					<td class="center col-xs-1 align-fix text-right" id="analisis_por">0</td>
	         					<td><select class="form-control form-custom" id="analisis_ip" onchange="selectDelivery('analisis')">
                              		<option selected value="0">No</option>
                              		<option value="1">Sí</option>
                           		</select></td>
	         					<td id="analisis_horas" class="text-right">0</td>
	         					<td id="analisis_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Fase de Diseño</td>
	         					<td class="center col-xs-1 align-fix text-right" id="diseno_por">0</td>
	         					<!-- <td class="center col-xs-1"><input type="text" value="0" class="form-control form-custom text-right" id="diseno_por" oninput="limit('diseno')" onfocusout="sumaDelivery('diseno')" onClick="this.select();" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td> -->
	         					<td></td>
	         					<td id="diseno_horas" class="text-right">0</td>
	         					<td id="diseno_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Fase de Construcción y pruebas unitarias</td>
	         					<td class="center col-xs-1"><input type="text" value="0" class="form-control form-custom text-right" id="construccion_por" oninput="limit('construccion')" onfocusout="sumaDelivery('construccion')" onClick="this.select();" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>
	         					<td></td>
	         					<td id="construccion_horas" class="text-right">0</td>
	         					<td id="construccion_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Fase de Pruebas de Funcionamiento</td>
	         					<td class="center col-xs-1 text-right align-fix" id="testing_por">0</td>
	         					<td><select class="form-control form-custom"  id="testing_ip" onchange="selectDelivery('testing')">
                              		<option selected value="0">No</option>
                              		<option value="1">Sí</option>
                           		</select></td>
	         					<td id="testing_horas" class="text-right">0</td>
	         					<td id="testing_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr class="active">
	         					<td><strong>Total Delivery</strong></td>
	         					<td class="text-right"><strong id="del_por">0%</strong></td>
	         					<td></td>
	         					<td class="text-right"><strong id="del_horas">0</strong></td>
	         					<td class="text-right"><strong id="del_coste">&euro; 0.00</strong></td>
	         				</tr>
	         			</tbody>
	         		</table>
	         		<table width="100%" class="table table-striped table-bordered tableForm">
	         			<thead>
	         				<tr>
	         					<th class="col-xs-8">Gestión de la Calidad/Seguridad/Despliegues</th>
	         					<th class="col-xs-1">Dist. (%)</th>
	         					<th class="col-xs-1">Interna Práctica</th>
	         					<th class="col-xs-1">Horas</th>
	         					<th class="col-xs-1 text-right">Coste</th>
	         				</tr>
	         			</thead>
	         			<tbody>
	         				<tr>
	         					<td>Gestión de Calidad</td>
	         					<!-- <td><select class="form-control form-custom"  id="calidad_niv" onchange="selectExtras('calidad')">
                              		<option selected value="0">N/A</option>
                              		<option value="3">Bajo</option>
                              		<option value="5">Medio</option>
                              		<option value="10">Alto</option>
                           		</select></td> -->
	         					<td id="calidad_por" class="center col-xs-1 text-right align-fix">0</td>
	         					<td><select class="form-control form-custom"  id="calidad_ip" onchange="selectExtras('calidad')">
                              		<option selected value="0">No</option>
                              		<option value="1">Sí</option>
                           		</select></td>
	         					<td id="calidad_horas" class="text-right">0</td>
	         					<td id="calidad_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Gestión de Seguridad</td>
	         					<!-- <td><select class="form-control form-custom"  id="seguridad_niv" onchange="selectExtras('seguridad')">
                              		<option selected value="0">N/A</option>
                              		<option value="5">Bajo</option>
                              		<option value="7">Medio</option>
                              		<option value="12">Alto</option>
                           		</select></td> -->
	         					<td id="seguridad_por" class="center col-xs-1 text-right align-fix">0</td>
	         					<td><select class="form-control form-custom"  id="seguridad_ip" onchange="selectExtras('seguridad')">
                              		<option selected value="0">No</option>
                              		<option value="1">Sí</option>
                           		</select></td>
	         					<td id="seguridad_horas" class="text-right">0</td>
	         					<td id="seguridad_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Gestión de Despliegues</td>
	         					<!-- <td><select class="form-control form-custom"  id="despliegues_niv" onchange="selectExtras('despliegues')">
                              		<option selected value="0">N/A</option>
                              		<option value="1">Bajo</option>
                              		<option value="3">Medio</option>
                              		<option value="5">Alto</option>
                           		</select></td> -->
	         					<td id="despliegues_por" class="center col-xs-1 text-right align-fix">0</td>
	         					<td><select class="form-control form-custom"  id="despliegues_ip" onchange="selectExtras('despliegues')">
                              		<option selected value="0">No</option>
                              		<option value="1">Sí</option>
                           		</select></td>
	         					<td id="despliegues_horas" class="text-right">0</td>
	         					<td id="despliegues_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr class="active">
	         					<td><strong>Total Extras</strong></td>
	         					<td class="text-right"><strong id="extra_por">0%</strong></td>
	         					<td></td>
	         					<td class="text-right"><strong id="extra_horas">0</strong></td>
	         					<td class="text-right"><strong id="extra_coste">&euro; 0.00</strong></td>
	         				</tr>
	         			</tbody>
	         		</table>
					<table width="100%" class="table table-striped table-bordered tableForm">
	         			<thead>
	         				<tr>
	         					<th class="col-xs-8">Gobierno</th>
	         					<th class="col-xs-1">Dist. (%)</th>
	         					<th class="col-xs-1">Interna Práctica</th>
	         					<th class="col-xs-1">Horas</th>
	         					<th class="col-xs-1 text-right">Coste</th>
	         				</tr>
	         			</thead>
	         			<tbody>
	         				<tr>
	         					<td>Gestión del Proyecto</td>
	         					<td id="gestionproyecto_por" class="center col-xs-1 text-right align-fix">0</td>
	         					<td><select class="form-control form-custom" id="gestionproyecto_ip" onchange="sumaGobiernoSelect('gestionproyecto')">
                              		<option selected value="0">No</option>
                              		<option value="1">Sí</option>
                           		</select></td>
	         					<td id="gestionproyecto_horas" class="text-right">0</td>
	         					<td id="gestionproyecto_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Gestión del DM</td>
	         					<td id="dm_por" class="center col-xs-1 text-right align-fix">0</td>
	         					<!-- <td class="center col-xs-1"><input type="text" value="0" class="form-control form-custom text-right" id="dm_por" oninput="limit('dm')" onfocusout="sumaGobierno('dm')" onClick="this.select();" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td> -->
	         					<td></td>
	         					<td id="dm_horas" class="text-right">0</td>
	         					<td id="dm_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr class="active">
	         					<td><strong>Total Gobierno</strong></td>
	         					<td class="text-right"><strong id="gobierno_por">0%</strong></td>
	         					<td></td>
	         					<td class="text-right"><strong id="gobierno_horas">0</strong></td>
	         					<td class="text-right"><strong id="gobierno_coste">&euro; 0.00</strong></td>
	         				</tr>
	         			</tbody>
	         		</table>
	         	</div>
        	 </div>
            </div>