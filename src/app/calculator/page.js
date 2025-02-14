'use client';

import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const deleteLast = () => {
    setInput((prev) => (prev.length > 0 ? prev.slice(0, -1) : ''));
  };

  const calculateResult = () => {
    try {
      setResult(Function(`"use strict"; return (${input})`)().toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-purple-600">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-80">
        <h1 className="text-3xl font-bold text-center text-indigo-400 mb-2">
          Calculator
        </h1>
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-right text-2xl p-4 rounded-lg mb-2">
          {input || '0'}
        </div>
        <div className="text-right text-xl font-semibold text-gray-700 mb-4">
          {result}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {['C', 'D', '%', '/'].map((item) => (
            <button
              key={item}
              className="p-4 bg-purple-300 text-purple-800 rounded-full shadow-md font-bold"
              onClick={() => {
                if (item === 'C') clearInput();
                else if (item === 'D') deleteLast();
                else handleClick(item);
              }}>
              {item}
            </button>
          ))}
          {[7, 8, 9, '*'].map((item) => (
            <button
              key={item}
              className="p-4 bg-purple-400 text-white rounded-full shadow-md font-bold"
              onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          {[4, 5, 6, '-'].map((item) => (
            <button
              key={item}
              className="p-4 bg-purple-500 text-white rounded-full shadow-md font-bold"
              onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          {[1, 2, 3, '+'].map((item) => (
            <button
              key={item}
              className="p-4 bg-purple-600 text-white rounded-full shadow-md font-bold"
              onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          {['.', 0].map((item) => (
            <button
              key={item}
              className="p-4 bg-purple-700 text-white rounded-full shadow-md font-bold"
              onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          <button
            className="p-4 col-span-2 bg-purple-700 text-white rounded-full shadow-lg font-bold"
            onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}