// @ts-check
const {test, expect} = require('@playwright/test');

 
 test('GlobalTest', async ({page})=>
 
 {
 
   const tShirtButton = page.locator ("//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[3]/a[1]");

   const Faded_Short_Sleeve = page.locator("//a[normalize-space()='Faded Short Sleeve T-shirts']");

   const FadedTshirtColor = page.locator("[name='Blue']");

   const addToCartButton = page.locator("[name='Submit']");

   const ContinueButton = page.locator("//span[@title='Continue shopping']//span[1]");



   const DressesTab = page.locator("//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[2]/a[1]");

   const EveningDressesTab = page.locator("//*[@id='subcategories']/ul/li[2]/div[1]/a");

   const EveningPrintedDresses = page.locator("//a[normalize-space()='Printed Dress']");


   const PrintedDressesColor = page.locator ("[name='Beige']");

   const PrintedSummerDress = page.locator("//a[normalize-space()='Printed Summer Dress']  >> nth=0");


   const PrintedSummerDressColor = page.locator ("[name='Orange']");

   const ProceedToCheckoutButton = page.locator("//a[normalize-space()='Proceed to checkout']");


   const RemoveButtonEveningDress = page.locator("//*[@id='product_4_16_0_0']/td[7]");


   
   const AddButtonFadedShortSleeve = page.locator("//a[@id='cart_quantity_up_1_4_0_0']//span");
  

   // @ts-ignore
   const ViewCart = page.locator("//a[normalize-space()='View my shopping cart']");


    
   await page.goto("http://automationpractice.com/index.php/");


   await tShirtButton.click();

   await Faded_Short_Sleeve.click();


   await page.selectOption('#group_1', '2');

   await FadedTshirtColor.click();

   await addToCartButton.click();

   await ContinueButton.click();

   await DressesTab.click();

   await EveningDressesTab.click();

   await EveningPrintedDresses.click();


   await page.selectOption('#group_1', '1');
   
   await PrintedDressesColor.click();

   await addToCartButton.click();


   await DressesTab.click();

   await PrintedSummerDress.click();

   await page.selectOption('#group_1', '2');
   
   await PrintedSummerDressColor.click();

   await addToCartButton.click();

   await ProceedToCheckoutButton.click();

   //await ViewCart.click();

   await RemoveButtonEveningDress.click();

   await AddButtonFadedShortSleeve.click();

   // @ts-ignore
   
   // First Line Total Assersion
   const ExpectedTotal2 = "$28.98";

   console.log("Expected Second Line Total = " + ExpectedTotal2 );
   const ActualTotal2 = await page.$eval("//span[@id='total_product_price_5_25_0']", element => element.innerHTML);
   console.log("Actual Second Line Total = " + ActualTotal2);

   await expect(page.locator("#total_product_price_5_25_0")).toHaveText("$28.98");

  
      // Second Line Total Assersion
   const ExpectedTotal1 = "$33.02";

   console.log("Expected First Line Total = " + ExpectedTotal1 );
   // @ts-ignore

   const ActualTotal1 = await page.$eval("//span[@id='total_product_price_1_4_0']", element => element.innerHTML);
   console.log("Actual First Line Total =" + ActualTotal1);
   
   await expect(page.locator("#total_product_price_1_4_0")).toHaveText("$33.02");
   // await page.pause();


      // Cart Total Assersion

   const ExpectedCardTotal = "$64.00";
   const ActualCardTotal = await page.$eval("//span[@id='total_price']", element => element.innerHTML);

   console.log("Expected  Cart Total = " + ExpectedCardTotal );

   console.log("Actual Cart Total : " + ActualCardTotal);

   await expect(page.locator("#total_price")).toHaveText("$64.00");

  // await expect(ExpectedCardTotal, ActualCardTotal);
   
   //const CartActualTotal = page.locator("//span[@id='total_price']");

   //span[@id='total_price']//span[1]
   ////*[@id='total_price']
  // console.log("Expected Cart Total =" +  ExpectedCardTotal );


   //console.log( await page.locator("//span[@id='total_price']//span[1]").getAttribute('value') );
   //await expect(page.locator("//span[@id='total_price']//span[1]")).toContainText('$6');

 

  // await expect(CartActualTotal).toHaveAttribute("id", "total_price");

  //await console.log("Actual Cart Total :" + await CartActualTotal.getAttribute("value"));
  //console.log("Actual Cart Total :" + CartActualTotal.innerHTML());
 // expect((await page.locator("//span[@id='total_price']").innerText()).includes("ExpectedCardTotal")).toBeTruthy();
  
  //await page.pause();




});

 

/*
 And Click on T-Shirt Tab
    And Click the Faded Short Sleeve T-shirts
    And Navigate over the Size click M
    And Chose Color as a Blue
    And Click on Add to cart button
    And Click on Continue shopping button
    And Click on Dresses Tab
    And Click on Evening Dresses Tab
    And Click on Printed Dress
    And Navigate over the Printed Dress Size click S
    And Chose Color as a Beige
    And Click on Add to cart button
    And Click on Continue shopping button
    And Click on Dresses Tab
    And Click on Printed Summer Dress
    And Navigate over the Printed Summer Dress Size click M
    And Chose Color as a Orange for Printed Summer Dress
    And Click on Add to cart button 

    And click to Proceed to checkout
    And click to remove button to the Evening Dress from the cart
    And Click on add button for second Faded Short Sleeve T Shirt
    When Click to View Cart
    Then the cart first line total is should '$28.98'
    Then the cart second line total is should '$33.02'
    Then the cart total is should '$64.00'
    */