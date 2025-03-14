import './styles.css'
// export const PostCard = ({post}) => {
export const PostCard = ({title, body, id, cover}) => {
    // const {post} = props;

    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content">
                <h2>{id}</h2>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}