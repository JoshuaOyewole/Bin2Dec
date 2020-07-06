let submitbutton = document.getElementById('submit');
let outputField = document.getElementById('decimal');

 convertFunction = () =>{
    const getValue = document.getElementById('getBinary').value;
    const binary = parseInt(getValue, 2);
    outputField.innerText = binary  ; 
}

submitbutton.addEventListener('click', convertFunction); 