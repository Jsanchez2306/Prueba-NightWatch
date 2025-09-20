module.exports = {
  'DuckDuckGo Search Test': async function (browser) { 
    await browser
      .url('https://www.duckduckgo.com')
      .waitForElementVisible('input[name="q"]', 3000)
      .setValue('input[name="q"]', 'Nightwatch.js')

     
      .perform(async function () {
        await browser.actions({ async: true })
          .keyDown(browser.Keys.ENTER)
          .keyUp(browser.Keys.ENTER)
          .perform();
      })

      .waitForElementVisible('#links', 5000)
      .assert.textContains('body', 'Nightwatch')
      .end();
  }
};
