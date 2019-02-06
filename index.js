const puppeteer = require('puppeteer');

(async () => {

    try{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.google.com');    
    html=await page.content();

    console.log(html);
   
    await browser.close();
    }
    catch(e){
        console.log(e);
    }

})();

    
