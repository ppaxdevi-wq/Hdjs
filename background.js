// Background service worker (Manifest V3)

// Extension install hone par
chrome.runtime.onInstalled.addListener(() => {
  console.log("Safe Chess Helper installed");
});

// Message listener (only internal use)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  
  // Simple ping test
  if (message.type === "PING") {
    sendResponse({ status: "alive" });
  }

  // Toggle highlight (future feature)
  if (message.type === "TOGGLE_HIGHLIGHT") {
    console.log("Toggle request received");
    sendResponse({ success: true });
  }

  // IMPORTANT: unknown messages ignore karo
  return true;
});
