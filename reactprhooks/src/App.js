import React, { useState, useEffect } from 'react';

const App = () => {
  // State for the news articles
  const [news, setNews] = useState([]);

  // State for the search input
  const [searchQuery, setSearchQuery] = useState('react'); // default query

  // Fetch news based on the current search query
  const fetchNews = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        setNews(data.hits);
      })
      .catch(error => console.log(error));
  };

  // Run once when component mounts to load default results
  useEffect(() => {
    fetchNews();
    //this waay you control the way useEffect works if you add 
    //search query. 
  }, [searchQuery]);

  // Handle input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submit (clicking the search button)
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    fetchNews();        // fetch articles based on current input
  };

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title ? n.title : "No title available"}</p>
      ))}
    </div>
  );
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
