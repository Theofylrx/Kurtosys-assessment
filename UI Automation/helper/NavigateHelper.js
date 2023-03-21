export class NavigateHelper{

    constructor(page, baseURL){
        this.page = page;
        this.baseURL = baseURL;
    }

    async gotourl(){
        await this.page.goto(this.baseURL, {waitUntil: 'load', timeout: 900000})
    }
}