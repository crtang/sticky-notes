import React, { Component } from "react";
import Header from "./Header";
import DocsList from "./DocsList";
import './App.css';

class App extends Component {
  state = {
    docs: [
      {
        id: Date.now(),
        title: "Untitled",
        content:  "Type here.",
        doesMatchSearch: true,
      },
    ],
    searchText:  "",
  };

  /*componentDidUpdate = () => {
    const savedDocs = JSON.stringify(this.state.docs);
    localStorage.setItem("docs", savedDocs);
  };

  componentDidMount = () => {
    const storedDocs = localStorage.getItem("docs");
    if (storedDocs) {
      this.state.docs = JSON.parse(storedDocs);
    }
  };*/

  addDoc = () => {
    const newDoc = {
      id: Date.now(),
      title: "Untitled",
      content: "Type here.",
      doesMatchSearch: true,
    };

    const newDocs = [...this.state.docs, newDoc];
    this.setState({ docs: newDocs });
  };

  /* deleteDoc = () => {
    const updatedDocs = this.state.docs.map((doc) => {
      if (doc.id !== id) {
        return doc;
      } else {
        return {...this.state.docs};
      }
    });
    this.setState({ docs: updatedDocs });
  }; */

  render() {
    return (
      <div>
        <Header />
        <DocsList content={this.state.docs.content}/>
      </div>
    )
  };
}

export default App;
