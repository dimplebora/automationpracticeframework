class StaticTablePage {
    constructor(page) {
        this.page = page;
        this.rows = page.locator("//table[@name='BookTable']/tbody/tr");
    }

    async getTableData() {
        const books = [];

        const rowCount = await this.rows.count();

        for (let i = 1; i < rowCount; i++) {
            const cells = await this.rows.nth(i).locator("td").allTextContents();

            books.push({
                BookName: cells[0],
                Author: cells[1],
                Subject: cells[2],
                Price: cells[3]
            });
        }

        return books;
    }
}

module.exports = StaticTablePage;