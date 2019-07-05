browser.tabs.query({ currentWindow: true, active: true }).then(
  tabs => {
    const tab = tabs[0];

    const url = tab.url;
    const title = tab.title;
    document.getElementById("url").textContent = url;
    document.getElementById("title").textContent = title;

    const orgUri =
          'org-protocol://store-link'
          + '?url=' + encodeURIComponent(url)
          + '&title=' + encodeURIComponent(title);

    function listener(event) {
      browser.tabs.update({url: orgUri});
      event.currentTarget.classList.add("clicked");
      event.currentTarget.removeEventListener('click', listener);
    };
    document.getElementById("store").addEventListener('click', listener);
  }
);
