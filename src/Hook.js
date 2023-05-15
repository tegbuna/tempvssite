import React, { useState } from "react";
import  './Hook.css';


const Hook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hook</h1>
      <p>The count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};


export default Hook