import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Response = ({ obj, del, idx }) => {
  const [status, setStatus] = useState(0);
  const [flag, setFlag] = useState(true);
  useEffect(async () => {
    setTimeout(async () => {
      try {
        const data = await fetch(obj.url);
        setStatus(data.status);
      } catch (e) {
        setStatus(400);
        if (flag) {
          setFlag(false);
        }
      }
    }, obj.timeout);
  });

  return (
    <div
      className="w-full py-3 px-3 mt-5 rounded-lg bg-gray-100 flex justify-between"
      onDoubleClick={() => del(idx)}
    >
      <span className="w-21 overflow-ellipsis self-center">{obj.url}</span>
      <button
        className={
          status == 200 || status == 201
            ? 'rounded text-sm p-2 bg-green-600 text-white'
            : 'rounded text-sm p-2 bg-red-600 text-white'
        }
      >
        {status}
      </button>
    </div>
  );
};
export default Response;
