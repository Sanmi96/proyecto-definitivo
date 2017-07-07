<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <div class="panel panel-default">
        <div class="panel-heading">
            Condicionantes de la estimación
        </div>

        <table width="100%" class="table table-condensed table-bordered tableForm">

            <tbody>
                <tr>

<td class="contenido">
                    <div class="col-xs-1">
                        Factor de Productividad:
                    </div>
                    <div class="col-xs-1">
                        <input id="factorProductividad" class="form-control form-custom-factor" type="number" min="1" value="1" />
                    </div>
                    <div class="col-xs-9">
                        horas/punto complejidad
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <table width="100%" class="table table-condensed table-striped table-bordered tableForm">
        <thead>
            <tr>
                <th colspan="6">Factores de Complejidad Técnica</th>
            </tr>
            <tr>
                <th>Factor</th>
                <th>¿Aplica?</th>
                <th>Grado de definición</th>
                <th>Grado de exigencia</th>
                <th class="text-right">Impacto</th>
                <th class="text-right">Riesgo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-xs-5">Rendimiento</td>
                <td class="col-xs-1">
                    <select id="rendimiento_aplica" onchange="calculate('rendimiento')" class="form-control  form-custom">
                        <option selected value="0">No</option>
                        <option  value="1">Sí</option>
                    </select>
                </td>
                <td class="col-xs-1">
                    <select id="rendimiento_definicion" disabled="disabled" onchange="calculate('rendimiento')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td class="col-xs-1">
                    <select id="rendimiento_exigencia" disabled="disabled" onchange="calculate('rendimiento')" class="form-control  form-custom">
                        <option value="0">Muy Bajo</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                        <option value="4">Muy Alto</option>
                    </select>
                </td>
                <td id="rendimiento_impacto" class="col-xs-1 text-right align-fix">0</td>
                <input type="hidden" id="rendimiento_impacto_hidden" value="0" />

                <td id="rendimiento_riesgo" class="col-xs-1 text-right align-fix">0</td>
                <input type="hidden" id="rendimiento_riesgo_hidden" value="0" />
            </tr>
            <tr>
                <td>Usabilidad</td>
                <td>
                    <select id="usabilidad_aplica" onchange="calculate('usabilidad')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option  value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="usabilidad_definicion" disabled="disabled" onchange="calculate('usabilidad')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td>
                    <select id="usabilidad_exigencia" disabled="disabled" onchange="calculate('usabilidad')" class="form-control form-custom">
                        <option value="0">Muy Bajo</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                        <option value="4">Muy Alto</option>
                    </select>
                </td>
                <td id="usabilidad_impacto" class="text-right align-fix">0</td>
                <input type="hidden" id="usabilidad_impacto_hidden" value="0" />

                <td id="usabilidad_riesgo" class="text-right align-fix">0</td>
                <input type="hidden" id="usabilidad_riesgo_hidden" value="0" />
            </tr>
            <tr>
                <td>Portabilidad</td>
                <td>
                    <select id="portabilidad_aplica" onchange="calculate('portabilidad')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option  value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="portabilidad_definicion" disabled="disabled" onchange="calculate('portabilidad')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td>
                    <select id="portabilidad_exigencia" disabled="disabled" onchange="calculate('portabilidad')" class="form-control form-custom">
                        <option value="0">Muy Bajo</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                        <option value="4">Muy Alto</option>
                    </select>
                </td>
                <td id="portabilidad_impacto" class="text-right align-fix">0</td>
                <input type="hidden" id="portabilidad_impacto_hidden" value="0" />

                <td id="portabilidad_riesgo" class="text-right align-fix">0</td>
                <input type="hidden" id="portabilidad_riesgo_hidden" value="0" />
            </tr>
            <tr>
                <td>Concurrencia</td>
                <td>
                    <select id="concurrencia_aplica" onchange="calculate('concurrencia')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option  value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="concurrencia_definicion" disabled="disabled" onchange="calculate('concurrencia')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td>
                    <select id="concurrencia_exigencia" disabled="disabled" onchange="calculate('concurrencia')" class="form-control form-custom">
                        <option value="0">Muy Bajo</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                        <option value="4">Muy Alto</option>
                    </select>
                </td>
                <td id="concurrencia_impacto" class="text-right align-fix">0</td>
                <input type="hidden" id="concurrencia_impacto_hidden" value="0" />

                <td id="concurrencia_riesgo" class="text-right align-fix">0</td>
                <input type="hidden" id="concurrencia_riesgo_hidden" value="0" />

            </tr>
            <tr>
                <td>Seguridad</td>
                <td>
                    <select id="seguridad_aplica" onchange="calculate('seguridad')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option  value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="seguridad_definicion" disabled="disabled" onchange="calculate('seguridad')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td>
                    <select id="seguridad_exigencia" disabled="disabled" onchange="calculate('seguridad')" class="form-control form-custom">
                        <option value="0">Muy Bajo</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                        <option value="4">Muy Alto</option>
                    </select>
                </td>
                <td id="seguridad_impacto" class="text-right align-fix">0</td>
                <input type="hidden" id="seguridad_impacto_hidden" value="0" />

                <td id="seguridad_riesgo" class="text-right align-fix">0</td>
                <input type="hidden" id="seguridad_riesgo_hidden" value="0" />
            </tr>

        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"></td>
                <td class="text-center"><strong>TOTAL</strong>
                </td>
                <td class="text-right align-fix"><strong id="total_impacto" >0</strong></td>
                <input type="hidden" id="total_impacto_hidden" value="0" />

                <td class="text-right align-fix"><strong id="total_riesgo" >0</strong></td>
                <input type="hidden" id="total_riesgo_hidden" value="0" />
            </tr>
            <tr class="active">
                <td colspan="3"></td>
                <td class="text-center"><strong>TCF</strong>
                </td>
                <td class="text-right align-fix"><strong id="tcf_impacto">1</strong></td>
                <input type="hidden" id="tcf_impacto_hidden" value="1" />

                <td class="text-right align-fix"><strong id="tcf_riesgo">1</strong></td>
                <input type="hidden" id="tcf_riesgo_hidden" value="1" />
            </tr>
        </tfoot>
    </table>
    <table width="100%" class="table table-condensed table-striped table-bordered tableForm">
        <thead>
            <tr>
                <th colspan="6">Arquitectura de referencia</th>
            </tr>
            <tr>
                <th>Factor</th>
                <th>¿Aplica?</th>
                <th>¿Está definido?</th>
                <th>Grado de conocimiento</th>
                <th class="text-right">Impacto</th>
                <th class="text-right">Riesgo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-xs-5">Arquitectura de Solución de Software</td>
                <td class="col-xs-1">
                    <select id="solucion_aplica" onchange="calculate2('solucion')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                </td>
                <td class="col-xs-1">
                    <select id="solucion_definido" disabled="disabled" onchange="calculate2('solucion')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                </td>
                <td class="col-xs-1">
                    <select id="solucion_conocimiento" disabled="disabled" onchange="calculate2('solucion')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td id="solucion_impacto" class="text-right align-fix col-xs-1">0</td>
                <input type="hidden" id="solucion_impacto_hidden" value="0" />

                <td id="solucion_riesgo" class="text-right align-fix col-xs-1">0</td>
                <input type="hidden" id="solucion_riesgo_hidden" value="0" />
            </tr>
            <tr>
                <td>Artquitectura de Integración de Software</td>
                <td>
                    <select id="integracion_aplica" onchange="calculate2('integracion')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="integracion_definido" disabled="disabled" onchange="calculate2('integracion')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="integracion_conocimiento" disabled="disabled" onchange="calculate2('integracion')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td id="integracion_impacto" class="text-right align-fix">0</td>
                <input type="hidden" id="integracion_impacto_hidden" value="0" />

                <td id="integracion_riesgo" class="text-right align-fix">0</td>
                <input type="hidden" id="integracion_riesgo_hidden" value="0" />
            </tr>
            <tr>
                <td>Arquitectura Lógica de Datos</td>
                <td>
                    <select id="logica_aplica" onchange="calculate2('logica')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="logica_definido" disabled="disabled" onchange="calculate2('logica')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="logica_conocimiento" disabled="disabled" onchange="calculate2('logica')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td id="logica_impacto" class="text-right align-fix">0</td>
                <input type="hidden" id="logica_impacto_hidden" value="0" />
                <td id="logica_riesgo" class="text-right align-fix">0</td>
                <input type="hidden" id="logica_riesgo_hidden" value="0" />
            </tr>
            <tr>
                <td>Arquitectura de Despliegue</td>
                <td>
                    <select id="despliegue_aplica" onchange="calculate2('despliegue')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="despliegue_definido" disabled="disabled" onchange="calculate2('despliegue')" class="form-control form-custom">
                        <option selected value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                </td>
                <td>
                    <select id="despliegue_conocimiento" disabled="disabled" onchange="calculate2('despliegue')" class="form-control form-custom">
                        <option value="0">Ninguno</option>
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </td>
                <td id="despliegue_impacto" class="text-right align-fix">0</td>
                <input type="hidden" id="despliegue_impacto_hidden" value="0" />
                <td id="despliegue_riesgo" class="text-right align-fix">0</td>
                <input type="hidden" id="despliegue_riesgo_hidden" value="0" />
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"></td>
                <td class="text-center"><strong>TOTAL</strong>
                </td>
                <td class="text-right align-fix" ><strong id="total_impacto2">0</strong></td>
                <input type="hidden" id="total_impacto2_hidden" value="0" />
                <td class="text-right align-fix" ><strong id="total_riesgo2">0</strong></td>
                <input type="hidden" id="total_riesgo2_hidden" value="0" />
            </tr>
            <tr class="active">
                <td colspan="3"></td>
                <td class="text-center"><strong>TCF</strong>
                </td>
                <td class="text-right align-fix"><strong id="tcf_impacto2">1</strong></td>
                <input type="hidden" id="tcf_impacto2_hidden" value="1" />
                <td class="text-right align-fix"><strong id="tcf_riesgo2">1</strong></td>
                <input type="hidden" id="tcf_riesgo2_hidden" value="1" />
            </tr>
        </tfoot>
    </table>
    <table width="100%" class="table table-condensed table-striped table-bordered tableForm">
        <thead>
            <tr>
                <th colspan="6">Factores de Complejidad Ambiental</th>
            </tr>
            <tr>
                <th>Factor</th>
                <th>Valoración</th>
                <th class="text-right">Factor calculado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-xs-5">Experiencia en la aplicación actual</td>
                <td class="col-xs-1">
                    <select id="experiencia_valoracion" onchange="calculate3('experiencia')" class="form-control form-custom">
                        <option value="10">Muy Bajo</option>
                        <option value="5">Bajo</option>
                        <option value="0">Medio</option>
                        <option value="-5">Alto</option>
                        <option value="-10">Muy Alto</option>
                    </select>
                </td>
                <td id="experiencia_calculado"  class="text-right align-fix col-xs-1">10</td>
                <input type="hidden" id="experiencia_calculado_hidden" value="10" />
            </tr>
            <tr>
                <td>Capacidades de líder técnico</td>
                <td>
                    <select id="capacidades_valoracion" onchange="calculate3('capacidades')" class="form-control form-custom">
                        <option value="10">Muy Bajo</option>
                        <option value="5">Bajo</option>
                        <option value="0">Medio</option>
                        <option value="-5">Alto</option>
                        <option value="-10">Muy Alto</option>
                    </select>
                </td>
                <td id="capacidades_calculado" class="text-right align-fix">10</td>
                <input type="hidden" id="capacidades_calculado_hidden" value="10" />
            </tr>
            <tr>
                <td>Calidad de requisitos de negocio</td>
                <td>
                    <select id="calidad_valoracion" onchange="calculate3('calidad')" class="form-control form-custom">
                        <option value="20">Nula</option>
                        <option value="15">Muy Bajo</option>
                        <option value="10">Bajo</option>
                        <option value="5">Medio</option>
                        <option value="-5">Alto</option>
                        <option value="-10">Muy Alto</option>
                    </select>
                </td>
                <td id="calidad_calculado" class="text-right align-fix">20</td>
                <input type="hidden" id="calidad_calculado_hidden" value="20" />

            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td class="text-center"><strong>TOTAL</strong>
                </td>
                <td class="text-right align-fix"><strong id="total">40</strong></td>
                <input type="hidden" id="total_hidden" value="0" />
            </tr>
            <tr class="active">
                <td></td>
                <td class="text-center"><strong>EC</strong>
                </td>
                <td class="text-right align-fix"><strong id="ecf">1.1</strong></td>
                <input type="hidden" id="ecf_hidden" value="1" />
            </tr>
        </tfoot>
    </table>