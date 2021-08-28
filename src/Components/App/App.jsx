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
      inputValue: "",
      likedLabels: "all",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    const index = this.state.data.findIndex((elem) => elem.id === id);
    let label = this.state.data[index].label;
    let check = window.confirm(`Are you sure to delete "${label}"`);

    if (check) {
      this.setState(({ data }) => {
        const indeks = data.findIndex((elem) => elem.id === id);
        const newArr = [...data.slice(0, indeks), ...data.slice(indeks + 1)];

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
      const newImportant = {
        ...oldImportant,
        important: !oldImportant.important,
      };
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

  searchPost(items, inputValue) {
    if (inputValue.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(inputValue) > -1;
    });
  }


  labesLiked(items, liked){
    if(liked === 'like'){
      return items.filter(item => item.like)
    } else {
      return items;
    }
  }



  onUpdateSearch(inputValue) {
    this.setState({ inputValue });
  }


onFilterSelect(likedLabels){
  this.setState({likedLabels});
}


  render() {
    const { data, inputValue, likedLabels } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.labesLiked(this.searchPost(data, inputValue), likedLabels);

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter filter={likedLabels} onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
