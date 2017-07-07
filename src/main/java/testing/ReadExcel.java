package testing;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;

import com.becarios.proyecto_definitivo.dto.ProyectoDto;
import com.becarios.proyecto_definitivo.dto.condicionantes.CondicionantesDto;
import com.becarios.proyecto_definitivo.dto.condicionantes.CondicionantesIdDto;
import com.becarios.proyecto_definitivo.dto.criterios.CasosDeUsoDto;
import com.becarios.proyecto_definitivo.dto.criterios.CasosDeUsoIdDto;
import com.becarios.proyecto_definitivo.dto.criterios.CuoriginalDto;
import com.becarios.proyecto_definitivo.dto.criterios.IntegracionDto;
import com.becarios.proyecto_definitivo.dto.criterios.NegocioDto;
import com.becarios.proyecto_definitivo.dto.criterios.PerfilesDto;
import com.becarios.proyecto_definitivo.dto.criterios.PersistenciaDto;
import com.becarios.proyecto_definitivo.dto.criterios.VistaDto;
import com.becarios.proyecto_definitivo.dto.factores_ajuste.ArquitecturaReferenciaDto;
import com.becarios.proyecto_definitivo.dto.factores_ajuste.FactorAjusteDto;
import com.becarios.proyecto_definitivo.dto.factores_ajuste.FactorComplejidadAmbientalDto;
import com.becarios.proyecto_definitivo.dto.factores_ajuste.FactorComplejidadTecnicaDto;
import com.becarios.proyecto_definitivo.dto.horas_costes.DeliveryDto;
import com.becarios.proyecto_definitivo.dto.horas_costes.DeliveryexternoDto;
import com.becarios.proyecto_definitivo.dto.horas_costes.GestionDto;
import com.becarios.proyecto_definitivo.dto.horas_costes.GestionexternoDto;
import com.becarios.proyecto_definitivo.dto.horas_costes.GobiernoDto;
import com.becarios.proyecto_definitivo.dto.horas_costes.GobiernoexternoDto;
import com.becarios.proyecto_definitivo.dto.horas_costes.RiesgoDto;
import com.becarios.proyecto_definitivo.dto.horas_costes.ValoracionfinalDto;
import com.becarios.proyecto_definitivo.dto.itr.ItrDto;

public class ReadExcel {

    ProyectoDto proyecto = new ProyectoDto();
    CondicionantesDto condicionantes = new CondicionantesDto();
    CondicionantesIdDto condicionantesId = new CondicionantesIdDto();
    CasosDeUsoDto CasosDeUso = new CasosDeUsoDto();
    CasosDeUsoIdDto CasosDeUsoId = new CasosDeUsoIdDto();
    CuoriginalDto cu = new CuoriginalDto();
    IntegracionDto integracion = new IntegracionDto();
    NegocioDto negocio = new NegocioDto();
    PerfilesDto perfiles = new PerfilesDto();
    PersistenciaDto persistencia = new PersistenciaDto();
    VistaDto vista = new VistaDto();
    ArquitecturaReferenciaDto arquitecturaReferencia = new ArquitecturaReferenciaDto();
    FactorAjusteDto factorAjuste = new FactorAjusteDto();
    FactorComplejidadTecnicaDto factorComplejidadTecnica = new FactorComplejidadTecnicaDto();
    FactorComplejidadAmbientalDto factorComplejidadAmbiental = new FactorComplejidadAmbientalDto();
    DeliveryDto delivery = new DeliveryDto();
    DeliveryexternoDto deliveryExterno = new DeliveryexternoDto();
    GestionDto gestion = new GestionDto();
    GestionexternoDto gestionExterno = new GestionexternoDto();
    GobiernoDto Gobierno = new GobiernoDto();
    GobiernoexternoDto gobiernoExterno = new GobiernoexternoDto();
    RiesgoDto riesgo = new RiesgoDto();
    ValoracionfinalDto valoracionFinal = new ValoracionfinalDto();
    ItrDto itr = new ItrDto();

    @SuppressWarnings("deprecation")
    public static void Importar() throws IOException {
        String excelFilePath = "C:\\Users\\6000827\\Downloads\\test.xlsm";
        FileInputStream inputStream = new FileInputStream(new File(excelFilePath));

        Workbook workbook = new XSSFWorkbook(inputStream);

        getProjectParameters(workbook);
        ExcelToCriterios.getCriteriosParameters(workbook);
        ExcelToFactoresAjuste.getFactoresAjusteParameters(workbook);
        getHorasCostesParameters(workbook);

        workbook.close();
        inputStream.close();

    }

    private static void getProjectParameters(Workbook workbook) {
        System.out.println();
        System.out.println("==============");
        System.out.println("== Proyecto ==");
        System.out.println("==============");
        System.out.println();
        Sheet sheet = workbook.getSheetAt(0);

        Row row = sheet.getRow(4);
        Cell cell = row.getCell(1);
        System.out.println("Tipo de Desarrollo: " + cell.getStringCellValue());

    }

    private static void getHorasCostesParameters(Workbook workbook) {
        System.out.println();
        System.out.println("==================");
        System.out.println("== Horas Costes ==");
        System.out.println("==================");
        System.out.println();
    }

    private static void getCondicionantesParameters(Workbook workbook) {
        System.out.println();
        System.out.println("====================");
        System.out.println("== Condicionantes ==");
        System.out.println("====================");
        System.out.println();
    }

    private static void getItrParameters(Workbook workbook) {
        System.out.println();
        System.out.println("===========");
        System.out.println("== ITR'S ==");
        System.out.println("===========");
        System.out.println();
    }

    @Autowired
    @SuppressWarnings("deprecation")
    public static void checktype(Cell c) {
        switch (c.getCellType()) {
        case Cell.CELL_TYPE_STRING:
            System.out.println(c.getStringCellValue());

            break;
        case Cell.CELL_TYPE_BOOLEAN:
            System.out.println(c.getBooleanCellValue());
            break;
        case Cell.CELL_TYPE_NUMERIC:
            System.out.println(c.getNumericCellValue());

            break;
        case Cell.CELL_TYPE_BLANK:

            break;
        case Cell.CELL_TYPE_FORMULA:
            switch (c.getCachedFormulaResultType()) {
            case Cell.CELL_TYPE_NUMERIC:
                System.out.println(c.getNumericCellValue());
                break;
            case Cell.CELL_TYPE_STRING:
                System.out.println(c.getRichStringCellValue());
                break;

            default:
                break;
            }
        }

    }

    // private void plantilla(Workbook workbook) {
    // Sheet sheet = workbook.getSheetAt(0);
    //
    // int rownum = 10;
    // int maxrow = 49;
    // System.out.println(rownum + "/" + maxrow);
    //
    // int rowStart = 9;
    // int rowEnd = sheet.getLastRowNum() - 32;
    // for (int rowNum = rowStart; rowNum < rowEnd; rowNum++) {
    // System.out.println("== ROW - " + (rowNum + 1) + " ==");
    // Row r = sheet.getRow(rowNum);
    // if (r == null) {
    // // This whole row is empty
    // // Handle it as needed
    // System.out.println("Empty");
    // continue;
    // }
    //
    // int lastColumn = r.getLastCellNum();
    //
    // for (int cn = 0; cn < lastColumn; cn++) {
    // Cell c = r.getCell(cn, Row.RETURN_BLANK_AS_NULL);
    // if (c == null) {
    // // System.out.print("?");
    // // System.out.print(" | ");
    // } else {
    //
    // // pass(cn, c, new Modulo());
    // System.out.print(" | ");
    //
    // }
    //
    // }
    // System.out.println();
    // }
    //
    // }

}