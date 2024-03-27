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