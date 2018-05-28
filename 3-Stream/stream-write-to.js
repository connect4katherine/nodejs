const fs = require('fs');
const data = `Occupy McSweeney's roof party biodiesel letterpress asymmetrical. Sustainable brunch pug, put a bird on it tilde lumbersexual gluten-free banh mi chambray mumblecore pickled. Yr retro hashtag, pork belly drinking vinegar Blue Bottle disrupt butcher. Health goth small batch plaid vegan. Twee gluten-free sustainable wayfarers VHS. Fixie deep v craft beer, Williamsburg beard drinking vinegar artisan mustache yr hoodie plaid. Craft beer letterpress Kickstarter, quinoa irony sartorial freegan ennui fashion axe before they sold out sriracha migas Shoreditch slow-carb`;

// ============================================================
// Create a writable stream
const writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();


// ============================================================
// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");