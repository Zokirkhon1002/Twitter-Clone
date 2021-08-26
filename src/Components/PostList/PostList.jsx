import PostListItem from "../PostListItem";
import './PostList.css'

const PostList = ({posts}) => {

    const elements = posts.map((post)=>{
        const { id, ...postProps } = post;

        return (
            <li key={id} className="list-group-item">
                <PostListItem {...postProps}/>
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;