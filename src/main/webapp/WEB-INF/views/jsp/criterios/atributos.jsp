<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>


   <div class="row">
  	<div class="col-lg-6 width-fix1">
         <div class="panel panel-default">
            <div class="panel-heading">
               Perfiles
            </div>
            <!-- /.panel-heading -->
            <div class="table-responsive">
               <table class="table table-striped table-bordered tableForm">
                  <thead>
                     <tr>
                        <th class="text-center">NRO</th>
                        <th>
                        	Complejidad 
                        	<span style="float:right">
                        	<spring:url value="/resources/core/images/perfiles.png" var="image_perf" />
                        	<a href="#" onclick="return false"  title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_perf}' height='91' width='739'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span></a></span>
                        </th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
					 <tr>
                        <td class="center col-xs-1"><input type="text" form="save" name="perfilesNro" class="form-control text-center" id="mult_perf" value="1" onclick="this.select();" oninput="func_perf2()" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>
                        <td class="center">
                        		<select class="form-control" form="save" id="sel_perf" name="perfilesComplejidad" onchange="func_perf()">
                              		<option selected value="5">Fácil</option>
                              		<option value="10">Normal</option>
                              		<option value="15">Complejo</option>
                           		</select>
                        </td>
                        <td class="info col-xs-2 center">
                           <h5 id="out_perf">5</h5>
                           <input type="hidden" form="save" id="out_perf2" name="perfilesTotal" value="5"/>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <!-- /.table-responsive -->
         </div>
         <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
 
	
	 <div class="col-lg-6 width-fix2">
         <div class="panel panel-default">
            <div class="panel-heading">
               Pantalla/Vista
            </div>
            <!-- /.panel-heading -->
            <div class="table-responsive">
               <table class="table table-striped table-bordered tableForm">
                  <thead>
                     <tr>
                        <th class="text-center">NRO</th>
                        <th>Campos
                            <span style="float:right">
                        	<spring:url value="/resources/core/images/vista/campos.png" var="image_pv1" />
                        	<a  href="#" onclick="return false" title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_pv1}' height='127' width='610'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span></a></span>
                        </th>
                        <th>Complejidad
                            <span style="float:right">
                        	<spring:url value="/resources/core/images/vista/logica.png" var="image_pv2" />
                        	<a href="#" onclick="return false" title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_pv2}' height='127' width='493'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span></a></span>
                        </th>
                        <th>Listados
                            <span style="float:right">
                        	<spring:url value="/resources/core/images/vista/listados.png" var="image_pv3" />
                        	<a href="#" onclick="return false" title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_pv3}' height='127' width='610'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span></a></span></th>
                        <th>Botones                        	
                        	<span style="float:right">
                        	<spring:url value="/resources/core/images/vista/acciones.png" var="image_pv4" />
                        	<a href="#" onclick="return false" title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_pv4}' height='127' width='493'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span></a></span></th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                  	<tr>
                        <td class="center col-xs-1"><input type="text" form="save" name="vistaNro" class="form-control text-center" value="1" id="mult_pv" onclick="this.select();" oninput="func_pv2()" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>
                        <td class="center">
                        	<select class="form-control" form="save" id="sel_pv_camp" name="vistaCampos" onchange="func_pv()">
                        		<option selected value="5">Muy Fácil</option>
                              	<option value="10">Fácil</option>
                              	<option value="15">Normal</option>
                              	<option value="20">Complejo</option>
                              	<option value="25">Muy Complejo</option>
                           </select>
                        </td>
                        <td class="center">
                        	<select class="form-control" form="save" id="sel_pv_comp" name="vistaComplejidad" onchange="func_pv()">
                        	  <option selected value="5">Muy Fácil</option>
                              <option value="10">Fácil</option>
                              <option value="15">Normal</option>
                              <option value="20">Complejo</option>
                              <option value="25">Muy Complejo</option>
                           </select>
                        </td>
                        <td class="center">
                        	<select class="form-control" form="save" id="sel_pv_list" name="vistaListados" onchange="func_pv()">
                        	  <option selected value="5">Muy Fácil</option>
                              <option value="10">Fácil</option>
                              <option value="15">Normal</option>
                              <option value="20">Complejo</option>
                              <option value="25">Muy Complejo</option>
                        	</select>
                        </td>
                        <td class="center">
                       		<select class="form-control" form="save" id="sel_pv_boto" name="vistaBotones" onchange="func_pv()">
                       			<option selected value="5">Muy Fácil</option>
                           		<option value="10">Fácil</option>
                            	<option value="15">Normal</option>
                            	<option value="20">Complejo</option>
                            	<option value="25">Muy Complejo</option>
                           </select>
                        </td>
                        <td class="info center col-xs-2">
                        	<h5 id="out_pv">20</h5>
                        	<input type="hidden" form="save" id="out_pv2" name="vistaTotal" value ="20"/>
                        </td>
                  	</tr>
                  </tbody>
               </table>
            </div>
            <!-- /.table-responsive -->
         </div>
         <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
   </div>
   <!-- /.row -->
   
   <div class="row">
      <div class="col-lg-6 width-fix1">
         <div class="panel panel-default">
            <div class="panel-heading">
               Negocio
            </div>
            <!-- /.panel-heading -->
            <div class="table-responsive">
               <table class="table table-striped table-bordered tableForm">
                  <thead>
                     <tr>
                        <th class="text-center">NRO</th>
                        <th>Logica
                        <span style="float:right">
                        	<spring:url value="/resources/core/images/negocio.png" var="image_neg" />
                        	<a href="#" onclick="return false" title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_neg}' height='127' width='737'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span>
                        	</a>
                        </span>
                        </th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
					<tr>
						<td class="center col-xs-1"><input type="text" form="save" name="negocioNro"class="form-control text-center" value="1" id="mult_neg" onclick="this.select();" oninput="func_neg2()" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>
                        <td class="center">
                        <select class="form-control" form="save" id="sel_neg" name="negocioLogica" onchange="func_neg()">
                       
                        		<option selected value="5">Muy Fácil</option>
                            	<option value="10">Fácil</option>
                              	<option value="15">Normal</option>
                              	<option value="20">Complejo</option>
                              	<option value="25">Muy Complejo</option>
                        	
                           </select>
                        </td>
                        <td class="info center col-xs-2">
                           <h5 id="out_neg">5</h5>
                           <input type="hidden" form="save" id="out_neg2" name="negocioTotal" value ="5"/>
                        </td>
					</tr>
                  </tbody>
               </table>
            </div>
            <!-- /.table-responsive -->
         </div>
         <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->

      <div class="col-lg-6 width-fix2">
         <div class="panel panel-default">
            <div class="panel-heading">
               Persistencia
            </div>
            <!-- /.panel-heading -->
            <div class="table-responsive">
               <table class="table table-striped table-bordered tableForm">
                  <thead>
                     <tr>
                        <th class="text-center">NRO</th>
                        <th>Accesos
                        <span style="float:right">
                        	<spring:url value="/resources/core/images/persistencia.png" var="image_pers" />
                        	<a href="#" onclick="return false" title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_pers}' height='127' width='540'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span>
                        	</a>
                        </span>
                        </th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                    	<td class="center col-xs-1"><input form="save" type="text" name="persistenciaNro" class="form-control text-center" value="1" id="mult_pers" onclick="this.select();" oninput="func_pers2()" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>
                        <td class="center">
                        <select class="form-control" form="save" id="sel_pers" name="persistenciaAccesos" onchange="func_pers()">
                        		<option selected value="5">Muy Fácil</option>
                              	<option value="10">Fácil</option>
                              	<option value="15">Normal</option>
                              	<option value="20">Complejo</option>
                              	<option value="25">Muy Complejo</option>
                           </select>
                        </td>
                        <td class="info center col-xs-2">
                           <h5 id="out_pers">5</h5>
                           <input form="save" type="hidden" id="out_pers2" name="persistenciaTotal" value ="5"/>
                        </td>
                    </tr>
                  </tbody>
               </table>
            </div>
            <!-- /.table-responsive -->
         </div>
         <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
   </div>
   <!-- /.row -->
   
   <div class="row">

      <div class="col-lg-6 width-fix1">
         <div class="panel panel-default">
            <div class="panel-heading">
               CU Original
            </div>
            <!-- /.panel-heading -->
            <div class="table-responsive">
               <table class="table table-striped table-bordered tableForm">
                  <thead>
                     <tr>
                        <th>Dificultad
                        <span style="float:right">
                        	<spring:url value="/resources/core/images/cu.png" var="image_cu" />
                        	<a href="#" onclick="return false" title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_cu}' height='127' width='512'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span>
                        	</a>
                        </span>
                        </th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                   	 <td>
                        <select class="form-control" form="save" id="sel_cu" name="cuDificultad" onchange="func_cu()">
                        	<option selected value="5">Muy Fácil</option>
                              <option value="10">Fácil</option>
                              <option value="15">Normal</option>
                              <option value="20">Complejo</option>
                              <option value="25">Muy Complejo</option>
                           </select>
                        </td>
                        <td class="center info col-xs-2">
                           <h5 id="out_cu">5</h5>
                           <input form="save" type="hidden" id="out_cu2" name="cuTotal" value ="5"/>
                        </td>
                    </tr>
                  </tbody>
               </table>
            </div>
            <!-- /.table-responsive -->
         </div>
         <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
      <div class="col-lg-6 width-fix2">
         <div class="panel panel-default">
            <div class="panel-heading">
               Integración
            </div>
            <!-- /.panel-heading -->
            <div class="table-responsive">
               <table class="table table-striped table-bordered tableForm">
                  <thead>
                     <tr>
                        <th class="text-center">NRO</th>
                        <th>Complejidad
                        <span style="float:right">
                        	<spring:url value="/resources/core/images/integracion.png" var="image_inte" />
                        	<a href="#" onclick="return false" title="" data-toggle="popover" data-placement="top" data-html="true" data-delay='{"show":"500", "hide":"150"}' data-trigger="focus" html=true data-content="<img src='${image_inte}' height='91' width='396'>">
                        	<span class="blu glyphicon glyphicon-info-sign"></span>
                        	</a>
                        </span>
                        </th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                     	<td class="center col-xs-1"><input type="text" form="save" name="integracionNro" class="form-control text-center" value="1" id="mult_inte" onclick="this.select();" oninput="func_inte2()" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>
                        <td>
                        <select class="form-control" form="save" id="sel_inte" name="integracionComplejidad" onchange="func_inte()">
                        	 <option selected value="2">Fácil</option>
                              <option value="5">Normal</option>
                              <option value="10">Complejo</option>
                           </select>
                        </td>
                        <td class="info col-xs-2">
                           <h5 id="out_inte">+2</h5>
                           <input type="hidden" form="save" id="out_inte2" name="integracionTotal" value ="2">
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <!-- /.table-responsive -->
         </div>
         <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
   </div>
   <!-- /.row -->
