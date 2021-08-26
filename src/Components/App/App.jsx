import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter/PostList";
import SearchPanel from "../SearchPanel";
import './App.css'


const App = () => {

  const data = [
    {label: "Going to learn JS", important: true, id: 'qw'},
    {label: "Going to learn ReactJS", important: false, id: 'qa'},
    {label: "Going to learn NodeJS", important: false, id: 'qz'}
  ]

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};
export default App;
