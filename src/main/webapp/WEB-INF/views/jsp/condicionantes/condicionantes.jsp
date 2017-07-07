<%@ page session="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>EF - Condicionantes</title>
      <script type="text/javascript">
      	$( "#condTable" ).ready(function() {
      	 $.ajax({
             type: "POST",
             url: "condicionantesAjax",
             success: function(cond){
                 refreshTableCondicionantes(cond);
             },
              error: function(e){
              	console.log('Error: ' + e);
              }
           });
        });  
      	$('textarea').each(function() {
            this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
            if (this.scrollHeight < 40) {
                this.setAttribute('style', 'height:40px;overflow-y:hidden;');
            }
        }).on('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
		</script>
   </head>
   <body>
      <div id="page-wrapper">
         <div class="row">
            <div class="col-lg-12">
               <h1 class="page-header">Condicionantes</h1>
            </div>
            <!-- /.col-lg-12 -->
         </div>
         <!-- /.row -->
        <div class="row">
         	 <div class="panel panel-default">
         	 	<div class="panel-heading">
	         	 	Condicionantes de la estimación
	         	 	<div style="float:right">
	         	 		<button type="submit" class="button ok glyphicon glyphicon-plus condition-bt" onClick='condicionantesAddRow(1)'></button>
	         		</div>
	         	</div>	
	         	
	         		<table width="100%" class="table table-condensed table-striped table-bordered tableForm">
	         			<thead>
	         				<tr>
	         					<th class="col-xs-1">Nº</th>
	         					<th class="col-xs-11">Descripción</th>
	         				</tr>
	         			</thead>
	         			<tbody id="condTableEstimacion">
                           
                        </tbody>
	         		</table>
      </div>
      </div>
      <div class="row">
         	 <div class="panel panel-default">
         	 	<div class="panel-heading">
	         	 	Otros condicionantes 
	         	 	<div style="float:right">
              	    	<button type="submit" class="button ok glyphicon glyphicon-plus condition-bt" onClick='condicionantesAddRow(0)'></button>
                    </div>
	         	</div>	
	         	
	         		<table width="100%" class="table table-condensed table-striped table-bordered tableForm">
	         			<thead>
	         				<tr>
	         					<th class="col-xs-1">Nº</th>
	         					<th class="col-xs-11">Descripción</th>
	         				</tr>
	         			</thead>
	         			
	         			<tbody id="condTable">
                           
                        </tbody>
	         		</table>
	      </div>
      </div>
      <!-- /.page-wrapper -->
      </body>
</html>