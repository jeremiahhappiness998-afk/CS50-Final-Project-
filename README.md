# PROJECT NAME/TITLE:
HGJ AD-BLOCKER PRO

By HAPPINESS GODKNOWS JEREMIAH
GITHUB USERNAME; jeremiahhappiness998-afk
EDX USERNAME ; happiness_868

#### Video Demo:  <youtube>
#### Description: "HGJ AD-BLOCKER PRO is a chrome extension for blocking unwanted ADS and IN-ADS in an Easy-list  that disrupt your work online"



## INTRODUCTION:
HGJ AD-Blocker PRO is an AD blocker that block ads based on Easy-lists elements in a script file called content.js, it blocks in element ads and ads on elements

# INSTALLATION:
* My Extension is not PUBLISHED so you can DOWNLOAD it from my GITHUB repository link: https://github.com/jeremiahhappiness998-afk/CS50-Final-Project-
* Step 1: After downloading, Unzip it and then GO to your chrome click on the three dots beside your profile picture <NOTE: only on the PC not yet on mobile phone>
* Step 2: After clicking the three dots click on the 'Extensions' button and then turn on DEVELOPER MODE (without this you will cannot 'load unpacked') 
* Step 3: then click on the 'load unpacked' button , then it will lead you to select the folder for loading (Please select the folder that contains the unzipped file of the AD-BLOCKER)
* Step 4: Then you can activate it based on your setting

# USAGE:
### Steps: on default it is  automatically activated on any site but if you want it to be activated only when clicked follow this instructions;
* step: Left click on the extension bar in your chrome upper-nav bar and then PIN the extension to the bar and after pinned Right click on the extension itself and then click on 'This can read and change site data' and you can select the activation techniques
* NOTE THE BUTTONS IN THE EXTENSION ARE NOT YET FUNCTIONAL AS SPECIFIED IN THE 'FUTURE ADVANCEMENT' BUT THE EXTENSION WORKS ACCORDING TO YOUR ACTIVATION SETTINGS
# PERMISSION:
* NOTE: this permisions are default as coded in the manifest.json
* 1. It can access all sites 
* 2. It can access all urls
* 3. It can access all active Tabs


## ASSISTANT:
* CODNG ASSISTANT: Meta AI, CS50.ai, 
* research: google gemini

## FOLDER CONTENT OF THE AD/FOLDER STRUCTURE:
AD-Blocker/
│
├── content.js(the ad-blocking functionality)
├── manifest.json ()
├── popup.html (the extension default popup)
├── software.ico (icon of the file)
├── style.css (just for design of the default popup)
│-- background.js (for background service worker)

### USE OF THE FILES IN THE FOLDER

|__content.js(the ad-blocking functionality)
├── manifest.json (FOR THE EXTENSION COMPATIBILITY WITH CHROME)
├── popup.html (the extension default popup)
├── software.ico (icon of the file)
├── style.css (just for design of the default popup)
│-- background.js (for background service worker)


## ADS THAT CAN BE BLOCKED
# 
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
## FUTURE ADVANCEMENT:
* Button functionality(activation, reloading, deactivating)
* ad blocking from server or Domain()
* Ads-blocked count

# CS50 VIEW:
THIS IS MY FINAL PROJECT FOR CS50

### CONCLUSION:
THIS SHOULD HELP REMOVING AD COMPLETELY THROUGH THE TWO BACKGROUND AND CONTENT SCRIPTS
GITHUB USERNAME; jeremiahhappiness998-afk
EDX USERNAME ; happiness_868