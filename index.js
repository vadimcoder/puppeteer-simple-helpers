function click(handle) {
  handle.click();
}

async function clickAndWaitForNavigation(selector, page) {
  return await Promise.all([
    page.waitForSelector(selector).then(click),
    page.waitForNavigation({waitUntil: 'networkidle0'})
  ]);
}

async function getTextContentFromHandle(handle) {
  return await handle.evaluate(element => element.textContent.trim());
}

module.exports = {
  click,
  clickAndWaitForNavigation,
  getTextContentFromHandle,
};
