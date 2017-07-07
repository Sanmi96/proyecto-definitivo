
============================
== HERRAMIENTA ESTIMACION ==
============================

-----------------
-- Explicacion --
-----------------
El proyecto consiste en crear una aplicacion web para renovar el sistema actual(excel).
La pàgina está disponible desde la siguiente url:

http://localhost:8080/proyecto-definitivo/

Estructura de carpetas




-----------
-- TO DO --
-----------
----Cargar y guardar datos en la BD de los apartados: Factores de Ajuste, Horas y Costes, Pirámide y Condicionantes así como el campo editado en el apartado proyecto


Arreglar página de bienvenida para que se muestre al iniciar sesion y no solo la primera vez

*****************Que los proyectos salgan desplegados por defecto a la página de bienvenida.
*****************Que cuando pulsemos uno de estos proyectos se abra para modificarlo.

Calcular TCF y ECF al cargar datos en el apartado de Factores de Ajuste
En la base de datos no existen estas columnas asi que se tendran que calcular y guardar solo en la pagina web

Revisar y retocar formulas (Piramide -> Horas y costes) 
Horas y coste ha cambiado la forma de calcular el coste debido a la reciente actualización del sistema

Volcar ITRs al cargar proyecto
Las itrs han de ser cargadas de la base de datos y no del javascript(está en js de forma temporal)

Guardar datos piramide (vease Ajax FactoresAjuste)

Sumar el total de todas las "row" criterios (Hay un hidden en criterios.jsp que no es modificado aun)
Al crear una row han de sumarse el valor de todas las row para usarse más tarde

