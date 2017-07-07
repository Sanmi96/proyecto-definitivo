<%@ page session="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>EF - Criterios</title>
      <script type="text/javascript">
      	$( "#moduleTable" ).ready(function() {
      	 $.ajax({
             type: "POST",
             url: "criteriosAjax",
             success: function(module){
                refreshTable(module);
                $("#showAtributos").hide();
             },
              error: function(e){
              	console.log('Error: ' + e);
              }
         });
      	
      	 itr_cen_gdo1 = 13.8306180811852;
     	 itr_cen_gdo2 = 18.2090389615274;
     	 itr_cen_gdo3 = 24.7538719574876;
     	 itr_cen_gdo4 = 28.5336109998986;
     	 itr_cen_gdo5 = 34.8401613499305;
     	 itr_cen_gdo6 = 46.9998410368089;
     	 itr_cen_gdo7 = 62.3345186248741;

     	 itr_os_gdo1 = 15.2337185382185;
     	 itr_os_gdo2 = 18.6636558595665;
     	 itr_os_gdo3 = 26.2576267839576;
     	 itr_os_gdo4 = 30.7380019223918;
     	 itr_os_gdo5 = 37.6112692844241;
     	 itr_os_gdo6 = 47.8412934221327;
     	 itr_os_gdo7 = 59.5468850343965;
        });
      	
		</script>
    </head>
      <body>
      <div id="page-wrapper">
         <div class="row">
            <div class="col-lg-9">
               <h1 class="page-header">Criterios</h1>
            </div>
            <div class="col-lg-3">
            <table width="100%" class="table table-striped table-bordered tableForm">
	            <thead>
		            <tr>
		            	<th class="text-center custom-color">Tipo de desarrollo</th>
		            </tr>
	            </thead>
	            <tbody>
		            <tr>
		            	<td>
		            	<select class="form-control form-custom" id="tipo_desarrollo" onchange="recalcTodo()">
		            		<option selected>-- Seleccionar desarrollo --</option>
		            		<option value="0">Nuevo desarrollo</option>
		            		<option value="1">Modificación</option>
		            	</select>		            		
	            		</td>
		            </tr>
	            </tbody>
            </table>
	            
            </div>
            <!-- /.col-lg-12 -->
         </div>

         <!-- /.row -->
         <div class="row">
               <div class="panel panel-default">
                  <div class="panel-heading">
                     Módulos 
                  </div>
                  <!-- /.panel-heading -->
                  <div class="panel-body">
                     <table width="100%" class="table table-responsive table-striped table-bordered table-hover tableForm" id="dataTables-example">
                        <thead>
                           <tr>
                              <th class="col-xs-2">Nombre</th>
                              <th class="col-xs-2">Código</th>
                              <th class="col-xs-2">Caso de uso</th>
                              <th class="col-xs-1">Total</th>
                              <th class="col-xs-2">Valoración</th>
                           </tr>
                        </thead>
					    <tbody id="moduleTable">
                           
                        </tbody>
                     </table>
                     <input type="hidden" id="totalNROCriterios" value="0">
                     <!-- /.table-responsive -->
                     
                     <!-- Notification -->
                     <c:if test="${not empty notification}">
                     	<div class="alert alert-${altype} alert-dismissable">
                     		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                     		${notification}
                     	</div>
                     </c:if>
                     
 					</div>
                    <!-- Button -->
                    <div class="panel-footer table-footer-fix clearfix">	
                    	<span style="float:left">

                         <button type="submit" class="custom-color left-button corner-button" onClick='doAjaxAddRow()'>
                           <i class="glyphicon glyphicon-plus"></i> Crear Módulo
                           </button>
                   	</span> 
					

                  </div>
                  <!-- /.panel-body -->
               </div>
               <!-- /.panel -->

         </div>
         <!-- /.row -->
         <hr>
		<div id="showAtributos">
       		<jsp:include page="./atributos.jsp" />
		</div>
		
      </div>
      <!-- /#page-wrapper -->
		<script>
			$(document).ready(function(){
			    $('[data-toggle="popover"]').popover();   
			});
		</script>
      </body>
</html>