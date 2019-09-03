const fs = require('fs');
const path = require('path');
const glob = require('glob');
const jsdom = require("jsdom");
const beautify = require('js-beautify').html;
const showdown  = require('showdown');

const { JSDOM } = jsdom;
const JSoptions = {
    contentType: 'text/html',
};

const Showdownoptions = {};
var converter = new showdown.Converter(Showdownoptions);
var mdfile;

const publicDir = './_public';
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

function convertToMarkdown(mark)
{
    mdfile = fs.readFileSync(mark, 'utf8');
    converter.setFlavor('vanilla');
    return converter.makeHtml(mdfile);
}   

JSDOM.fromFile("index.html", JSoptions).then(dom => {
    
    // Get md file from directory
    glob(__dirname + '/*.md', {}, (err, files)=>{
        files.forEach(function (file) {
	    console.log(file);
            markFile = path.basename(file, '.md');
            dom.window.document.getElementById(markFile).innerHTML = convertToMarkdown(file);
        });
    })

    var fileName = publicDir+'/index.html';
    var stream = fs.createWriteStream(fileName);
    
    stream.once('open', function(fd) {
        stream.end(beautify(dom.serialize(), { indent_size: 2, space_in_empty_paren: true }));   
    });

});


