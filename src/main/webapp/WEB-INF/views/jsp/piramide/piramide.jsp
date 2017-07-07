<%@ page session="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>EF - Estimación de horas</title>
   </head>
      <body>
	      <div id="page-wrapper">
	         <div class="row">
	            <div class="col-lg-12">
	               <h1 class="page-header">Pirámide estimada del proyecto por fase</h1>
	            </div>
	            <!-- /.col-lg-12 -->
	         </div>
	         <!-- /.row -->
	         
	         <div class="row">
	         	 <div class="panel panel-default">
	         	 <div class="panel-heading">
	         	 	Centro ADM-DW
	         	 </div>
		         	<div class="panel-body">
		         		<table width="100%" class="table table-condensed table-striped table-bordered tableForm">
		         			<thead>
		         				<tr>
		         					<th class="col-xs-3">Delivery</th>
		         					<th class="col-xs-1">GDO1</th>
		         					<th class="col-xs-1">GDO2</th>
		         					<th class="col-xs-1">GDO3</th>
		         					<th class="col-xs-1">GDO4</th>
		         					<th class="col-xs-1">GDO5</th>
		         					<th class="col-xs-1">GDO6</th>
		         					<th class="col-xs-1">GDO7</th>
		         					<th class="col-xs-1 text-center">¿100%?</th>
		         					<th class="col-xs-1 text-right">ITR MEDIO</th>
		         				</tr>
		         			</thead>
		         			<tbody>
		         				<tr> 
		         					<td>Gestión de la Configuración, Entornos locales y desarrollo</td>
		         					<td><input id="gestion_gdo1" onChange="checkGDO('gestion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestion_gdo2" onChange="checkGDO('gestion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestion_gdo3" onChange="checkGDO('gestion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestion_gdo4" onChange="checkGDO('gestion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestion_gdo5" onChange="checkGDO('gestion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestion_gdo6" onChange="checkGDO('gestion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestion_gdo7" onChange="checkGDO('gestion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="gestion_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="gestion_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         				<tr>
		         					<td>Fase de Evaluación y Diseño de la Arquitectura</td>
		         					<td><input id="evaluacion_gdo1" onChange="checkGDO('evaluacion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="evaluacion_gdo2" onChange="checkGDO('evaluacion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="evaluacion_gdo3" onChange="checkGDO('evaluacion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="evaluacion_gdo4" onChange="checkGDO('evaluacion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="evaluacion_gdo5" onChange="checkGDO('evaluacion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="evaluacion_gdo6" onChange="checkGDO('evaluacion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="evaluacion_gdo7" onChange="checkGDO('evaluacion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="evaluacion_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="evaluacion_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         				<tr>
		         					<td>Fase de Análisis</td>
		         					<td><input id="analisis_gdo1" onChange="checkGDO('analisis')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="analisis_gdo2" onChange="checkGDO('analisis')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="analisis_gdo3" onChange="checkGDO('analisis')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="analisis_gdo4" onChange="checkGDO('analisis')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="analisis_gdo5" onChange="checkGDO('analisis')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="analisis_gdo6" onChange="checkGDO('analisis')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="analisis_gdo7" onChange="checkGDO('analisis')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="analisis_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="analisis_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         				<tr>
		         					<td>Fase de Diseño</td>
		         					<td><input id="diseno_gdo1" onChange="checkGDO('diseno')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="diseno_gdo2" onChange="checkGDO('diseno')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="diseno_gdo3" onChange="checkGDO('diseno')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="diseno_gdo4" onChange="checkGDO('diseno')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="diseno_gdo5" onChange="checkGDO('diseno')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="diseno_gdo6" onChange="checkGDO('diseno')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="diseno_gdo7" onChange="checkGDO('diseno')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="diseno_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="diseno_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         				<tr>
		         					<td>Fase de Construcción y pruebas unitarias</td>
		         					<td><input id="construccion_gdo1" onChange="checkGDO('construccion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="construccion_gdo2" onChange="checkGDO('construccion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="construccion_gdo3" onChange="checkGDO('construccion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="construccion_gdo4" onChange="checkGDO('construccion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="construccion_gdo5" onChange="checkGDO('construccion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="construccion_gdo6" onChange="checkGDO('construccion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="construccion_gdo7" onChange="checkGDO('construccion')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="construccion_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="construccion_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         				<tr>
		         					<td>Fase de Pruebas de Funcionamiento</td>
		         					<td><input id="testing_gdo1" onChange="checkGDO('testing')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="testing_gdo2" onChange="checkGDO('testing')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="testing_gdo3" onChange="checkGDO('testing')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="testing_gdo4" onChange="checkGDO('testing')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="testing_gdo5" onChange="checkGDO('testing')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="testing_gdo6" onChange="checkGDO('testing')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="testing_gdo7" onChange="checkGDO('testing')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="testing_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="testing_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         			</tbody>
		         			<thead>
		         				<tr>
		         					<th class="col-xs-3">Gestión de la Calidad/Seguridad/Despliegues</th>
		         					<th class="col-xs-1">GDO1</th>
		         					<th class="col-xs-1">GDO2</th>
		         					<th class="col-xs-1">GDO3</th>
		         					<th class="col-xs-1">GDO4</th>
		         					<th class="col-xs-1">GDO5</th>
		         					<th class="col-xs-1">GDO6</th>
		         					<th class="col-xs-1">GDO7</th>
		         					<th class="col-xs-1 text-center">¿100%?</th>
		         					<th class="col-xs-1 text-right">ITR MEDIO</th>
		         				</tr>
		         			</thead>
		         			<tbody>
		         				<tr>
		         					<td>Gestión de Calidad</td>
	         						<td><input id="calidad_gdo1" onChange="checkGDO('calidad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="calidad_gdo2" onChange="checkGDO('calidad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="calidad_gdo3" onChange="checkGDO('calidad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="calidad_gdo4" onChange="checkGDO('calidad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="calidad_gdo5" onChange="checkGDO('calidad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="calidad_gdo6" onChange="checkGDO('calidad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="calidad_gdo7" onChange="checkGDO('calidad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="calidad_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="calidad_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         				<tr>
		         					<td>Gestión de Seguridad</td>
	         						<td><input id="seguridad_gdo1" onChange="checkGDO('seguridad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="seguridad_gdo2" onChange="checkGDO('seguridad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="seguridad_gdo3" onChange="checkGDO('seguridad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="seguridad_gdo4" onChange="checkGDO('seguridad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="seguridad_gdo5" onChange="checkGDO('seguridad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="seguridad_gdo6" onChange="checkGDO('seguridad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="seguridad_gdo7" onChange="checkGDO('seguridad')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="seguridad_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="seguridad_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         				<tr>
		         					<td>Gestión de Despliegues</td>
	         						<td><input id="despliegues_gdo1" onChange="checkGDO('despliegues')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="despliegues_gdo2" onChange="checkGDO('despliegues')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="despliegues_gdo3" onChange="checkGDO('despliegues')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="despliegues_gdo4" onChange="checkGDO('despliegues')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="despliegues_gdo5" onChange="checkGDO('despliegues')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="despliegues_gdo6" onChange="checkGDO('despliegues')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="despliegues_gdo7" onChange="checkGDO('despliegues')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="despliegues_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="despliegues_itrmedio">&euro; 0</strong></td>
		         				</tr>
	         				</tbody>
		         			<thead>
		         				<tr>
		         					<th class="col-xs-3">Gobierno</th>
		         					<th class="col-xs-1">GDO1</th>
		         					<th class="col-xs-1">GDO2</th>
		         					<th class="col-xs-1">GDO3</th>
		         					<th class="col-xs-1">GDO4</th>
		         					<th class="col-xs-1">GDO5</th>
		         					<th class="col-xs-1">GDO6</th>
		         					<th class="col-xs-1">GDO7</th>
		         					<th class="col-xs-1 text-center">¿100%?</th>
		         					<th class="col-xs-1 text-right">ITR MEDIO</th>
		         				</tr>
		         			</thead>
		         			<tbody>
		         				<tr>
		         					<td>Gestión del Proyecto</td>
	         						<td><input id="gestionproyecto_gdo1" onChange="checkGDO('gestionproyecto')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestionproyecto_gdo2" onChange="checkGDO('gestionproyecto')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestionproyecto_gdo3" onChange="checkGDO('gestionproyecto')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestionproyecto_gdo4" onChange="checkGDO('gestionproyecto')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestionproyecto_gdo5" onChange="checkGDO('gestionproyecto')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestionproyecto_gdo6" onChange="checkGDO('gestionproyecto')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="gestionproyecto_gdo7" onChange="checkGDO('gestionproyecto')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="gestionproyecto_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="gestionproyecto_itrmedio">&euro; 0</strong></td>
		         				</tr>
		         				<tr> 
		         					<td>Gestión del DM</td>
	         						<td><input id="dm_gdo1" onChange="checkGDO('dm')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="dm_gdo2" onChange="checkGDO('dm')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="dm_gdo3" onChange="checkGDO('dm')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="dm_gdo4" onChange="checkGDO('dm')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="dm_gdo5" onChange="checkGDO('dm')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="dm_gdo6" onChange="checkGDO('dm')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td><input id="dm_gdo7" onChange="checkGDO('dm')" onClick="this.select();" class="form-control form-custom2" type="number" min="0" max="100" step="5" value="0"></td>
		         					<td class="text-center"><span id="dm_checker" class="glyphicon glyphicon-remove chred "></span></td>
		         					<td class="text-right"><strong id="dm_itrmedio">&euro; 0</strong></td>
		         				</tr>
	         				</tbody>
		         		</table>
		         	</div>
	        	 </div>
	         </div>
	      </div>
	      <!-- /.page-wrapper -->
      </body>
</html>