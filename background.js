chrome.webRequest.onBeforeRequest.addListener(({url}) => (
	{redirectUrl: url.replace('www', 'smile')}
), {urls: ["*://www.amazon.com/*"]}, ['blocking']);
