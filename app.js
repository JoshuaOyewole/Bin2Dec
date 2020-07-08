let submitbutton = document.getElementById('submit');
const outputField = document.getElementById('decimal');
const inputField = document.getElementById('getBinary');

 bin2Dec = () =>{
    const getValue = inputField.value;
    const regExp = /[2-9]/;
    let n = regExp.test(getValue)
    if(getValue !== ""  && n === false){
        const binary = parseInt(getValue, 2);
        outputField.innerText = binary;
        document.querySelector('.outputField').style.display = 'block';
         inputField.value ="";
    }
    else alert('Enter a valid Binary Number')
}

submitbutton.addEventListener('click', bin2Dec); 

