import React, { useState, useEffect} from 'react';

const App = () => {
  const [count, setCount] = useState(0); 
  
  useEffect(() => {
    document.title = `Clicked ${count} times`; 
  

  })
  const increment = () => {
    setCount(count + 1); 
  };

  return (
    <div>
      <h2>counter app</h2>
      <button onClick={increment}>Clicked {count} times</button>
    </div>
  );
};

export default App;
