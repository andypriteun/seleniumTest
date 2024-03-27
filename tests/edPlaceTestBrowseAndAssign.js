const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
  // Launch the browser
  let driver = await new Builder().forBrowser("firefox").build();

  try {
    // Navigate to the new website
    await driver.get("https://www.edplace.com/");

    // Wait for the cookie consent popup to appear and click "Accept All"
    await driver.wait(until.elementLocated(By.className("cky-btn-accept")), 5000);
    await driver.findElement(By.className("cky-btn-accept")).click();

    // Wait for the "Login" dropdown to be clickable
    await driver.wait(until.elementLocated(By.linkText("Login")), 5000);
    await driver.findElement(By.linkText("Login")).click();

    // Wait for the "Parent" option to be clickable
    await driver.wait(until.elementLocated(By.css('ul.dropdown-menu a[title="Parent"]')), 5000);
    await driver.findElement(By.css('ul.dropdown-menu a[title="Parent"]')).click();

    // Wait for the username field to appear and enter the username
    await driver.wait(until.elementLocated(By.id("rlogin")), 5000);
    await driver.findElement(By.id("rlogin")).sendKeys("andy.priteun@hotmail.co.uk");

    // Wait for the password field to appear and enter the password
    await driver.wait(until.elementLocated(By.id("rpass")), 5000);
    await driver.findElement(By.id("rpass")).sendKeys("Test1234!");

    // Wait for the login button to appear and click it 
    await driver.wait(until.elementLocated(By.id("login-btn")), 5000);
    await driver.findElement(By.id("login-btn")).click();

    // Wait for the Browse and assign button to appear and click it
    await driver.wait(until.elementLocated(By.linkText("Browse and assign")), 5000);
    await driver.findElement(By.linkText("Browse and assign")).click();

    // Wait for the Maths Year 1 span element to appear and click it
    await driver.wait(until.elementLocated(By.id("M1")), 5000);
    await driver.findElement(By.id("M1")).click();

  // Select Y1 maths worksheet
 // Wait for the Maths Year 1 span element to appear and click it
    await driver.wait(until.elementLocated(By.id("M1")), 5000);
    await driver.findElement(By.id("M1")).click();

// Wait for the "Counting and Using Number Lines" link to appear and click it
    await driver.wait(until.elementLocated(By.linkText("Counting and Using Number Lines")), 5000);
    await driver.findElement(By.linkText("Counting and Using Number Lines")).click();



// Randomly select worksheet to assign
    // Find all ul elements under grayContainer
    const ulElements = await driver.findElements(By.css('.grayContainer ul.custom-width-adjust'));

    // Iterate through ul elements
    for (let ul of ulElements) {
      const href = await ul.getAttribute('data-href');
      const button = await ul.findElement(By.css('li.list8 button.singleAssign.assign'));

      // Check if the button is clickable (not assigned)
      const isClickable = await button.getAttribute('class').includes('assign');
      
      if (isClickable) {
        await button.click();
        await driver.sleep(3000); // Wait for 3 seconds for the page to load
        break; // Exit loop after clicking the first available button
      }
    }



    // Log a success message to the console
    console.log("Selenium test completed successfully");

  } catch (error) {
    console.error("Selenium test failed:", error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

example().catch(console.error);
