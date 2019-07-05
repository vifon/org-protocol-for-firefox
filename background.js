browser.pageAction.onClicked.addListener(
  function (tab) {
    const url = encodeURIComponent(tab.url);
    const title = encodeURIComponent(tab.title);

    const orgUri = 'org-protocol://store-link?url=' + url + '&title=' + title;
    browser.tabs.update({url: orgUri});
  }
);
