var byId=document.getElementById('demo');
byId.style.borderColor='green';

var byCssSelector=document.querySelectorAll('.demo');
byCssSelector[1].style.borderColor='blue';
byCssSelector[0].style.borderColor='blue';
byCssSelector[1].innerText="Second Elements of Class";