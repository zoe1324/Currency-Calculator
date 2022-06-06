# Currency-Calculator

Hosted via devweb2020: https://devweb2020.cis.strath.ac.uk/~xeb18139/MADCurrency_nialvbjn/currency

Created as part of assessment for Mobile App Development, with the specification as follows:

In this assessment you should write a currency calculator in HTML5, JavaScript6 and CSS. The aim is that this is a quick calculator for travellers. As the user is visiting another currency zone, conversions should be from "visiting" to "home" to give them an idea how much it will end up costing in their normal currency once it comes off their card account.  Sample scenario: 

Sam, who lives in Scotland, is visiting friends in Lithuania. She wants to give them a celebratory bottle of nice champagne. In a local wine shop there is a bottle for €80. Sam has preset the app to have GBP as her home currency and EUR as the visiting currency and knows her card charges 2%. She taps 80= on the calculator like pad and sees £72 (calculated as approx £71 for wine plus about £1 in fees).

A calculator style interface should be developed that shows a large keypad and input/output display plus some settings. Tapping number keys extends the entry like a calculator, = does a convert and c is clear. All entry should be through the on-screen buttons. See below for sample solutions..

You do not need to write any PHP or server side code as your solution should be completely client based. Conversions should be from whole numbers to whole numbers (e.g. euros without cents to pounds without pence).

You can target the following layers for marking - you must achieve each layer before moving on, e.g.. you should finish level 3 "More Realistic Rates" before attempting AJAX etc and you will get no marks for levels 4 and above if a weak attempt is made at 3. It is recommended to work at each level and push a good working version to GitLab before moving on.

1. A basic fixed exchange rate calculator (max 18/40)
This calculator should use standard HTML controls (minimal layout styling only) and hard coded exchange rates. Allows selection of home and destination currency but defaults to home=GBP and visiting=EUR on each run. Supports calculator style pad (of normal web-like buttons) and a two line "display". Uses large text for all displays but can use basic HTML5 controls for everything. Should support Euro, Polish zloty and UK Pound but rates can be fixed (stored in code). No need for bank charge.
2. A nicer but still basic fixed calculator (max 20/40)
As above but adding: 
CSS styling to colour buttons and make input visibly nicer and non-editable;
Use of LocalStorage to remember the settings for home and visiting currencies. 
3. More realistic rates (max 23/40)
Make the rates more realistic by:
Add a “Bank fee” options (0%, 2%, 4%, 6%) - note these are added to conversion as a fee to the banks (e.g. 100€ -> £88 or £92 with a 4% fee, take care of direction of conversion and fee). Also remember this setting between runs using localstorage.
Extend the currency list to the full ECB rate list.
4. Live rates (max 26/40)
A live rates calculator that does everything above but also gets real rates from the ECB XML feed  using AJAX. You will need to use https://devweb2020.cis.strath.ac.uk/~aes02112/ecbxml.php to access ECB rates due to cross site scripting restrictions with JavaScript. This is a very simple cache application and, bar a comment at the end, the file is the same structure as the ECB XML. Using the script also removes the risk of us being blocked by ECB as a suspect DoS attack as it caches today's rates. A special version of this "cache" will be used for marking - so you must use this script and not your own.
5. A largely offlineable app (max 29/40)
Use AJAX to get ECB rates then saves these locally, uses local rates for the calculator updating the rates once daily on app open (if there’s a network)). 
6. The works! (max 40/40 for outstanding submissions)
Everything above plus …. a fully-fledged mobile app – phone home page icon, full screen launching, professional styling, dynamic sidebar with flag based currency choice, dynamic resizing to fill phone display, react sensibly to horizontal layout, no visible standard web-looking controls anywhere, a single shared calculator-style input/output display, and add WebWorkers to make the app fully work offline.
Level 6 marks are not available unless a good attempt has been made at levels 1-5.
Note: Level 1 done well will result in a passing mark, level 3 done well will result in a "good" mark, level 4 a "very good" mark, and level 5/6 marks in the excellent to truly outstanding range. 

All HTML5, JavaScript and CSS must be hand coded – no use of frameworks permitted in this exercise. All code must be your own except you can build on Mark’s CS317 code – learn from the internet but code yourself. Template files for MAD are available on MyPlace. Your app must be hosted on devweb.


Achieved: 33/40 Marks
