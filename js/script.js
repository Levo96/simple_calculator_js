/* ===============================================================
Author: Levan Mebonia
Username: levo96

Project: Calculator
==============================================================*/
window.onload = function(){

  let numbers_operators = document.querySelectorAll('.buttons');
  let user_calculation = document.querySelector('#users_calculation');
  let input_output = document.querySelector('#input_and_result_textBox');

  let style = window.getComputedStyle(input_output, null).getPropertyValue('font-size');
  let font_size = parseFloat(style);

  let calculation_str = "";

  const text_size_resizer = () => {

    let input_output_width = window.getComputedStyle(input_output, null).getPropertyValue('width');
    let container = document.querySelector('#display_top');
    let container_width =  window.getComputedStyle(container, null).getPropertyValue('width');

    let i_o_width = parseInt(input_output_width);
    let c_width = parseInt(container_width);

    if ( i_o_width >= c_width ) {
      input_output.style.fontSize = (font_size - 10) + "px";
    }

  }

  const calculator = (e) => {
      if( e.target  ) {

        if( parseInt(e.target.textContent) || (parseInt(e.target.textContent) == 0) ) {

          input_output.textContent += e.target.textContent;

        }

        else if( (e.target.textContent == "+") || (e.target.textContent == "+") || (e.target.textContent == "-") || (e.target.textContent == "*") || (e.target.textContent == "/")  ) {
          input_output.textContent += " " + e.target.textContent + " ";
        }

        else if( (e.target.textContent == ".") ) {
          input_output.textContent += ".";

        }

        else if(e.target.textContent == "%") {
          let input_arr = input_output.textContent.split(" ");
          let length = input_arr.length;
          let new_val = 0;
          if(length != 0) {
            length -= 1;
            new_val = input_arr[length];
            if(parseInt(new_val) > 0) {
              new_val = (new_val / 100 );
              input_arr[length] = new_val;
              input_arr = input_arr.join(" ");
              input_output.textContent = input_arr;
            }
          }
        }

        else if(e.target.textContent == "+/-") {
          let input_arr = input_output.textContent.split(" ");
          let length = input_arr.length;
          let new_val = 0;
          if(length != 0) {
            length -= 1;
            new_val = input_arr[length];
            if(new_val > 0) {
              new_val = "(" + (new_val * -1) + ")";
              input_arr[length] = new_val;
              input_arr = input_arr.join(" ");
              input_output.textContent = input_arr;
            } else {

            }
          }
        }

        else if(e.target.textContent == "DEL") {
          let input_arr = input_output.textContent.split("");
          let trash = input_arr.pop("");
          input_arr = input_arr.join("");
          input_output.textContent = input_arr;

          if(input_output.textContent == "") {
            input_output.style.fontSize = font_size + "px";
          }

        }

        else if( (e.target.textContent == "C") ) {
          user_calculation.textContent = "";
          input_output.textContent = "";
          input_output.style.fontSize = font_size + "px";
        }

        else if( (e.target.textContent == "=") ) {
          calculation_str = input_output.textContent;
          user_calculation.textContent = calculation_str;
          input_output.textContent = eval(calculation_str);
        }

      }
      else {
        alert("SORRY SOMETHING WENT WRONG");
      }

  }

  for(let i = 0; i < numbers_operators.length; i++) {
    numbers_operators[i].addEventListener("click", (e) => {
      calculator(e);
      text_size_resizer(e);
    });
  }


}
