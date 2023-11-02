document.getElementById("title").style.backgroundColor = 'green';
document.getElementById("title").style.padding = '15px';
document.getElementById("title").style.borderRadius = '15px';
const myul = document.querySelector('ul')
const turnGreen = myul.querySelector('li')
// turnGreen.style.backgroundColor = 'green'
// turnGreen.style.padding = '15px'

turnGreen.forEach(function(l){
    // l.style.backgroundColor = "green"
    console.log(l);
})