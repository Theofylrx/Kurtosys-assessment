
import { test, expect } from '@playwright/test';
import { NavigateHelper } from '../helper/NavigateHelper';
import { resources } from '../Pages/resources';

test.beforeEach(async({page, baseURL}) => {
    const navigate = new NavigateHelper(page, baseURL);
	await navigate.gotourl();
});

test('White Paper & eBook Resources', async ({ page }) => {
	//reeource page declaration
	const resource = new resources(page);

	//navigating to white papers n eBooks resources
	await resource.HoverOverMenu("resources");
	await resource.ClickOnWhitepapersNeBooks();	
	
	//page title
	const title = await page.title();
	expect(title).toContain("White Papers");

	//step to select onAny whitepaper
	await resource.ClickOnAnyWhitePiper();

	//filling form
	await resource.enterFirstName("Bod");
	await resource.enterLastName("Dyllan");
	//await resource.enterEmail("Bod.Dyllan@kurtosys.com");
	await resource.enterCompany("Kurtosys");
	await resource.enterIndustry("Information Technology");

	//selecting Send me copy button
	await resource.ClickOnSendMeCopy();

	//email error msg is to be visible
	await resource.validateEmailError();
});