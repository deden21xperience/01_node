const browserObject = require('./browser');
const scraperController = require('./pageController');

// Start the broser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scaraper controller
scraperController(browserInstance); 
