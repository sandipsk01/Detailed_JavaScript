const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

// html = html.concat('this', ' str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));

console.log(html.substring(1,6));   // substring(from,to)  'to' excluded
console.log(html.substring(-4));   // it will give whole string
console.log(html.slice(0, 4));   // slice(from,to)  'to' excluded
console.log(html.slice(-4));  // it will give last four chars
console.log(html.substr(1,6));  // substr(from,lenght)  deprecated

console.log(html.split('>'));
console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';

// Template literal

let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;            
