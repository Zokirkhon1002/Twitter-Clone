import React, { Component } from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter/PostList";
import SearchPanel from "../SearchPanel";
import './App.css'


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {label: "Going to learn JS", important: true, id: 'qw'},
        {label: "Going to learn ReactJS", important: false, id: 'qa'},
        {label: "Going to learn NodeJS", important: false, id: 'qz'}
      ]
    }
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id){
   this.setState(({data}) => {
     const index = data.findIndex(elem => elem.id === id);
     console.log(index);
     const newArr = [...data.slice(0,index), ...data.slice(index+1)]

     return {
      data: newArr
    }

   })
  }

  render() {
    return(
      <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={this.state.data} onDelete={this.deleteItem}/>
      <PostAddForm />
    </div>
    )
  }
}
