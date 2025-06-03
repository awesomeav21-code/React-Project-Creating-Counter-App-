import React, { useState, useEffect} from 'react';
//the code part of news is react state variable that holds the list of news articles
//fetched from hacker news API. 
const App =() => {
  //state, the useState array will be empty. 
   const [news, setNews] = useState([])

   //fetch news 
   const fetchNews = () => {
    fetch('http://hn.algolia.com/api/v1/search?query=react') 
    .then(result => result.json()) 
    //passing the data 
    .then(data => setNews(data.hits)) 
    //convert that to json, then handle that
    .catch(error => console.log(error)); 

    //if there is any error we will catch the error 

   }
   useEffect(() => {
    fetchNews() 

   })
   return( 
    <div>
      <h2>News</h2>
      {news.map((n, i) => (<p key={i}>{n.title}</p>))}
    </div>
   )
}; 
// const App = () => {
//   const [count, setCount] = useState(0); 
//   //useeffect method to show on the tab the counter was incremenented 1 each time it is clicked. 
//   useEffect(() => {
//     document.title = `Clicked ${count} times`; 
  

//   })
//   const increment = () => {
//     setCount(count + 1); 
//   };

//   return (
//     <div>
//       <h2>counter app</h2>
//       <button onClick={increment}>Clicked {count} times</button>
//     </div>
//   );
// };

export default App;
