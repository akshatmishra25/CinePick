import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovie.js";
import "./styles.css"

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));