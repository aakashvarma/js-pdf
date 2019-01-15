let fs = require('fs');
let pdf = require('html-pdf');
let html = fs.readFileSync('./index.html', 'utf8');
let options = { format: 'Letter' };

pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});


















