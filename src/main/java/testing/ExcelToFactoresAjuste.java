package testing;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;

import com.becarios.proyecto_definitivo.model.criterios.CasosDeUso;

public class ExcelToFactoresAjuste {

    @Autowired
    @SuppressWarnings("deprecation")
    public static void getFactoresAjusteParameters(Workbook workbook) {
        System.out.println();
        System.out.println("=====================");
        System.out.println("== Factores Ajuste ==");
        System.out.println("=====================");
        System.out.println();

        Sheet sheet = workbook.getSheetAt(1);

        // Cargar Factor de productividad
        Row row = sheet.getRow(4);
        Cell cell = row.getCell(4);
        System.out.println("Factor de Productividad: " + cell.getNumericCellValue());

        // Cargar todos los Factores de complejidad tecnica
        int rowStart = 9;
        int rowEnd = 13;
        for (int rowNum = rowStart; rowNum < rowEnd; rowNum++) {
            System.out.println("== ROW - " + (rowNum + 1) + " ==");
            Row r = sheet.getRow(rowNum);
            if (r == null) {
                // This whole row is empty
                // Handle it as needed
                System.out.println("Empty");
                continue;
            }

            for (int cn = 2; cn < 8; cn++) {

                Cell c = r.getCell(cn, Row.RETURN_BLANK_AS_NULL);
                if (c != null) {
                    System.out.print(" | ");
                    load(cn, c, new CasosDeUso());

                }

            }
            System.out.println();

            System.out.println();
        }
    }

    public static void load(int cn, Cell c, CasosDeUso m) {

        switch (cn) {
        case 2:
            System.out.print("Factor: ");
            ReadExcel.checktype(c);
            break;
        case 3:
            System.out.print("Aplica: ");
            ReadExcel.checktype(c);
            break;
        case 4:
            System.out.print("Grado de definicion: ");
            ReadExcel.checktype(c);
            break;
        case 5:
            System.out.print("Grado de exigencia: ");
            ReadExcel.checktype(c);
            break;
        case 6:
            System.out.print("Impacto: ");
            ReadExcel.checktype(c);
            break;
        case 7:
            System.out.print("Riesgo: ");
            ReadExcel.checktype(c);
            break;
        case 8:
            System.out.print("Pantalla/Vista NRO: ");
            ReadExcel.checktype(c);
            break;
        case 9:
            System.out.print("Pantalla/Vista Campos: ");
            ReadExcel.checktype(c);
            break;
        case 10:
            System.out.print("Pantalla/Vista Complejidad: ");
            ReadExcel.checktype(c);
            break;
        case 11:
            System.out.print("Pantalla/Vista Listados: ");
            ReadExcel.checktype(c);
            break;
        case 12:
            System.out.print("Pantalla/Vista Botones: ");
            ReadExcel.checktype(c);
            break;
        case 13:
            System.out.print("Pantalla/Vista Total: ");
            ReadExcel.checktype(c);
            break;
        case 14:
            System.out.print("Negocio NRO: ");
            ReadExcel.checktype(c);
            break;
        case 15:
            System.out.print("Negocio Logica: ");
            ReadExcel.checktype(c);
            break;
        case 16:
            System.out.print("Negocio Total: ");
            ReadExcel.checktype(c);
            break;
        case 17:
            System.out.print("Persistencia NRO: ");
            ReadExcel.checktype(c);
            break;
        case 18:
            System.out.print("Persistencia Accesos: ");
            ReadExcel.checktype(c);
            break;
        case 19:
            System.out.print("Persistencia Total: ");
            ReadExcel.checktype(c);
            break;
        case 20:
            System.out.print("CU Original Ptos Complejidad: ");
            ReadExcel.checktype(c);
            break;
        case 21:
            System.out.print("CU Original Total: ");
            ReadExcel.checktype(c);
            break;
        case 22:
            System.out.print("Integracion NRO: ");
            ReadExcel.checktype(c);
            break;
        case 23:
            System.out.print("Integracion Complejidad: ");
            ReadExcel.checktype(c);
            break;
        case 24:
            System.out.print("Integracion Total: ");
            ReadExcel.checktype(c);
            break;
        case 25:
            System.out.print("Total: ");
            ReadExcel.checktype(c);
            break;
        case 26:
            System.out.print("Valoracion: ");
            ReadExcel.checktype(c);
            break;
        case 30:
            System.out.print("Valoracion Real: ");
            ReadExcel.checktype(c);
            break;

        default:
            System.out.println("Empty");
            break;
        }
    }

}
