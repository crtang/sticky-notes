import React, { Component } from "react";
import Header from "./Header";
import Controls from "./Controls";
import DocsList from "./DocsList";
import './App.css';
import { createRoot } from "react-dom/client";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docs: [
        {
          id: Date.now(),
          title: "Untitled",
          description: "Type here.",
          doesMatchSearch: true,
        },
      ],
      searchText: "",
    };

    this.addDoc = this.addDoc.bind(this);
    this.onType = this.onType.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.deleteDoc = this.deleteDoc.bind(this);
  };

  componentDidMount() {
    const storedDocs = sessionStorage.getItem("docs");
    if (storedDocs) {
      this.state.docs = JSON.parse(storedDocs);
    }
  };

  componentDidUpdate() {
    const savedDocs = JSON.stringify(this.state.docs);
    sessionStorage.setItem("docs", savedDocs);
  };

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

  onType = (id, updatedField, updatedValue) => {
    // iterate over docs
    const updatedDocs = this.state.docs.map((doc) => {
      // find id of doc that user typed in
      if (doc.id !== id) {
        return doc;
      } else if (updatedField === "title") {
        doc.title = updatedValue;
        return doc;
      } else {
        doc.content = updatedValue;
        return doc;
      }
    })
    // update docs
    this.setState({ docs: updatedDocs });
  };

  onSearch = (text) => {
    // lowercase search text
    const searchTerms = text.toLowerCase();
    // compare search text with title and content text
    const updatedDocs = this.state.docs.map((doc) => {
      if (!searchTerms) {
        doc.doesMatchSearch = true;
        return doc;
      } else if (doc.title === undefined && doc.content === undefined) {
        doc.doesMatchSearch = false;
        return doc;
      } else if (doc.title === undefined && doc.content !== undefined) {
        const contentMatch = doc.content.toLowerCase().includes(searchTerms);
        doc.doesMatchSearch = contentMatch;
        return doc;
      } else if (doc.title !== undefined && doc.content === undefined) {
        const contentMatch = doc.title.toLowerCase().includes(searchTerms);
        doc.doesMatchSearch = contentMatch;
        return doc;
      } else {
        const titleMatch = doc.title.toLowerCase().includes(searchTerms);
        const contentMatch = doc.content.toLowerCase().includes(searchTerms);
        const matches = titleMatch || contentMatch;
        doc.doesMatchSearch = matches;
        return doc;
      }
    });
    // filter notes
    this.setState({ docs: updatedDocs });
  };

  deleteDoc = (id) => {
    const updatedDocs = this.state.docs.map((doc) => {
      if (doc.id !== id) {
        return doc;
      } else {
        return { ...this.state.docs };
      }
    });

    this.setState({ docs: updatedDocs });
  };

  render() {
    return (
      <div>
        <Header addDoc={this.addDoc} searchText={this.state.searchText} onSearch={this.onSearch} />
        <Controls />
        <DocsList docs={this.state.docs} onType={this.onType} deleteDoc={this.deleteDoc} />
      </div>
    )
  };
}

export default App;
