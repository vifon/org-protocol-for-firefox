browser.tabs.query({ currentWindow: true, active: true }).then(
  tabs => {
    const tab = tabs[0];

    const url = tab.url;
    const title = tab.title;

    document.getElementById("url").textContent = url;
    document.getElementById("title").textContent = title;

    const storeUri = () => (
      'org-protocol://store-link'
        + '?url=' + encodeURIComponent(url)
        + '&title=' + encodeURIComponent(title)
    );

    const captureUri = () => (
      'org-protocol://capture'
        + '?url=' + encodeURIComponent(url)
        + '&title=' + encodeURIComponent(title)
      // TODO: Consider adding "&body=" too.  A content script might
      // be necessary to access window.getSelection().
    );

    const storeListener = event => {
      browser.tabs.update({url: storeUri()});
      event.currentTarget.classList.add("clicked");
      event.currentTarget.removeEventListener('click', storeListener);
    };
    const captureListener = event => {
      browser.tabs.update({url: captureUri()});
      window.close();
    };

    document.getElementById("store").addEventListener(
      'click', storeListener
    );

    document.getElementById("capture").addEventListener(
      'click', captureListener
    );
  }
);
