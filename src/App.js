import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: Date.now(),
          title: "Untitled",
          content: "Type here.",
          doesMatchSearch: true,
        },
      ],
      searchText: "",
    };

    this.addNote = this.addNote.bind(this);
    this.clearNotes = this.clearNotes.bind(this);
    this.onType = this.onType.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  };

  componentDidMount() {
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes) {
      this.setState({notes: JSON.parse(storedNotes)});
    }
  };

  componentDidUpdate() {
    const savedNotes = JSON.stringify(this.state.notes);

    try {
      localStorage.setItem("notes", savedNotes);
    } catch (e) {
      if (e.code === "22" || e.code === "1024") {
        alert('Quota exceeded! Please delete notes or click the "Clear Notes" button.');
      }
    }
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled",
      content: "Type here.",
      doesMatchSearch: true,
    };

    const newNotes = [...this.state.notes, newNote];
    this.setState({ notes: newNotes });
  };

  clearNotes = () => {
    this.setState({ notes: "" });
    window.location.reload();
  }

  onType = (id, updatedField, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== id) {
        return note;
      } else if (updatedField === "title") {
        note.title = updatedValue;
        return note;
      } else {
        note.content = updatedValue;
        return note;
      }
    })
    
    this.setState({ notes: updatedNotes });
  };

  onSearch = (text) => {
    
    const searchTerms = text.toLowerCase();
    
    const updatedNotes = this.state.notes.map((note) => {
      if (!searchTerms || searchTerms === undefined) {
        note.doesMatchSearch = true;
        return note;
      } else if (note.title === undefined && note.content === undefined) {
        note.doesMatchSearch = false;
        return note;
      } else if (note.title === undefined && note.content !== undefined) {
        const contentMatch = note.content.toLowerCase().includes(searchTerms);
        note.doesMatchSearch = contentMatch;
        return note;
      } else if (note.title !== undefined && note.content === undefined) {
        const contentMatch = note.title.toLowerCase().includes(searchTerms);
        note.doesMatchSearch = contentMatch;
        return note;
      } else {
        const titleMatch = note.title.toLowerCase().includes(searchTerms);
        const contentMatch = note.content.toLowerCase().includes(searchTerms);
        const matches = titleMatch || contentMatch;
        note.doesMatchSearch = matches;
        return note;
      }
    });
    
    this.setState({ notes: updatedNotes });
  };

  deleteNote = (id) => {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);

    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <main>
        <Header addNote={this.addNote} clearNotes={this.clearNotes} searchText={this.state.searchText} onSearch={this.onSearch} />
        <NotesList notes={this.state.notes} onType={this.onType} deleteNote={this.deleteNote} />
      </main>
    )
  };
}

export default App;
