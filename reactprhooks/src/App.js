import React, { useState } from 'react';
//refractoring our class component to our functional component. 
//Review this later! 
const App = () => {
  const [count, setCount] = useState(0);

  // Define the increment function properly
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      {/* Correct way to comment in JSX */}
      <button onClick={increment}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default App;



// class App extends Component {
//this is a functional component so you can't use state like so 
//   state = {
//     count: 0 
//   }
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1 
//     })
//   }
//   render() {
//     return(
//       <div>
//         <h2>Counter App</h2>
//         <button onClick={this.increment}>Clicked {this.state.count} times
//         </button>
//       </div>

//     ); 
//   } 
// } 
