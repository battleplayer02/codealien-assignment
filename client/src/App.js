import React, { useState } from 'react';
import './style.css';
import Responce from './Response';
import useLocalStorage from './useLocalStorage';
export default function App() {
  const [url, setUrl] = useState('');
  const [email, setemail] = useState('');
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
      <div className="w-full h-full p-4 overflow-scroll font-sans bg-blue-400 rounded-lg hover:shadow-2xl md:w-1/2 md:h-4/5">
        <div className="flex flex-col items-center justify-center mt-4">
          <header className="mb-2 text-xl text-gray-800">Web Moniter</header>

          <div className="relative flex w-full shadow component">
            <div className="absolute bottom-0 left-0 flex items-center h-full pl-4 pr-4 border-r error-icon">
              <svg
                className="w-4 text-gray-400"
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
              className="flex-1 px-4 py-2 pl-16 text-sm tracking-wide bg-gray-100 border rounded focus:outline-none focus:shadow-outline"
              placeholder="Enter The URL...."
            />
          </div>
          <div className="relative flex w-full mt-3 shadow component">
            <input
              value={email}
              onChange={e => setemail(e.target.value)}
              type="text"
              className="flex-1 px-4 py-2 pl-16 text-sm tracking-wide bg-gray-100 border rounded focus:outline-none focus:shadow-outline"
              placeholder="Enter Email"
            />
          </div>

          <div className="flex justify-between w-full mt-3">
            <div className="w-full">

              <select
                value={timeout}
                onChange={e => setTimeout(e.target.value)}
                className="w-full p-2 bg-gray-100 rounded shadow component"
                name=""
                id=""
              >
                10 seconds, 1 minute, 5 minutes, 10 minutes, 15 minutes, 1 hour, 4 hours, 6 hours, daily.
                <option class="bg-gray-100 rounded p-2 shadow" value="10000">10 Seconds</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="60000">1 Minute</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="1000">1 Sec</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="300000">5 Minute</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="600000">10 Minute</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="900000">15 Minute</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="3600000">1 Hour</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="14400000">4 Hour</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="21600000">6 Hour</option>
                <option class="bg-gray-100 rounded p-2 shadow" value="86400000">1 Daily</option>

              </select>
            </div>
            <div className="self-center p-2 ml-2 text-white bg-blue-800 rounded shadow hover:shadow-xl">
              <button onClick={() => handleClick()}>Add</button>
            </div>
          </div>
          <h3>Note: Double click on the item to remove it.</h3>
          <div className="w-full overflow-hidden h-">
            {urlArr.map((item, idx) => (
              <Responce obj={item} key={idx} del={del} idx={idx} email={email} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
