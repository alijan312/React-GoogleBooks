import React, { Component } from "react";
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';
import BookSearch from './components/booksearch/BookSearch';
import SearchButton from './components/SearchButton';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron/>
        < BookSearch />
        <SearchButton />
      </React.Fragment>
    );
  }
}

export default App;
