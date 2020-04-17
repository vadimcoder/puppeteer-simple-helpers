# puppeteer-simple-helpers

```
npm install puppeteer-simple-helpers
```

## Functions:

```javascript
/**
 * BEFORE:
 *   const handle = await page.waitForSelector(selector);
 *   await handle.click();
 *
 * AFTER:
 *   await page.waitForSelector(selector).then(click);
 *
 * @param handle <ElementHandle>
 * @returns Promise
 */
function click(handle) {
  return handle.click();
}
```


```javascript
/**
 * @param selector <string>
 * @param page <class: Page>
 * @returns Promise
 */
async function clickAndWaitForNavigation(selector, page) {
  return await Promise.all([
    page.waitForSelector(selector).then(click),
    page.waitForNavigation({waitUntil: 'networkidle0'})
  ]);
}
```


```javascript
/**
 * BEFORE:
 *   const handle = await page.waitForSelector(selector);
 *   const textContent = await handle.evaluate(element => element.textContent);
 *   const textContentTrimmed = textContent.trim();
 *
 * AFTER:
 *   const textContent = await getTextContentFromHandle(await page.waitForSelector(selector));
 *
 * @param handle <ElementHandle>
 * @returns Promise
 */
async function getTextContentFromHandle(handle) {
  return await handle.evaluate(element => element.textContent.trim());
}
```
