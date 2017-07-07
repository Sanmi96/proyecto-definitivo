<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page session="true"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

	<spring:url value="/resources/core/res/custom/custom.css" var="coreCss" />
	<spring:url value="/resources/core/res/bootstrap/css/bootstrap.min.css" var="bootstrapCss" />
	<link href="${bootstrapCss}" rel="stylesheet" />
	<link href="${coreCss}" rel="stylesheet" />
	<!-- Bootstrap Core JavaScript -->
<spring:url value="/resources/core/res/bootstrap/js/bootstrap.min.js" var="bootstrapJs" />

<spring:url value="/resources/core/res/jquery/jquery.min.js" var="jQuery" />
<script src="${jQuery}"></script>
<script src="${bootstrapJs}"></script>
		 <script type="text/javascript">
      	$( "#projectList" ).ready(function() {
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
      	
		</script>


</head>

<body onload="check()">
<c:set var="url" value="${ pageContext.request.requestURI }" />
	<div id="wrapper">
    	<div class="nav-side-menu">
        	<div class="brand"><a href="/proyecto-definitivo/">USUARIO</a></div>
         	<i class="glyphicon glyphicon-menu-hamburger toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
         	<div class="menu-list">
            	<ul id="menu-content" class="menu-content collapse out">

					<li>
    	                             
    	      			<a href="#" id="collapsable" data-toggle="collapse" data-target="#toggleDemo" class="collapsed" aria-expanded="false">
    	      				<b>Proyectos</b> <span class="fa arrow"></span>
    	      			</a>
    	      			
    	      			<div class="collapse" id="toggleDemo" style="height: 0px;">
    	      			<ul class="expandibles">
    	       				<div id="projectList">
    	       						
    	       				</div>
							
    	          			
							
								</ul>
								<ul>
							<li>
                        <form name="row" action="/proyecto-definitivo/addProject" method="GET">
                           <button type="submit" class="custom-color left-button menu-button">
                           <i class="glyphicon glyphicon-plus"></i> Crear Proyecto
                           </button>
                        </form>
</li>
</ul>
        	    			</ul>
        	    		</div>
        			</li>
           			
        		</ul>
        		

     		</div>
  		</div>
	</div>