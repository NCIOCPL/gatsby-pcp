
const defaultPath = 'http://localhost:9000'
const path = process.env.BACKSTOP_BASE_URL ? process.env.BACKSTOP_BASE_URL : defaultPath;

module.exports = {
  "id": "backstop_default",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    },
    {
      "label": "desktop",
      "width": 1920,
      "height": 1080
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "label": "PCP Homepage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": path,
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 10000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.5,
      "requireSameDimensions": true
    },
    {
      "label": "Members",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": path + "/members/",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 10000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.5,
      "requireSameDimensions": true
    },
    {
      "label": "About",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": path + "/about/",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 10000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.5,
      "requireSameDimensions": true
    },
    {
      "label": "Reports",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": path + "/reports/",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 10000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.5,
      "requireSameDimensions": true
    },
    {
      "label": "Search",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": path + "/search/?swKeyword=cancer",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 10000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.5,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
