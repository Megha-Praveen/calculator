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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 animate-gradient">
      <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-2xl w-80">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-4">Calculator</h1>
        
        {/* Display Section */}
        <div className="bg-gray-900 text-white text-right text-2xl p-4 rounded-lg mb-2">
          {input || '0'}
        </div>
        <div className="text-right text-xl font-semibold text-gray-700 mb-4">
          {result}
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-2">
          {['C', 'D', '%', '/'].map((item) => (
            <button
              key={item}
              className="p-4 bg-red-400 text-white rounded-lg shadow-md font-bold hover:bg-red-500 transition"
              onClick={() => {
                if (item === 'C') clearInput();
                else if (item === 'D') deleteLast();
                else handleClick(item);
              }}>
              {item}
            </button>
          ))}
          {[7, 8, 9, '*'].map((item) => (
            <button key={item} className="p-4 bg-blue-500 text-white rounded-lg shadow-md font-bold hover:bg-blue-600 transition" onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          {[4, 5, 6, '-'].map((item) => (
            <button key={item} className="p-4 bg-green-500 text-white rounded-lg shadow-md font-bold hover:bg-green-600 transition" onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          {[1, 2, 3, '+'].map((item) => (
            <button key={item} className="p-4 bg-yellow-500 text-white rounded-lg shadow-md font-bold hover:bg-yellow-600 transition" onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          {['.', 0].map((item) => (
            <button key={item} className="p-4 bg-purple-500 text-white rounded-lg shadow-md font-bold hover:bg-purple-600 transition" onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          <button className="p-4 col-span-2 bg-pink-600 text-white rounded-lg shadow-lg font-bold hover:bg-pink-700 transition" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}