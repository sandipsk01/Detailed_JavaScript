let a = window.document;     // window is predefined global object so no need to type it every time.

// Window Object Methods:-
// The window object methods are the functions that are created inside the Window Object. These methods are used to perform various actions on the browser window, such as how it displays a message or gets input from the user.

// alert('hello harry');   gives alert
// a = prompt('This will destroy your computer. Type your name');   A prompt box is often used if you want the user to input a value before entering a page.

// a = confirm('Are you sure you want to delete this page?');

// Window Object Properties:-
// The window object properties are the variables created inside the window object. We can access the properties of window.

a = window.innerHeight;
a = innerWidth;
a = scrollY;
a = window.history;
a = location.toString();
console.log(a);          

// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)

// Window Screen
// The window.screen object can be written without the window prefix.
// Properties:
// screen.width
// screen.height
// screen.availWidth
// screen.availHeight
// screen.colorDepth
// screen.pixelDepth


// Window Location
// The window.location object can be written without the window prefix.
// Some examples:
// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document


// history.goBack() - same as clicking back in the browser
// history.goForward() - same as clicking forward in the browser



// navigator.cookieEnabled -property returns true if cookies are enabled, otherwise false



// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.
// The clearTimeout(function) method stops the execution of the function specified in setTimeout().

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.
// The clearInterval(function) method stops the executions of the function specified in the setInterval() method.


// Cookies let you store user information in web pages.
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
// key=value;to delete cookies on specific TimeRanges; path to store cookies
