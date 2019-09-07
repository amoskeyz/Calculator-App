var btn = document.querySelectorAll('.btn');
var clearScreen = document.querySelector('#clearScreen');
var result = document.querySelector('#output');
var inputValue = document.querySelector('#input-value');

let value = '';

  const calculate = (e) => {
    if(e.target.className === 'btn operator'){
        if(e.target.textContent === 'x'){
            value += '*';
        } else value += e.target.textContent;
      }

    if(e.target.className === 'btn number'){
        value += e.target.textContent;
    }

    if(value !== ''){
        inputValue.textContent = value;

    if(e.target.textContent === '='){
        try{
            result.textContent = eval(value);
            value = eval(value);
        } catch(error){
            result.textContent = 'Syntax Error';
        }
    }
  }
}

  btn.forEach((KeyPad) => {
    KeyPad.addEventListener('click', calculate);
  });

  clearScreen.addEventListener('click', () =>{
      value = '';
      inputValue.textContent = 0;
      result.textContent = 0;
  })