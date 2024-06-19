import Post from "../Components/Post"
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";

function PostDetails() {

  const {postId} = useParams();
  const URL = `http://localhost:8001/posts/${postId}`;
  const { data, error, loading } = useAxios(URL);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    data && (
      <Post   
        id={data.id}
        title={data.title}
        body={data.body}
        reactions={data.reactions}
        comments={data.comments}
        createdAt={data.createdAt}
      />
    )
  )
}

export default PostDetails