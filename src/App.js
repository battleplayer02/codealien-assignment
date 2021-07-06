import React, { useState } from 'react';
import './style.css';
import Responce from './Response';
import useLocalStorage from './useLocalStorage';
export default function App() {
  const [url, setUrl] = useState('');
  const [urlArr, setUrlArr] = useLocalStorage('arr', [
    { url: 'https://codealien-assignment.stackblitz.io/', timeout: 1000 }
  ]);

  const [timeout, setTimeout] = useState(0);

  const handleClick = () => {
    if (validate(url))
      url.length !== 0 && setUrlArr([...urlArr, { url, timeout }]);
  };

  const del = idx => {
    let newarr = [];
    urlArr.forEach((item, i) => {
      if (idx !== i) newarr.push(item);
    });
    setUrlArr(newarr);
  };
  function validate() {
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(url)) {
      return true;
    }
    alert('Url is not valid!');
    return false;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="overflow-scroll rounded-lg hover:shadow-2xl bg-blue-400 p-4 font-sans md:w-1/2 md:h-4/5 h-full w-full">
        <div className="flex flex-col justify-center items-center mt-4">
          <header className="text-xl mb-2 text-gray-800">Web Moniter</header>

          <div className="shadow component relative w-full flex">
            <div className="pl-4 pr-4 border-r error-icon h-full absolute bottom-0 left-0 flex items-center">
              <svg
                className="text-gray-400 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              type="text"
              className="border bg-gray-100 flex-1 px-4 py-2 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-16"
              placeholder="Enter The URL...."
            />
          </div>
          <div className="flex justify-between  mt-3 w-full">
            <div className="w-full">
              <select
                value={timeout}
                onChange={e => setTimeout(e.target.value)}
                className="shadow component w-full bg-gray-100 rounded p-2"
                name=""
                id=""
              >
                <option
                  className="bg-gray-100 rounded p-2 shadow"
                  value="300000"
                >
                  5 Min
                </option>
                <option className="bg-gray-100 rounded p-2 shadow" value="1000">
                  1 Sec
                </option>
              </select>
            </div>
            <div className="self-center bg-blue-800 p-2 ml-2 shadow hover:shadow-xl text-white rounded">
              <button onClick={() => handleClick()}>Add</button>
            </div>
          </div>
          <h3>Note: Double click on the item to remove it.</h3>
          <div className="w-full h- overflow-hidden">
            {urlArr.map((item, idx) => (
              <Responce obj={item} key={idx} del={del} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
