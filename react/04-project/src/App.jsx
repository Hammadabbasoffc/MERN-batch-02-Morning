import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(30);

  const handleClickInc = () => {
    setCount(count + 1);
  };

  const handleClickIncDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickInc}>IncreMent</button>
      <button onClick={handleClickIncDec}>Decrement</button>
    </div>
  );
};

export default App;
