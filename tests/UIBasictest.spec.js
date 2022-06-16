// @ts-check
const {test, expect} = require('@playwright/test');

test.skip('First Context Playwright test',async ({browser})=>
{
//Codes here
//create instance
//chrome  - plugins / cookies
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("http://www.secondmedia.co.uk");
console.log("Web Site Title: " + await page.title());

});

test.skip('First Playwright test',async ({page})=>
{
await page.goto("http://automationpractice.com/index.php");
console.log("Web Site Title: " + await page.title());

});

test('Title test',async ({page})=>
{
await page.goto("https://google.com");

//get title assertion

console.log("Web Site Title: " + await page.title());
await expect(page).toHaveTitle("Google");


});

test.skip('@Web UI Controls', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");

    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect( page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect( await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");
 });

 
 test.skip('RahukSettyLogin', async ({page})=>
 
 {
 
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("Web Site Title: " + await page.title());

    await userName.type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await signIn.click();

    //wait until this locator shown up page
    console.log( await page.locator("[style*='block']").textContent() );
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
    //TYPE FILL
   

 });

 test.skip('RahukSettyLogin2', async ({page})=>
 
 {
 
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cartTitles = page.locator(".card-body a");

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("Web Site Title: " + await page.title());

 
    await userName.fill("rahulshettyacademy");
    await page.locator("[type='password']").type("learning");
    await signIn.click();

     console.log (await cartTitles.first().textContent());
    // console.log (await cartTitles.nth(1).textContent());
 
    const allTitles =  await cartTitles.allTextContents();

    console.log(allTitles);


 });