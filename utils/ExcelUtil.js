const ExcelJS = require('exceljs');

class ExcelUtil {

    async writeData(filePath, sheetName, data) {

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet(sheetName);

        worksheet.columns = [
            { header: 'BookName', key: 'BookName' },
            { header: 'Author', key: 'Author' },
            { header: 'Subject', key: 'Subject' },
            { header: 'Price', key: 'Price' }
        ];

        worksheet.addRows(data);

        await workbook.xlsx.writeFile(filePath);
    }
}

module.exports = ExcelUtil;