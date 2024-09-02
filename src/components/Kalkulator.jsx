import { useState } from 'react';

const Kalkulator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input) || '');
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="bg-aquamarine flex justify-center items-center pt-5 min-h-screen">
      <div className="bg-red-300 w-72 h-[500px] rounded-2xl shadow-[inset_5px_5px_12px_#fff,5px_5px_12px_rgba(0,0,0,0.16)] flex flex-col p-5 justify-center items-center">
        <div className="bg-pink-100 h-1/3 w-full rounded-2xl shadow-[inset_5px_5px_12px_#fff,2px_3px_11px_rgba(0,0,0,0.16)] flex justify-center">
          <input
            type="text"
            className="bg-pink-300 border-none text-right text-4xl w-full rounded-2xl outline-none"
            value={input}
            readOnly
          />
        </div>
        <div className="h-2/3 w-full flex justify-center text-center rounded-2xl pt-5">
          <div className="w-2/3 grid grid-cols-3 gap-2">
            {['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', '0', '.', '+'].map((btn) => (
              <button
                key={btn}
                onClick={() => btn === '=' ? handleCalculate() : handleClick(btn)}
                className="bg-pink-200 border-none w-12 h-12 rounded-full cursor-pointer text-pink-400 hover:scale-90"
              >
                {btn}
              </button>
            ))}
            <button
              onClick={handleClear}
              className="bg-red-400 col-span-2 border-none w-12 h-12 rounded-full cursor-pointer text-pink-200 hover:bg-red-500"
            >
              C
            </button>
          </div>
          <div className="w-1/3 bg-pink-300 flex flex-col items-center justify-around rounded-2xl shadow-[#f1e7e7]">
            {/* Additional buttons or functionality can be added here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalkulator;
