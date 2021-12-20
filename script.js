const buttons = document.querySelectorAll('.button');
const panel = document.getElementById('panel');


function sum (a,b){
    return a + b;
}

















function writeNumber(event){
    i = document.createElement('span');
    i.textContent = event.target.dataset.key + ' ';
    panel.appendChild(i);
}














buttons.forEach(button => button.addEventListener('click', writeNumber));