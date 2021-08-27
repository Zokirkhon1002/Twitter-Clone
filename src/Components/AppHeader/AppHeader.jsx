import './AppHeader.css';


const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Zokirkhon Kotibkhonov</h1>
            <h2>{allPosts} posts, like {liked}</h2>
        </div>
    )
}

export default AppHeader;