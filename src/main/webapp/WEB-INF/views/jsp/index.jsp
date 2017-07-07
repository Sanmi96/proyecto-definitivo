<%@ page session="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Estimacion Funcionalidades</title>
      <jsp:include page="./fragments/sidebar.jsp" />
      <div id="page-wrapper-menu">
         <div class="row">
            <div class="col-lg-12">

            </div>
            <!-- /.col-lg-12 -->
         </div>
         <!-- /.row -->
         <input type="hidden" id="position" value="${control}"/>
         <div class="row">
         <div class="col-lg-12">
          <div class="page-header-menu">
             <!-- Nav tabs -->           
             <c:choose>
             	<c:when test="${control == ''}">
             		<jsp:include page="./bienvenida.jsp"/>
             		</div>
             	</c:when>
             	<c:when test="${control == 'config'}">
             		<jsp:include page="./config/itrs.jsp"/>
             	</c:when>
             	<c:otherwise>
             	             <ul class="nav nav-tabs ">
                    <li id="proyectoLi" class=""><a href="#proyecto" data-toggle="tab" aria-expanded="true">Proyecto</a>          
                    </li>
                    <li id="criteriosLi" class=""><a href="#criterios" data-toggle="tab" aria-expanded="false">Criterios</a>
                    </li>
                    <li id="factores-ajusteLi" class=""><a href="#factores-ajuste" data-toggle="tab" aria-expanded="false">Factores de Ajuste</a>
                    </li>
                    <li id="horasLi" class=""><a href="#horas" data-toggle="tab" aria-expanded="false">Horas y Costes</a>
                    </li>
                     <li id="piramideLi" class=""><a href="#piramide" data-toggle="tab" aria-expanded="false">Pirámide</a>
                    </li>
                    <li id="condicionantesLi" class=""><a href="#condicionantes" data-toggle="tab" aria-expanded="false">Condicionantes</a>
                    </li>
				</li>
			</ul>
               <button type="submit" class="custom-color button-tab" onclick="doAjaxSaveAll()">
               		<i class="glyphicon glyphicon-floppy-save"></i>  Guardar
               </button>
		</div> 
                            <!-- Tab panes -->
                            <div class="tab-content">
                            
                                <div class="tab-pane fade" id="proyecto">
                                    <jsp:include page="./proyectos/proyectos.jsp" />
                                </div>
                                
                                <div class="tab-pane fade" id="criterios">
                                	<div id="content">
                                    <jsp:include page="./criterios/criterios.jsp" />
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="horas">
                                    <jsp:include page="./estimacion-horas/horas.jsp" />
                                </div>
                                <div class="tab-pane fade" id="factores-ajuste">
                                    <jsp:include page="./factores-ajuste/factores-ajuste.jsp" />
                                </div>
                                <div class="tab-pane fade" id="piramide">
                                    <jsp:include page="./piramide/piramide.jsp" />
                                </div>
                                <div class="tab-pane fade" id="condicionantes">
                                    <jsp:include page="./condicionantes/condicionantes.jsp" />
                                </div>
                            </div>
             	
             	</c:otherwise>
             </c:choose>        
             

                   
                </div>
            
         </div>
         <!-- /.row -->
      </div>
      <!-- /.page-wrapper -->


      <jsp:include page="./fragments/footer.jsp" />

     
      </body>
</html>