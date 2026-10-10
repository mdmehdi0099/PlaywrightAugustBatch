import XLSX from 'xlsx';
import path from 'path';

export class ExcelReader{
    static readExcel(fileName,sheetName){
        //create the path where the file exists
        const filePath=path.join(__dirname,'../data',fileName);
        console.log(filePath);
        //read excel file
        const workbook=XLSX.readFile(filePath);
         //Get sheet
        const worksheet=workbook.Sheets[sheetName];
         //convert sheet into json
        const xlsToJson=XLSX.utils.sheet_to_json(worksheet);

        return xlsToJson;
    }
}