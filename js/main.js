var btn = document.querySelectorAll('.btn');
var clearScreen = document.querySelector('#clearScreen');
var result = document.querySelector('#output');
var inputValue = document.querySelector('#input-value');

let value = '';
let isClear = false;

  const calculate = (e) => {
    if(e.target.className === 'btn operator'){
      isClear = false;
        if(e.target.textContent === 'x'){
            value += '*';
        } else value += e.target.textContent;
      }

    if(e.target.className === 'btn number'){
      if(isClear) value= '';
      value += e.target.textContent;
      isClear = false;
    }

    if(value !== ''){
        inputValue.textContent = value;

    if(e.target.textContent === '='){
        try{
            result.textContent = eval(value);
            value = eval(value);
            isClear = true;
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