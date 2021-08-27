import './PostAddForm.css';


const PostAddForm = ({ondAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input 
            type="text"
            placeholder="What are thinking about?"
            className="form-control new-post-label"
            />
            <button 
            type="submit"
            className="btn btn-outline-secondary"
            onClick={() => ondAdd("Salom Dunyo")}
            >
                Add Post
                </button> 
        </div>
    )
}

export default PostAddForm;