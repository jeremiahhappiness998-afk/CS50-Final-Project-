const ads = [
    // lists of ads classes,Attribute-selectors, iframe-Ads, specific AD network and IDs from meta AI 
    // Common ad classes
    '.ad',
    '.ads',
    '.advert',
    '.advertisement',
    '.sponsored',
    '.promoted',
    '.banner-ad',
    '.top-ad',
    '.sidebar-ad',
    '.footer-ad',

    // IDs
    '#ad',
    '#ads',
    '#advert',
    '#advertisement',
    '#sponsored',
    '#promoted',

    // Attribute selectors
    '[id*="ad-"]',
    '[class*="ad-"]',
    '[id*="advert-"]',
    '[class*="advert-"]',

    // iframe ads
    'iframe[src*="ad"]',
    'iframe[id*="ad"]',

    // Specific ad networks
    '.adsbygoogle',
    '.google-ad',
    '#google_ads',
    '.taboola',
    '.outbrain',
];
chrome.runtime.onMessage.addListener
// function block() idea from meta AI
function block() {
    ads.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.remove();
        });
    });
}
// from meta AI
block();
// from CS50 DUCK DEBUGGER
setInterval(block, 1000);       