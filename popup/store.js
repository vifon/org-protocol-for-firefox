browser.tabs.query({ currentWindow: true, active: true }).then(
  tabs => {
    const tab = tabs[0];

    const url = tab.url;
    const title = tab.title;

    document.getElementById("storeurl").textContent = url;
    document.getElementById("storetitle").textContent = title;
    document.getElementById("captureurl").textContent = url;
    document.getElementById("capturetitle").textContent = title;

    const storeUri =
          'org-protocol://store-link'
          + '?url=' + encodeURIComponent(url)
          + '&title=' + encodeURIComponent(title);

    const captureUri =
          'org-protocol://capture'
          + '?url=' + encodeURIComponent(url)
          + '&title=' + encodeURIComponent(title);

    document.getElementById("store").addEventListener('click',
      function (event) {
        browser.tabs.update({url: storeUri});
      }
    );

    document.getElementById("capture").addEventListener('click',
      function (event) {
        browser.tabs.update({url: captureUri});
      }
    );
  }
);
