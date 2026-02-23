import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()[]{}~`";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, num, char]);

  const copypassword = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password)
  },[password])

  //when website reload then it's generate automatically
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  //useRef hook

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md shadow-lg rounded-2xl px-6 py-6 bg-gray-800 text-orange-500">
        
        <h1 className="text-3xl text-center mb-6 text-white font-bold">
          🔐 Password Generator
        </h1>

        {/* password box */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            className="w-full py-2 px-3 rounded-l-lg outline-none bg-gray-700 text-white"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copypassword}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-lg transition"
          >
            copy
          </button>
        </div>

        {/* length slider */}
        <div className="mb-4">
          <label className="text-white text-sm">
            Length: {length}
          </label>
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full cursor-pointer"
          />
        </div>

        {/* checkboxes */}
        <div className="flex gap-6 text-white">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={num}
              onChange={() => setNum(!num)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={char}
              onChange={() => setChar(!char)}
            />
            Symbols
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;