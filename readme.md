# Fuskator Preview Enhancement
A nano-sized chrome extension that cycles through preview images when you hover on a fuskator gallery thumbnail.

To see more images, simply move your mouse left/right over the preview image and it will be replaced with selections from the gallery. Yes, this was inspired by the mouse hover video previews.

Install here: [https://chrome.google.com/webstore/detail/fuskator-preview-enhancem/efniphfheblhadolelihbohginamdgdp](https://chrome.google.com/webstore/detail/fuskator-preview-enhancem/efniphfheblhadolelihbohginamdgdp)

## IMPORTANT POST-INSTALL STEPS

1. **Make sure to allow the extension to work in Incognito mode.** Go to [chrome://extensions](chrome://extensions), find Fuskator Preview Enhancement, and check "Allow in incognito".

2. **Remove the icon from next to your URL bar.** Right click on the extension icon and click "Hide in Chrome menu". Unfortunately, due to [a recent change](https://chrome.googleblog.com/2016/01/new-year-new-chrome.html) it is not possible to have an icon-less Chrome extension, but this will do the next best by placing it in the top of your menu and out of sight. I purposefully used a non-descript icon to avoid any awkwardness. If you want it totally hidden, you can of course enable/disable the plugin whenever you'd like.

![screenshot](./screenshot.png)

## Notes

This extension is ONLY enabled on *://*.fuskator.com/* and it does not store/send any information from your browser. Feel free to take a peek at the source code if you'd like to double check.

If you find a bug, feel free to open an issue here on Github.

MIT License.