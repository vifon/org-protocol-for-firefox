"use strict";

(async function () {
  const tabs = await browser.tabs.query({ currentWindow: true, active: true });
  const tab = tabs[0];

  const url = tab.url;
  const title = tab.title;

  document.getElementById("url").textContent = url;
  document.getElementById("title").textContent = title;

  const storeUri = async () => {
    return 'org-protocol://store-link'
      + '?url=' + encodeURIComponent(url)
      + '&title=' + encodeURIComponent(title);
  };

  const captureUri = async () => {
    const selection = browser.tabs.sendMessage(
      tab.id, {'msg': 'get-selection'}
    );
    return 'org-protocol://capture'
      + '?url=' + encodeURIComponent(url)
      + '&title=' + encodeURIComponent(title)
      + '&body=' + encodeURIComponent(await selection);
  };

  const storeListener = async event => {
    browser.tabs.update({url: await storeUri()});
    event.currentTarget.classList.add("clicked");
    event.currentTarget.removeEventListener('click', storeListener);
  };
  const captureListener = async event => {
    browser.tabs.update({url: await captureUri()});
    window.close();
  };

  document.getElementById("store").addEventListener(
    'click', storeListener
  );

  document.getElementById("capture").addEventListener(
    'click', captureListener
  );
})();
