import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import { use } from 'react';

function App() {
  const [length, setCount] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  //useRef to store the password
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789';
    }
    if (characterAllowed) {
      str += '!@#$%^&*()_+';
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);

  }, [Password]); 

useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
          readOnly 
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <input
            type="range"
            min="8"
            max="100"
            value={length}
            onChange={(e) => setCount(parseInt(e.target.value, 10))}
            className="cursor-pointer"
          />
          <label> Length: {length}</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          /> 
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={characterAllowed}
            id="characterInput"
            onChange={() => setCharacterAllowed(!characterAllowed)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
