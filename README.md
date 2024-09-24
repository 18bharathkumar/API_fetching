# Wikipedia Search Engine

This is a **Wikipedia Search Engine** built using React and the Wikipedia API. It allows users to search for any topic, fetches results from Wikipedia, and displays them in a clean and responsive interface. The project uses React hooks (`useState`, `useEffect`) and is styled using the Tailwind CSS framework.

## Features

- **Search Functionality**: Users can search for any topic using the Wikipedia API.
- **Responsive Design**: The interface is fully responsive and looks great on all devices (mobile, tablet, and desktop).
- **Clean UI**: The project has a modern design, using the Tailwind CSS framework.
- **Error Handling**: Proper error handling is implemented with `try-catch-finally` during API fetch.
- **React Hooks**: State and side effects are managed using `useState` and `useEffect` hooks.

## Technologies Used

- **React**: For building the user interface.
- **Wikipedia API**: For fetching search results based on user queries.
- **Tailwind CSS**: For styling and responsiveness.
- **JavaScript (ES6)**: For logic and API handling.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wikipedia-search-engine.git
   ```
2. Navigate to the project directory:
   ```bash
   cd wikipedia-search-engine
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The app should now be running at `http://localhost:5173`.

## API Reference

This project uses the Wikipedia API to fetch search results. You can access the API at:
```
https://apis.ccbp.in/wiki-search?search={query}
```
- Replace `{query}` with the term you want to search.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar component
│   ├── Search.jsx         # Search bar component
│   └── Result.jsx         # Component for displaying search results
├── App.jsx                # Main app component
├── index.js               # React entry point
├── index.css              # Tailwind CSS imports
├── main.css               # Additional custom styles
└── README.md              # This file
```

## Hooks Used

- **`useState`**: For managing the search query, loading state, error state, and search results.
- **`useEffect`**: To trigger the API fetch when the user enters a search term.

## Example

1. Enter a search query in the input box.
2. Results from Wikipedia are displayed in a list.
3. Each result includes a title, a description, and a link to the Wikipedia article.

## Future Enhancements

- Add pagination for large search results.
- Include a search history feature.


## License

This project is licensed under the MIT License.

