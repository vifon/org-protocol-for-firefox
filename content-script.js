"use strict";

browser.runtime.onMessage.addListener(async request => {
  return window.getSelection().toString();
});
