import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Response = ({ obj, del, idx, email }) => {

  const [status, setStatus] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(async () => {
    setTimeout(async () => {
      try {
        const data = await fetch(obj.url);
        setStatus(data.status);
      } catch (e) {
        setStatus(400);
        try {
          if (flag) {
            if (email !== '') {
              const mail = await fetch("/mail", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                  {
                    "to": email,
                    "subject": "URL:" + obj.url + " Not working.",
                    "text": "URL:" + obj.url + " Not working."
                  }),
              })
            }
            setFlag(false);
          }
        } catch (e) {

        }
      }
    }, obj.timeout);
  });

  return (
    <div
      className="flex justify-between w-full px-3 py-3 mt-5 bg-gray-100 rounded-lg"
      onDoubleClick={() => del(idx)}
    >
      <span className="self-center w-21 overflow-ellipsis">{obj.url}</span>
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
