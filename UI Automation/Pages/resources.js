export class resources {
    constructor(page) {
		this.page = page;
        this.solutionsNavBtn = page.locator('span').filter({ hasText: 'Solutions' });
        this.customersNavBtn = page.locator('span').filter({ hasText: 'Customers' });
        this.resourcesNavBtn = page.locator('#kurtosys-menu-item-59810 > a > div > div > span');
        this.companyNavBtn = page.locator('span').filter({ hasText: 'Company' });
        this.loginNavBtn = page.locator('span').filter({ hasText: 'Login' });
		this.whitePaperNeBooksNavBtn = page.locator('//span[text()="White Papers & eBooks"]');
		this.uciWhitePaper = page.locator('article.elementor-post.elementor-grid-item.post-59806.white-papers.type-white-papers.status-publish.hentry > div > div.elementor-post__text > p > a');
		//form elements
		let frame = 'div.elementor-element.elementor-element-36e05ed.elementor-widget.elementor-widget-html > div.elementor-widget-container > iframe';
		this.firstName = page.frameLocator(frame).locator('div.form-field.first_name.pd-text.required > input');
		this.lastName = page.frameLocator(frame).locator('div.form-field.last_name.pd-text.required > input');
		this.email = page.frameLocator(frame).locator('div.form-field.email.pd-text.required > input');
		this.emailError = page.frameLocator(frame).locator('div.form-field.email.pd-text.required > p.error.no-label');
		this.company = page.frameLocator(frame).locator('div.form-field.company.pd-text> input');
		this.industry = page.frameLocator(frame).locator('div.form-field.industry.pd-text> input');
		this.sendCopyBtn = page.frameLocator(frame).locator('#pardot-form > p.submit > input[type=submit]');
	}

    async HoverOverMenu(menuitem){
		switch(menuitem){
            case "solutions":
                await this.solutionsNavBtn.hover();
                break;
            case "customers":
                await this.customersNavBtn.hover();
                break;
            case "resources":
                await this.resourcesNavBtn.hover();
                break;
            case "company":
                await this.companyNavBtn.hover();
                break;
            case "login":
                await this.loginNavBtn.hover();
                break;
        }
	}

	async ClickOnWhitepapersNeBooks(){
		await this.whitePaperNeBooksNavBtn.click();
	}

	async ClickOnAnyWhitePiper(){
		await this.uciWhitePaper.click();
	}

	async enterFirstName(fName){
		await this.firstName.scrollIntoViewIfNeeded();
		await this.firstName.fill(fName);
	}
	
	async enterLastName(lName){
		await this.lastName.scrollIntoViewIfNeeded();
		await this.lastName.fill(lName);
	}
	
	async enterEmail(email){
		await this.email.scrollIntoViewIfNeeded();
		await this.email.fill(email);
	}
	
	async validateEmailError(){
		await this.emailError.waitFor();
		await expect(this.emailError).toContainText("This field is required.");
		await expect(this.emailError).toBeVisible();
	}

	async enterCompany(company){
		await this.company.scrollIntoViewIfNeeded();
		await this.company.fill(company);
	}
	
	async enterIndustry(industry){
		await this.industry.scrollIntoViewIfNeeded();
		await this.industry.fill(industry);
	}

	async ClickOnSendMeCopy(){
		await this.sendCopyBtn.scrollIntoViewIfNeeded();
		//button click
		await this.sendCopyBtn.click();
	}
}