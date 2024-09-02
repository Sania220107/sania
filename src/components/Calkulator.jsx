import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState('');
  const handleClick = (e) => {
    const buttonValue = e.target.value;
    setValue ((prevValue)=> {
        if(buttonValue === "clear"){
            return "";
        }else if(buttonValue === "del") {
            return prevValue.slice(0,-1);
        }else if(buttonValue === "action"){
            try {
                return eval(prevValue).toString();
            } catch{
                return "error"
            }
        }else{
            return prevValue + buttonValue;
        }
    });
  }
 
  return (
    <section>
      <div className="bg-pink-300 flex justify-center items-center pt-5 h-screen"> 
        <div className="bg-pink-200 w-72 h-[500px] rounded-2xl shadow-[inset_5px_5px_12px_#fff] flex flex-col p-5 items-center justify-center">
          <form className="h-1/3 w-full rounded-2xl shadow-[inset_5px_5px_12px_#fff,2px_3px_11px_rgba(0,0,0,0.16)] flex justify-center">
            <input
              type="text"
              id="screen"
              placeholder='0'
              value={value}
              className="bg-pink-100 border-none text-right text-3xl w-full rounded-2xl outline-none"
            />
          </form>
          <div className="h-2/3 w-full flex justify-center text-center rounded-2xl pt-5">
            <div className="cursor-pointer grid grid-cols-4 gap-2">
              <button value="clear" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">AC</button>
              <button value="del" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">DEL</button>
              <button value="%" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">% </button>
              <button value="/" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">/</button>
              <button value="9" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">9</button>
              <button value="8" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">8</button>
              <button value="7" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">7</button>
              <button value="*" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">x</button>
              <button value="6" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">6</button>
              <button value="5" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">5</button>
              <button value="4" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">4</button>
              <button value="+" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">+</button>
              <button value="3" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">3</button>
              <button value="2" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">2</button>
              <button value="1" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">1</button>
              <button value="-" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">-</button>
              <button value="0" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">0</button>
              <button value="." onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">.</button>
              <button value="00" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">00</button>
              <button value="action" onClick={handleClick} className="bg-red-300 rounded-full h-12 w-12 hover:scale-110">=</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
