let lastFocusedWindowId = chrome.windows.WINDOW_ID_NONE;

chrome.tabs.onActivated.addListener((activeInfo) => {
  handleTabSwitch(activeInfo.tabId);
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    pauseAllVideos();
  } else {
    lastFocusedWindowId = windowId;
    playActiveTabInWindow(windowId);
  }
});

function handleTabSwitch(tabId) {
  chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id === tabId) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: playVideo,
        });
      } else {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: pauseVideo,
        });
      }
    });
  });
}

function pauseAllVideos() {
  chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
    tabs.forEach((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: pauseVideo,
      });
    });
  });
}

function playActiveTabInWindow(windowId) {
  chrome.windows.get(windowId, { populate: true }, (window) => {
    if (window && window.tabs) {
      window.tabs.forEach((tab) => {
        if (tab.active && tab.url.includes("youtube.com")) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: playVideo,
          });
        } else if (tab.url.includes("youtube.com")) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: pauseVideo,
          });
        }
      });
    }
  });
}

function pauseVideo() {
  const video = document.querySelector("video");
  if (video && !video.paused) {
    video.pause();
  }
}

function playVideo() {
  const video = document.querySelector("video");
  if (video && video.paused) {
    video.play();
  }
}
