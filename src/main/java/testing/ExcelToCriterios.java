package testing;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;

import com.becarios.proyecto_definitivo.model.criterios.CasosDeUso;

public class ExcelToCriterios {
    @Autowired
    public static void getCriteriosParameters(Workbook workbook) {
        System.out.println();
        System.out.println("===============");
        System.out.println("== Criterios ==");
        System.out.println("===============");
        System.out.println();

        Sheet sheet = workbook.getSheetAt(0);

        // Cargar todas los Casos de Uso
        int rowStart = 9;
        int rowEnd = sheet.getLastRowNum() - 32;
        for (int rowNum = rowStart; rowNum < rowEnd; rowNum++) {
            System.out.println("== ROW - " + (rowNum + 1) + " ==");
            Row r = sheet.getRow(rowNum);
            if (r == null) {
                // This whole row is empty
                // Handle it as needed
                System.out.println("Empty");
                continue;
            }

            // Comprobar que la fila no este vacia
            int lastColumn = r.getLastCellNum();
            Cell last = r.getCell(30);

            if (last.getNumericCellValue() != 0) {

                for (int cn = 1; cn < lastColumn; cn++) {
                    Cell c = r.getCell(cn, Row.RETURN_BLANK_AS_NULL);
                    if (c != null) {
                        System.out.print(" | ");
                        load(cn, c, new CasosDeUso());

                    }

                }
                System.out.println();
            } else {
                System.out.println("Empty");
            }
            System.out.println();
        }
    }

    private static void load(int cn, Cell c, CasosDeUso m) {

        switch (cn) {
        case 1:
            System.out.print("Name: ");
            ReadExcel.checktype(c);
            break;
        case 3:
            System.out.print("Code: ");
            ReadExcel.checktype(c);
            break;
        case 4:
            System.out.print("Case of use: ");
            ReadExcel.checktype(c);
            break;
        case 5:
            System.out.print("Perfiles NRO: ");
            ReadExcel.checktype(c);
            break;
        case 6:
            System.out.print("Perfiles complejidad: ");
            ReadExcel.checktype(c);
            break;
        case 7:
            System.out.print("Perfiles Total: ");
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
