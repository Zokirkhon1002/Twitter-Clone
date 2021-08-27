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
        { label: "Going to learn JS", important: false, like: false, id: 1 },
        {
          label: "Going to learn ReactJS",
          important: false,
          like: false,
          id: 2,
        },
        {
          label: "Going to learn NodeJS",
          important: false,
          like: false,
          id: 3,
        },
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

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldImportant = data[index];
      const newImportant = { ...oldImportant, important: !oldImportant.important };
      const newArr = [
        ...data.slice(0, index),
        newImportant,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldLike = data[index];
      const newLike = { ...oldLike, like: !oldLike.like };
      const newArr = [
        ...data.slice(0, index),
        newLike,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }

  render() {
    const liked = this.state.data.filter(item => item.like).length;
    const allPosts = this.state.data.length;

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
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
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
