import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    if (loadData) {
      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => (res = res.json()))
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }
  }, [loadData]);

  console.log(data);
  console.log(loadData);

  return (
    <div className="App">
      <button onClick={() => setLoadData((prev) => !prev)}>fetch data</button>
      {data?.map((d, index) => (
        <p key={index}>{d?.title}</p>
      ))}
    </div>
  );
}
