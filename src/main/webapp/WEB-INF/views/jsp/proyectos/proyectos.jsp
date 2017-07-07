<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>EF - Proyectos</title>
		 <script type="text/javascript">
      	$( "#projectTable" ).ready(function() {
      		 $.ajax({
		        type : "POST",
		        url : "projectAjax",
		        success : function(project) {
		            console.log(project);
		            refreshTableProject(project);
		        },
		        error : function(e) {
		            console.log('Error: ' + e);
		        }
		    });
        });
      	$( "#editado" ).ready(function() {
      		 $.ajax({
		        type : "POST",
		        url : "projectAjax",
		        success : function(project) {
		            console.log(project);
		            refreshEditado(project);
		        },
		        error : function(e) {
		            console.log('Error: ' + e);
		        }
		    });
        });
		</script>
	</head>
	<body>
		<div id="page-wrapper">
			<div class="row">
				<div class="col-lg-12">
					<h1 class="page-header">Gestor de proyectos</h1>
				</div>
				<!-- /.col-lg-12 -->
			</div>
			<!-- /.row -->
			<div class="row">
					<div class="panel panel-default ">
					<div class="panel-heading custom-color">
						Gestor de proyectos 
					</div>
						<!-- /.panel-heading -->
						<table width="100%" class="table table-striped tableForm" id="dataTables-example">
							<thead>
								<tr>
									<th class="col-xs-4">Nombre de proyecto</th>
									<th class="col-xs-2">Código</th>
									<th class="col-xs-5">Descripción</th>
								</tr>
							</thead>
							<tbody id="projectTable" >
							</tbody>
						</table>
					</div>
			</div>
			<div class="row">
			<div class="col-lg-12 width-fix1">
         	 <div class="panel panel-default">
	         	<div class="panel-heading">
	         	 	Ajustes Adicionales
	         	</div>	
	         	<div class="panel-body">
	         	<div class="col-xs-8">
<div class="panel panel-default ">
					<div class="panel-heading">
					<strong>¿Editado?</strong> 
					</div>
						<!-- /.panel-heading -->
						<table width="100%" class="table table-striped tableForm" id="dataTables-example">
							
							<tbody>
								<tr>
									<spring:url value="/criterios/saveRow" var="saveUrl" />
									<td>
										<select class="form-control" id="editado" name="editado">
		                              		
                           				</select>
									</td>


								</tr>
							</tbody>
						</table>
					</div>
					</div>
	         	
	         	<div class="col-xs-4">
					<div class="row">
                
             <div class="col-lg-3 col-md-6">
             <a href="config" class="">
                <div class="panel panel-blue">
                        <div class="panel-heading config-panel huge-button">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="glyphicon glyphicon-wrench"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="config-box">
                                    ITR's
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                            <div class="panel-footer">
                                <span class="pull-left">Configurar</span>
                                <span class="pull-right"><i class="glyphicon glyphicon-chevron-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        
                    </div>
                    </a>
                </div>
                </div>
            </div>
        	 </div>
            </div>
			
					
					
			</div>
		</div>
		</div>
		<!-- /.page-wrapper -->
	</body>
</html>