import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const data = [
    // Your data goes here
    // Example data structure: { id: 1, title: 'Example Title', content: 'This is some content.' }
  ];

  const handleSearch = () => {
    const filteredResults = data.filter((item) => {
      // Customize your search logic here
      // For example, you can search for the query in item.title and item.content
      return (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
