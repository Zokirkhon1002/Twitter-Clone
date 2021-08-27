import React, { Component } from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter/PostList";
import SearchPanel from "../SearchPanel";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn JS", important: false, id: 1 },
        { label: "Going to learn ReactJS", important: false, id: 2 },
        { label: "Going to learn NodeJS", important: false, id: 3 },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    let check = window.confirm("Are you sure to delete item?");
    if (check) {
      this.setState(({ data }) => {
        const index = data.findIndex((elem) => elem.id === id);
        console.log(index);
        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

        return {
          data: newArr,
        };
      });
    } else {
      return;
    }
  }

  addItem(value) {
    console.log(value);
    const newItem = {
      label: value,
      import: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }


  onToggleImportant(id){
    console.log(`Important ${id}`);
  }
  onToggleLiked(id){
    console.log(`Liked ${id}`);
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList 
        posts={this.state.data} 
        onDelete={this.deleteItem} 
        onToggleImportant={this.onToggleImportant}
        onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm ondAdd={this.addItem} />
      </div>
    );
  }
}
