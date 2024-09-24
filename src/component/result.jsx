import { useState, useEffect } from "react";

export default function Result({ input }) {
  const API = "https://apis.ccbp.in/wiki-search?search=";
  const [data, setData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!input) {
        console.log("Invalid or empty input, skipping fetch");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching data for:", input);
        const response = await fetch(API + input);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await response.json();
        console.log("Fetched data:", newData);
        setData(newData.search_results || []); // Access search_results
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    fetchData();
  }, [input]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (data.length === 0) {
    return <h2>No results found.</h2>; // Display when no results are found
  }

  return (
    <div className="search-results p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
    <ul className="results-list space-y-4">
      {data.map((result) => (
        <li key={result.title} className="result-item bg-gary-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3>{result.title}</h3>
          <a
            href={result.link}
            target="_blank"
            rel="noopener noreferrer"
            className="result-link text-blue-600 hover:underline"
          >
            <h3 className="result-title text-lg font-medium">{result.link}</h3>
          </a>
          <p className="result-description text-gray-700">{result.description}</p>
        </li>
      ))}
    </ul>
  </div>
  
  );
}
