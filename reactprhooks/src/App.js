import React, { useState, useEffect } from 'react';

const App = () => {
  // State for the news articles
  const [news, setNews] = useState([]);

  // State for the search input
  const [searchQuery, setSearchQuery] = useState('react'); // default query

  // State for the API URL used in fetch
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react');

  const [loading, setLoading] = useState(false); 
  // Fetch news based on the current URL
  const fetchNews = () => {
    setLoading(true) 
    //when we get the data, we need to set it to false. 
    //this is next to the data.hits code. 
    fetch(url)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        setNews(data.hits); 
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  // Fetch news whenever the URL changes
  useEffect(() => {
    fetchNews();
    // This useEffect depends on `url`, not `searchQuery`
  }, [url]);

  // Handle input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission: update the URL, which triggers useEffect
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  return (
    <div>
      <h2>News</h2>
      {loading ? <h2>Loading ... </h2> : "" }
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

export default App;



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

