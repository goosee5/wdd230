let date = new Date();
let year = date.getFullYear();

document.querySelector('h1').innerHTML = '&copy;' + year;

let currentdate = document.lastModified;

document.querySelector('span').textContent = currentdate;