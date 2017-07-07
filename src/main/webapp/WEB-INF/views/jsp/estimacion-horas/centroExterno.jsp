<%@ page session="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
  
  <div class="col-lg-6 width-fix2">
         	 <div class="panel panel-default">
	         	<div class="panel-heading">
	         	 	Externo a ADM-DW
	         	</div>	
	         	<div class="panel-body">
	         		<table width="100%" class="table table-striped table-bordered tableForm">
	         			<thead>
	         				<tr>
	         					<th class="col-xs-9">Delivery</th>
	         					<th class="col-xs-1">Dist. (%)</th>
	         					<th class="col-xs-1">Horas</th>
	         					<th class="col-xs-1">Coste</th>
	         				</tr>
	         			</thead>
	         			<tbody>
	         				<tr>
	         					<td>Centro de Testing</td>
	         					<td id="testing_ext_por" class="center col-xs-1 text-right">0</td>
	         					<td id="testing_ext_horas" class="text-right">0</td>
         						<td id="testing_ext_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Análisis</td>
	         					<td id="analisis_ext_por" class="center col-xs-1 text-right">0</td>
	         					<td id="analisis_ext_horas" class="text-right">0</td>
	         					<td id="analisis_ext_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr class="active">
	         					<td><strong>Total Delivery</strong></td>
	         					<td class="text-right"><strong id="delivery_ext_por">0%</strong></td>
	         					<td class="text-right"><strong id="delivery_ext_horas">0</strong></td>
	         					<td class="text-right"><strong id="delivery_ext_coste">&euro; 0.00</strong></td>
	         				</tr>
	         			</tbody>
	         		</table>
	         		<table width="100%" class="table table-striped table-bordered tableForm">
	         			<thead>
	         				<tr>
	         					<th class="col-xs-9">Gestión de la Calidad/Seguridad/Despliegues</th>
	         					<th class="col-xs-1">Dist. (%)</th>
	         					<th class="col-xs-1">Horas</th>
	         					<th class="col-xs-1 text-right">Coste</th>
	         				</tr>
	         			</thead>
	         			<tbody>
	         				<tr>
	         					<td>Gestión de Calidad</td>
	         					<td id="calidad_ext_por" class="center col-xs-1 text-right">0</td>
	         					<td id="calidad_ext_horas" class="text-right">0</td>
	         				 	<td id="calidad_ext_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Gestión de Seguridad</td>
	         					<td id="seguridad_ext_por" class="center col-xs-1 text-right">0</td>
	         					<td id="seguridad_ext_horas" class="text-right">0</td>
	         					<td id="seguridad_ext_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr>
	         					<td>Gestión de Despliegues</td>
	         					<td id="despliegues_ext_por" class="center col-xs-1 text-right">0</td>
	         					<td id="despliegues_ext_horas" class="text-right">0</td>
	         					<td id="despliegues_ext_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr class="active">
	         					<td><strong>Total Extras</strong></td>
	         					<td class="text-right"><strong  id="extras_ext_por">0%</strong></td>
	         					<td class="text-right"><strong id="extras_ext_horas">0</strong></td>
	         					<td class="text-right"><strong id="extras_ext_coste">&euro; 0.00</strong></td>
	         				</tr>
	         			</tbody>
	         		</table>
					<table width="100%" class="table table-striped table-bordered tableForm">
	         			<thead>
	         				<tr>
	         					<th class="col-xs-9">Gobierno</th>
	         					<th class="col-xs-1">Dist. (%)</th>
	         					<th class="col-xs-1">Horas</th>
	         					<th class="col-xs-1 text-right">Coste</th>
	         				</tr>
	         			</thead>
	         			<tbody>
	         				<tr>
	         					<td>Gestión del Proyecto</td>
	         					<td id="gestionproyecto_ext_por" class="center text-right col-xs-1">0</td> 
	         					<td id="gestionproyecto_ext_horas" class="text-right">0</td>
	         					<td id="gestionproyecto_ext_coste" class="text-right">0.00</td>
	         				</tr>
	         				<tr class="active">
	         					<td><strong>Total Gobierno</strong></td>
	         					<td class="text-right"><strong id="gobierno_ext_por">0%</strong></td>
	         					<td class="text-right"><strong id="gobierno_ext_horas">0</strong></td>
	         					<td class="text-right"><strong id="gobierno_ext_coste">&euro; 0.00</strong></td>
	         				</tr>
	         			</tbody>
	         		</table>
	         	</div>
        	 </div>
         </div>