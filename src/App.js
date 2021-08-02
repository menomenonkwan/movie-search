import React from 'react';
import SearchMovies from './components/SearchMovies';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          React Movie Search
        </h1>
        <SearchMovies />
      </header>
    </div>
  );
}

export default App;
