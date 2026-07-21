class DataEntryFormPage {

    constructor(page) {
        this.page = page;

        this.name = page.getByPlaceholder('Enter Name');
        this.email = page.getByPlaceholder('Enter EMail');
        this.phone = page.getByPlaceholder('Enter Phone');

        // getByLabel won't work here
        this.address = page.locator('#textarea');

        this.gender = page.locator('#female');
        this.days = page.getByRole('checkbox', { name: 'Monday' });

        this.country = page.locator('#country');
        this.colors = page.locator('#colors');
        this.animals = page.locator('#animals');

        // Better than XPath
        this.datepicker = page.locator('#datepicker');

        this.startDate = page.locator('#start-date');
        this.endDate = page.locator('#end-date');

        // Correct locator
        this.submit = page.locator('button.submit-btn');

        // Correct locator
        this.result = page.locator('#result');
    }

    async fillForm() {

        await this.name.fill('Dimple');
        await this.email.fill('dimple@gmail.com');
        await this.phone.fill('9876543210');
        await this.address.fill('Noida');

        await this.gender.check();
        await this.days.check();

        await this.country.selectOption('germany');

        await this.colors.selectOption(['blue']);

        await this.animals.selectOption(['zebra']);

        await this.datepicker.fill('07/23/2026');

        await this.startDate.fill('2026-06-01');

        await this.endDate.fill('2026-06-30');
    }

    async clickSubmit() {
        await this.submit.click();
    }
}

module.exports = DataEntryFormPage;